<template>
  <div id="reference" class="content-wrapper py-16">
    <p class="content-title">
      References
      <Link path="#reference" />
    </p>
    <div class="p-4">
      <div class="pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <a class="card" href="https://www.soka-bau.de/" target="_blank">
          <img src="sokabau.png" alt="" />
        </a>
        <a class="card" href="https://www.generali.de/" target="_blank">
          <img src="generali.png" alt="" />
        </a>
        <a class="card" href="https://www.debeka.de/" target="_blank">
          <img src="debeka.png" alt="" />
        </a>
      </div>
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
  @apply relative h-64 grid place-items-center w-full bg-gray-100 hover:bg-primary-100;
  --angle: 0deg;
  border: 4px solid;
  border-image: conic-gradient(from var(--angle), #1faf98, #178372, #36bcee, #298db3, #1faf98) 1;
  > img {
    @apply absolute w-[80%] h-[80%] object-scale-down;
  }
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
