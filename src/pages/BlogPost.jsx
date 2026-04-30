import { useParams, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import MarkdownIt from 'markdown-it'
import { blogPosts } from '../data/blogPosts'
import { useTheme } from '../context/ThemeContext'
import './BlogPost.css'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
})

// ==text== → <mark>text</mark>
md.inline.ruler.before('emphasis', 'mark', (state, silent) => {
  if (state.src.charCodeAt(state.pos) !== 0x3D /* = */) return false
  if (state.src.charCodeAt(state.pos + 1) !== 0x3D) return false
  const start = state.pos + 2
  const end = state.src.indexOf('==', start)
  if (end === -1) return false
  if (end === start) return false
  if (!silent) {
    const token = state.push('mark_open', 'mark', 1)
    token.markup = '=='
    const token2 = state.push('text', '', 0)
    token2.content = state.src.slice(start, end)
    const token3 = state.push('mark_close', 'mark', -1)
    token3.markup = '=='
  }
  state.pos = end + 2
  return true
})

// Protect math blocks from markdown-it's escaping
function protectMath(text) {
  const mathBlocks = []
  // Block math: $$...$$
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
    const i = mathBlocks.length
    mathBlocks.push(`$$${math}$$`)
    return `%%MATH_BLOCK_${i}%%`
  })
  // Inline math: $...$
  text = text.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
    const i = mathBlocks.length
    mathBlocks.push(`$${math}$`)
    return `%%MATH_BLOCK_${i}%%`
  })
  return { text, mathBlocks }
}

function restoreMath(html, mathBlocks) {
  mathBlocks.forEach((block, i) => {
    html = html.replace(`%%MATH_BLOCK_${i}%%`, block)
  })
  return html
}

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === Number(id))
  const contentRef = useRef(null)
  const [htmlContent, setHtmlContent] = useState('')
  const [loading, setLoading] = useState(true)
  const { css: themeCss } = useTheme()

  useEffect(() => {
    if (!post?.file) return
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}blog/${post.file}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load')
        return res.text()
      })
      .then((mdText) => {
        const { text, mathBlocks } = protectMath(mdText)
        const rawHtml = md.render(text)
        const finalHtml = restoreMath(rawHtml, mathBlocks)
        setHtmlContent(finalHtml)
        setLoading(false)
      })
      .catch(() => {
        setHtmlContent('<p>Failed to load article.</p>')
        setLoading(false)
      })
  }, [post])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll('a').forEach((a) => {
        a.target = '_blank'
        a.rel = 'noopener noreferrer'
      })
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise([contentRef.current])
      }
    }
  }, [htmlContent])

  if (!post) {
    return (
      <div className="blog-post">
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <style>{themeCss}</style>
      <div className="post-toolbar">
        <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
      </div>
      <article className="post-article">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="post-date">{post.date}</span>
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </div>
        {loading ? (
          <p className="post-loading">Loading...</p>
        ) : (
          <div
            className="post-content"
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </article>
    </div>
  )
}
