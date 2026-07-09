import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-8 pt-20 pb-16 flex flex-col items-center text-center">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#eaeffa] text-[#3b82f6] text-sm font-semibold py-2 px-4 rounded-full mb-6 border border-[#dbe5f9]">
        <span>🌎</span> 20+ programmes worldwide
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6 text-white leading-[1.15]">
        Find your next <span className="text-[#3b82f6]">work & travel</span> adventure abroad
      </h1>

      {/* Subheading Description */}
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Browse vetted international programmes for students and young professionals. From J-1 visas to au pair placements.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 w-full">
        <Link 
          href="/programmes" 
          className="bg-zinc-800 text-white font-medium px-6 py-3.5 rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-colors duration-200"
        >
          Browse programmes
        </Link>
        <button 
          className="bg-transparent text-white font-medium px-6 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
        >
          How it works
        </button>
      </div>

      {/* Statistics Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-zinc-800/60 py-8 mb-16 gap-6 md:gap-0">
        <div className="flex flex-col items-center justify-center md:border-r border-zinc-800/60">
          <span className="text-3xl font-bold text-[#3b82f6] mb-1">20+</span>
          <span className="text-zinc-500 text-sm font-medium">Programmes</span>
        </div>
        <div className="flex flex-col items-center justify-center md:border-r border-zinc-800/60">
          <span className="text-3xl font-bold text-[#3b82f6] mb-1">12</span>
          <span className="text-zinc-500 text-sm font-medium">Countries</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-[#3b82f6] mb-1">3</span>
          <span className="text-zinc-500 text-sm font-medium">Programme types</span>
        </div>
      </div>

      {/* Featured Section Header */}
      <div className="w-full flex justify-between items-end mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">Featured programmes</h2>
        <Link href="/programmes" className="text-[#3b82f6] hover:underline text-sm font-semibold flex items-center gap-1">
          View all <span>→</span>
        </Link>
      </div>

      {/* Dynamic Grid Row (Insert cards or layout items directly below) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Replace this container or pass filtered data down into custom preview items */}
        <div className="border border-zinc-800 p-6 rounded-2xl bg-transparent min-h-[220px]">
          <span className="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-semibold">Work</span>
          <h3 className="text-xl font-bold mt-4 text-white">J-1 Summer Work & Travel USA</h3>
          <p className="text-zinc-500 text-sm mt-2">📍 USA</p>
          <p className="text-zinc-500 text-sm">⏱️ 3-4 months</p>
        </div>
        
        <div className="border border-zinc-800 p-6 rounded-2xl bg-transparent min-h-[220px]">
          <span className="bg-purple-100 text-purple-700 text-xs px-2.5 py-1 rounded-full font-semibold">Internship</span>
          <h3 className="text-xl font-bold mt-4 text-white">Au Pair in Germany</h3>
          <p className="text-zinc-500 text-sm mt-2">📍 Germany</p>
          <p className="text-zinc-500 text-sm">⏱️ 12 months</p>
        </div>

        <div className="border border-zinc-800 border-dashed p-6 rounded-2xl flex items-center justify-center min-h-[220px]">
          <span className="text-zinc-500 text-sm font-medium">More coming soon</span>
        </div>
      </div>

    </main>
  );
}