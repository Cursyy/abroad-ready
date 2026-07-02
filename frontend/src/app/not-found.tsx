// src/app/not-found.tsx

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-500">
        This programme doesn't exist or has been removed.
      </p>
      <Link
        href="/programmes"
        className="mt-8 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Browse all programmes
      </Link>
    </main>
  )
}