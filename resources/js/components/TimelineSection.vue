<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const timelineItems = [
    {
        year: '2024 - Present',
        title: 'Senior Backend Developer',
        description: 'Leading backend architecture and API development for high-scale applications.'
    },
    {
        year: '2022 - 2024',
        title: 'Full Stack Developer',
        description: 'Developed and maintained web applications using Laravel and Vue.js.'
    },
    {
        year: '2020 - 2022',
        title: 'Junior Developer',
        description: 'Started professional career, focusing on PHP development and database management.'
    },
    {
        year: '2017 - 2020',
        title: 'Computer Science Degree',
        description: 'Bachelor of Science in Computer Science at University of Technology.'
    }
]
</script>

<template>
    <section class="container mx-auto py-16 md:py-24 lg:py-32">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-slate-900 dark:text-white">
                {{ t.timeline.title }}
            </h2>
            <p class="max-w-[85%] leading-normal text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-7">
                {{ t.timeline.subtitle }}
            </p>
        </div>
        <div class="mx-auto max-w-3xl">
            <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12">
                <div v-for="(item, index) in timelineItems" :key="index" class="relative pl-8 group">
                    <!-- Dot -->
                    <span class="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-slate-950 ring-4 ring-white dark:ring-slate-950 transition-colors group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400">
                        <span class="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-white transition-colors"></span>
                    </span>
                    
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-3">
                            <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {{ item.title }}
                            </h3>
                            <span v-if="index === 0" class="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                {{ t.timeline.latest }}
                            </span>
                        </div>
                        <time class="text-sm font-medium text-slate-500 font-mono">
                            {{ item.year }}
                        </time>
                        <p class="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
