<template>
  <div class="px-4 py-2 absolute top-0 w-full transform transition duration-150 ">
    <div class="w-1/2 mx-auto bg-gray-800 text-gray-100 rounded">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'

class Props {
  text = prop({ default: '' })
}
export default class Notification extends Vue.with(Props) {}
</script>

<style lang="scss" scoped></style>
