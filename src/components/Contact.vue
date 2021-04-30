<template>
  <div
    id="contact"
    class="content-wrapper py-16 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900 dark:bg-gray-800 dark:bg-opacity-50 "
  >
    <p class="content-title--alt">
      Contact Us
      <Link path="#contact" />
    </p>
    <div class="mt-8 p-4 flex justify-center">
      <div
        class="contact-info w-[90%] w-full sm:min-w-[400px] md:w-1/2 h-96 sm:h-64 bg-white rounded-md flex flex-col sm:flex-row"
      >
        <div class="avatar relative pt-2 sm:pt-0 h-48 w-48 sm:h-auto sm:w-64 mx-auto sm:mx-0">
          <img
            class="absolute w-full h-full rounded-full sm:rounded-none sm:rounded-l-md object-cover"
            src="holger.jpeg"
            alt=""
          />
        </div>
        <div class="info text-center sm:text-left p-4 my-auto">
          <p class="name mb-1 text-lg font-bold uppercase tracking-tight">Holger Hagen</p>
          <p class="position text-gray-600">Head of Practice Area Business Process Management</p>
          <div class="h-1 mt-4 mb-2 mx-auto sm:mx-0 bg-gradient-to-r from-primary-600 to-secondary-600 w-2/3"></div>
          <div class="text-gray-700">
            <svg
              class="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
            <a href="mailto:holger.hagen@novatec-gmbh.de" class="select-all">holger.hagen@novatec-gmbh.de</a>
          </div>
          <div class="text-gray-700">
            <svg
              class="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <a class="select-all hidden sm:inline-block">+49 711 22040-827</a>
            <a href="callto:+4971122040-827" class="select-all inline-block sm:hidden">+49 711 22040-827</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'

@Options({
  components: { Link }
})
export default class Solution extends Vue {}
</script>

<style></style>
