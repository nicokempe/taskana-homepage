<template>
  <div id="hero" class="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
    <div class="h-screen">
      <Header class="sticky top-0" />
      <div
        class="h-1/2 text-gray-800 dark:text-gray-200 grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-8 place-items-center"
      >
        <div class="title text-center xl:text-left text-gray-900 dark:text-gray-100">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-wider mb-4">
            <Logo />
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl leading-none font-bold tracking-tight ">
            {{ $t('hero.subtitle') }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './header/Header.vue'
import Logo from './header/Logo.vue'

@Options({
  components: { Header, Logo }
})
export default class Hero extends Vue {
  created() {
    setTimeout(() => {
      this.$i18n.locale = 'de'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
