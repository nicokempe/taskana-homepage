<template>
  <div id="work-with-us" class="content-wrapper py-16">
    <p class="content-title">
      {{ $t('workwithus.headline') }}
      <Link path="#work-with-us" />
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'

@Options({
  components: { Link }
})
export default class WorkWithUs extends Vue {}
</script>

<style></style>
