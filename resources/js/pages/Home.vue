<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
    <DefaultLayout>
        <section id="hero" class="px-8 py-16">
            <h1 class="text-4xl font-bold mb-4">
                Hi, I’m Timo 👋
            </h1>
            <p class="text-slate-300 max-w-xl">
                I’m a backend developer who loves Laravel, PHP, and databases like MariaDB, SQLite, and DuckDB.
            </p>
        </section>

        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
                <h2 class="text-6xl m-6 font-bold text-center text-emerald-400 text-pretty"><strong>Willkommen</strong>
                </h2>

                <p class="mt-4 text-pretty font-bold text-white">
                    Diese Seite ist von mir erstellt um relevante Infos über mich und meinen bisherigen werdegang
                    angenehm zugänglich zu machen.
                    Außerdem habe ich diese Seite genutzt um mehr Frontend erfahrung zu sammeln, ebenso wie erfahrung in
                    mir bisher nicht vertrauten technologien.
                    <br>
                    Genutzt für die erstellung der Seite habe ich:
                </p>
            </div>



            <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-xl mx-auto">

                <div class="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"
                        class="h-20 w-auto">
                        <path
                            d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z"
                            fill="#FF2D20" />
                    </svg>
                </div>


                <div class="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261 226" class="h-20">
                        <path fill="#41B883" d="M0 0h60l70 121 71-121h60L131 226z" />
                        <path fill="#35495E" d="M60 0h60l11 19 10-19h60L131 121z" />
                    </svg>
                </div>

                <div class="grid place-content-center p-4 grayscale transition-[filter] hover:grayscale-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" class="h-20">
                        <path fill="#38bdf8"
                            d="M128 0c-34.9 0-56.4 17.4-64.4 52.3 12.9-17.4 28.4-23.9 46.4-19.6 10.1 2.3 17.3 9 25.2 16.2C149 60.5 166.3 76 192 76c34.9 0 56.4-17.4 64.4-52.3-12.9 17.4-28.4 23.9-46.4 19.6-10.1-2.3-17.3-9-25.2-16.2C171 15.5 153.7 0 128 0zm-64 77.7c-34.9 0-56.4 17.4-64.4 52.3 12.9-17.4 28.4-23.9 46.4-19.6 10.1 2.3 17.3 9 25.2 16.2C85 138.2 102.3 154 128 154c34.9 0 56.4-17.4 64.4-52.3-12.9 17.4-28.4 23.9-46.4 19.6-10.1-2.3-17.3-9-25.2-16.2C107 92.2 89.7 77.7 64 77.7z" />
                    </svg>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
