<template>
  <div
    id="technology"
    class="content-wrapper pt-16 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900 dark:bg-gray-800 dark:bg-opacity-50 "
  >
    <p class="px-4 sm:px-6 text-3xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-white tracking-tight">
      Technology
      <Link path="#technology" alt="true" />
    </p>
    <div class="h-[80vh] px-4 sm:px-6 ">
      atest
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'

@Options({
  components: { Link }
})
export default class Technology extends Vue {}
</script>

<style></style>
