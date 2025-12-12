// lib/queries.ts
import { useQuery } from '@tanstack/vue-query'
import type { MyTeamRoot } from '~/types/MyTeam'

export const useEntryQuery = (entryId: Ref<string>) => {
  return useQuery({
    queryKey: ['entry'], // no reactive dependency
    enabled: false, // DO NOT auto-run
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      if (!entryId.value) throw new Error('Missing entryId')

      return await $fetch<MyTeamRoot>('/api/optimize-team', {
        method: 'GET',
        query: { entryId: entryId.value },
      })
    },
  })
}
