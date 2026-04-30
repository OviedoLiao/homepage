import './Repository.css'

const REPOS = [
  { name: 'homepage', desc: 'This personal website', lang: 'JavaScript', url: 'https://github.com/OviedoLiao/homepage' },
]

export default function Repository() {
  return (
    <div className="repository">
      <h2 className="page-title">Repository</h2>
      <div className="repo-list">
        {REPOS.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            <h3 className="repo-name">{repo.name}</h3>
            <p className="repo-desc">{repo.desc}</p>
            <span className="repo-lang">{repo.lang}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
