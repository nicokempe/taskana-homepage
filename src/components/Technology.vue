<template>
  <div id="technology" class="content-wrapper pt-36 ">
    <p class="content-title">
      Technology
      <Link path="#technology" />
    </p>
    <div class="bg-white dark:bg-gray-800 dark:bg-opacity-50 h-screen">atest</div>
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
