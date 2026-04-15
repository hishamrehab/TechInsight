import { enterpriseHighlights } from '../../data/homeData'

export function PlatformHighlightsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="content-container">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Enterprise Upgrade</p>
          <h2 className="mt-3 text-4xl font-bold text-white">Built to look and behave like a modern product experience</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            These improvements turn the app into a stronger portfolio asset by combining visual polish with practical
            functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {enterpriseHighlights.map((highlight) => (
            <article key={highlight.title} className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-100">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{highlight.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
