'use client'

import { Programme } from "@/types"
import { useState } from "react" 
import ProgrammeCard from "@/components/ui/ProgrammeCard"

interface CountryFilterProps {
  programmes: Programme[]
}

export default function CountryFilter({ programmes }: CountryFilterProps) {
  const [selectedCountry, setSelectedCountry] = useState('all')
  const countries = [...new Set(programmes.map((p) => p.country))]

  const filtered = selectedCountry === 'all' 
    ? programmes 
    : programmes.filter((c) => c.country === selectedCountry)

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-10">
        <button 
          onClick={() => setSelectedCountry('all')} 
          className={`px-6 py-3 text-base font-medium rounded-xl border transition-colors ${
            selectedCountry === 'all' 
              ? 'bg-zinc-800 border-zinc-700 text-white' 
              : 'border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-700 hover:text-white'
          }`}
        > 
          All 
        </button>
        
        {countries.map((country) => (
          <button 
            key={country} 
            onClick={() => setSelectedCountry(country)}
            className={`px-6 py-3 text-base font-medium rounded-xl border transition-colors ${
              selectedCountry === country 
                ? 'bg-zinc-800 border-zinc-700 text-white' 
                : 'border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-700 hover:text-white'
            }`}
          > 
            {country} 
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((programme) => (
          <ProgrammeCard key={programme.id} programme={programme} />
        ))}
      </div>
    </>
  )
}