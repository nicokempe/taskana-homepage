<template>
  <div class="inline-flex">
    <button
      class="w-12 px-2 font-medium border-r border-gray-600 dark:border-gray-400 rounded-l-md focus:outline-none"
      :class="{
        'font-bold text-gray-900 dark:text-white': lang === 'en',
        'text-gray-700 dark:text-gray-300': lang !== 'en'
      }"
      @click="setLocale('en')"
    >
      EN
    </button>
    <button
      class="w-12 px-2 font-medium rounded-r-md focus:outline-none"
      :class="{
        'font-bold text-gray-900 dark:text-white': lang === 'de',
        'text-gray-700 dark:text-gray-300': lang !== 'de'
      }"
      @click="setLocale('de')"
    >
      DE
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const lang = computed(() => locale)
const setLocale = (language: string) => {
  locale.value = language
}
// TODO: Might need to use astro-i18next instead. @see: https://github.com/yassinedoghri/astro-i18next#readme
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
