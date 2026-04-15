import { SafeImage } from '../components/shared/SafeImage'

export function AboutPage() {
  const highlights = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of the curve, bringing you the latest breakthroughs.',
    },
    {
      title: 'Trusted Accuracy',
      description: 'Every article is fact-checked and reviewed by industry experts.',
    },
    {
      title: 'Community Driven',
      description: 'Built by tech enthusiasts, for tech enthusiasts worldwide.',
    },
  ]

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Editor-in-Chief',
      bio: 'AI researcher with 15+ years in machine learning.',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20confident%20woman%20tech%20executive%20with%20warm%20smile%20wearing%20modern%20business%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-sarah-001&orientation=squarish',
    },
    {
      name: 'Marcus Chen',
      role: 'Blockchain Lead',
      bio: 'Former fintech executive and DeFi expert.',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20asian%20man%20tech%20professional%20with%20friendly%20expression%20wearing%20smart%20casual%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-marcus-001&orientation=squarish',
    },
    {
      name: 'Dr. Emily Zhang',
      role: 'Quantum Editor',
      bio: 'PhD in quantum physics from MIT.',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20young%20asian%20woman%20scientist%20researcher%20with%20confident%20smile%20wearing%20professional%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-emily-001&orientation=squarish',
    },
    {
      name: 'James Rodriguez',
      role: 'Security Analyst',
      bio: 'Cybersecurity consultant for Fortune 500.',
      image:
        'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20hispanic%20man%20cybersecurity%20expert%20with%20serious%20professional%20expression%20wearing%20business%20casual%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-james-001&orientation=squarish',
    },
  ]

  const stats = [
    { value: '3.2M+', label: 'Active Readers' },
    { value: '1,850+', label: 'Published Articles' },
    { value: '75+', label: 'Tech Experts' },
    { value: '98%', label: 'Satisfaction Rate' },
  ]

  return (
    <main className="page-shell">
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0 h-96">
          <SafeImage
            src="https://readdy.ai/api/search-image?query=modern%20tech%20company%20office%20interior%20with%20diverse%20team%20collaborating%20on%20futuristic%20displays%20holographic%20screens%20glowing%20interfaces%20warm%20ambient%20lighting%20sleek%20minimalist%20design%20professional%20creative%20workspace%20with%20cyan%20and%20teal%20accent%20lighting&width=1920&height=700&seq=about-hero-001&orientation=landscape"
            alt="About Background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 content-container pb-28 pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white">About TechInsight</h1>
            <p className="text-xl leading-relaxed text-white/90">
              We are a team of technology enthusiasts, researchers, and industry experts dedicated to making complex
              tech topics accessible and engaging.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12">
        <div className="content-container">
          <div className="surface-card grid grid-cols-1 gap-4 rounded-2xl p-6 md:grid-cols-4">
            {stats.map((item, index) => (
              <div key={item.label} className={`p-4 text-center ${index > 0 ? 'border-l border-cyan-500/20' : ''}`}>
                <div className="mb-1 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-4xl font-bold text-transparent">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-container py-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              <span className="text-sm font-medium">Our Mission</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-100">
              Bridging Technology
              <br />
              &amp; Understanding
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-300">
              TechInsight was founded with a simple goal: to bridge the gap between cutting-edge technology and
              everyday understanding. We believe that knowledge should be accessible to everyone.
            </p>
            <p className="mb-8 leading-relaxed text-slate-300">
              Our team of expert writers and researchers work tirelessly to bring you the most accurate, insightful,
              and engaging content on emerging technologies that are shaping our future.
            </p>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="surface-card rounded-xl p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <h4 className="mb-1 font-semibold text-slate-100">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/10 transition-shadow duration-500 hover:shadow-cyan-500/20">
              <SafeImage
                src="https://readdy.ai/api/search-image?query=modern%20tech%20workspace%20with%20multiple%20screens%20showing%20data%20visualizations%20code%20editors%20and%20analytics%20dashboards%20warm%20ambient%20lighting%20plants%20and%20minimalist%20decor%20creative%20professional%20environment%20with%20cyan%20accent%20lighting&width=600&height=500&seq=about-mission-001&orientation=portrait"
                alt="Our Workspace"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-xl border-4 border-slate-900 shadow-xl">
              <SafeImage
                src="https://readdy.ai/api/search-image?query=team%20meeting%20discussion%20around%20modern%20conference%20table%20with%20laptops%20tablets%20collaborative%20brainstorming%20session%20warm%20lighting%20professional%20tech%20office%20environment&width=200&height=200&seq=about-meeting-001&orientation=squarish"
                alt="Team Meeting"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent py-20">
        <div className="content-container">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              <span className="text-sm font-medium">Leadership</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-100">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Industry experts and thought leaders driving innovation in tech journalism.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="h-56 w-full flex-shrink-0 overflow-hidden">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 text-center">
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-100">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-cyan-300">{member.role}</p>
                    <p className="text-sm text-slate-400">{member.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://readdy.ai/api/search-image?query=abstract%20technology%20network%20visualization%20with%20glowing%20nodes%20interconnected%20pathways%20flowing%20data%20streams%20in%20cyan%20and%20teal%20colors%20against%20dark%20gradient%20background%20with%20particle%20effects%20and%20volumetric%20lighting&width=1920&height=400&seq=about-cta-001&orientation=landscape"
            alt="CTA Background"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="content-container relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Join Our Community</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Stay updated with the latest tech insights delivered directly to your inbox. Join 3.2M+ readers today.
          </p>
          <a
            href="/get-started"
            className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/40 transition-all hover:scale-105 hover:from-cyan-600 hover:to-teal-600"
          >
            Get Started
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </main>
  )
}
