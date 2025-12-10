import type { EntryRoot } from '@/types/fpl/Entry'
import { fetchEntry } from '@/lib/api'

export default defineEventHandler(async (event): Promise<EntryRoot> => {
  try {
    const entryIdParam = event.context.params?.entryId
    if (!entryIdParam) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing entry id',
      })
    }

    console.log(entryIdParam)

    const entryId = parseInt(entryIdParam, 10)
    if (isNaN(entryId)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid entry id',
      })
    }

    const res = await fetchEntry(entryId)
    return res
  } catch (err) {
    console.error('Error fetching entry by id:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch entry by id',
    })
  }
})
