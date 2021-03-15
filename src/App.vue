<template>
  <div class="min-h-screen max-w-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900">
    <Hero />
    <Solution />
    <Reference />
    <Contact />
    <Footer />
  </div>
  <!-- 
  <div class="options fixed bottom-0 right-0 mb-6 mr-4 hidden xl:flex items-center ">
    <LanguageSwitcher class="mr-2" />
    <ThemeSwitcher class="mr-2" />
  </div>
 -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from './components/Hero.vue'
import Solution from './components/Solution.vue'
import Reference from './components/Reference.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import LanguageSwitcher from './components/header/LanguageSwitcher.vue'
import ThemeSwitcher from './components/header/ThemeSwitcher.vue'

@Options({
  components: {
    Hero,
    Solution,
    Reference,
    Contact,
    Footer,
    LanguageSwitcher,
    ThemeSwitcher
  }
})
export default class App extends Vue {
  isElementOutViewport(el: HTMLElement) {
    var rect = el.getBoundingClientRect()
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight
  }
}
</script>

<style></style>
