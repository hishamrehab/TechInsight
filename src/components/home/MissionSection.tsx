import { missionCards } from '../../data/homeData'

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-cyan-500 blur-3xl"></div>
        <div
          className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-blue-600 blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="content-container relative z-10">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 backdrop-blur-sm">
            <span>💡</span>
            <span className="text-sm font-semibold">Our Mission</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Empowering Innovation Through Knowledge</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            We&apos;re dedicated to making cutting-edge technology accessible to everyone. Our expert writers break down
            complex topics into engaging, actionable insights that drive innovation forward.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {missionCards.map((card) => (
            <div key={card.title}>
              <div className="group rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl text-white shadow-lg shadow-cyan-500/30 transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{card.title}</h3>
                <p className="leading-relaxed text-gray-400">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
