<template>
  <div id="work-with-us" class="content-wrapper pt-16">
    <p class="content-title">
      {{ $t('workwithus.headline') }}
      <Link path="#work-with-us" />
    </p>

    <div
      class="px-6 pt-12 text-gray-600 dark:text-gray-300"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      {{ $t('workwithus.description') }}
      <div class="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
        <div class="feature-card">
          {{ $t('workwithus.feature1') }}
        </div>
        <div class="feature-card">
          {{ $t('workwithus.feature2') }}
        </div>
        <div class="feature-card">
          {{ $t('workwithus.feature3') }}
        </div>
        <div class="feature-card">
          {{ $t('workwithus.feature4') }}
        </div>
        <div class="feature-card">
          {{ $t('workwithus.feature5') }}
        </div>
        <div class="feature-card">
          {{ $t('workwithus.feature6') }}
        </div>
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
export default class WorkWithUs extends Vue {}
</script>

<style lang="scss" scoped>
.feature-card {
  @apply rounded p-4 bg-primary-100 dark:bg-white border-l-[6px] border-primary-500 text-left flex items-center text-sm md:text-base;
}
</style>
