import { NavLink } from 'react-router-dom'
import { featuredStories, latestUpdates } from '../../data/homeData'
import { SafeImage } from '../shared/SafeImage'

export function ContentSections() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <SectionHeader
          title="Featured Stories"
          subtitle="Handpicked articles from industry leaders"
          actionLabel="View All"
          actionPath="/articles"
          actionVariant="ghost"
        />
        <div className="content-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredStories.map((story) => (
              <article
                key={story.id}
                className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="h-52 w-full overflow-hidden">
                  <SafeImage
                    alt={story.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    src={story.image}
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center gap-2 text-xs text-cyan-300">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 font-semibold">
                      {story.category}
                    </span>
                    <span className="text-slate-400">{story.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-cyan-200">
                    {story.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">{story.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <SectionHeader
          title="Latest Updates"
          subtitle="Fresh insights from the tech world"
          actionLabel="Load More"
          actionPath="/articles"
          actionVariant="primary"
        />
        <div className="content-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {latestUpdates.map((update) => (
              <article
                key={update.id}
                className="group flex overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60 transition-all duration-500 hover:border-cyan-400/35 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="h-auto w-40 flex-shrink-0 overflow-hidden">
                  <SafeImage
                    alt={update.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={update.image}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-cyan-300">{update.date}</p>
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                      {update.title}
                    </h3>
                    <p className="text-sm text-slate-300">{update.excerpt}</p>
                  </div>
                  <NavLink className="mt-4 inline-flex w-fit text-sm font-semibold text-cyan-300 hover:text-cyan-200" to="/articles">
                    Read more →
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

type SectionHeaderProps = {
  title: string
  subtitle: string
  actionLabel: string
  actionPath: string
  actionVariant: 'primary' | 'ghost'
}

function SectionHeader({ title, subtitle, actionLabel, actionPath, actionVariant }: SectionHeaderProps) {
  return (
    <div className="content-container mb-12 flex items-center justify-between">
      <div>
        <h2 className="mb-3 text-4xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <NavLink className={actionVariant === 'primary' ? 'btn-primary' : 'btn-ghost'} to={actionPath}>
        {actionLabel}
      </NavLink>
    </div>
  )
}
