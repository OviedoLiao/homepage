import './Friends.css'

const FRIENDS = [
  { name: 'Friend A', url: '#', desc: 'A good friend' },
  { name: 'Friend B', url: '#', desc: 'Another friend' },
]

export default function Friends() {
  return (
    <div className="friends">
      <h2 className="page-title">Friends</h2>
      <div className="friends-grid">
        {FRIENDS.map((f) => (
          <a
            key={f.name}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="friend-card"
          >
            <h3 className="friend-name">{f.name}</h3>
            <p className="friend-desc">{f.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
