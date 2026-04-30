import './About.css'

export default function About() {
  return (
    <div className="about">
      <h2 className="page-title">About</h2>
      <div className="about-content">
        <div className="about-section">
          <h3>About This Site</h3>
          <p>
            This is a personal website built with React + Vite, featuring pixel-style fonts
            and custom animated cursors from game characters.
          </p>
        </div>
        <div className="about-section">
          <h3>Tech Stack</h3>
          <ul>
            <li>React 18 + Vite 6</li>
            <li>React Router v6 (HashRouter)</li>
            <li>markdown-it + KaTeX</li>
            <li>Custom virtual cursor system</li>
          </ul>
        </div>
        <div className="about-section">
          <h3>Features</h3>
          <ul>
            <li>Pixel-style font (Press Start 2P)</li>
            <li>Pink color theme (#FFB6C1)</li>
            <li>6 animated cursor themes</li>
            <li>Blog with Markdown + LaTeX support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
