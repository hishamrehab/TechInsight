import { testimonials } from '../../data/homeData'

export function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="content-container">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 backdrop-blur-sm">
            <span>💬</span>
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">Trusted by Tech Leaders</h2>
          <p className="text-sm text-gray-400">See what industry experts say about our content</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name}>
              <div className="flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="mb-5 flex items-center gap-1 text-lg text-cyan-400">★★★★★</div>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-300">{item.text}</p>
                <div className="flex items-center gap-3 border-t border-slate-700 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-white shadow-lg shadow-cyan-500/30">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
