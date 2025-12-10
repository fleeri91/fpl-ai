import type { PicksRoot } from '@/types/fpl/Picks'
import { fetchPicks } from '@/lib/api'

export default defineEventHandler(async (event): Promise<PicksRoot> => {
  const entryIdParam = event.context.params?.entryId
  const eventNumberParam = event.context.params?.eventNumber

  if (!entryIdParam || !eventNumberParam) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing entryId or eventNumber',
    })
  }

  const entryId = parseInt(entryIdParam, 10)
  const eventNumber = parseInt(eventNumberParam, 10)

  if (isNaN(entryId) || isNaN(eventNumber)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid entryId or eventNumber',
    })
  }

  try {
    return await fetchPicks(entryId, eventNumber)
  } catch (err) {
    console.error('Error fetching picks:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch picks',
    })
  }
})
