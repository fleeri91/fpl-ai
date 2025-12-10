import type { BootstrapStaticRoot } from '@/types/fpl/BootstrapStatic'
import { fetchBootstrapStatic } from '@/lib/api'

export default defineEventHandler(async (): Promise<BootstrapStaticRoot> => {
  try {
    const res = await fetchBootstrapStatic()
    return res
  } catch (err) {
    console.error('Error fetching FPL bootstrap static data:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch FPL bootstrap static data',
    })
  }
})
