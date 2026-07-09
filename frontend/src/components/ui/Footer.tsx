import Link from "next/link"

export default function Footer(){
  return(
    <footer className="border-t border-zinc-800 max-w-6xl mx-auto w-full px-8 py-6 mt-auto flex justify-between items-center">
      <div className="text-white font-bold tracking-tight">Abroad Ready</div>
      <ul className="flex gap-6 list-none m-0 p-0 items-center">
        <li>
          <Link href={'/programmes'} className="text-zinc-400 hover:text-white transition-colors text-sm">
            Programmes
          </Link>
        </li>
        <li className="text-zinc-500 text-sm">© 2025</li>
      </ul>
    </footer>
  )
}