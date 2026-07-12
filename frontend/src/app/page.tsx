import Link from 'next/link'
import { getProgrammes } from '@/lib/api'
import ProgrammeCard from '@/components/ui/ProgrammeCard'

export default async function Home() {
  const programmes = await getProgrammes()
  const numOfProgrammes = programmes.length
  const numOfCountries = new Set(programmes.map((p) => p.country)).size
  const numOfTypes = new Set(programmes.map((p) => p.type)).size
  const featuredProgrammes = programmes.filter((p) => p.featured).slice(0, 3)
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-8 pb-16 pt-20 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbe5f9] bg-[#eaeffa] px-4 py-2 text-sm font-semibold text-[#3b82f6]">
        <span>🌎</span> {numOfProgrammes} programmes worldwide
      </div>

      <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.15] tracking-tight text-white md:text-6xl">
        Find your next <span className="text-[#3b82f6]">work & travel</span>{' '}
        adventure abroad
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
        Browse vetted international programmes for students and young
        professionals. From J-1 visas to au pair placements.
      </p>

      <div className="mb-20 flex w-full flex-wrap justify-center gap-4">
        <Link
          href="/programmes"
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-zinc-700"
        >
          Browse programmes
        </Link>
        <Link
          href="/how-it-works"
          className="rounded-xl border border-zinc-800 bg-transparent px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:border-zinc-700"
        >
          How it works
        </Link>
      </div>

      <div className="mb-16 grid w-full grid-cols-1 gap-6 border-y border-zinc-800/60 py-8 md:grid-cols-3 md:gap-0">
        <div className="flex flex-col items-center justify-center border-zinc-800/60 md:border-r">
          <span className="mb-1 text-3xl font-bold text-[#3b82f6]">
            {numOfProgrammes}
          </span>
          <span className="text-sm font-medium text-zinc-500">Programmes</span>
        </div>
        <div className="flex flex-col items-center justify-center border-zinc-800/60 md:border-r">
          <span className="mb-1 text-3xl font-bold text-[#3b82f6]">
            {numOfCountries}
          </span>
          <span className="text-sm font-medium text-zinc-500">Countries</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="mb-1 text-3xl font-bold text-[#3b82f6]">
            {numOfTypes}
          </span>
          <span className="text-sm font-medium text-zinc-500">
            Programme types
          </span>
        </div>
      </div>

      <div className="mb-8 flex w-full items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Featured programmes
        </h2>
        <Link
          href="/programmes"
          className="flex items-center gap-1 text-sm font-semibold text-[#3b82f6] hover:underline"
        >
          View all <span>→</span>
        </Link>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 text-left md:grid-cols-3">
        {featuredProgrammes.map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} />
        ))}
        {Array.from({ length: 3 - featuredProgrammes.length }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-zinc-800 p-6"
          >
            <span className="text-sm font-medium text-zinc-500">
              More coming soon
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
