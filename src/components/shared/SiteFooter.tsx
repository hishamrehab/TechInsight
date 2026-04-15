import { NavLink } from 'react-router-dom'

const topics = ['Artificial Intelligence', 'Blockchain', 'Quantum Computing', 'Cybersecurity', 'IoT & Edge']
const company = ['About Us', 'Our Team', 'Careers', 'Contact', 'Advertise']
const resources = ['Newsletter', 'Podcast', 'Events', 'Privacy Policy', 'Terms of Service']

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-black">
      <div className="content-container py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <NavLink className="mb-4 block cursor-pointer text-2xl font-bold text-white" to="/">
              TechInsight
            </NavLink>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Your trusted source for cutting-edge technology insights, analysis, and trends shaping the digital
              future.
            </p>
            <div className="flex items-center gap-3">
              {['𝕏', 'in', 'GH', '▶'].map((social) => (
                <a
                  key={social}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-gray-400 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white"
                  href="#"
                >
                  <span className="text-sm font-semibold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Topics" items={topics} />
          <FooterColumn title="Company" items={company} />
          <FooterColumn title="Resources" items={resources} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© {currentYear} TechInsight. All rights reserved.</p>
          <a className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-cyan-400" href="https://readdy.ai/?ref=logo">
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-cyan-400" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
