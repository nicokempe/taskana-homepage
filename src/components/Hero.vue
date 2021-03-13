<template>
  <div id="hero" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
    <div class="" style="height: 70vh">
      <Header class="sticky top-0" />
      <div class="h-5/6 text-gray-800 dark:text-gray-200 flex flex-col md:flex-row items-center space-between">
        <div class="hero__title w-1/2 text-center xl:text-left text-gray-900 dark:text-gray-100">
          <h1 class="content-title mb-4">
            {{ $t('hero.title') }}
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl leading-none font-bold tracking-tight ">
            {{ $t('hero.subtitle') }}
          </h2>
          <div class="mt-12 flex flex-row">
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-primary-500 bg-none rounded-lg transition duration-150 ease-in-out cursor-pointer shadow-xs hover:bg-primary-700"
              href="#solution"
            >
              Learn more
            </a>
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-secondary-600 bg-none rounded-lg transition duration-150 ease-in-out cursor-pointer shadow-xs hover:bg-secondary-700"
              href="#contact"
            >
              Work with us
            </a>
          </div>
        </div>
        <div class="hero__frame w-1/2 h-5/6">
          <div class="bg-blue-900 rounded-3xl h-full grid place-items-center text-white text-3xl" style="width: 1000px">
            PLACEHOLDER
          </div>
        </div>
      </div>
      <div class="mt-8 flex items-center justify-center hidden">
        <a class="focus:outline-none" href="#solution">
          <svg
            class="w-24 h-24 animate-pulse text-gray-400 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="hero__background absolute w-screen h-96" style="top: 220px"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './header/Header.vue'
import Logo from './header/Logo.vue'

@Options({
  components: { Header, Logo }
})
export default class Hero extends Vue {
  created() {
    setTimeout(() => {
      this.$i18n.locale = 'de'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.light .hero__background {
  background-image: linear-gradient(150deg, #a5dfd6, #afe4f8 85.77%);
  filter: blur(100px);
}
.dark .hero__background {
  background-image: linear-gradient(150deg, #0b4138, #144558 95.77%);
  filter: blur(100px);
}
</style>
