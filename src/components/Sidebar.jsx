import { userInfo } from '../data/userInfo'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">×</button>
      <div className="sidebar-card">
        <div className="card-avatar">
          <img src={userInfo.avatar} alt="avatar" />
        </div>
        <h3 className="card-name">{userInfo.name}</h3>
        <div className="card-bio">
          {Array.isArray(userInfo.bio)
            ? userInfo.bio.map((line, i) => <p key={i}>{line}</p>)
            : <p>{userInfo.bio}</p>
          }
        </div>
        <div className="card-links">
          {userInfo.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
