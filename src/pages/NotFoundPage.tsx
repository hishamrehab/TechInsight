import { NavLink } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="mb-3 text-cyan-400">404</p>
        <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
        <p className="mb-8 text-slate-300">The page you are looking for does not exist or has been moved.</p>
        <NavLink className="btn-primary" to="/">
          Return to Home
        </NavLink>
      </div>
    </main>
  )
}
