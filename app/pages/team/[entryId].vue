<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useEntryQuery } from '@/lib/queries'

const route = useRoute()
const entryId = ref(route.params.entryId as string)

// Fetch team data
const query = useEntryQuery(entryId)
</script>

<template>
  <div class="min-h-screen bg-gray-900 p-8">
    <div v-if="query.isLoading.value" class="text-center text-white">
      Loading team...
    </div>

    <div v-else-if="query.error.value" class="text-center text-red-400">
      {{ query.error.value.message }}
    </div>

    <div v-else-if="query.data.value" class="text-white">
      <h1 class="mb-6 text-3xl font-bold">Your FPL Team</h1>
      <p class="mb-4">Gameweek: {{ query.data.value.gameweek }}</p>

      <div class="space-y-2">
        <div
          v-for="pick in query.data.value.picks"
          :key="pick.element"
          class="rounded bg-gray-800 p-3"
        >
          {{ `${pick.player.first_name} ${pick.player.second_name}` }}
        </div>
      </div>
    </div>
  </div>
</template>
