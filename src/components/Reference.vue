<template>
  <div id="reference" class="content-wrapper pt-36">
    <p class="content-title">
      References
      <Link path="#reference" />
    </p>
    <div class="card h-64 w-64 grid place-items-center">
      test
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'

@Options({
  components: { Link }
})
export default class Reference extends Vue {}
</script>

<style lang="scss">
.card {
  --angle: 0deg;
  border: 5px solid;
  border-image: conic-gradient(from var(--angle), #1faf98, #178372, #36bcee, #298db3, #1faf98) 1;
}
.card:hover {
  animation: 3s rotate linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
</style>
