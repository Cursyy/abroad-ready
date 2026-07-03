import Link from "next/link"

export default function Footer(){
  return(
    <footer className="bg-gray-900 flex justify-between px-5 py-4 fixed bottom-0 w-full">
      <div className=" text-white font-extrabold">Abroad Ready</div>
      <ul className="flex gap-4 list-none">
        <li className="text-slate-300"><Link href={'/programmes'}>Programmes</Link></li>
        <li className="text-slate-300">2025</li>
      </ul>
    </footer>
  )
}