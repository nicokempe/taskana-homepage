<template>
  <div id="hero" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
    <div class="h-[85vh]">
      <div class="h-5/6 pt-10 text-gray-800 dark:text-gray-200 flex flex-col md:flex-row items-center space-between">
        <div
          class="hero__title w-full md:w-1/2 mt-20 md:mt-0 text-center xl:text-left text-gray-900 dark:text-gray-100"
        >
          <h1 class="content-title mb-4">
            {{ $t('hero.title') }}
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl leading-none font-bold tracking-tight ">
            {{ $t('hero.subtitle') }}
          </h2>
          <div class="mt-12 flex flex-row justify-center md:justify-start">
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-primary-500 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 bg-none rounded-lg transition duration-75 ease-in-out cursor-pointer shadow-xs"
              href="#solution"
            >
              {{ $t('hero.actionButtonPrimary') }}
            </a>
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-800 bg-none rounded-lg transition duration-75 ease-in-out cursor-pointer shadow-xs"
              href="#contact"
            >
              {{ $t('hero.actionButtonAlt') }}
            </a>
          </div>
        </div>
        <div class="hero__frame w-full md:w-1/2 h-full md:h-5/6 mt-20 md:mt-0 relative">
          <div class="md:px-0 h-full md:w-full rounded-lg">
            <img
              class="absolute md:h-full object-cover max-w-full md:max-w-max rounded-lg shadow-2xl"
              src="preview.png"
              alt="TASKANA preview"
              title="TASKANA preview"
            />
          </div>
          <!-- 
          <div
            class="absolute top-0 z-0 bg-blue-900 rounded-3xl h-full grid place-items-center text-white text-3xl"
            style="width: 1000px;   filter: blur(50px);
"
          >
            PLACEHOLDER
          </div>
           -->
        </div>
      </div>
      <div class="hidden down-arrow mt-8 flex items-center justify-center">
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
  <div class="hero__background absolute h-96 top-[150px] md:top-[220px] w-[95vw]"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './header/Header.vue'
import Logo from './header/Logo.vue'

@Options({
  components: { Header, Logo }
})
export default class Hero extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.light .hero__background {
  background-image: linear-gradient(150deg, #a5dfd6, #afe4f8 85.77%);
  filter: blur(100px);
}
.dark .hero__background {
  background-image: linear-gradient(150deg, #0b3341, #144558 95.77%);
  filter: blur(100px);
}
</style>
