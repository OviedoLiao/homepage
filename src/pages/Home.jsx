import { Link } from 'react-router-dom'
import './Home.css'

const NAV_ITEMS = [
  { path: '/blog', label: '博客', en: 'BLOG', desc: 'Thoughts & Notes' },
  { path: '/dynamic', label: '动态', en: 'NEWS', desc: 'Updates' },
  { path: '/portfolio', label: '作品集', en: 'WORKS', desc: 'Portfolio' },
  { path: '/repository', label: '仓库', en: 'REPO', desc: 'Repositories' },
  { path: '/friends', label: '友链', en: 'LINKS', desc: 'Friends' },
  { path: '/message', label: '留言', en: 'MSG', desc: 'Guestbook' },
  { path: '/about', label: '关于', en: 'ABOUT', desc: 'About Me' },
]

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">OviedoLiao's Homepage</h1>
        <p className="home-subtitle">Welcome to my pixel world</p>
      </div>
      <div className="home-grid">
        {NAV_ITEMS.map((item) => (
          <Link key={item.path} to={item.path} className="home-card">
            <span className="home-card-zh">{item.label}</span>
            <span className="home-card-en">{item.en}</span>
            <span className="home-card-desc">{item.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
