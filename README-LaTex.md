# Markdown 与 LaTeX 渲染技术文档

## 概述

本项目的博客系统采用**客户端渲染**方案：Markdown 文件通过 `markdown-it` 转为 HTML，数学公式通过 MathJax 3 在浏览器端渲染为 SVG。两者通过「占位符保护」机制协同工作，避免 Markdown 解析器破坏 LaTeX 语法。

## 渲染流程

```
.md 文件 (public/blog/*.md)
    │
    ▼
① fetch() 读取原始 Markdown 文本
    │
    ▼
② protectMath() — 提取 $...$ 和 $$...$$，用占位符替代
    │
    ▼
③ markdown-it.render() — 将保护后的文本转为 HTML
    │
    ▼
④ restoreMath() — 将占位符还原为原始 LaTeX 代码
    │
    ▼
⑤ dangerouslySetInnerHTML — 注入到 DOM
    │
    ▼
⑥ MathJax.typesetPromise() — 扫描 DOM，将 LaTeX 渲染为 SVG
```

## 核心组件

### 1. markdown-it（Markdown → HTML）

- **包**: `markdown-it@14`
- **配置**: `html: false`（禁用原始 HTML）、`linkify: true`、`typographer: false`（避免干扰数学符号）
- **职责**: 将 Markdown 语法（标题、列表、代码块、链接等）转为 HTML

### 2. MathJax 3（LaTeX → SVG）

- **版本**: MathJax 3（`tex-svg-full.js`）
- **渲染方式**: SVG 输出（非 CHTML），兼容性更好
- **加载方式**: CDN（`cdn.jsdelivr.net/npm/mathjax@3`）

### 3. XyJax v3（交换图扩展）

- **来源**: [sonoisa/XyJax-v3](https://github.com/sonoisa/XyJax-v3)
- **加载方式**: CDN（`cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/xypic.js`）
- **用途**: 支持 `\xymatrix` 语法绘制交换图

### 4. 自定义行内规则：文本高亮

markdown-it 默认不支持 `==text==` 高亮语法。在 `BlogPost.jsx` 中通过 `md.inline.ruler.before()` 注册了自定义 `mark` 规则：

- 识别 `==...==` 语法，输出 `<mark>...</mark>` 标签
- 插入在 `emphasis` 规则之前，避免与其他行内规则冲突
- CSS 样式：`background: #fff3b0`（淡黄色），位于 `.post-content mark`

## MathJax 配置详解

配置位于 `index.html` 的 `<script>` 标签中：

```javascript
MathJax = {
  // XyJax 加载器
  loader: {
    load: ['[custom]/xypic.js'],
    paths: {custom: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/'},
  },
  tex: {
    // 定界符
    inlineMath: [['$', '$']],       // 行内公式: $E=mc^2$
    displayMath: [['$$', '$$']],    // 块级公式: $$\int...$$

    // 功能开关
    processEscapes: true,           // 支持 \$ 转义
    tags: 'ams',                    // AMS 风格公式编号

    // 扩展包
    packages: {'[+]': [
      'ams',          // AMS 数学环境（\begin{align} 等）
      'physics',      // 物理符号（\dd, \abs, \norm 等）
      'textmacros',   // 文本模式宏
      'esint',        // 扩展积分符号（\oiint 等）
      'xypic',        // 交换图（\xymatrix）
    ]},

    // 自定义宏
    macros: {
      Chi: '\\mathrm{X}',
      Omicron: '\\mathrm{O}',
      image: '\\mathrm{Im}',
      textcelsius: '\\,^\\circ\\mathrm{C}',
      oiint: '{\\oint\\kern-1.5ex\\oint}',
      hfill: '\\quad',              // \hfill 在数学模式中不支持，用 \quad 替代
    },
  },
  svg: {
    fontCache: 'global',            // 全局字体缓存
  },
}
```

## protectMath 机制

### 问题

markdown-it 会将 `\\` 解析为转义字符（输出单个 `\`），导致 LaTeX 矩阵的换行符 `\\` 丢失。

### 解决方案

在 markdown-it 渲染**之前**，用正则提取所有数学公式块，替换为无意义的占位符 `%%MATH_BLOCK_N%%`，渲染后再还原。

```javascript
// 提取阶段
"公式 $E=mc^2$ 和矩阵 $$\begin{pmatrix} a \\ b \end{pmatrix}$$"
→ "公式 %%MATH_BLOCK_0%% 和矩阵 %%MATH_BLOCK_1%%"

// markdown-it 渲染（不会破坏占位符）
→ "<p>公式 %%MATH_BLOCK_0%% 和矩阵 %%MATH_BLOCK_1%%</p>"

// 还原阶段
→ "<p>公式 $E=mc^2$ 和矩阵 $$\begin{pmatrix} a \\ b \end{pmatrix}$$</p>"

// MathJax 渲染
→ 公式 SVG + 矩阵 SVG
```

## 主题系统

- **来源**: Typora 主题 CSS（`public/md_themes/github.css`）
- **适配**: `ThemeContext` 自动将 Typora 选择器映射到项目选择器
  - `#write` → `.post-content`
  - `body` → 移除（防止字体泄漏）
  - 全局选择器（`a`, `h1`-`h6`, `p` 等）→ 加 `.post-content` 前缀
- **隔离**: `.post-content` 使用 `!important` 强制声明字体，防止全局像素字体泄漏

## 支持的 LaTeX 功能

| 功能 | 语法示例 | 来源 |
|------|----------|------|
| 行内公式 | `$E=mc^2$` | tex 核心 |
| 块级公式 | `$$\int_0^1 f(x)dx$$` | tex 核心 |
| 矩阵 | `\begin{pmatrix} a \\ b \end{pmatrix}` | ams |
| 多行对齐 | `\begin{align} ... \end{align}` | ams |
| 物理符号 | `\dd{x}`, `\abs{z}`, `\norm{v}` | physics |
| 扩展积分 | `\oiint`, `\varoiint` | esint |
| 交换图 | `\xymatrix{ A \ar[r] & B }` | xypic (XyJax) |
| 转义美元 | `\$100` | processEscapes |
| 自定义宏 | `\textcelsius`, `\Chi` | macros |
| 文本高亮 | `==高亮文字==` → <mark>高亮文字</mark> | 自定义行内规则 |

## 文件结构

```
public/
├── blog/
│   ├── hello-world.md          ← 博客文章（Markdown + LaTeX）
│   ├── quantum-mechanics.md
│   └── website-building.md
├── md_themes/
│   └── github.css              ← Typora 主题（适配后注入）
└── xypic.js                    ← XyJax 扩展（本地备用）

src/
├── pages/
│   ├── BlogPost.jsx            ← 博文页面（渲染管线）
│   └── BlogPost.css            ← 博文样式（字体隔离）
├── context/
│   └── ThemeContext.jsx         ← 主题加载与 CSS 适配
└── data/
    └── blogPosts.js            ← 博客元数据（标题、日期、文件名）
```

## 添加新文章

1. 在 `public/blog/` 下创建 `.md` 文件
2. 在 `src/data/blogPosts.js` 中添加元数据：

```javascript
{
  id: 5,
  title: '新文章标题',
  date: '2026-05-01',
  summary: '摘要',
  tags: ['tag1', 'tag2'],
  file: 'new-article.md',  // 指向 .md 文件名
}
```

## 已知限制

- `\hfill` 不支持，已自动替换为 `\quad`
- `\Chi`、`\Omicron` 等非常用希腊字母需手动定义宏
- XyJax 的 `\xymatrix` 不支持所有 xy-pic 语法，复杂图表建议预渲染为 SVG
