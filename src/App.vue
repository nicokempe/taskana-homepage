<template>
  <div class="min-h-screen overflow-hidden bg-white dark:bg-gray-900">
    <Hero />
    <div class="min-h-screen"></div>
    <div class="min-h-screen"></div>
  </div>
  <div class="options fixed top-0 right-0 mt-6 mr-4 hidden xl:flex items-center ">
    <LanguageSwitcher class="mr-2" />
    <ThemeSwitcher class="mr-2" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from './components/Hero.vue'
import LanguageSwitcher from './components/header/LanguageSwitcher.vue'
import ThemeSwitcher from './components/header/ThemeSwitcher.vue'

@Options({
  components: {
    Hero,
    LanguageSwitcher,
    ThemeSwitcher
  }
})
export default class App extends Vue {}
</script>

<style></style>
