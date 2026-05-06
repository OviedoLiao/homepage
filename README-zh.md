# OviedoLiao 的个人主页

一个粉色像素风格的个人网站，支持自定义动态光标主题、LaTeX 数学公式渲染和手机端适配。

**在线访问**: https://oviedoliao.github.io/homepage/

## 技术栈

- **React 19** + **Vite 8**
- **React Router v7**（HashRouter，适配 GitHub Pages 静态部署）
- **markdown-it** + **KaTeX**（Markdown 渲染与数学公式）
- **Press Start 2P**（像素风格字体）
- **Noto Serif SC**（博客文章正文衬线字体）

## 功能

- 8 个页面：主页、博客、动态、作品集、仓库、友链、留言、关于
- 顶部导航栏：鼠标悬停时中文切换为英文缩写，手机端汉堡菜单
- 左侧栏名片：头像 + 昵称 + 简介 + 社交链接，手机端滑出抽屉
- 虚拟光标系统：隐藏系统光标，用 GIF 动图跟随鼠标，触屏设备自动禁用
- 6 个角色光标主题：Skirk / Chisa / Furina / Cyrene / Columbina / Perlica
- 博客支持 Markdown 和 LaTeX 公式（`$...$` 行内，`$$...$$` 块级）
- 主页自定义背景图，上下渐变融合粉色主题
- 非主页右下角装饰图

## 快速开始

```bash
npm install
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本 → dist/
npm run preview    # 预览生产构建
npm run lint       # ESLint 检查
```

## 页面路由

| 路径 | 页面 |
|------|------|
| `/` | 主页 |
| `/blog` | 博客列表 |
| `/blog/:id` | 博客文章 |
| `/dynamic` | 动态 |
| `/portfolio` | 作品集 |
| `/repository` | 仓库 |
| `/friends` | 友链 |
| `/message` | 留言 |
| `/about` | 关于 |

## 项目结构

```
src/
├── components/        # Layout, Navbar, Sidebar, VirtualCursor, ErrorBoundary
├── context/           # CursorContext（光标状态）, ThemeContext（Markdown 主题）
├── data/              # 博客文章数据、用户信息
├── pages/             # 9 个页面组件及其 CSS
├── utils/             # 工具函数（光标类型映射）
└── index.css          # 全局样式、CSS 变量、移动端适配
public/
├── cursors/           # 6 个角色的光标素材（GIF + CUR）
├── xiaoying_1.png     # 主页背景图
├── qiong_4.png        # 非主页右下角装饰图
└── md_themes/         # Markdown 渲染主题
```

## 光标素材

光标素材来源于 [VS THEMES](https://vsthemes.org/)，放置在 `public/cursors/` 目录下：

```
public/cursors/{角色名}/gifs/    ← 动态 GIF 光标
public/cursors/{角色名}/static/  ← 静态 CUR 光标（备用）
```

## 手机端适配

断点：`@media (max-width: 768px)`

- 导航栏折叠为汉堡菜单
- 侧边栏变为左滑抽屉
- 虚拟光标自动隐藏，恢复系统光标
- 各页面 padding 缩减，网格自适应单列/双列

## 部署

项目使用 HashRouter，`vite.config.js` 设置 `base: '/homepage/'`：

```bash
npm run build
# 将 dist/ 目录推送到 GitHub Pages
```

## 许可

光标素材版权归原作者所有。
