<!-- pages/index.vue -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { useEntryQuery } from '@/lib/queries'

const entryId = ref('')
const inputError = ref('')

const query = useEntryQuery(entryId)

watchEffect(() => {
  if (query.error.value && query.error.value instanceof Error) {
    inputError.value = query.error.value.message
  }
})

const validateEntry = async () => {
  inputError.value = ''

  if (!entryId.value) {
    inputError.value = 'Please enter an ID'
    return
  }

  const result = await query.refetch()

  if (result.error) {
    inputError.value = result.error.message || 'Invalid entry ID'
    return
  }

  // Navigate to team page
  await navigateTo(`/team/${entryId.value}`)
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900">
    <div class="w-80">
      <h1
        class="mb-4 text-center text-2xl font-extrabold text-gray-50 select-none"
      >
        Enter your entry id
      </h1>

      <Input
        v-model="entryId"
        class="border-gray-700 bg-gray-800 text-white placeholder-gray-400"
        :class="{ 'border-red-500 ring-red-500': inputError }"
        placeholder="Entry id"
        @keyup.enter="validateEntry"
      />

      <p v-if="inputError" class="mt-2 text-sm text-red-400">
        {{ inputError }}
      </p>

      <Button
        @click="validateEntry"
        :disabled="query.isLoading.value"
        class="mt-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {{ query.isLoading.value ? 'Checking...' : 'Submit' }}
      </Button>
    </div>
  </div>
</template>
