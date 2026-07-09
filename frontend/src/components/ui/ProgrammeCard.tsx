import Link from 'next/link'
import { Programme } from '@/types'

interface ProgrammeCardProps {
  programme: Programme
}

export default function ProgrammeCard({ programme }: ProgrammeCardProps) {
  const getTypeStyles = (type: string) => {
  const normalized = type.toLowerCase();
  if (normalized.includes('work')) {
    return 'bg-blue-700';
  }
  if (normalized.includes('intern')) {
    return 'bg-purple-700';
  }
  if(normalized.includes('travel')) {
    return 'bg-amber-700';
  }
  return 'bg-zinc-800';
};
  return (
    <Link href={`/programmes/${programme.slug}`}>
      <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <span className={`rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getTypeStyles(programme.type)}`}>
            {programme.type}
          </span>
          {programme.featured && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Featured
            </span>
          )}
        </div>

        <h2 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {programme.title}
        </h2>

        <div className="mb-4 flex gap-4 text-sm text-gray-500">
          <span>📍 {programme.country}</span>
          <span>⏱ {programme.duration}</span>
        </div>

        <div className="text-sm font-medium text-blue-600">Learn more →</div>
      </div>
    </Link>
  )
}
