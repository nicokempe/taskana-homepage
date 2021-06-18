<template>
  <div class="relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div class="title flex flex-row items-center space-x-4">
          <span
            class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-br from-secondary-600 to-primary-600"
          >
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          </span>
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            {{ title }}
          </h2>
        </div>

        <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ description }}
        </p>
      </div>
      <div class="my-8 md:my-0 px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <img class="w-full h-full object-contain rounded" :src="imgUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'

class Props {
  title = prop({ default: '' })
  description = prop({ default: '' })
  imgUrl = prop({ default: '' })
  comment = prop({ default: '' })
  commentAuthor = prop({ default: '' })
}
export default class FeatureAlt extends Vue.with(Props) {}
</script>

<style></style>
