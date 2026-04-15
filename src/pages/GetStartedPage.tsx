import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { SafeImage } from '../components/shared/SafeImage'

type Interest = {
  id: string
  label: string
  icon: string
}

const interests: Interest[] = [
  { id: 'ai', label: 'AI & Machine Learning', icon: '🤖' },
  { id: 'blockchain', label: 'Blockchain', icon: '🔗' },
  { id: 'quantum', label: 'Quantum Computing', icon: '⚛️' },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️' },
  { id: 'iot', label: 'IoT & Edge', icon: '💻' },
  { id: 'ar-vr', label: 'AR/VR', icon: '🥽' },
]

export function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [selectedInterestIds, setSelectedInterestIds] = useState<string[]>(['ai'])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const canProceed = selectedInterestIds.length > 0
  const canSubmit = email.trim().length > 0

  const selectedInterests = useMemo(
    () => interests.filter((interest) => selectedInterestIds.includes(interest.id)).map((interest) => interest.label),
    [selectedInterestIds],
  )

  function toggleInterest(interestId: string) {
    setSelectedInterestIds((current) => {
      if (current.includes(interestId)) {
        return current.filter((id) => id !== interestId)
      }
      return [...current, interestId]
    })
  }

  function handleContinue() {
    if (canProceed) {
      setStep(2)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canSubmit) {
      return
    }

    setStep(1)
    setName('')
    setEmail('')
    setSelectedInterestIds(['ai'])
  }

  return (
    <main className="page-shell">
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <SafeImage
            alt="Get Started Background"
            className="h-full w-full object-cover object-top"
            src="https://readdy.ai/api/search-image?query=welcoming%20onboarding%20journey%20visualization%20with%20glowing%20pathway%20stepping%20stones%20ascending%20light%20trails%20floating%20interface%20elements%20in%20cyan%20teal%20colors%20against%20dark%20gradient%20background%20with%20particle%20effects%20volumetric%20lighting%20warm%20inviting%20atmosphere&width=1920&height=600&seq=getstarted-hero-001&orientation=landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 content-container pb-20 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-white backdrop-blur-md">
              <span className="text-cyan-400">🚀</span>
              <span className="text-sm font-medium">Join the Community</span>
            </div>
            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white">Get Started Today</h1>
            <p className="text-xl leading-relaxed text-white/90">
              Personalize your tech journey. Select your interests and never miss an update.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-8 pb-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="surface-card rounded-2xl p-8">
            <div className="mb-10 flex items-center justify-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  step === 1
                    ? 'scale-110 bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                1
              </div>
              <div className={`h-1 w-20 rounded-full transition-all ${step === 2 ? 'bg-cyan-500' : 'bg-slate-800'}`} />
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  step === 2
                    ? 'scale-110 bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                2
              </div>
            </div>

            {step === 1 ? (
              <div>
                <h2 className="mb-2 text-center text-2xl font-bold text-slate-100">What interests you?</h2>
                <p className="mb-8 text-center text-slate-300">Select topics you would like to follow. Choose at least one.</p>
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {interests.map((interest) => {
                    const isSelected = selectedInterestIds.includes(interest.id)
                    return (
                      <button
                        key={interest.id}
                        className={`cursor-pointer rounded-xl border-2 p-4 text-left transition-all duration-300 hover:scale-105 ${
                          isSelected
                            ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 shadow-lg shadow-cyan-500/20'
                            : 'border-cyan-500/20 bg-slate-900/60 hover:border-cyan-500/35 hover:shadow-md'
                        }`}
                        onClick={() => toggleInterest(interest.id)}
                        type="button"
                      >
                        <div
                          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-xl transition-all ${
                            isSelected
                              ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <span aria-hidden="true">{interest.icon}</span>
                        </div>
                        <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-cyan-200' : 'text-slate-300'}`}>
                          {interest.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <button
                  className="w-full cursor-pointer whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-teal-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  disabled={!canProceed}
                  onClick={handleContinue}
                  type="button"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div>
                <h2 className="mb-2 text-center text-2xl font-bold text-slate-100">Almost there!</h2>
                <p className="mb-8 text-center text-slate-300">Enter your details to complete your subscription.</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">
                      Name (optional)
                    </label>
                    <input
                      className="w-full rounded-xl border border-cyan-500/20 bg-slate-900/70 px-4 py-3.5 text-sm text-slate-100 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      id="name"
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      type="text"
                      value={name}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-xl border border-cyan-500/20 bg-slate-900/70 px-4 py-3.5 text-sm text-slate-100 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      id="email"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      required
                      type="email"
                      value={email}
                    />
                  </div>
                  <input name="interests" type="hidden" value={selectedInterests.join(', ')} />
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      className="cursor-pointer whitespace-nowrap rounded-xl border border-cyan-500/20 bg-slate-900/70 px-6 py-3.5 font-medium text-slate-200 transition-all duration-300 hover:scale-105 hover:bg-slate-800"
                      onClick={() => setStep(1)}
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      className="flex-1 cursor-pointer whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3.5 font-semibold text-white transition-all duration-300 hover:from-cyan-600 hover:to-teal-600 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                      disabled={!canSubmit}
                      type="submit"
                    >
                      Complete Signup
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-center text-xs text-slate-400">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
