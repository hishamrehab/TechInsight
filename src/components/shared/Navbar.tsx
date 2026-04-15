import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/categories', label: 'Categories' },
  { to: '/about', label: 'About' },
  { to: '/generation', label: 'Generation' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-500/15 bg-slate-950/75 backdrop-blur-xl transition-all duration-500">
      <div className="content-container flex items-center justify-between py-4">
        <NavLink
          className="group inline-flex cursor-pointer items-center gap-3 transition-colors"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src="/favicon.svg" alt="TechInsight logo" className="h-9 w-9 rounded-xl border border-cyan-400/25 bg-slate-900/70 p-1.5" />
          <span className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-200">TechInsight</span>
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
        <div className="hidden items-center gap-3 md:flex">
          <NavLink to="/get-started" className="btn-primary">
            Get Started
          </NavLink>
        </div>
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
            <NavLink to="/get-started" onClick={() => setIsMenuOpen(false)} className="btn-primary mt-2 w-full">
              Get Started
            </NavLink>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
