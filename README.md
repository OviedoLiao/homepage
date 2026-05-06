# OviedoLiao's Homepage

A personal website with pixel-style UI and animated virtual cursors.

**Live**: https://oviedoliao.github.io/homepage/

## Tech Stack

- React 19 + Vite 8
- React Router v7 (HashRouter)
- CSS (no frameworks)
- Deployed to GitHub Pages

## Features

- Pixel font UI (`Press Start 2P`)
- Animated virtual cursor with 6 character themes
- Blog with Markdown + KaTeX math rendering
- Mobile responsive (hamburger nav, slide-out sidebar)
- Custom background image with gradient blend

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/blog` | Blog list |
| `/blog/:id` | Blog post |
| `/dynamic` | News |
| `/portfolio` | Works |
| `/repository` | Repos |
| `/friends` | Friend links |
| `/message` | Guestbook |
| `/about` | About me |

## Development

```bash
npm install
npm run dev        # Start dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # ESLint
```

## Project Structure

```
src/
  components/      # Layout, Navbar, Sidebar, VirtualCursor
  context/         # CursorContext, ThemeContext
  data/            # Blog posts, user info
  pages/           # Route page components
  utils/           # Cursor map utilities
public/
  cursors/         # Cursor GIFs and static files
  qiong_4.png      # Corner decoration image
  xiaoying_1.png   # Homepage background image
```

## Cursor Assets

Source files from `F:\个人网站\{character}-*\` are copied to `public/cursors/{character}/`.

Available characters: skirk, chisa, furina, cyrene, columbina, perlica.
