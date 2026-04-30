import { createContext, useContext, useState, useEffect } from 'react'

const CursorContext = createContext()

export function CursorProvider({ children }) {
  const [character, setCharacter] = useState(() => {
    return localStorage.getItem('cursor-character') || 'skirk'
  })
  const [cursorMode, setCursorMode] = useState(() => {
    return localStorage.getItem('cursor-mode') || 'gif'
  })

  useEffect(() => {
    localStorage.setItem('cursor-character', character)
  }, [character])

  useEffect(() => {
    localStorage.setItem('cursor-mode', cursorMode)
  }, [cursorMode])

  return (
    <CursorContext.Provider value={{ character, setCharacter, cursorMode, setCursorMode }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const ctx = useContext(CursorContext)
  if (!ctx) throw new Error('useCursor must be used within CursorProvider')
  return ctx
}
