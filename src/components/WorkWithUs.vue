<template>
  <div id="work-with-us" class="content-wrapper py-16">
    <p class="content-title">
      {{ $t('workwithus.headline') }}
      <Link path="#work-with-us" />
    </p>

    <div class="px-6 pt-12 text-gray-700 dark:text-gray-200">
      TASKANA als Software ist Open Source und somit frei zugänglich und nutzbar. Wir unterstützen Ihr Projekt gerne um
      sicherzustellen, dass Ihre eigenen kritischen Anwendungen, die auf TASKANA basieren, zuverlässig auch in der
      Zukunft funktionieren werden
      <div class="pt-12 grid grid-cols-3 gap-4 text-gray-800">
        <div class="rounded p-4 bg-white">
          Maßgeschneidertes Task Management – fühlt sich an wie eine Individualentwicklung, ist aber zu 70-80% Standard
        </div>
        <div class="rounded p-4 bg-white">
          Kostengünstige Lösung, da ohne Lizenzkosten. Der Wartungsaufwand verteilt sich auf alle teilnehmenden Partner
        </div>
        <div class="rounded p-4 bg-white">
          Einflussmöglichkeit auf die funktionale Weiterentwicklung des „Standards”
        </div>
        <div class="rounded p-4 bg-white">
          Reduzierte Projektlaufzeit im Vergleich zu einer Individualentwicklung, da Sie große Teile der Software fertig
          geliefert bekommen
        </div>
        <div class="rounded p-4 bg-white">
          Integration, Test und Deployment können sie somit über Ihre etablierten Softwareentwicklungsprozesse
          durchführen
        </div>
        <div class="rounded p-4 bg-white">
          Modularer Aufbau – Sie nutzen nur die Teile von TASKANA, die für Sie einen Wert haben.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Link from '@/core/Link.vue'

@Options({
  components: { Link }
})
export default class WorkWithUs extends Vue {}
</script>

<style></style>
