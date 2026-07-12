import {Programme, StrapiResponse, Application} from '@/types'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL

if(!STRAPI_URL){
  throw new Error('NEXT_PUBLIC_STRAPI_URL not exist')
}

async function fetchStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T>{
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`,{
    headers:{
      'Content-Type': 'application/json',
    },
    ...options,
  })

if (!res.ok) {
  const errorBody = await res.json()
  console.error('Strapi error:', JSON.stringify(errorBody, null, 2))
  throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`)
}

  return res.json()
}

export async function getProgrammes(): Promise<Programme[]>{
  const data = await fetchStrapi<StrapiResponse<Programme[]>>('programmes')
  return data.data
}

export async function getProgrammeBySlug(
  slug: string,
): Promise<Programme | null> {
  const data = await fetchStrapi<StrapiResponse<Programme[]>>(
    `programmes?filters[slug][$eq]=${slug}`
  )
  return data.data[0] ?? null
}

export async function submitApplication(
  data: Application
): Promise<void>{
  await fetchStrapi('applications', {
    method: 'POST',
    body: JSON.stringify({data})
  })
}