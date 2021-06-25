<template>
  <div id="reference" class="content-wrapper py-16">
    <p class="content-title">
      Partners
      <Link path="#reference" />
    </p>
    <div class="px-6">
      <div class="pt-16 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <div class="relative w-full h-full">
          <a class="card p-2 md:p-8" href="https://www.soka-bau.de/" target="_blank">
            <picture>
              <source srcset="sokabau.webp" type="image/webp" />
              <img class="mx-auto h-[90%] w-[90%] object-contain" src="sokabau.png" alt="www.soka-bau.de" />
            </picture>
          </a>
        </div>
        <div class="relative w-full h-full">
          <a class="card" href="https://www.generali.de/" target="_blank">
            <picture>
              <source srcset="generali.webp" type="image/webp" />
              <img class="mx-auto h-2/5 w-2/5 object-contain" src="generali.png" alt="www.generali.de" />
            </picture>
          </a>
        </div>

        <a class="card p-4" href="https://www.debeka.de/" target="_blank">
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
  @apply relative h-36 md:h-64 grid place-items-center w-full bg-primary-100 hover:bg-secondary-100 hover:border-secondary-500 rounded border-l-[6px] border-primary-500;
  --angle: 0deg;

  > img {
    @apply absolute w-[80%] h-[80%] object-scale-down;
  }
}
</style>
