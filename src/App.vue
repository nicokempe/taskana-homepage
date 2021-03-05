<template>
  <div
    class="min-h-screen space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden bg-white dark:bg-gray-900"
  >
    <Hero />
    <div class="min-h-screen"></div>
    <div class="min-h-screen" id="test"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from './components/Hero.vue'

@Options({
  components: {
    Hero
  }
})
export default class App extends Vue {}
</script>

<style></style>
