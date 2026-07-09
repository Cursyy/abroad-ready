'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "home",
    title: "Home",
    href: "/"
  },
  {
    id: "programmes",
    title: "Programmes",
    href: "/programmes"
  },
]

export default function Navbar(){
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path
  
  return(
    <nav className='flex justify-between items-center px-8 py-6 border-zinc-800 border-b max-w-6xl mx-auto w-full'>
      <div className="text-white font-bold text-xl tracking-tight">Abroad Ready</div>
      <ul className='flex gap-6 list-none m-0 p-0'>
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link 
              href={eachItem.href}
              className={`text-base transition-colors duration-200 capitalize ${
                isActive(eachItem.href) 
                  ? "text-blue-500 font-semibold" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {eachItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}