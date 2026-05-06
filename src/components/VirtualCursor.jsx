import { useState, useEffect, useCallback } from 'react'
import { useCursor } from '../context/CursorContext'
import { getCursorSrc, getDefaultCursorSrc, getStaticCursorSrc, CHARACTERS, CHARACTER_NAMES } from '../utils/cursorMap'
import './VirtualCursor.css'

const SCROLLBAR_THRESHOLD = 18

export default function VirtualCursor() {
  const { character, setCharacter, cursorMode, setCursorMode } = useCursor()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [cursorType, setCursorType] = useState('default')
  const [imgError, setImgError] = useState(false)
  const [nearScrollbar, setNearScrollbar] = useState(false)

  const getCursorType = useCallback((el) => {
    const dataCursor = el.getAttribute('data-cursor')
    if (dataCursor) return dataCursor

    // Walk up to find the nearest interactive ancestor
    let node = el
    while (node && node !== document.documentElement) {
      const tag = node.tagName
      if (tag === 'A' || tag === 'BUTTON' || tag === 'SELECT' || tag === 'SUMMARY') return 'pointer'
      if (tag === 'INPUT') {
        const type = (node.type || 'text').toLowerCase()
        if (['text', 'password', 'email', 'search', 'url', 'tel', 'number', 'date'].includes(type)) return 'text'
        return 'pointer'
      }
      if (tag === 'TEXTAREA' || tag === 'LABEL') return 'text'
      if (tag === 'IMG') return 'pointer'
      if (node.hasAttribute('onclick') || node.hasAttribute('role') || node.getAttribute('tabindex') === '0') return 'pointer'
      node = node.parentElement
    }

    // Read computed cursor (works for static mode; gif mode always returns 'none')
    const cssCursor = window.getComputedStyle(el).cursor
    if (cssCursor && cssCursor !== 'none' && cssCursor !== 'auto' && cssCursor !== 'default') {
      return cssCursor
    }
    return 'default'
  }, [])

  const applyStaticCursor = useCallback((type) => {
    const url = getStaticCursorSrc(character, type)
    document.documentElement.style.setProperty('--custom-cursor', `url("${url}"), auto`)
  }, [character])

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY })

    const isNearScrollbar = window.innerWidth - e.clientX < SCROLLBAR_THRESHOLD
    setNearScrollbar(isNearScrollbar)

    const el = document.elementFromPoint(e.clientX, e.clientY)
    if (!el) return

    const type = getCursorType(el)
    setCursorType(type)

    if (cursorMode === 'static' && !isNearScrollbar) {
      applyStaticCursor(type)
    }
  }, [cursorMode, getCursorType, applyStaticCursor])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const html = document.documentElement
    if (cursorMode === 'static') {
      html.style.setProperty('--custom-cursor', `url("${getStaticCursorSrc(character, 'default')}"), auto`)
    } else {
      html.style.removeProperty('--custom-cursor')
    }
    return () => html.style.removeProperty('--custom-cursor')
  }, [cursorMode, character])

  useEffect(() => {
    const html = document.documentElement
    if (nearScrollbar) {
      html.classList.add('near-scrollbar')
      html.style.removeProperty('--custom-cursor')
    } else {
      html.classList.remove('near-scrollbar')
      if (cursorMode === 'static') {
        applyStaticCursor(cursorType)
      }
    }
  }, [nearScrollbar, cursorMode, cursorType, applyStaticCursor])

  const isGif = cursorMode === 'gif'

  const src = imgError
    ? getDefaultCursorSrc(character)
    : getCursorSrc(character, cursorType)

  const CURSOR_SIZE = 50
  const offsetX = -CURSOR_SIZE / 2
  const offsetY = -CURSOR_SIZE / 2.5

  return (
    <>
      {isGif && !nearScrollbar && (
        <img
          className="virtual-cursor"
          src={src}
          alt=""
          style={{
            left: pos.x + offsetX,
            top: pos.y + offsetY,
          }}
          onError={() => setImgError(true)}
          onLoad={() => setImgError(false)}
          draggable={false}
        />
      )}
      <div className="cursor-selector">
        <select
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        >
          {CHARACTERS.map((c) => (
            <option key={c} value={c}>
              {CHARACTER_NAMES[c]}
            </option>
          ))}
        </select>
        <select
          value={cursorMode}
          onChange={(e) => setCursorMode(e.target.value)}
        >
          <option value="gif">GIF</option>
          <option value="static">Static</option>
        </select>
      </div>
    </>
  )
}
