<template>
  <header
    class="text-gray-600 dark:text-gray-300 max-h-[60px] overflow-hidden z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto"
  >
    <div class="container flex flex-row flex-wrap items-center justify-center p-5 mx-auto md:justify-start">
      <a class="items-center hidden mb-4 font-medium text-gray-900 md:flex title-font md:mb-0">
        <Logo />
      </a>

      <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>

      <ThemeSwitcher class="mr-2" />
      <LanguageSwitcher class="mr-2" />

      <a
        class="flex items-center mr-4 group link"
        href="https://taskana.azurewebsites.net/taskana"
        target="_blank"
        title="Taskana Demo"
      >
        <span class="hidden md:inline md:mr-1">Demo</span>
        <svg
          class="inline w-6 h-6 text-gray-700 md:h-8 md:w-8 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=""
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
      <a
        class="flex items-center mr-2 group link"
        href="https://github.com/taskana/taskana"
        target="_blank"
        title="Github repository"
      >
        <span class="hidden md:inline md:mr-1">GitHub</span>

        <svg
          class="w-6 h-6 text-gray-700 md:h-8 md:w-8 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100"
          enable-background="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
        >
          <g>
            <path
              clip-rule="evenodd"
              d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </a>
      <a
        class="w-12 ml-2 group link md:w-48"
        href="https://taskana.atlassian.net/wiki/spaces/TAS/overview"
        target="_blank"
        title="Documentation"
      >
        <!-- h-11 px-3 py-2 border-2 border-primary-500 rounded-full -->
        <span class="hidden md:inline">Documentation</span>
        <svg
          class="block w-6 h-6 text-gray-700 documentation md:hidden group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <path
            d="M4.5 6.995H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 1.998H4v1h.5v-1zm6 1.007h.5v-1h-.5v1zm-6-7.003H4v1h.5v-1zM8.5 5H9V4h-.5v1zm2-4.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-9 4.495h6v-1h-6v1zm0 2.998l6 .007v-1l-6-.007v1zm0-5.996L8.5 5V4l-4-.003v1zm8 9.003h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          class="hidden w-4 h-4 ml-1 transition-all duration-150 ease-out arrow md:inline group-hover:w-6 group-hover:h-6"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Logo from './Logo.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

@Options({ components: { Logo, LanguageSwitcher, ThemeSwitcher } })
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
