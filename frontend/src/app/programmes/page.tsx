import { getProgrammes } from '@/lib/api';
import CountryFilter from  '@/components/ui/CountryFilter';

export const revalidate = 3600

export default async function ProgrammesPage(){
  const programmes = await getProgrammes()
  
  return(
    <main className="mx-auto max-w-6xl px-8 py-12">
            <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
          Work & travel programmes
        </h1>
        <p className="text-zinc-400 text-lg">
          Find your perfect international experience
        </p>
      </div>
      <CountryFilter programmes={programmes}/>
    </main>
  )
}