import { NavLink } from 'react-router-dom'

type PageHeroProps = {
  title: string
  description: string
  ctaLabel?: string
  ctaPath?: string
}

export function PageHero({ title, description, ctaLabel, ctaPath }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-44 pb-24">
      <div className="content-container text-center">
        <h1 className="mb-5 text-4xl font-extrabold text-white md:text-6xl">{title}</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">{description}</p>
        {ctaLabel && ctaPath ? (
          <NavLink className="btn-primary" to={ctaPath}>
            {ctaLabel}
          </NavLink>
        ) : null}
      </div>
    </section>
  )
}
