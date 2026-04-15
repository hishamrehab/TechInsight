import { useMemo, useState } from 'react'
import { categoryPills } from '../../data/homeData'
import { NavLink } from 'react-router-dom'

export function CategoryBar() {
  const [query, setQuery] = useState('')

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
      return categoryPills
    }

    return categoryPills.filter((category) => category.label.toLowerCase().includes(normalizedQuery))
  }, [query])

  return (
    <div className="border-y border-cyan-500/15 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-6">
      <div className="content-container">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
          <p className="font-medium">Find a topic quickly</p>
          <p className="text-slate-400">
            Showing {filteredCategories.length} of {categoryPills.length}
          </p>
        </div>

        <div className="mb-3">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics (AI, Cybersecurity, Quantum...)"
            className="w-full rounded-xl border border-cyan-500/20 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>

        <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-3 shadow-inner shadow-cyan-500/10">
          {filteredCategories.map((category) => (
            <NavLink
              key={category.label}
              to={category.path}
              className={({ isActive }) =>
                `flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-300/70 bg-cyan-500/20 text-white shadow-lg shadow-cyan-500/20'
                    : 'border-cyan-500/20 bg-slate-800/65 text-slate-200 hover:-translate-y-0.5 hover:border-cyan-400/45 hover:bg-slate-700/80 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20'
                }`
              }
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.label}</span>
            </NavLink>
          ))}
          {filteredCategories.length === 0 ? (
            <p className="px-2 py-1 text-sm text-slate-400">No topics match your search.</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
