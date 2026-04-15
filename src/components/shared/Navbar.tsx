import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../auth/useAuth'

const links = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-500/15 bg-slate-950/75 backdrop-blur-xl transition-all duration-500">
      <div className="content-container flex items-center justify-between py-4">
        <NavLink
          className="cursor-pointer text-2xl font-bold text-white transition-colors hover:text-cyan-200"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          TechInsight
        </NavLink>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer text-sm font-medium transition-colors ${
                  isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        {user ? (
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-sm text-slate-300">Hi, {user.name}</span>
            <button type="button" onClick={logout} className="btn-ghost">
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <NavLink to="/login" className="btn-ghost">
              Login
            </NavLink>
            <NavLink to="/register" className="btn-primary">
              Register
            </NavLink>
          </div>
        )}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/25 bg-slate-900/70 text-cyan-200 transition hover:border-cyan-400/45 hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      {isMenuOpen ? (
        <div className="content-container border-t border-cyan-500/15 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-cyan-500/20 text-cyan-100' : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <button
                type="button"
                onClick={() => {
                  logout()
                  setIsMenuOpen(false)
                }}
                className="btn-ghost mt-2 w-full"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className="btn-ghost mt-2 w-full">
                  Login
                </NavLink>
                <NavLink to="/register" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-2 w-full">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
