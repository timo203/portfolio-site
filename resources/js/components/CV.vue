<script setup>
import { ref, computed } from 'vue'

const homepageBasics = [
  'Grundlagen des Webdesigns',
  'HTML-Struktur und die wichtigsten HTML-Elemente',
  'Layout und Positionierung von Seiteninhalten mit CSS',
  'Einsatz von Editoren: Notepad++',
  'Grundlagen der Bildbearbeitung für das WWW',
  'Rechtliche Aspekte (Urheberrecht)',
]

const isHomepageBasicsOpen = ref(false)

const visibleHomepageBasics = computed(() =>
  isHomepageBasicsOpen.value ? homepageBasics : []
)
</script>

<template>
    <h1 class="text-6xl m-6 font-bold text-center"> <strong>Lebenslauf</strong></h1>
    <ol
        class="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">10/04/2017 - 13/04/2017</strong></time>

                    <img :src="'/images/skstiftungjugendundmedien.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 ml-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Workshop: Homepage - Start</strong> </h1>
                    <div class="mb-3 space-y-1">
                        <details
  class="group [&_summary::-webkit-details-marker]:hidden"
  @toggle="isHomepageBasicsOpen = $event.target.open"
>
                            <summary class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Einführung in Grundlagen der Homepagegestaltung</span>
                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>

                            <div class="p-3">
                               <TransitionGroup
      name="list"
      tag="ul"
      class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left"
    >
      <li
  v-for="(point, index) in visibleHomepageBasics"
  :key="point"
  :style="{ '--delay': `${index * 150}ms` }"
>
  {{ point }}
</li>

    </TransitionGroup>
                            </div>
                        </details>
                    </div>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Projekt: eigene Homepage</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Erstellung einer eigenen Homepage</li>
                                    <li>Site ins Netz stellen mit FTP-Upload</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div aria-hidden="true"></div>
        </li>

        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div
                class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">14/08/2017 - 18/08/2017</strong></time>

                    <img :src="'/images/skstiftungjugendundmedien.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 mr-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Workshop: Websites entwicklen
                            mit HTML, CSS & JavaScript</strong> </h1>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="max-w-md flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ HTML</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>HTML-Grundgerüst</li>
                                    <li>HTML-Grundlagen: Text, Bilder, Links, Bereiche definieren (div)</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="max-w-md flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ CSS</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>CSS in HTML einbinden: inline, dateiweit, externe Datei</li>
                                    <li>CSS-Regeln: Textgestaltung, Abschnitte, Bilder</li>
                                    <li>Hintergrund: Bilder und Farbe</li>
                                    <li>Bilder und Bereiche umfließen lassen (Float)</li>
                                    <li>Links, interaktive Gestaltung</li>
                                    <li>Positionierung: absolute, relative, fixed</li>
                                    <li>CSS Selektoren: Tags, Klassen, IDs</li>
                                    <li>Gestalten eines CSS-basierten Layouts</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="max-w-md flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Javascript</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Javascript in HTML einbinden</li>
                                    <li>Grundlagen: Funktionen, Eventhandler, Objekte/DOM</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            <div aria-hidden="true"></div>
        </li>
        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div
                class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">13/11/2017 - 01/12/2017</strong></time>

                    <img :src="'/images/Brunata.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 ml-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Praktikum - BRUNATA</strong>
                    </h1>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Inhalte</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Installieren von Software zur einrichtung der Entwicklungsumgebung</li>
                                    <li>Verwaltung von Hard- und Software</li>
                                    <li>Einführen in die Datenbankstruktur und Programmierung mit Java</li>
                                    <li>Testen von Software</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div aria-hidden="true"></div>
        </li>


        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div
                class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">06/08/2018 - 10/08/2018</strong></time>

                    <img :src="'/images/skstiftungjugendundmedien.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 mr-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Workshop: Java</strong> </h1>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Die Entwicklungsumgebung Eclipse</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Hauptfunktion, Ein-/Ausgabe, Kommentare</li>
                                    <li>Variablen (Namensregeln, Definition)</li>
                                    <li>Operatoren (Grundrechenarten, Modulo)</li>
                                    <li>Verzweigungen (Vergleichs- und logische Operatoren)</li>
                                    <li>Schleifen</li>
                                    <li>Zufallszahlen</li>
                                    <li>Funktionen</li>
                                    <li>Arrays</li>
                                    <li>Die Klasse String</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            <div aria-hidden="true"></div>
        </li>

        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div
                class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">01/08/2019 - 30/01/2023</strong></time>

                    <img :src="'/images/plusserver.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 ml-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Ausbildung -
                            plusserver</strong> </h1>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Inhalte</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Contract & Billing Management</li>
                                    <li>Network Squad</li>
                                    <li>Data Center Operations</li>
                                    <li>Finance & Controlling</li>
                                    <li>Internal IT/Helpdesk</li>
                                    <li>Logistics</li>
                                    <li>Marketing</li>
                                    <li>Human Resources</li>
                                    <li>Sales New Business & Sales Key Account Management</li>
                                    <li>System Engineering Linux</li>
                                    <li>Solutions Consulting</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
            <div aria-hidden="true"></div>
        </li>
        <li class="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div
                class="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
                <span class="size-3 shrink-0 rounded-full bg-emerald-400"></span>

                <div class="-mt-2">
                    <time class="text-md/none font-medium text-gray-700 dark:text-gray-200"> <strong
                            class="text-indigo-500">seit dem 01/03/2023</strong></time>

                    <img :src="'/images/optimex.png'"
                        class="p-1 w-55 h-auto bg-white border-2 border-indigo-500 mr-auto" alt="Workshop Logo" />

                    <h1 class="mb-3 text-2xl font-bold"> <strong class="text-indigo-500">Vollzeit - PHP
                            Developer</strong> </h1>
                    <div class="mb-3 space-y-1">
                        <details class="group [&amp;_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                                <span>➡ Inhalte</span>

                                <svg class="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </summary>

                            <div class="p-3">
                                <ul class="mb-4 text-gray-700 dark:text-gray-200 list-disc list-inside text-left">
                                    <li>Hauptfunktion, Ein-/Ausgabe, Kommentare</li>
                                    <li>Variablen (Namensregeln, Definition)</li>
                                    <li>Operatoren (Grundrechenarten, Modulo)</li>
                                    <li>Verzweigungen (Vergleichs- und logische Operatoren)</li>
                                    <li>Schleifen</li>
                                    <li>Zufallszahlen</li>
                                    <li>Funktionen</li>
                                    <li>Arrays</li>
                                    <li>Die Klasse String</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </div>

            <div aria-hidden="true"></div>
        </li>



    </ol>
</template>

<style scoped>
.list-enter-active {
  transition: all 1.2s ease;
  transition-delay: var(--delay);
}

.list-leave-active {
  transition: all 0.3s ease;
  /* no delay -> they all leave together */
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>

