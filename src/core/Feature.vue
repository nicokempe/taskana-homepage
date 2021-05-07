<template>
  <div class="relative py-4">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-br from-secondary-600 to-primary-600"
            >
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                ></path>
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              {{ title }}
            </h2>
            <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <blockquote>
            <div>
              <p class="text-base text-gray-500 dark:text-gray-400">
                “TASKANA ist die Beste BPM Lösung”
              </p>
            </div>
            <footer class="mt-3">
              <div class="text-base font-medium text-gray-700 dark:text-gray-400">
                Chi Nguyen, Consultant
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <div class="card h-96 w-96 grid place-items-center">
            Bild für Postkorb
          </div>
          <!-- 
          <div class="md:px-0 h-full md:w-full rounded-lg">
            <img
              class="absolute md:h-full object-cover max-w-full md:max-w-max rounded-lg shadow-2xl"
              src="preview.png"
              alt="TASKANA preview"
              title="TASKANA preview"
            />
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'

class Props {
  title = prop({ default: '' })
  description = prop({ default: '' })
}
export default class Feature extends Vue.with(Props) {}
</script>

<style></style>
