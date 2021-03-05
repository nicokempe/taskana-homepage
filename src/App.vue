<template>
  <Hero />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Hero from './components/Hero.vue'

@Options({
  components: {
    Hero
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
