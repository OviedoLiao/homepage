import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './Blog.css'

export default function Blog() {
  return (
    <div className="blog">
      <h2 className="page-title">Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
            <div className="blog-card-header">
              <h3 className="blog-card-title">{post.title}</h3>
              <span className="blog-card-date">{post.date}</span>
            </div>
            <p className="blog-card-summary">{post.summary}</p>
            <div className="blog-card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
