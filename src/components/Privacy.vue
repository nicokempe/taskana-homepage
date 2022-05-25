<template>
  <div
    class="backdrop dark:bg-gray-900 fixed inset-0 z-30 flex justify-center w-screen h-screen overflow-hidden bg-gray-100"
  >
    <div class="absolute z-40 w-full h-full" @click="close()"></div>

    <div
      class="modal dark:bg-gray-800 dark:text-gray-200 sm:pl-8 sm:pt-8 absolute top-0 z-50 max-w-screen-xl min-h-screen pt-4 pl-4 mx-auto text-gray-800 bg-white"
    >
      <div class="sm:pb-8 flex justify-between pb-4">
        <div class="flex flex-row p-2 space-x-2">
          <h1 class="lg:text-3xl md:text-xl text-lg font-bold break-words">{{ $t("footer.privacy") }}</h1>
          <div class="sm:block hidden">
            <LanguageSwitcher class="md:p-2 p-1" />
          </div>
        </div>
        <div>
          <button class="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 mr-2 rounded-md" @click="close()">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="max-h-screen overflow-auto">
        <a href="https://www.novatec-gmbh.de/datenschutz/">https://www.novatec-gmbh.de/datenschutz/</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import LanguageSwitcher from "./header/LanguageSwitcher.vue"

@Options({ components: { LanguageSwitcher } })
export default class Privacy extends Vue {
  close() {
    this.$emit("close")
  }
}
</script>

<style lang="scss" scoped></style>
