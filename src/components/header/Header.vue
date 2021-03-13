<template>
  <header class="text-gray-600 dark:text-gray-300">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Logo />
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 link" href="#solution">Solutions</a>
        <a class="mr-5 link" href="#technology">Technology</a>
        <a class="mr-5 link" href="#customers">Our customers</a>
        <a class="mr-5 link" href="#contact">Contact us</a>
      </nav>

      <a class="group link">
        Documentation
        <svg
          class="w-4 h-4 ml-1 inline group-hover:w-6 group-hover:h-6 transition-all duration-150 ease-out"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Logo from './Logo.vue'

@Options({ components: { Logo } })
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
