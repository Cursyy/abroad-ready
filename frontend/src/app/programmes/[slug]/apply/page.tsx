'use client'

import Link from 'next/link'
import { Application } from '@/types'
import { submitApplication } from '@/lib/api'
import { useState } from 'react'

interface ApplyPageProps {
  // params: { slug: string }
  searchParams: { documentId: string }
}

export default function ApplPage({ searchParams }: ApplyPageProps) {
  const { documentId } = searchParams
  const [status, setStatus] = useState<
    'idle' | 'processing' | 'submitted' | 'error'
  >('idle')

  const [formData, setFormData] = useState<Application>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 0,
    university: '',
    course: '',
    linkedinURL: '',
    startDate: '',
    statement: '',
    programme: documentId,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('processing')
    try {
      await submitApplication(formData)
      setStatus('submitted')
    } catch (err) {
      setStatus('idle')
      console.log(err)
    }
  }
  if (status === 'submitted') {
    return (
      <main className="mx-auto max-w-2xl px-8 py-12 text-center">
        <div className="mb-6 text-5xl">🎉</div>
        <h1 className="mb-3 text-2xl font-bold text-white">
          Application submitted
        </h1>
        <p className="mb-8 text-zinc-400">
          We&#39;ll be in touch soon. Good luck!
        </p>
        <Link href="/programmes" className="text-sm font-medium text-blue-400">
          Browse more programmes
        </Link>
      </main>
    )
  }
  return (
    <main className="mx-auto max-w-2xl px-8 py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-white">
          Apply for this programme
        </h1>
        <p className="text-lg text-zinc-400">
          Fill out the form below to submit your application.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              First Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Last Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Email Address <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Age <span className="text-red-700">*</span>
            </label>
            <input
              type="number"
              name="age"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Earliest Start Date <span className="text-red-700">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors [color-scheme:dark] focus:border-zinc-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              University <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="university"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-400">
              Course / Major <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="course"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-400">
            LinkedIn Profile URL
          </label>
          <input
            type="text"
            name="linkedinURL"
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-400">
            Personal Statement / Cover Letter{' '}
            <span className="text-red-700">*</span>
          </label>
          <textarea
            name="statement"
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-zinc-800 bg-[#222222] px-4 py-3 text-white transition-colors focus:border-zinc-700 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'processing'}
          className="mt-4 w-full cursor-pointer rounded-xl border border-zinc-700 bg-transparent px-6 py-4 text-center text-base font-semibold text-white transition-all duration-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-800 disabled:text-zinc-500"
        >
          {status === 'processing' ? 'Submitting...' : 'Submit application'}
        </button>
      </form>
    </main>
  )
}
