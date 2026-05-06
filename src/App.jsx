import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Dynamic from './pages/Dynamic'
import Portfolio from './pages/Portfolio'
import Repository from './pages/Repository'
import Friends from './pages/Friends'
import Message from './pages/Message'
import About from './pages/About'

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="dynamic" element={<Dynamic />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="repository" element={<Repository />} />
          <Route path="friends" element={<Friends />} />
          <Route path="message" element={<Message />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
