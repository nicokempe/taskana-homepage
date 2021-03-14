<template>
  <div id="solution" class="content-wrapper min-h-screen pt-36">
    <p class="content-title group">
      Learn more about our solution
      <Link path="#solution" />
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
