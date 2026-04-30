import './Dynamic.css'

const DYNAMICS = [
  { id: 1, date: '2026-04-30', content: 'Website is now live!' },
  { id: 2, date: '2026-04-29', content: 'Added custom cursor themes.' },
  { id: 3, date: '2026-04-28', content: 'Started building the homepage.' },
]

export default function Dynamic() {
  return (
    <div className="dynamic">
      <h2 className="page-title">Dynamic</h2>
      <div className="dynamic-list">
        {DYNAMICS.map((item) => (
          <div key={item.id} className="dynamic-item">
            <span className="dynamic-date">{item.date}</span>
            <p className="dynamic-content">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
