import type { FixtureRoot } from '@/types/fpl/Fixture'
import { fetchFixtures } from '@/lib/api'

export default defineEventHandler(async (): Promise<FixtureRoot> => {
  try {
    const res = await fetchFixtures()
    return res
  } catch (err) {
    console.error('Error fetching FPL fixtures:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch FPL fixtures',
    })
  }
})
