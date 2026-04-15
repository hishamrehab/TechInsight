import { NavLink } from 'react-router-dom'
import { SafeImage } from '../components/shared/SafeImage'

const featuredTopics = [
  { title: 'AI Engineering', description: 'Build reliable AI workflows from prompt design to production guardrails.' },
  { title: 'Cloud Platforms', description: 'Learn scalable architecture, observability, and efficient delivery pipelines.' },
  { title: 'Security Patterns', description: 'Adopt practical secure-by-default patterns for modern applications.' },
]

const roadmapSteps = [
  { phase: 'Week 1', title: 'Foundations', detail: 'Choose your track and understand the core concepts quickly.' },
  { phase: 'Week 2', title: 'Deep Dive', detail: 'Study architecture decisions and implementation trade-offs.' },
  { phase: 'Week 3', title: 'Execution', detail: 'Apply checklists and patterns directly in your own projects.' },
]

export function GenerationPage() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden pb-20 pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <SafeImage
            src="https://readdy.ai/api/search-image?query=futuristic%20technology%20workspace%20with%20clean%20dark%20interface%20panels%20soft%20cyan%20teal%20lighting%20premium%20minimal%20look%20abstract%20digital%20environment&width=1920&height=600&seq=generation-hero-003&orientation=landscape"
            alt="Generation background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="content-container relative z-10 pb-12 pt-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="text-cyan-400">◉</span>
              <span className="text-sm font-medium">Generation</span>
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white md:text-5xl">Clarity for Fast-Moving Tech</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Follow focused tracks, learn through practical guides, and keep up with the tools shaping modern teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink className="btn-primary" to="/get-started">
                Get Started
              </NavLink>
              <NavLink className="btn-secondary" to="/articles">
                Explore Articles
              </NavLink>
            </div>
          </div>

          <div className="mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Core Tracks</p>
              <p className="mt-1 text-2xl font-bold text-white">3</p>
            </div>
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Update Cycle</p>
              <p className="mt-1 text-2xl font-bold text-white">Weekly</p>
            </div>
            <div className="rounded-xl border border-cyan-400/25 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-cyan-200/85">Learning Mode</p>
              <p className="mt-1 text-2xl font-bold text-white">Practical</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-container pb-16">
        <div className="mb-8 grid grid-cols-1 gap-5 rounded-2xl border border-cyan-500/20 bg-slate-900/55 p-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Top Focus Areas</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-100">A cleaner way to stay current</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              Skip noisy feeds. Start with curated tracks that move from fundamentals to hands-on implementation.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p className="rounded-lg border border-cyan-500/20 bg-slate-900/50 px-4 py-3">Concise weekly updates on important changes.</p>
              <p className="rounded-lg border border-cyan-500/20 bg-slate-900/50 px-4 py-3">
                Practical guides with architecture and delivery decisions.
              </p>
              <p className="rounded-lg border border-cyan-500/20 bg-slate-900/50 px-4 py-3">
                Actionable checklists you can apply immediately.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950/55 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/90">Quick action</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">Personalize your feed</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Complete onboarding and get content recommendations tailored to your interests.
            </p>
            <NavLink className="btn-primary mt-5" to="/get-started">
              Continue to Get Started
            </NavLink>
          </div>
        </div>
      </section>

      <section className="content-container pb-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Tracks</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-100">Choose your learning track</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredTopics.map((topic) => (
            <article key={topic.title} className="surface-card surface-card-hover rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-100">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.description}</p>
              <NavLink className="mt-4 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200" to="/articles">
                Read related articles →
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="content-container pb-20">
        <div className="surface-card rounded-2xl p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Learning Roadmap</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-100">How to make steady progress</h2>
          <div className="mt-6 space-y-4">
            {roadmapSteps.map((step) => (
              <div key={step.phase} className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{step.phase}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-100">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink className="btn-primary" to="/get-started">
              Start Your Journey
            </NavLink>
            <NavLink className="btn-ghost" to="/">
              Back to Home
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}
