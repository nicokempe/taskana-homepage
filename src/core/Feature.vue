<template>
  <div class="relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div class="title flex flex-row items-center space-x-4">
          <span
            class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-br from-secondary-600 to-primary-600"
          >
            <svg
              class="h-6 w-6 inline-block text-white"
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
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

        <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700" :class="{ hidden: comment.length === 0 }">
          <blockquote>
            <p class="text-base text-gray-500 dark:text-gray-400">
              {{ comment }}
            </p>
            <p class="mt-2 text-base font-medium text-gray-700 dark:text-gray-400">
              {{ commentAuthor }}
            </p>
          </blockquote>
        </div>
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
export default class Feature extends Vue.with(Props) {}
</script>

<style></style>
