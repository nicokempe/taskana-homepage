<template>
  <div id="solution" class="content-wrapper py-16">
    <p class="content-title">
      {{ $t('solution.headline') }}
      <Link path="#solution" />
    </p>

    <div class="relative pt-4 lg:pt-16 overflow-hidden">
      <div
        class="solution__desc text-gray-500 dark:text-gray-300 px-4 lg:px-8 my-8 md:my-0 text-base md:text-lg space-y-4"
      >
        <p>{{ $t('solution.description') }}</p>
        <p>{{ $t('solution.description-2') }}</p>
      </div>
      <Feature :title="$t('solution.title1')" :description="$t('solution.description1')" imgUrl="postkorb.svg" />
      <FeatureAlt
        :title="$t('solution.title2')"
        :description="$t('solution.description2')"
        imgUrl="routing.png"
        altImgUrl="routing.webp"
      />
      <Feature
        :title="$t('solution.title3')"
        :description="$t('solution.description3')"
        imgUrl="prio.png"
        altImgUrl="prio.webp"
      />
      <FeatureAlt
        :title="$t('solution.title4')"
        :description="$t('solution.description4')"
        imgUrl="monitor.png"
        altImgUrl="monitor.webp"
      />
    </div>
    <div class="solution__background-transition absolute h-16 w-full top-0"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'
import Feature from '@/core/Feature.vue'
import FeatureAlt from '@/core/FeatureAlt.vue'

@Options({
  components: { Link, Feature, FeatureAlt }
})
export default class Solution extends Vue {}
</script>

<style lang="scss" scoped>
.light .solution__background-transition {
  background-image: linear-gradient(180deg, #f7fafc, white 85.77%);
}
.dark .solution__background-transition {
  background-image: linear-gradient(180deg, #111827, #1f2937 85.77%);
}
</style>
