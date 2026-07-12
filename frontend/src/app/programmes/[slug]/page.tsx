import { notFound } from 'next/navigation'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { getProgrammes, getProgrammeBySlug } from '@/lib/api'
import type { Metadata } from 'next'
import Link from 'next/link'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const programmes = await getProgrammes()
  return programmes.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const programme = await getProgrammeBySlug(params.slug)
  if (!programme) {
    return { title: 'Programme not found' }
  }
  return {
    title: `${programme.title} | Abroad Ready`,
    description: `${programme.country} - ${programme.duration} - ${programme.type}`,
  }
}

export const revalidate = 3600

const getTypeStyles = (type: string) => {
  const normalized = type.toLowerCase()
  if (normalized.includes('work')) {
    return 'bg-blue-900/40 text-blue-300 border border-blue-800/50'
  }
  if (normalized.includes('intern')) {
    return 'bg-purple-900/40 text-purple-300 border border-purple-800/50'
  }
  if (normalized.includes('au pair')) {
    return 'bg-amber-900/40 text-amber-300 border border-amber-800/50'
  }
  return 'bg-zinc-800 text-zinc-300 border border-zinc-700'
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params
  const programme = await getProgrammeBySlug(slug)

  if (!programme) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-6xl px-8 py-12">
      {/* Back Link */}
      <Link
        href="/programmes"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        ← Back to programmes
      </Link>

      {/* Header Badges */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getTypeStyles(programme.type)}`}
        >
          {programme.type}
        </span>
        {programme.featured && (
          <span className="rounded-full border border-amber-500/20 bg-amber-100/10 px-3 py-1 text-xs font-semibold text-amber-300">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
        {programme.title}
      </h1>

      {/* Quick Meta Info */}
      <div className="mb-10 flex flex-wrap gap-6 border-b border-zinc-800/60 pb-8 text-base text-zinc-400">
        <span className="flex items-center gap-1.5">
          📍 {programme.country}
        </span>
        <span className="flex items-center gap-1.5">
          ⏱️ {programme.duration}
        </span>
      </div>

      {/* Two Column Layout split */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
        {/* Left Main Side */}
        <div className="space-y-10 lg:col-span-2">
          {/* Description Section */}
          <section>
            <h2 className="mb-4 text-xl font-bold tracking-tight text-white">
              About this programme
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 leading-relaxed text-zinc-300">
              <BlocksRenderer content={programme.description} />
            </div>
          </section>

          {/* Requirements Section */}
          {programme.requirements && (
            <section className="pt-4">
              <h2 className="mb-4 text-xl font-bold tracking-tight text-white">
                Requirements
              </h2>
              <div className="space-y-2 whitespace-pre-line leading-relaxed text-zinc-300">
                {programme.requirements.split('\n').map((req, i) => (
                  <p key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 shrink-0 text-sm text-blue-500">
                      ✓
                    </span>
                    <span>{req.replace(/^[-•✓\s]+/, '')}</span>
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar Sticky Cards */}
        <div className="space-y-4 lg:sticky lg:top-8">
          {/* Sidebar Meta Details Box */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#222222] p-6">
            <h3 className="mb-5 text-base font-bold text-white">
              Programme details
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-zinc-800/50 pb-3">
                <span className="font-medium text-zinc-500">Country</span>
                <span className="font-semibold text-white">
                  {programme.country}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-800/50 pb-3">
                <span className="font-medium text-zinc-500">Duration</span>
                <span className="font-semibold text-white">
                  {programme.duration}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-500">Type</span>
                <span className="font-semibold capitalize text-white">
                  {programme.type}
                </span>
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <Link
            href={`/programmes/${programme.slug}/apply?documentId=${programme.documentId}`}
            className="block w-full rounded-xl border border-zinc-700 bg-transparent px-6 py-4 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-zinc-800"
          >
            {' '}
            Apply for this programme
          </Link>
        </div>
      </div>
    </main>
  )
}
