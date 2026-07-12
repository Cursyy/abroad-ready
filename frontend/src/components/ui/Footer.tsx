import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-6xl items-center justify-between border-t border-zinc-800 px-8 py-6">
      <div className="font-bold tracking-tight text-white">Abroad Ready</div>
      <ul className="m-0 flex list-none items-center gap-6 p-0">
        <li>
          <Link
            href={'/programmes'}
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Programmes
          </Link>
        </li>
        <li className="text-sm text-zinc-500">© 2025</li>
      </ul>
    </footer>
  )
}
