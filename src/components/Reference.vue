<template>
  <div id="reference" class="content-wrapper py-16">
    <p class="content-title">
      Partners
      <Link path="#reference" />
    </p>
    <div class="px-6">
      <div class="pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <a class="card" href="https://www.soka-bau.de/" target="_blank">
          <picture>
            <source srcset="sokabau.webp" type="image/webp" />
            <img src="sokabau.png" alt="www.soka-bau.de" />
          </picture>
        </a>
        <a class="card p-2 md:p-8" href="https://www.generali.de/" target="_blank">
          <div class="angular-icon relative w-full h-full">
            <picture>
              <source srcset="generali.webp" type="image/webp" />
              <img class="absolute top-0 h-full w-full object-contain" src="generali.png" alt="www.generali.de" />
            </picture>
          </div>
        </a>

        <a class="card" href="https://www.debeka.de/" target="_blank">
          <picture>
            <source srcset="debeka.webp" type="image/webp" />
            <img src="debeka.png" alt="www.debeka.de" />
          </picture>
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

<style lang="scss" scoped>
.card {
  @apply relative h-32 md:h-64 grid place-items-center w-full bg-primary-100 hover:bg-secondary-100 hover:border-secondary-500 rounded border-l-[6px] border-primary-500;
  --angle: 0deg;

  > img {
    @apply absolute w-[80%] h-[80%] object-scale-down;
  }
}
.tcard:hover {
  animation: 3s rotate linear infinite;
  border: 4px solid;
  border-image: conic-gradient(from var(--angle), #1faf98, #178372, #36bcee, #298db3, #1faf98) 1;
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
