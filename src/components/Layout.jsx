import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import VirtualCursor from './VirtualCursor'
import { CursorProvider } from '../context/CursorContext'
import { ThemeProvider } from '../context/ThemeContext'
import './Layout.css'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <CursorProvider>
      <ThemeProvider>
      <div className="app-layout">
        <Navbar />
        <div className="app-body">
          {!isHome && <Sidebar />}
          <main className={`app-content ${isHome ? 'full-width' : ''}`}>
            <Outlet />
          </main>
        </div>
        {!isHome && (
          <img
            className="corner-decor"
            src={`${import.meta.env.BASE_URL}qiong_4.png`}
            alt=""
            draggable={false}
          />
        )}
        <VirtualCursor />
      </div>
      </ThemeProvider>
    </CursorProvider>
  )
}
