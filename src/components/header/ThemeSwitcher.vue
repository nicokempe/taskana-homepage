<template>
  <button class="mode focus:outline-none" @click="switchTheme()"></button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class ThemeSwitcher extends Vue {
  isDark = false

  created() {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkThemeMq.matches) {
      this.switchTheme()
    }
  }

  switchTheme() {
    this.isDark = !this.isDark
    const app = document.querySelector('html')
    if (app) {
      const theme = this.isDark ? 'dark' : 'light'
      app.className = theme
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mode {
  @apply bg-primary-600;
  border-radius: 30px;
  width: 58px;
  position: relative;
  margin-top: -2px;
  height: 32px;
  flex-shrink: 0;
}

.mode::before {
  width: 32px;
  height: 100%;
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2.4' fill='gold' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='5'/%3E%3Cpath d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/%3E%3C/svg%3E");
  background-size: cover;
  left: 0;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  background-size: 50%;
  transition: 0.3s;
  background-position: center;
}

.mode::after {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  top: 6px;
  background-color: var(--main-500);
  content: '';
  border-radius: 50%;
  transition: transform 0.3s;
}

.dark .mode {
  background-color: rgba(255, 255, 255, 0.1);
}
.dark .mode::after {
  transform: translateX(-24px);
}
.dark .mode::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' stroke='white' stroke-width='2' fill='white' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1' viewBox='0 0 24 24'%3E%3Cpath d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/%3E%3C/svg%3E");
  transform: translateX(26px);
}
</style>
