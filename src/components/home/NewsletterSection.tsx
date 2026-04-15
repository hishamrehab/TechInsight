import { type FormEvent, useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const STORAGE_KEY = 'techinsight-newsletter-subscribers'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setSuccessMessage('')
      setError('Please enter a valid email address.')
      return
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      const existingSubscribers = raw ? (JSON.parse(raw) as string[]) : []
      const uniqueSubscribers = Array.from(new Set([...existingSubscribers, normalizedEmail]))

      localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueSubscribers))
      setError('')
      setSuccessMessage('Subscribed successfully. You are now on the weekly update list.')
      setEmail('')
    } catch {
      setSuccessMessage('')
      setError('Subscription could not be saved right now. Please try again.')
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500 blur-3xl"></div>
        <div
          className="absolute right-1/4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-blue-600 blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-12 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
          <div className="mb-10 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 backdrop-blur-sm">
              <span>✉</span>
              <span className="text-sm font-semibold">Stay Updated</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Get the Latest Tech Insights</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-300">
              Join 50,000+ tech enthusiasts receiving weekly updates on AI, blockchain, quantum computing, and emerging
              technologies. No spam, unsubscribe anytime.
            </p>
          </div>

          <form className="mx-auto max-w-xl" id="newsletter-form" onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-4 text-sm text-white placeholder-gray-500 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                name="email"
                placeholder="Enter your email address"
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="btn-primary !px-8 !py-4 disabled:cursor-not-allowed disabled:opacity-50" type="submit">
                Subscribe Now
              </button>
            </div>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            {successMessage ? <p className="text-sm text-emerald-300">{successMessage}</p> : null}
          </form>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-slate-700 pt-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-cyan-400">
              <span className="text-lg text-cyan-400">🛡</span>
              <span>100% Privacy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-cyan-400">
              <span className="text-lg text-cyan-400">✓</span>
              <span>No Spam</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-cyan-400">
              <span className="text-lg text-cyan-400">⏱</span>
              <span>Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
