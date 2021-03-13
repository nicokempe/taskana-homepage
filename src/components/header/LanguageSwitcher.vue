<template>
  <div class="inline-flex">
    <button
      class="w-12 border-r border-gray-600 dark:border-gray-400 font-medium px-2 rounded-l-md focus:outline-none"
      :class="{
        'font-bold text-gray-900 dark:text-white': lang === 'en',
        'text-gray-700 dark:text-gray-300': lang !== 'en'
      }"
      @click="$i18n.locale = 'en'"
    >
      EN
    </button>
    <button
      class="w-12 font-medium px-2 rounded-r-md focus:outline-none"
      :class="{
        'font-bold text-gray-900 dark:text-white': lang === 'de',
        'text-gray-700 dark:text-gray-300': lang !== 'de'
      }"
      @click="$i18n.locale = 'de'"
    >
      DE
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class LanguageSwitcher extends Vue {
  get lang() {
    return this.$i18n.locale
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
