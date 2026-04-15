import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nextPath = (location.state as { from?: string } | null)?.from ?? '/'

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      await login(email, password)
      navigate(nextPath, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to login.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="page-shell pt-32">
      <section className="content-container max-w-lg pb-16">
        <div className="surface-card rounded-2xl p-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-100">Sign in</h1>
          <p className="mb-6 text-sm text-slate-400">Access your account to use full platform features.</p>
          <form className="space-y-4" onSubmit={onSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="w-full rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <button className="btn-primary w-full justify-center" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <p className="mt-6 text-sm text-slate-300">
            New here?{' '}
            <Link to="/register" className="text-cyan-300 hover:text-cyan-200">
              Create account
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
