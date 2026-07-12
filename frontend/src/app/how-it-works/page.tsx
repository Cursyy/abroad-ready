import Link from 'next/link'

export default function HowItWorksPage() {
  const faqs = [
    {
      question: 'Is there a cost to apply?',
      answer:
        'Browsing and applying through Abroad Ready is free. Some programmes may have their own placement fees once accepted.',
    },
    {
      question: 'How long does it take to hear back?',
      answer:
        'Response times vary by programme, typically between 5–14 business days after your application is reviewed.',
    },
    {
      question: 'Can I apply for more than one programme?',
      answer:
        "Yes. You can apply for as many programmes as you're eligible for. We recommend tailoring your personal statement for each.",
    },
  ]

  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-8 pb-16 pt-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbe5f9] bg-[#eaeffa] px-4 py-2 text-sm font-semibold text-[#3b82f6]">
        <span>🔁</span> Simple 4-step process
      </div>

      <h1 className="mb-6 max-w-3xl text-center text-5xl font-bold leading-[1.15] tracking-tight text-white md:text-6xl">
        How Abroad Ready works
      </h1>

      <p className="mb-20 max-w-2xl text-center text-lg leading-relaxed text-zinc-400 md:text-xl">
        From browsing to boarding — here&#39;s everything you need to know about
        finding and applying for your programme.
      </p>

      <div className="relative mb-24 grid w-full grid-cols-1 gap-12 text-center md:grid-cols-3">
        <div className="absolute left-[15%] right-[15%] top-12 z-0 hidden h-[1px] bg-zinc-800 md:block" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-500 bg-[#1e2d24] text-xl font-bold text-blue-400 shadow-lg shadow-black/40">
            1
          </div>
          <h3 className="mb-3 text-lg font-bold text-white">
            Browse programmes
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Filter by country, duration, or type to find the right fit for your
            goals and availability.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-500 bg-[#1e2d24] text-xl font-bold text-blue-400 shadow-lg shadow-black/40">
            2
          </div>
          <h3 className="mb-3 text-lg font-bold text-white">
            Check requirements
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Read the eligibility criteria carefully. Each programme has specific
            age, visa, and background requirements.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-blue-500 bg-[#1e2d24] text-xl font-bold text-blue-400 shadow-lg shadow-black/40">
            3
          </div>
          <h3 className="mb-3 text-lg font-bold text-white">
            Submit application
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Fill in your details and personal statement directly on the
            programme page. Takes under 10 minutes.
          </p>
        </div>
      </div>

      <div className="mb-24 w-full max-w-4xl text-left">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-white">
          Common questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800/80 bg-transparent p-6"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  {faq.question}
                </h3>
                <span className="text-lg font-medium text-zinc-500">+</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-4xl flex-col items-center rounded-3xl border border-[#dbe5f9] bg-[#eaeffa] p-12 text-center">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#1e2d24] md:text-3xl">
          Ready to find your programme?
        </h2>
        <p className="mb-8 max-w-xl text-base font-medium text-blue-700/80 md:text-lg">
          Browse all available work and travel opportunities and apply today.
        </p>
        <Link
          href="/programmes"
          className="rounded-xl bg-[#3b82f6] px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-600"
        >
          Browse programmes
        </Link>
      </div>
    </main>
  )
}
