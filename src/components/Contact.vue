<template>
  <div id="contact" class="content-wrapper pt-36 ">
    <p class="content-title">
      Contact Us
      <Link path="#contact" />
    </p>
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
