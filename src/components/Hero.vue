<template>
  <div id="hero" class="relative z-10 max-w-screen-lg pb-16 mx-auto xl:max-w-screen-xl">
    <div class="h-[85vh]" data-aos="fade-up">
      <div
        class="flex flex-col items-center justify-center pt-10 text-gray-800 h-5/6 dark:text-gray-200 lg:flex-row space-between"
      >
        <div class="w-full text-center text-gray-900 hero__title md:w-1/2 md:mt-0 lg:text-left dark:text-gray-100">
          <h1 class="mb-4 content-title">
            <img class="inline object-scale-down w-16 h-16" src="logo.svg" />
            {{ $t('hero.title') }}
          </h1>
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-3xl lg:text-4xl ">
            {{ $t('hero.subtitle') }}
          </h2>
          <div class="flex flex-row flex-wrap items-center justify-center px-4 mt-12 lg:justify-start">
            <a
              class="flex items-center justify-center px-4 py-3 mx-2 my-2 text-base font-bold leading-6 text-center text-white normal-case transition duration-75 ease-in-out rounded-lg shadow-xs cursor-pointer bg-primary-500 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 bg-none"
              href="#solution"
            >
              {{ $t('hero.actionButtonPrimary') }}
            </a>
            <a
              class="flex items-center justify-center px-4 py-3 mx-2 my-2 text-base font-bold leading-6 text-center text-white normal-case transition duration-75 ease-in-out rounded-lg shadow-xs cursor-pointer bg-secondary-600 hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-800 bg-none"
              href="#work-with-us"
            >
              {{ $t('hero.actionButtonAlt') }}
            </a>
          </div>
        </div>
        <div class="relative hidden w-full h-full mt-20 hero__frame lg:block lg:w-1/2 lg:h-5/6 md:mt-0">
          <a href="https://taskana.mybluemix.net/taskana" target="_blank">
            <div class="h-full rounded-lg md:px-0 md:w-full">
              <picture>
                <source srcset="preview.webp" type="image/webp" />
                <img
                  class="absolute object-cover max-w-full rounded-lg shadow-2xl md:h-full md:max-w-max"
                  src="preview.png"
                  alt="TASKANA preview"
                  title="TASKANA preview"
                />
              </picture>
            </div>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center mt-24 down-arrow md:mt-16">
        <a class="focus:outline-none group" href="#solution">
          <svg
            class="w-12 h-12 text-gray-400 md:w-24 md:h-24 group-hover:cursor-pointer animate-pulse dark:text-gray-600"
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
