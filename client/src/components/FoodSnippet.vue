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
    else if (randomNum.value == 1) {
      await foodSnippetsService.getRandomFact()
    }
  }
  catch (error) {
    Pop.error(error, 'Could not get food fact or joke');
    logger.error('Could not get food fact or joke', error)
  }
}

</script>


<template>
  <div v-if="snippet" class="bg-primary text-light fw-bold py-3 mb-1 d-flex flex-column justify-content-center">
    <h3 class="fs-2 fw-bold text-shadow text-center">{{ randomNum == 0 ? 'Fun Food Fact' : 'Fun Food Joke' }}</h3>
    <p class="mb-0 fs-3 text-shadow">
      {{ snippet.text }}
    </p>
  </div>
</template>


<style lang="scss" scoped>
p {
  margin: auto;
  max-width: 80%;
}
</style>