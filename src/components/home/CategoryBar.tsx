import { categoryPills } from '../../data/homeData'
import { NavLink } from 'react-router-dom'

export function CategoryBar() {
  return (
    <div className="border-y border-cyan-500/15 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-6">
      <div className="content-container">
        <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-3 shadow-inner shadow-cyan-500/10">
          {categoryPills.map((category) => (
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
        </div>
      </div>
    </div>
  )
}
