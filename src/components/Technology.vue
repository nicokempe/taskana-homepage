<template>
  <div id="technology" class="content-wrapper pt-36 ">
    <p class="content-title">
      Technology
      <Link path="#technology" />
    </p>
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
