<template>
  <header class="text-gray-600 dark:text-gray-300">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b border-gray-300 dark:border-gray-600"
    >
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Logo />
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">Solutions</a>
        <a class="mr-5 hover:text-gray-900">Technology</a>
        <a class="mr-5 hover:text-gray-900">Our customers</a>
        <a class="mr-5 hover:text-gray-900">Contact us</a>
      </nav>

      <LanguageSwitcher class="mr-2" />
      <ThemeSwitcher class="mr-2" />
      <button
        class="inline-flex items-center text-sm py-1.5 px-3 bg-gradient-to-r from-primary-600 to-secondary-600 border-0 focus:outline-none hover:from-primary-600 hover:to-secondary-700 rounded-full text-white mt-4 md:mt-0"
      >
        Documentation
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Logo from './Logo.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

@Options({ components: { Logo, LanguageSwitcher, ThemeSwitcher } })
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
