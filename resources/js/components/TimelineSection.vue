<script setup>
import { useLanguage } from '@/composables/useLanguage'
import { computed, ref } from 'vue'

const { t } = useLanguage()
const expandedIndex = ref(null)

const toggleExpand = (index) => {
    expandedIndex.value = expandedIndex.value === index ? null : index
}

const logoMap = {
    optimex: '/images/optimex_.png',
    plusserver: '/images/plusserver.png',
    workshop1: '/images/skstiftungjugendundmedien.png',
    brunata: '/images/brunata.png',
    workshop2: '/images/skstiftungjugendundmedien.png',
    workshop3: '/images/skstiftungjugendundmedien.png'
}

const timelineItems = computed(() => [
    {
        year: t.value.timeline.optimex.date,
        title: t.value.timeline.optimex.title,
        description: t.value.timeline.optimex.description,
        details: t.value.timeline.optimex.details,
        points: t.value.timeline.optimex.points,
        logo: logoMap.optimex
    },
    {
        year: t.value.timeline.plusserver.date,
        title: t.value.timeline.plusserver.title,
        description: t.value.timeline.plusserver.description,
        details: t.value.timeline.plusserver.details,
        points: t.value.timeline.plusserver.points,
        logo: logoMap.plusserver
    },
    {
        year: t.value.timeline.workshop1.date,
        title: t.value.timeline.workshop1.title,
        description: t.value.timeline.workshop1.description,
        details: t.value.timeline.workshop1.details,
        points: t.value.timeline.workshop1.points,
        logo: logoMap.workshop1
    },
    {
        year: t.value.timeline.brunata.date,
        title: t.value.timeline.brunata.title,
        description: t.value.timeline.brunata.description,
        details: t.value.timeline.brunata.details,
        points: t.value.timeline.brunata.points,
        logo: logoMap.brunata
    },
    {
        year: t.value.timeline.workshop2.date,
        title: t.value.timeline.workshop2.title,
        description: t.value.timeline.workshop2.description,
        details: t.value.timeline.workshop2.details,
        points: t.value.timeline.workshop2.points,
        logo: logoMap.workshop2
    },
    {
        year: t.value.timeline.workshop3.date,
        title: t.value.timeline.workshop3.title,
        description: t.value.timeline.workshop3.description,
        details: t.value.timeline.workshop3.details,
        points: t.value.timeline.workshop3.points,
        logo: logoMap.workshop3
    }
])
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
                    <span
                        class="absolute -left-[9px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-slate-950 ring-4 ring-white dark:ring-slate-950 transition-colors group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 z-10">
                        <span
                            class="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-white transition-colors"></span>
                    </span>

                    <div class="flex flex-col sm:flex-row gap-6 cursor-pointer p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        @click="toggleExpand(index)">
                        <!-- Logo Column (Always Visible) -->
                        <div class="flex-shrink-0">
                            <div
                                class="w-34 h-14 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center p-1 shadow-sm">
                                <img v-if="item.logo" :src="item.logo" :alt="item.title"
                                    class="w-full h-full object-contain" />
                                <span v-else class="text-2xl">🏢</span>
                            </div>
                        </div>

                        <!-- Content Column -->
                        <div class="flex-grow">
                            <div class="flex items-center justify-between gap-3">
                                <div class="flex flex-col">
                                    <div class="flex items-center gap-3 flex-wrap">
                                        <h3
                                            class="text-xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            {{ item.title }}
                                        </h3>
                                        <span v-if="index === 0"
                                            class="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                            {{ t.timeline.latest }}
                                        </span>
                                    </div>
                                    <time class="text-sm font-medium text-slate-500 font-mono mt-1">
                                        {{ item.year }}
                                    </time>
                                </div>

                                <!-- Chevron Icon -->
                                <div class="flex-shrink-0 ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-slate-400 transition-transform duration-300"
                                        :class="{ 'rotate-180': expandedIndex === index }">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>

                            <p class="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                                {{ item.description }}
                            </p>

                            <!-- Expanded Content -->
                            <div class="grid transition-all duration-300 ease-in-out"
                                :class="expandedIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'">
                                <div class="overflow-hidden">
                                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700/50">
                                        <p v-if="item.details"
                                            class="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                            {{ item.details }}
                                        </p>

                                        <ul v-if="item.points && item.points.length" class="space-y-2">
                                            <li v-for="(point, pIndex) in item.points" :key="pIndex"
                                                class="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                <span
                                                    class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                                                <span>{{ point }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
