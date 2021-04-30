<template>
  <div id="solution" class="content-wrapper pt-36">
    <p class="content-title">
      {{ $t('solution.headline') }}
      <Link path="#solution" />
    </p>

    <div class="relative pt-16 overflow-hidden">
      <Feature :title="$t('solution.title1')" :description="$t('solution.description1')" />
      <FeatureAlt :title="$t('solution.title2')" :description="$t('solution.description2')" />
      <Feature :title="$t('solution.title3')" :description="$t('solution.description3')" />
      <FeatureAlt :title="$t('solution.title4')" :description="$t('solution.description4')" />
    </div>
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

<style></style>
