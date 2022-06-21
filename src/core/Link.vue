<template>
  <svg
    class="w-6 h-6 inline cursor-pointer"
    :class="{
      'text-secondary-700 dark:text-secondary-600 hover:text-secondary-900 dark:hover:text-secondary-400': !alt,
      'text-white dark:text-secondary-400 hover:text-secondary-300 dark:hover:text-secondary-200': alt
    }"
    @click="copyUrl(path)"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'
import { copyUrl } from '@/utils/copyUrl'

class Props {
  path = prop({ default: '' })
  alt = prop({ default: false })
}
export default class Link extends Vue.with(Props) {
  copyUrl = copyUrl
}
</script>

<style></style>
