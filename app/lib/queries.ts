// lib/queries.ts
import { useQuery } from '@tanstack/vue-query'

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ['example'],
    //queryFn: () => exampleFetcher(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
