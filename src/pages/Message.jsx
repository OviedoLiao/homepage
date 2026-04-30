import { useState } from 'react'
import './Message.css'

export default function Message() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Visitor', content: 'Nice website!', date: '2026-04-30' },
  ])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !content.trim()) return
    setMessages([
      { id: Date.now(), name, content, date: new Date().toISOString().slice(0, 10) },
      ...messages,
    ])
    setName('')
    setContent('')
  }

  return (
    <div className="message">
      <h2 className="page-title">Message</h2>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="message-input"
        />
        <textarea
          placeholder="Leave a message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="message-textarea"
        />
        <button type="submit" className="message-btn">Submit</button>
      </form>
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item">
            <div className="message-header">
              <span className="message-name">{msg.name}</span>
              <span className="message-date">{msg.date}</span>
            </div>
            <p className="message-content">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
