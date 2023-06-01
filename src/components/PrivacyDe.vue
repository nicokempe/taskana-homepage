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
          <h1 class="lg:text-3xl md:text-xl text-lg font-bold break-words">{{ $t('footer.privacy') }}</h1>
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
        <div class="flex flex-row flex-wrap items-center justify-center px-4 mt-12 lg:justify-start">
          Herzlich Willkommen auf der Internetpräsenz www.taskana.pro der Novatec Consulting GmbH.
          Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Daher halten wir
          uns beim Erheben und Verarbeiten Ihrer personenbezogenen Daten streng an die gesetzlichen Vorgaben.
          Nachfolgend wollen wir Sie ausführlich über Umfang und Zweck der Datenerhebung auf unserer Website informieren.
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Verantwortliche Stelle
          </h2>
          <p>
            <br/>
            Novatec Consulting GmbH<br/>
            Bertha-Benz-Platz 1<br/>
            D-70771 Leinfelden-Echterdingen<br/>
            <br/>
            Geschäftsführung: Rita Ehses, Dominik Meyer, Michael Schuchart
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Datenschutzbeauftragte
          </h2>
          <p>
            <br/>
            Wenn Sie Fragen hinsichtlich der Verarbeitung Ihrer persönlichen Daten haben, können Sie
            sich direkt an unsere externen Beauftragten für den Datenschutz wenden, die auch im Falle
            von Auskunftsersuchen, Anträgen oder Beschwerden zur Verfügung steht:
            <br/>
            <br/>
            Persönlich/Vertraulich<br/>
            z. Hd. Datenschutzbeauftragten<br/>
            c/o Novatec Consulting GmbH<br/>
            Bertha-Benz-Platz 1<br/>
            D-70771 Leinfelden-Echterdingen<br/>
            <br/>
            E-Mail:
            <a class="select-all hover:text-secondary-600" href="mailto:datenschutz@novatec-gmbh.de">
            datenschutz@novatec-gmbh.de
            </a>
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            1 Grundsatz der anonymen Datenverwendung
          </h2>
          <br/>
          <p>
          Die Nutzung unserer Webseite ist grundsätzlich ohne eine Angabe von personenbezogenen Daten
          möglich. Für die Nutzung einzelner Services unserer Seite können sich hierfür abweichende
          Regelungen ergeben, die in diesem Falle nachstehend gesondert erläutert werden. Die rechtlichen
          Grundlagen des Datenschutzes finden Sie im Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
          </p>
          <br/>
          <p>
          Beim Aufruf unserer Webseite werden einige Informationen übertragen, wie z. B. IP-Adresse.
          Sie geben auch Auskunft über das genutzte Endgerät (Computer, Smartphone, Tablet, etc.),
          den verwendeten Browser (Internet-Explorer, Safari, Firefox, etc.), den Zeitpunkt des
          Zugriffs auf die Webseite, den sog. Referrer und übertragenen Datenmengen.
          </p>
          <br/>
          <p>
          Diese Daten können von uns nicht dazu verwendet werden, den einzelnen Nutzer zu identifizieren.
          Die Informationen dienen uns dafür, die Attraktivität unserer Webseite zu ermitteln und deren
          Leistung bzw. Inhalte gegebenenfalls zu verbessern und für Sie noch interessanter zu gestalten.
          </p>
          <br/>
          <p>
          Wir weisen jedoch darauf hin, dass bei einer statischen IP-Adresse über eine RIPE-Abfrage
          im Einzelfall ein Personenbezug möglich ist, was wir jedoch nicht tun. Dennoch ist diese
          Webseite sowohl statisch als auch dynamisch vergebenen IP-Adressen zugänglich.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            2 Personenbezogene Daten
          </h2>
          <br/>
          <p>
          In der EU-Datenschutz-Grundverordnung (DSGVO), sind personenbezogene Daten folgendermaßen definiert:
          </p>
          <br/>
          <p>
          Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
          (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person
          angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie
          einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem
          oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
          physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
          Identität dieser natürlichen Person sind.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            3 Datenlöschung und Speicherdauer
          </h2>
          <br/>
          <p>
          Ihre personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung
          entfällt. Eine Speicherung kann darüber hinaus dann erfolgen, wenn dies durch den europäischen
          oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen
          Vorschriften, denen die Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
          Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene
          Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der
          Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            4 Kontaktmöglichkeiten
          </h2>
          <br/>
          <p>
          Sie haben die Möglichkeit uns bei Fragen, Wünschen und Anregungen zu kontaktieren. Dies können
          Sie u.a. per E-Mail oder telefonisch tun. In diesem Fall werden die von Ihnen gemachten
          Angaben zum Zwecke der Bearbeitung Ihrer Kontaktaufnahme gespeichert. Darüber hinaus erfolgt
          ein Abgleich der so erhobenen Daten mit Daten, die möglicherweise anderweitig von uns erhoben
          werden, wenn Sie uns vorher eine entsprechende Einwilligung erteilt haben, die Sie jederzeit
          mit Wirkung für die Zukunft widerrufen können. Für die Ausübung des Widerrufs wenden Sie
          sich bitte an die am Ende dieser Erklärung genannte Stelle.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            5 Github
          </h2>
          <br/>
          <p>
          Wir haben in unsere Webseite einen Link zur Taskana Seite bei Github eingebunden. Dabei
          handelt es sich um ein Internet-Lesezeichen, mit denen die Nutzer eines solchen Dienstes
          Links und Nachrichtenmeldungen sammeln können. Nach dem Anklicken der eingebundenen Grafik
          werden Sie auf die Seite von GitHub weitergeleitet, d.h. erst dann werden Nutzerinformationen
          an den Anbieter übertragen. Informationen zum Umgang mit Ihren personenbezogenen Daten bei
          Nutzung dieser Webseiten entnehmen Sie bitte den Datenschutzbestimmungen von Github
          (
          <a class="select-all hover:text-secondary-600" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
          https://docs.github.com/en/github/site-policy/github-privacy-statement
          </a>
          ).
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            6 Datenübermittlung an Dritte
          </h2>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Datenübermittlung an andere Konzernunternehmen
          </h2>
          <br/>
          <p>
            Eine Übermittlung Ihrer Daten an Dritte außerhalb der Novatec Gruppe findet grundsätzlich
            nicht statt, es sei denn, wir sind gesetzlich dazu verpflichtet, oder die Datenweitergabe
            ist zur Durchführung des Vertragsverhältnisses erforderlich oder Sie haben zuvor ausdrücklich
            in die Weitergabe Ihrer Daten eingewilligt. Externe Dienstleister und Partnerunternehmen
            erhalten Ihre Daten nur, soweit dies zur Abwicklung ihrer Anfrage erforderlich ist. In
            diesen Fällen beschränkt sich der Umfang der übermittelten Daten jedoch auf das
            erforderliche Minimum.
          </p>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Datenübermittlung an externe Dienstleister
          </h2>
          <br/>
          <p>
            Ihre Daten werden Dienstleistungspartner weitergegeben, sofern diese in unserem Auftrag
            tätig sind und die Novatec Consulting GmbH bei der Erbringung ihrer Dienste unterstützen.
          </p>
          <br/>
          <p>
            Eine Verarbeitung Ihrer personenbezogenen Daten durch beauftragte Dienstleister erfolgt
            im Rahmen der Auftragsverarbeitung gem. Art. 28 DSGVO.
          </p>
          <br/>
          <p>
            Die zuvor genannten Dienstleister erhalten lediglich Zugang zu solchen persönlichen
            Informationen, die zur Erfüllung der jeweiligen Tätigkeit erforderlich sind. Es ist diesen
            Dienstleistern untersagt, Ihre persönlichen Informationen weiterzugeben oder zu anderen
            Zwecken zu verwenden, insbesondere zu eigenen werblichen Zwecken.
          </p>
          <br/>
          <p>
            Soweit externe Dienstleister mit Ihren personenbezogenen Daten in Berührung kommen, haben
            wir durch rechtliche, technische und organisatorische Maßnahmen sowie durch regelmäßige
            Kontrollen sichergestellt, dass auch diese die geltenden Datenschutzvorschriften einhalten.
          </p>
          <br/>
          <p>
            Eine kommerzielle Weitergabe Ihrer personenbezogenen Daten an andere Unternehmen erfolgt nicht.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            7 Webseitenoptimierungstools
          </h2>
          <br/>
          <p>
          Die Erhebung Ihrer personenbezogenen Daten über Webseitenoptimierungstools auf unserer Webseite
          beruht auf Ihrer Einwilligung nach Artikel 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung
          jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der aufgrund der Einwilligung
          bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt
          </p>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            a. Cookies
          </h2>
          <br/>
          <p>
            Diese Seite benutzt keine Cookies.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            8 Sicherheit
          </h2>
          <br/>
          <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns
          verwalteten Daten gegen Manipulationen, Verlust, Zerstörung und gegen den Zugriff Dritter
          zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung
          im Internet laufend verbessert. Ihre Daten werden mit den gängigsten und sichersten
          Übertragungsverfahren im Internet verschlüsselt.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            9 Rechte der Betroffenen
          </h2>
          <br/>
          <p>
          Ihnen stehen folgende Rechte uns gegenüber zu:
          </p>
          <br/>
          <p>
          Recht auf Berichtigung<br/>
          <br/>
          Sind Ihre Daten, die wir von Ihnen erfasst haben unrichtig oder unvollständig, können Sie
          von uns unverzüglich Berichtigung nach Artikel 16 DSGVO verlangen.
          </p>
          <br/>
          <p>
          Recht auf Einschränkung der Verarbeitung<br/>
          <br/>
          Unter den Voraussetzungen des Artikels 18 DSGVO können Sie zudem unter Umständen auch die
          Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen.
          <br/>
          Nach der Einschränkung dürfen Ihre Daten nur mit Ihrer Einwilligung oder zur Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen, oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person, oder aus Gründen eines wichtigen öffentlichen Interesses
          der Union oder eines Mitgliedstaats verarbeitet werden. Wir unterrichten Sie bevor die
          Einschränkung aufgehoben wird.
          </p>
          <br/>
          <p>
          Recht auf Löschung<br/>
          <br/>
          Sie können bei Vorliegen von einem der Gründe aus Artikel 17 Abs. 1 DSGVO von uns die
          unverzügliche Löschung der Sie betreffenden personenbezogenen Daten verlangen, es sei denn
          es besteht eine Ausnahme von der Löschpflicht nach Artikel 17 Abs. 3 DSGVO.
          </p>
          <br/>
          <p>
          Recht auf Unterrichtung<br/>
          <br/>
          Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber
          uns geltend gemacht, sind wir gemäß Artikel 19 DSGVO verpflichtet allen Empfängern Ihrer
          personenbezogenen Daten dies mitzuteilen, außer die Mitteilung ist unmöglich oder mit
          unverhältnismäßigem Aufwand verbunden. Sie haben zudem das Recht über die Empfänger unterrichtet
          zu werden. Ihnen steht außerdem das Recht zu, über diese Empfänger unterrichtet zu werden.
          </p>
          <br/>
          <p>
          Recht auf Datenübertragbarkeit <br/>
          <br/>
          Außerdem haben Sie nach Artikel 20 DSGVO das Recht, von uns die Sie betreffenden
          personenbezogenen Daten, in maschinenlesbaren Format zu erhalten und die Daten einem anderen
          Verantwortlichen ohne Behinderung zu übermitteln, sofern die Voraussetzungen des
          Artikel 20 Abs. 1 lit. a DSGVO vorliegen, oder zu erwirken, dass Ihre personenbezogenen
          Daten direkt von uns einem anderen Verantwortlichen übermittelt werden, soweit dies technisch
          machbar ist und keine Freiheiten und Rechte anderer Personen dadurch beeinträchtigt werden.
          Dieses Recht gilt nicht für eine Verarbeitung personenbezogener Daten, die zur Wahrnehmung
          einer Aufgabe im öffentlichen Interesse, oder zur Ausübung öffentlicher Gewalt erforderlich ist.
          </p>
          <br/>
          <p>
          Widerspruchsrecht <br/>
          <br/>
          Sie haben das Recht jederzeit gegenüber der Novatec Consulting GmbH Widerspruch gegen die
          Verarbeitung der Sie betreffenden personenbezogenen Daten nach Art. 6 Abs. 1 lit. f DSGVO
          einzulegen.<br/>
          Wir verarbeiten Ihre personenbezogenen Daten nicht mehr, es sei denn, schutzwürdige Gründe
          für die Verarbeitung überwiegen Ihre Interessen, Rechte und Freiheiten, oder die Verarbeitung
          dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>
          <br/>
          <p>
          Recht auf Beschwerde bei der Aufsichtsbehörde <br/>
          <br/>
          Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde.<br/>

          Die für die Novatec Consulting GmbH zuständige Datenschutzbehörde ist: Der Landesbeauftragte
          für den Datenschutz und die Informationsfreiheit Baden-Württemberg; Lautenschlagerstraße
          20; 70173 Stuttgart.
          </p>
          <br/>
          <p>
          Stand: Mai 2023<br/>
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <br/>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <br/>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class PrivacyDe extends Vue {
  close() {
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped></style>
