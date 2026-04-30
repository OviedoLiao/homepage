# OviedoLiao 的个人主页

一个粉色像素风格的个人网站，支持自定义动态光标主题和 LaTeX 数学公式渲染。

**在线访问**: https://oviedoLiao.github.io/

## 技术栈

- **React 19** + **Vite 8**
- **React Router v7**（HashRouter，适配 GitHub Pages 静态部署）
- **markdown-it** + **MathJax**（Markdown 渲染与数学公式）
- **Press Start 2P**（像素风格字体）
- **Noto Serif SC**（博客文章正文衬线字体）

## 功能

- 8 个页面：主页、博客、动态、作品集、仓库、友链、留言、关于
- 顶部导航栏：鼠标悬停时中文切换为英文缩写
- 左侧栏名片：头像 + 昵称 + 简介 + 社交链接
- 虚拟光标系统：隐藏系统光标，用 GIF 动图跟随鼠标
- 6 个角色光标主题：Skirk / Chisa / Furina / Cyrene / Columbina / Perlica
- 博客支持 Markdown 和 LaTeX 公式（`$...$` 行内，`$$...$$` 块级）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── components/        # 共享组件（Layout, Navbar, Sidebar, VirtualCursor）
├── context/           # React Context（光标主题状态管理）
├── data/              # 博客文章数据、用户信息
├── pages/             # 8 个页面组件
├── utils/             # 工具函数（光标类型映射）
└── index.css          # 全局样式和 CSS 变量
public/
└── cursors/           # 6 个角色的光标素材（GIF + CUR）
```

## 光标素材

光标素材来源于 [VS THEMES](https://vsthemes.org/)，放置在 `public/cursors/` 目录下：

```
public/cursors/{角色名}/gifs/   ← 动态 GIF 光标
public/cursors/{角色名}/static/ ← 静态 CUR 光标（备用）
```

## 部署

项目使用 HashRouter，可直接部署到 GitHub Pages：

```bash
npm run build
# 将 dist/ 目录推送到 GitHub Pages 分支
```

## 许可

光标素材版权归原作者所有。
