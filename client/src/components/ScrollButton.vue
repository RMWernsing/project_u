<script setup>
import { AppState } from '@/AppState.js'
import { computed } from 'vue'

const body = document.body

const scrollButton = document.getElementById('scroll')
const foods = computed(() => AppState.searchedFoods)



// function displayButton() {
//   body.scrollTop > 20 ? scrollButton.classList.remove('d-none') : scrollButton.classList.add('d-none')
// }

</script>


<template>
  <div v-if="foods" class="container sticky-top">
    <span id="scroll" class="sticky-top mdi mdi-arrow-up fs-2 bg-light border-grey border-3 text-info"></span>
  </div>
</template>


<style lang="scss" scoped>
span {
  position: absolute;
  top: 80px;
  right: -80px;
}
</style>