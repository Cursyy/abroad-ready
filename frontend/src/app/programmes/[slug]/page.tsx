import { notFound } from 'next/navigation';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getProgrammes, getProgrammeBySlug } from '@/lib/api'
import type { Metadata } from 'next'
import Link from 'next/link'

interface PageProps{
  params: {slug: string}
}

export async function generateStaticParams(){
  const programmes = await getProgrammes()
  return programmes.map((p) => ({slug: p.slug}))
}

export async function generateMetadata(
  { params } : PageProps
): Promise<Metadata> {
    const programme = await getProgrammeBySlug(params.slug)
    if(!programme){
      return {title: "Programme not found"}
    }
    return {
      title: `${programme.title} | Abroad Ready`,
      description: `${programme.country} - ${programme.duration} - ${programme.type}`,
    }
}

export const revalidate = 3600

export default async function ProgrammeDetailPage({params}: PageProps) {
  const programme = await getProgrammeBySlug(params.slug)

  if(!programme){
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <Link
  href="/programmes"
  className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
>
  ← Back to programmes
</Link>
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {programme.type}
          </span>
          {programme.featured && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Featured
            </span>
          )}
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          {programme.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-6 text-gray-500">
          <span>📍 {programme.country}</span>
          <span>⏱ {programme.duration}</span>
        </div>
      </div>

      {/* Description */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          About this programme
        </h2>
        <div className="prose prose-gray max-w-none">
          <BlocksRenderer content={programme.description} />
        </div>
      </section>
      {/* Requirements */}
      {programme.requirements && (
        <section className="rounded-2xl bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Requirements
          </h2>
          <p className="whitespace-pre-line text-gray-600">
            {programme.requirements}
          </p>
        </section>
      )}

    </main>
  )
}