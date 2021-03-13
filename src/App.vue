<template>
  <div class="min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
    <Hero />
    <Solution />
    <Contact />
    <div class="min-h-screen" id="test1"></div>
  </div>
  <div class="options fixed bottom-0 right-0 mb-6 mr-4 hidden xl:flex items-center ">
    <LanguageSwitcher class="mr-2" />
    <ThemeSwitcher class="mr-2" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from './components/Hero.vue'
import Solution from './components/Solution.vue'
import Contact from './components/Contact.vue'
import LanguageSwitcher from './components/header/LanguageSwitcher.vue'
import ThemeSwitcher from './components/header/ThemeSwitcher.vue'

@Options({
  components: {
    Hero,
    Solution,
    Contact,
    LanguageSwitcher,
    ThemeSwitcher
  }
})
export default class App extends Vue {}
</script>

<style></style>
