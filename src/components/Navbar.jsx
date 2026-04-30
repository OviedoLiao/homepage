import { NavLink } from 'react-router-dom'
import './Navbar.css'

const NAV_ITEMS = [
  { path: '/', label: '主页', en: 'HOME' },
  { path: '/blog', label: '博客', en: 'BLOG' },
  { path: '/dynamic', label: '动态', en: 'NEWS' },
  { path: '/portfolio', label: '作品集', en: 'WORKS' },
  { path: '/repository', label: '仓库', en: 'REPO' },
  { path: '/friends', label: '友链', en: 'LINKS' },
  { path: '/message', label: '留言', en: 'MSG' },
  { path: '/about', label: '关于', en: 'ABOUT' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-zh">OviedoLiao</span>
        </NavLink>
        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                <span className="nav-zh">{item.label}</span>
                <span className="nav-en">{item.en}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
