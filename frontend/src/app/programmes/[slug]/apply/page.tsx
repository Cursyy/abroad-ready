'use client'

import Link from "next/link"
import { Application } from '@/types'
import { submitApplication } from "@/lib/api"
import { useState } from "react"

interface ApplyPageProps{
  params: {slug: string},
  searchParams: {documentId: string}
}

export default function ApplPage({params, searchParams}: ApplyPageProps) {
  const { documentId } = searchParams
  const [status, setStatus] = useState<'idle' | 'processing' | 'submitted' | 'error'>('idle')

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
  programme: documentId
})

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: name === 'age' ? Number(value) : value
  }))
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('processing')
  try{
    await submitApplication(formData)
    setStatus('submitted')
  }catch(err){
    setStatus('idle')
  }
}
if (status === 'submitted') {
  return (
    <main className="mx-auto max-w-2xl px-8 py-12 text-center">
      <div className="text-5xl mb-6">🎉</div>
      <h1 className="text-2xl font-bold text-white mb-3">
        Application submitted
      </h1>
      <p className="text-zinc-400 mb-8">
        We&#39;ll be in touch soon. Good luck!
      </p>
      <Link href="/programmes" className="text-blue-400 text-sm font-medium">
        Browse more programmes
      </Link>
    </main>
  )
}
  return(
    <main className="mx-auto max-w-2xl px-8 py-12">
  <div className="mb-8">
    <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">
      Apply for this programme
    </h1>
    <p className="text-zinc-400 text-lg">
      Fill out the form below to submit your application.
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">First Name <span className="text-red-700">*</span></label>
        <input 
          type="text" 
          name="firstName"
          required 
          onChange={handleChange} 
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Last Name <span className="text-red-700">*</span></label>
        <input 
          type="text" 
          name="lastName" 
          required
          onChange={handleChange} 
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Email Address <span className="text-red-700">*</span></label>
        <input 
          type="email" 
          name="email" 
          required
          onChange={handleChange} 
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Phone Number</label>
        <input 
          type="text" 
          name="phone" 
          onChange={handleChange} 
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Age <span className="text-red-700">*</span></label>
        <input 
          type="number" 
          name="age" 
          onChange={handleChange} 
          required
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Earliest Start Date <span className="text-red-700">*</span></label>
        <input 
          type="date" 
          name="startDate" 
          onChange={handleChange} 
          required
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors [color-scheme:dark]"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">University <span className="text-red-700">*</span></label>
        <input 
          type="text" 
          name="university" 
          onChange={handleChange} 
          required
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-400">Course / Major <span className="text-red-700">*</span></label>
        <input 
          type="text" 
          name="course" 
          onChange={handleChange} 
          required
          className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
        />
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-400">LinkedIn Profile URL</label>
      <input 
        type="text" 
        name="linkedinURL" 
        onChange={handleChange} 
        className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors"
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-400">Personal Statement / Cover Letter <span className="text-red-700">*</span></label>
      <textarea 
        name="statement" 
        onChange={handleChange} 
        required
        rows={5}
        className="w-full bg-[#222222] border border-zinc-800 focus:border-zinc-700 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors resize-none"
      />
    </div>

    <button 
      type="submit" 
      disabled={status === 'processing'}
      className="w-full bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:border-zinc-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 text-center text-base mt-4 cursor-pointer disabled:cursor-not-allowed"
    >
      {status === 'processing' ? 'Submitting...' : 'Submit application'}
    </button>
  </form>
</main>
  )
}
