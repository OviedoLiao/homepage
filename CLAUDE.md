# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Architecture

A personal website deployed as static files on GitHub Pages (`https://oviedoLiao.github.io/`). Built with React 19 + Vite 8 + React Router v7.

### Routing (HashRouter)

`App.jsx` defines flat routes under a shared `Layout` wrapper. HashRouter is used so the site works without server-side routing on GitHub Pages. Pages: Home (`/`), Blog (`/blog`, `/blog/:id`), Dynamic, Portfolio, Repository, Friends, Message, About.

### Layout

`Layout.jsx` conditionally renders `Sidebar` on all routes except Home (full-width). Wraps everything in `CursorProvider`. The top `Navbar` shows Chinese labels that swap to English abbreviations on hover via CSS.

### Virtual Cursor System

The most distinctive feature. The native cursor is hidden globally (`cursor: none`). A custom `<img>` element in `VirtualCursor.jsx` tracks `document.onMouseMove` and renders an animated GIF from `public/cursors/{character}/gifs/`.

Cursor type detection priority: `data-cursor` HTML attribute on the hovered element → element's computed CSS `cursor` style → default.

`cursorMap.js` maps CSS cursor keywords to GIF filenames. Six character themes available (skirk, chisa, furina, cyrene, columbina, perlica). Selected character persists to `localStorage` via `CursorContext`.

### Blog / Markdown

Blog posts are stored as Markdown strings in `src/data/blogPosts.js`. `markdown-it` renders HTML; KaTeX renders inline (`$...$`) and display (`$$...$$`) math. Blog list uses pixel font; article detail page uses Noto Serif SC.

### Styling

- Global CSS variables in `index.css` define the pink theme (`--primary: #FFB6C1`)
- Pixel font: `Press Start 2P` (Google Fonts) for UI
- Serif font: `Noto Serif SC` for blog article body
- Component-scoped CSS files (not CSS Modules — plain imports)

### Cursor assets

Source: `F:\个人网站\{character}-*\Gifs\*.gif` and `Static\*.cur` copied to `public/cursors/{character}/gifs/` and `public/cursors/{character}/static/`. The `.cur` files are kept for reference but only GIFs are used by the virtual cursor.

## Deployment

Target: `https://github.com/OviedoLiao/` → GitHub Pages. `vite.config.js` sets `base: '/'` (repo name is the `*.github.io` root).
