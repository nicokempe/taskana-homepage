<template>
  <Privacy v-if="isPrivacyShown" @close="closePrivacy()" />
  <footer class="body-font text-gray-600">
    <div
      class="content-wrapper md:items-center lg:items-start md:flex-row md:flex-nowrap flex flex-col flex-wrap px-5 py-12 mx-auto"
    >
      <div class="md:mx-0 md:text-left flex-shrink-0 w-64 mx-auto text-center">
        <a
          class="title-font md:justify-start flex items-center justify-center font-medium text-gray-900 cursor-pointer"
          href="https://novatec-gmbh.de"
          target="_blank"
        >
          <Logo />
        </a>
        <p class="mt-2 text-sm text-gray-500">Created with ❤️</p>
      </div>
      <div class="md:pl-20 md:mt-0 md:text-left flex flex-wrap justify-end flex-grow mt-10 -mb-10 text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="link-header">TASKANA</h2>
          <nav class="mb-10 list-none">
            <li>
              <a href="https://taskana.azurewebsites.net/taskana" target="_blank">{{ $t('footer.taskana.link1') }}</a>
            </li>
            <li>
              <a href="https://taskana.atlassian.net/wiki/spaces/TAS/overview" target="_blank">
                {{ $t('footer.taskana.link2') }}
              </a>
            </li>
            <li>
              <a href="https://github.com/Taskana/taskana" target="_blank">{{ $t('footer.taskana.link3') }}</a>
            </li>
            <li>
              <a href="https://github.com/Taskana/taskana/discussions" target="_blank">
                {{ $t('footer.taskana.link4') }}
              </a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="link-header">NOVATEC</h2>
          <nav class="mb-10 list-none">
            <li>
              <a href="https://www.novatec-gmbh.de/unternehmen/" target="_blank">{{ $t('footer.novatec.link1') }}</a>
            </li>
            <li>
              <a href="https://www.novatec-gmbh.de/beratung/" target="_blank">{{ $t('footer.novatec.link2') }}</a>
            </li>
            <li>
              <a href="https://www.novatec-gmbh.de/beratung/business-process-management-services/" target="_blank">
                {{ $t('footer.novatec.link3') }}
              </a>
            </li>
            <li>
              <a href="https://www.novatec-gmbh.de/beratung/enterprise-task-management/" target="_blank">
                {{ $t('footer.novatec.link4') }}
              </a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="link-header">{{ $t('footer.projects.title') }}</h2>
          <nav class="mb-10 list-none">
            <li>
              <a href="https://inspectit.rocks/" target="_blank">{{ $t('footer.projects.link1') }}</a>
            </li>
            <li>
              <a href="https://openapm.io/" target="_blank">{{ $t('footer.projects.link2') }}</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content-wrapper sm:flex-row flex flex-col flex-wrap px-5 py-4 mx-auto">
        <p class="dark:text-gray-400 sm:text-left text-sm font-medium text-center text-gray-600">
          © {{ new Date().getFullYear() }} Novatec Consulting GmbH
        </p>
        <p class="sm:my-0 dark:text-gray-400 sm:text-left mt-2 ml-4 text-sm font-medium text-center text-gray-600">
          <a href="https://www.novatec-gmbh.de/impressum/">{{ $t('footer.imprint') }}</a>
        </p>
        <p class="sm:my-0 dark:text-gray-400 sm:text-left my-2 ml-4 text-sm font-medium text-center text-gray-600">
          <a @click="displayPrivacy()">{{ $t('footer.privacy') }}</a>
        </p>
        <span class="sm:ml-auto sm:mt-0 sm:justify-start inline-flex justify-center mt-2 space-x-3">
          <a class="footer__facebook" href="https://www.facebook.com/novatec.holding">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            class="footer__twitter hover:text-gray-800 dark:hover:text-gray-200 text-gray-500 cursor-pointer"
            href="https://twitter.com/novatecgmbh"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>

          <a
            class="footer__xing hover:text-gray-800 dark:hover:text-gray-200 text-gray-500 cursor-pointer"
            href="https://www.xing.com/pages/novatecgmbh"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 540.543 540.543"
            >
              <path
                d="M129.989,378.772c8.274,0,15.361-5.006,21.243-15.036c53.813-95.423,81.806-145.093,83.991-149.028l-53.593-93.458
			c-5.667-9.804-12.858-14.707-21.567-14.707H81.953c-5.019,0-8.495,1.634-10.459,4.902c-2.399,3.268-2.289,7.301,0.325,12.087
			l52.613,91.176c0.214,0.232,0.214,0.331,0,0.331L41.75,361.453c-2.172,4.149-2.172,8.066,0,11.757
			c2.173,3.715,5.557,5.562,10.129,5.562H129.989z"
              />
              <path
                d="M488.492,0h-78.758c-8.495,0-15.472,4.902-20.912,14.707C277.053,212.97,219.206,315.596,215.283,322.555l110.784,203.282
			c5.227,9.804,12.418,14.706,21.567,14.706h78.104c4.791,0,8.28-1.634,10.459-4.902c2.172-3.715,2.068-7.748-0.325-12.099
			L326.073,322.555v-0.318L498.627,16.995c2.393-4.571,2.393-8.592,0-12.087C496.662,1.634,493.284,0,488.492,0z"
              />
            </svg>
          </a>

          <a class="footer__linked-in" href="https://www.linkedin.com/company/novatec-gmbh/">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Logo from '@/core/Logo.vue'
import Privacy from '@/components/Privacy.vue'
@Options({
  components: { Logo, Privacy }
})
export default class Footer extends Vue {
  isPrivacyShown = false

  displayPrivacy() {
    this.isPrivacyShown = true
  }
  closePrivacy() {
    this.isPrivacyShown = false
  }
}
</script>

<style lang="scss" scoped>
a {
  @apply text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer;
}
.link-header {
  @apply font-medium text-gray-800 dark:text-gray-300 tracking-widest text-sm mb-3;
}
li {
  @apply py-1;
}
</style>
