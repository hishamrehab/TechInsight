import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { recruiterTracks, type RecruiterTrack } from '../../data/homeData'

type AudienceFilter = 'All' | RecruiterTrack['audience']

const filters: AudienceFilter[] = ['All', 'Recruiter', 'Hiring Manager', 'Engineering Lead']

export function RecruiterShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState<AudienceFilter>('All')

  const visibleTracks = useMemo(() => {
    if (activeFilter === 'All') {
      return recruiterTracks
    }

    return recruiterTracks.filter((track) => track.audience === activeFilter)
  }, [activeFilter])

  return (
    <section className="bg-slate-900 py-20">
      <div className="content-container">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Recruiter View</p>
            <h2 className="mt-3 text-4xl font-bold text-white">What this project demonstrates in hiring conversations</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Use role-based filters to review the outcomes that matter most to each decision-maker.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'border border-cyan-500/30 bg-slate-800/60 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleTracks.map((track) => (
            <article key={track.id} className="surface-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">{track.audience}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-100">{track.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{track.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {track.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 text-cyan-300">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <NavLink to={track.ctaPath} className="btn-ghost mt-6">
                {track.ctaLabel}
              </NavLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
