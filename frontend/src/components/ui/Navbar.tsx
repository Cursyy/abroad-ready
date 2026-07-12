'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'programmes',
    title: 'Programmes',
    href: '/programmes',
  },
  {
    id: 'how-it-works',
    title: 'How it works',
    href: '/how-it-works',
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-zinc-800 px-8 py-6">
      <div className="text-xl font-bold tracking-tight text-white">
        Abroad Ready
      </div>
      <ul className="m-0 flex list-none gap-6 p-0">
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link
              href={eachItem.href}
              className={`text-base capitalize transition-colors duration-200 ${
                isActive(eachItem.href)
                  ? 'font-semibold text-blue-500'
                  : 'text-zinc-400 hover:text-white'
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
