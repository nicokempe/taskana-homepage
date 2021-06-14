<template>
  <div id="hero" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16">
    <div class="h-[85vh]">
      <div
        class="h-5/6 pt-10 text-gray-800 dark:text-gray-200 flex flex-col lg:flex-row justify-center items-center space-between"
      >
        <div class="hero__title w-full md:w-1/2 md:mt-0 text-center lg:text-left text-gray-900 dark:text-gray-100">
          <h1 class="content-title mb-4">
            <img class="h-10 w-10 object-scale-down inline" src="logo.svg" />
            {{ $t('hero.title') }}
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl leading-none font-bold tracking-tight ">
            {{ $t('hero.subtitle') }}
          </h2>
          <div class="mt-12 flex flex-row justify-center lg:justify-start">
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-primary-500 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 bg-none rounded-lg transition duration-75 ease-in-out cursor-pointer shadow-xs"
              href="#solution"
            >
              {{ $t('hero.actionButtonPrimary') }}
            </a>
            <a
              class="flex justify-center items-center py-3 px-4 my-0 mr-4 ml-0 text-base font-bold leading-6 text-center text-white normal-case bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-800 bg-none rounded-lg transition duration-75 ease-in-out cursor-pointer shadow-xs"
              href="#work-with-us"
            >
              {{ $t('hero.actionButtonAlt') }}
            </a>
          </div>
        </div>
        <div class="hero__frame hidden lg:block w-full lg:w-1/2 h-full lg:h-5/6 mt-20 md:mt-0 relative">
          <a href="https://taskana.mybluemix.net/taskana" target="_blank">
            <div class="md:px-0 h-full md:w-full rounded-lg">
              <img
                class="absolute md:h-full object-cover max-w-full md:max-w-max rounded-lg shadow-2xl"
                src="preview.png"
                alt="TASKANA preview"
                title="TASKANA preview"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="down-arrow mt-24 md:mt-16 flex items-center justify-center">
        <a class="focus:outline-none group" href="#solution">
          <svg
            class="w-12 md:w-24 h-12 md:h-24 group-hover:cursor-pointer animate-pulse text-gray-400 dark:text-gray-600"
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
  <div class="hero__background absolute h-96 top-[150px] md:top-[260px] w-[95vw]"></div>
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
