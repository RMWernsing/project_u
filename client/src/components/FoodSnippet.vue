<script setup>
import { AppState } from '@/AppState.js';
import { foodSnippetsService } from '@/services/FoodSnippetsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const randomNum = computed(() => Math.round(Math.random()))
const snippet = computed(() => AppState.snippet)

onMounted(() => {
  getFoodSnippet()
})

async function getFoodSnippet() {
  try {
    if (randomNum.value == 0) {
      await foodSnippetsService.getRandomJoke()
      return
    }
    await foodSnippetsService.getRandomFact()
  }
  catch (error) {
    Pop.error(error, 'Could not get food fact or joke');
    logger.error('Could not get food fact or joke', error)
  }
}

</script>


<template>
  <div v-if="snippet" class="bg-primary text-light fw-bold text-center py-3 mb-1">
    <h3 class="fs-2 fw-bold text-shadow">{{ randomNum == 0 ? 'Fun Food Joke' : 'Fun Food Fact' }}</h3>
    <p class="mb-0 fs-3 text-shadow">
      {{ snippet.text }}
    </p>
  </div>
</template>


<style lang="scss" scoped></style>