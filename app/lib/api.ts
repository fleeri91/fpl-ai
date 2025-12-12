// api.ts
import axios from 'axios'
import type { FixtureRoot } from '@/types/fpl/Fixture'
import type { BootstrapStaticRoot } from '@/types/fpl/BootstrapStatic'
import type { EntryRoot } from '@/types/fpl/Entry'
import type { PicksRoot } from '~/types/fpl/Picks'

export const createFplFetcher = () => {
  const config = useRuntimeConfig()

  const fplFetcher = axios.create({
    baseURL: config.public.fplBaseUrl,
    timeout: 10000,
  })

  // Add global response delay for UX
  fplFetcher.interceptors.response.use(
    async (response) => {
      // Artificial delay (e.g., 0.8s)
      await new Promise((resolve) => setTimeout(resolve, 800))
      return response
    },
    (error) => {
      // Pass errors through immediately
      return Promise.reject(error)
    }
  )

  return fplFetcher
}
export const fetchBootstrapStatic = async (): Promise<BootstrapStaticRoot> => {
  const fplFetcher = createFplFetcher()
  const res = await fplFetcher.get<BootstrapStaticRoot>('bootstrap-static/')
  return res.data
}

export const fetchFixtures = async (): Promise<FixtureRoot> => {
  const fplFetcher = createFplFetcher()
  const res = await fplFetcher.get<FixtureRoot>('fixtures/')
  return res.data
}

export const fetchEntry = async (id: number): Promise<EntryRoot> => {
  const fplFetcher = createFplFetcher()
  const res = await fplFetcher.get<EntryRoot>(`entry/${id}/`)
  return res.data
}

export const fetchPicks = async (
  id: number,
  eventNumber: number
): Promise<PicksRoot> => {
  const fplFetcher = createFplFetcher()
  const res = await fplFetcher.get<PicksRoot>(
    `entry/${id}/event/${eventNumber}/picks/`
  )
  return res.data
}
