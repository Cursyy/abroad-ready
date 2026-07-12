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

const getTypeStyles = (type: string) => {
  const normalized = type.toLowerCase();
  if (normalized.includes('work')) {
    return 'bg-blue-900/40 text-blue-300 border border-blue-800/50';
  }
  if (normalized.includes('intern')) {
    return 'bg-purple-900/40 text-purple-300 border border-purple-800/50';
  }
  if (normalized.includes('au pair')) {
    return 'bg-amber-900/40 text-amber-300 border border-amber-800/50';
  }
  return 'bg-zinc-800 text-zinc-300 border border-zinc-700';
};

export default async function ProgrammeDetailPage({params}: PageProps) {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug)

  if(!programme){
    notFound()
  }

  return (
    <main className="mx-auto max-w-6xl px-8 py-12">
      
      {/* Back Link */}
      <Link
        href="/programmes"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        ← Back to programmes
      </Link>

      {/* Header Badges */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getTypeStyles(programme.type)}`}>
          {programme.type}
        </span>
        {programme.featured && (
          <span className="rounded-full bg-amber-100/10 text-amber-300 border border-amber-500/20 px-3 py-1 text-xs font-semibold">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
        {programme.title}
      </h1>

      {/* Quick Meta Info */}
      <div className="mb-10 flex flex-wrap gap-6 text-zinc-400 text-base pb-8 border-b border-zinc-800/60">
        <span className="flex items-center gap-1.5">📍 {programme.country}</span>
        <span className="flex items-center gap-1.5">⏱️ {programme.duration}</span>
      </div>

      {/* Two Column Layout split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Main Side */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Description Section */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-white tracking-tight">
              About this programme
            </h2>
            <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-4">
              <BlocksRenderer content={programme.description} />
            </div>
          </section>

          {/* Requirements Section */}
          {programme.requirements && (
            <section className="pt-4">
              <h2 className="mb-4 text-xl font-bold text-white tracking-tight">
                Requirements
              </h2>
              <div className="text-zinc-300 leading-relaxed whitespace-pre-line space-y-2">
                {programme.requirements.split('\n').map((req, i) => (
                  <p key={i} className="flex items-start gap-2.5">
                    <span className="text-blue-500 mt-1 shrink-0 text-sm">✓</span>
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
          <div className="bg-[#222222] border border-zinc-800/80 rounded-2xl p-6">
            <h3 className="text-white font-bold text-base mb-5">Programme details</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50">
                <span className="text-zinc-500 font-medium">Country</span>
                <span className="text-white font-semibold">{programme.country}</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800/50">
                <span className="text-zinc-500 font-medium">Duration</span>
                <span className="text-white font-semibold">{programme.duration}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 font-medium">Type</span>
                <span className="text-white font-semibold capitalize">{programme.type}</span>
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <Link href={`/programmes/${programme.slug}/apply?documentId=${programme.documentId}`} className="w-full bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center text-base"> Apply for this programme
          </Link>



        </div>

      </div>

    </main>
  )
}