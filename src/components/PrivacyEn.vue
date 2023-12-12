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
          Welcome to the website www.taskana.pro of Novatec Consulting GmbH. The protection of your
          personal data is of particular concern to us.
          Therefore, we strictly adhere to the legal requirements when collecting and processing your
          personal data. In the following, we would like to inform you in detail about the scope and
          purpose of data collection on our website.
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Responsible body
          </h2>
          <p>
            <br/>
            <b>Novatec Consulting GmbH</b><br/>
            Bertha-Benz-Platz 1<br/>
            D-70771 Leinfelden-Echterdingen<br/>
            <br/>
            Management: Rita Ehses, Dominik Meyer, Michael Schuchart
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Data Protection Officer
          </h2>
          <p>
            <br/>
            If you have any questions regarding the processing of your personal data, you can
            contact our external data protection officers directly, who are also available in the
            event of requests for information, applications or complaints:
            <br/>
            <br/>
            Personal/Confidential<br/>
            for the attention of the Data Protection Officer<br/>
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
            1 Principle of anonymous data use
          </h2>
          <br/>
          <p>
          The use of our website is generally possible without providing personal data. For the use
          of individual services on our site, different regulations may apply, which are explained
          separately below in this case. The legal basis for data protection can be found in the
          Federal Data Protection Act (BDSG) and the Telecommunications Telemedia Data Protection
          Act (TTDSG).
          </p>
          <br/>
          <p>
          When you access our website, some information is transmitted, such as IP address. They
          also provide information about the end device used (computer, smartphone, tablet, etc.),
          the browser used (Internet Explorer, Safari, Firefox, etc.), the time of access to the
          website, the so-called referrer and transferred data volumes.
          </p>
          <br/>
          <p>
          We cannot use this data to identify individual users. The information is used by us to
          determine the attractiveness of our website and, if necessary, to improve its performance
          or content and make it even more interesting for you.
          </p>
          <br/>
          <p>
          However, we would like to point out that in the case of a static IP address, a personal
          reference is possible in individual cases via a RIPE query, but we do not do this.
          Nevertheless, this website is accessible to both statically and dynamically assigned
          IP addresses.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            2 Personal data
          </h2>
          <br/>
          <p>
          In the EU General Data Protection Regulation (GDPR), personal data is defined as follows:
          </p>
          <br/>
          <p>
          Any information relating to an identified or identifiable natural person (hereinafter
          "data subject"). An identifiable natural person is one who can be identified, directly
          or indirectly, in particular by reference to an identifier such as a name, an
          identification number, location data, an online identifier or to one or more factors
          specific to the physical, physiological, genetic, mental, economic, cultural or social
          identity of that natural person.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            3 Data deletion and storage period:
          </h2>
          <br/>
          <p>
          Your personal data will be deleted or blocked as soon as the purpose of the storage no
          longer applies. In addition, storage may take place if this has been provided for by
          the European or national legislator in Union regulations, laws or other provisions to
          which the responsible party is subject. The data will also be blocked or deleted if a
          storage period prescribed by the aforementioned standards expires, unless there is a
          necessity for the continued storage of the data for the conclusion or fulfilment of a
          contract.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            4 Contact options
          </h2>
          <br/>
          <p>
          You have the possibility to contact us with questions, wishes and suggestions. You can do
          this by e-mail or telephone, among other things. In this case, the information you
          provide will be stored for the purpose of processing your contact. In addition, the
          data collected in this way will be compared with data that may be collected elsewhere
          by us if you have given us your consent beforehand, which you can revoke at any time
          with effect for the future. To exercise the revocation, please contact the office
          named at the end of this statement.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            5 Github
          </h2>
          <br/>
          <p>
          We have included a link to the Taskana page on Github on our website. This is an internet
          bookmark with which users of such a service can collect links and news reports. After
          clicking on the embedded graphic, you will be redirected to the GitHub page, i.e. only
          then will user information be transmitted to the provider. For information on how your
          personal data is handled when using these websites, please refer to the Github privacy policy
          (
          <a class="select-all hover:text-secondary-600" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
          https://docs.github.com/en/github/site-policy/github-privacy-statement
          </a>
          ).
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            6 Data transmission to third parties
          </h2>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Data transmission to other group companies
          </h2>
          <br/>
          <p>
            As a matter of principle, your data will not be transferred to third parties outside the
            Novatec Group unless we are legally obliged to do so, or the transfer of data is
            necessary for the performance of the contractual relationship, or you have previously
            expressly consented to the transfer of your data. External service providers and partner
            companies only receive your data insofar as this is necessary to process your request.
            In these cases, however, the scope of the transmitted data is limited to the necessary minimum.
          </p>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            Data transfer to external service providers
          </h2>
          <br/>
          <p>
            Your data will be passed on to service partners insofar as they act on our behalf and
            support Novatec Consulting GmbH in the provision of its services.
          </p>
          <br/>
          <p>
            Processing of your personal data by commissioned service providers takes place within
            the framework of commissioned processing pursuant to Art. 28 DSGVO.
          </p>
          <br/>
          <p>
            The aforementioned service providers will only have access to such personal information
            as is necessary for the performance of their respective activities. These service
            providers are prohibited from disclosing your personal information or using it for
            other purposes, in particular for their own promotional purposes.
          </p>
          <br/>
          <p>
            Where external service providers come into contact with your personal data, we have
            taken legal, technical and organisational measures, as well as regular checks, to
            ensure that they also comply with the applicable data protection regulations.
          </p>
          <br/>
          <p>
            Your personal data will not be passed on commercially to other companies.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            7 Website optimisation tools
          </h2>
          <br/>
          <p>
          The collection of your personal data via website optimisation tools on our website is
          based on your consent pursuant to Article 6 (1) lit. a DSGVO. You can revoke your
          consent at any time with effect for the future. The lawfulness of the processing
          carried out on the basis of the consent until the revocation remains unaffected by this.
          </p>
          <br/>
          <h2 class="text-xl font-bold leading-none tracking-tight sm:text-xl lg:text-xl ">
            a. Cookies
          </h2>
          <br/>
          <p>
            This site does not use cookies.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            8 Social Bookmarks
          </h2>
          <br/>
          <p>
          So-called social bookmarks of the following providers are integrated on our website:
          </p>
          <p>
            <ul>
              <li>Facebook (Betreiber: Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA</li>
              <li>X (Betreiber: X Corp., X Corp ., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA)</li>
              <li>Xing (New Work SE, Am Strandkai 1, 20457 Hamburg)</li>
              <li>LinkedIn (LinkedIn Irland Unlimited Company, Wilton Place, Dublin 2, Irland)</li>
            </ul>
          </p>
          <p>
            Social bookmarks are Internet bookmarks that allow users of such a service to collect
            links and news stories. These are only embedded on our website as a link to the
            corresponding services. After clicking on the embedded graphic, you will be redirected
            to the page of the respective provider, i.e. only then will user information be
            transmitted to the respective provider. For information on how your personal data is
            handled when using these websites, please refer to the respective provider's privacy policy.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            9 Security
          </h2>
          <br/>
          <p>
          We use technical and organisational security measures to protect the data we have under
          our control against manipulation, loss, destruction and against access by third parties.
          Our security measures are continuously improved in line with technological developments
          on the Internet. Your data is encrypted using the most common and secure transmission
          methods on the Internet.
          </p>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            10 Rights of the data subjects
          </h2>
          <br/>
          <p>
          You have the following rights against us:
          </p>
          <br/>
          <p>
          Right to information<br/>
          <br/>
          You can ask us to confirm whether personal data relating to you is being processed by us.
          If we have processed data relating to you, you have further rights of access set out in Article 15 of the GDPR.
          </p>
          <br/>
          <p>
          Right of rectification<br/>
          <br/>
          If the data we have collected from you is incorrect or incomplete, you may request that
          we correct it without delay in accordance with Article 16 of the GDPR.
          </p>
          <br/>
          <p>
          Right to restrict processing<br/>
          <br/>
          Under the conditions of Article 18 of the GDPR, you may also be able to request the
          restriction of the processing of personal data relating to you.
          <br/>
          After restriction, your data may only be processed with your consent or for the
          establishment, exercise or defence of legal claims, or for the protection of the
          rights of another natural or legal person, or for reasons of substantial public
          interest of the Union or a Member State. We will inform you before the restriction is lifted.
          </p>
          <br/>
          <p>
          Right to erasure<br/>
          <br/>
          If one of the reasons set out in Article 17 (1) DSGVO applies, you may demand that we
          delete the personal data relating to you without delay, unless there is an exception
          to the obligation to delete in accordance with Article 17 (3) DSGVO.
          </p>
          <br/>
          <p>
          Right to information<br/>
          <br/>
          If you have asserted the right to rectification, erasure or restriction of processing
          against us, we are obliged under Article 19 of the GDPR to inform all recipients of
          your personal data of this, unless the notification is impossible or involves a
          disproportionate effort. You also have the right to be informed about the recipients.
          You also have the right to be informed about these recipients.
          </p>
          <br/>
          <p>
          Right to data portability<br/>
          <br/>
          In addition, according to Article 20 of the GDPR, you have the right to obtain from us
          the personal data concerning you in a machine-readable format and to transfer the data
          to another controller without hindrance, provided that the conditions of Article 20(1)(a)
          of the GDPR are met, or to have your personal data transferred directly from us to
          another controller, insofar as this is technically feasible and no freedoms and rights
          of other persons are thereby impaired. This right does not apply to the processing of
          personal data necessary for the performance of a task carried out in the public interest
          or for the exercise of official authority.
          </p>
          <br/>
          <p>
          Right of objection <br/>
          <br/>
          You have the right to object at any time to Novatec Consulting GmbH processing of personal
          data relating to you in accordance with Art. 6 (1) lit. f DSGVO.
          <br/>
          We will no longer process your personal data unless legitimate grounds for the processing
          override your interests, rights and freedoms, or the processing serves to assert, exercise or defend legal claims.
          </p>
          <br/>
          <p>
          Right to complain to the supervisory authority <br/>
          <br/>
          You have the right to complain to a supervisory authority.
          <br/>
          The data protection authority responsible for Novatec Consulting GmbH is: The State
          Commissioner for Data Protection and Freedom of Information Baden-Württemberg;
          Lautenschlagerstraße 20; 70173 Stuttgart.
          </p>
          <br/>
        </div>
        <div class="items-center justify-center px-4 mt-12 lg:justify-start">
          <h2 class="text-2xl font-bold leading-none tracking-tight sm:text-2xl lg:text-2xl ">
            11 Links to websites of others
          </h2>
          <br/>
          <p>
          Our websites may contain links to websites of other providers to which this data
          protection declaration does not extend. Insofar as the collection, processing or use
          of personal data is associated with the use of the websites of other providers, please
          observe the data protection information of the respective providers.
          </p>
          <br/>
          <p>
          Status: May 2023<br/>
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

export default class PrivacyEn extends Vue {
  close() {
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped></style>
