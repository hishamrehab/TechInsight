import { NavLink } from 'react-router-dom'

export function GenerationPage() {
  return (
    <main className="page-shell">
      <section className="content-container py-28">
        <div className="surface-card mx-auto max-w-3xl rounded-2xl p-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">Generation Hub</p>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-100">Welcome to the Generation Page</h1>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            This page is now linked from the main navigation. Keep exploring the platform or continue onboarding using
            the Get Started button.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink className="btn-primary" to="/get-started">
              Get Started
            </NavLink>
            <NavLink
              className="rounded-lg border border-cyan-500/25 bg-slate-900/70 px-5 py-3 font-medium text-slate-200 transition hover:border-cyan-400/45 hover:text-white"
              to="/"
            >
              Back to Home
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}
