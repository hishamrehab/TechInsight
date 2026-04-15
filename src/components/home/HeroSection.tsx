import { NavLink } from 'react-router-dom'
import { heroImageUrl, stats } from '../../data/homeData'
import { SafeImage } from '../shared/SafeImage'

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <SafeImage alt="Hero Background" className="h-full w-full object-cover object-top" src={heroImageUrl} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-48 pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2.5 text-white shadow-lg shadow-cyan-500/20 backdrop-blur-md transition-all duration-700">
            <span className="text-cyan-400">🚀</span>
            <span className="text-sm font-semibold">Explore the Future of Tech</span>
          </div>
          <h1 className="mb-7 text-5xl leading-tight font-extrabold text-white md:text-7xl">
            Insights That Shape
            <br />
            Tomorrow&apos;s Technology
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/95 md:text-xl">
            Deep dives into artificial intelligence, blockchain, quantum computing, and emerging technologies that are
            transforming our digital landscape.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <NavLink to="/articles" className="btn-primary !px-9 !py-4">
              Start Reading
            </NavLink>
            <NavLink to="/get-started" className="btn-secondary !px-9 !py-4">
              <span className="text-lg">⚡</span>
              Open Product Demo
            </NavLink>
          </div>
        </div>

        <div className="mx-auto mt-28 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-6 text-center shadow-lg shadow-cyan-500/20 backdrop-blur-md transition-all duration-700 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-2 text-5xl font-bold text-white">{item.value}</div>
              <div className="text-sm font-medium text-white/85">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
