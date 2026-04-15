import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/shared/Navbar'
import { ScrollToTop } from '../components/shared/ScrollToTop'
import { SiteFooter } from '../components/shared/SiteFooter'

export function MainLayout() {
  return (
    <div className="app-shell min-h-screen bg-slate-900 text-white">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
