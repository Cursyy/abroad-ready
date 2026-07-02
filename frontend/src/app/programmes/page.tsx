import { getProgrammes } from '@/lib/api';
import ProgrammeCard from '@/components/ui/ProgrammeCard';

export const revalidate = 3600 //revalidating page every hour

export default async function ProgrammesPage(){
  const programmes = await getProgrammes()
  
  return(
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Work & Travel Programmes
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Find your perfect international experience
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} />
        ))}
      </div>
    </main>
  )
}