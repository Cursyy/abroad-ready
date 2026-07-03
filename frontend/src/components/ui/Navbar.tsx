'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";


const navItems = [
  {
    id: "home",
    title: "home",
    href: "/"
  },
  {
    id: "programmes",
    title: "programmes",
    href: "/programmes"
  },
]

export default function Navbar(){
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path
  return(
    <nav className='flex justify-between p-6 border-slate-400 border-b-2'>
      <div className=" text-white font-extrabold">Abroad Ready</div>
      <ul className='flex gap-4 list-none'>
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link href={eachItem.href}
            className={`no-underline hover:text-blue-700 transition-colors ${isActive(eachItem.href) ? "text-blue-600 font-semibold" : "text-slate-600"}`}>{eachItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}