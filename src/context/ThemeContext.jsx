import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function adaptCss(css) {
  css = css.replace(/@font-face\s*\{[^}]*\}/g, '')
  css = css.replace(/@include-when-export[^;]+;/g, '')
  css = css.replace(/html\s*\{[^}]*\}/g, '')
  css = css.replace(/body\s*\{[^}]*\}/g, '')
  css = css.replace(/(^|\}|,)\s*(a|h[1-6]|p|blockquote|ul|ol|dl|table|hr|li|pre|code|tt|strong|em)\s*(?=[{,])/gm,
    '$1 .post-content $2')
  css = css.replace(/\.post-content\s+\.post-content/g, '.post-content')
  return css
}

export function ThemeProvider({ children }) {
  const [css, setCss] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}md_themes/github.css`)
      .then((res) => res.text())
      .then((raw) => {
        let adapted = adaptCss(raw)
        adapted = adapted.replace(/#write\b/g, '.post-content')
        adapted = adapted.replace(/\.md-fences\b/g, '.post-content pre')
        setCss(adapted)
      })
      .catch(() => setCss(''))
  }, [])

  return (
    <ThemeContext.Provider value={{ css }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
