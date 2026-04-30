import './Portfolio.css'

const PROJECTS = [
  { id: 1, title: 'Homepage', desc: 'This personal website built with React + Vite', tech: ['React', 'Vite', 'KaTeX'] },
  { id: 2, title: 'Project B', desc: 'A placeholder project', tech: ['Python'] },
]

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="page-title">Portfolio</h2>
      <div className="portfolio-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="portfolio-card">
            <h3 className="portfolio-card-title">{p.title}</h3>
            <p className="portfolio-card-desc">{p.desc}</p>
            <div className="portfolio-card-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
