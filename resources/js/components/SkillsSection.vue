<script setup>
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const hardSkills = [
    'PHP', 'Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Git', 'Docker', 'API Design'
]

const softSkills = [
    'Problem Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking'
]
</script>

<template>
    <section class="container mx-auto py-16 md:py-24 lg:py-32">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center animate-on-scroll">
            <h2 class="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-slate-900 dark:text-white">
                {{ t.skills.title }}
            </h2>
            <p class="max-w-[85%] leading-normal text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-7">
                {{ t.skills.subtitle }}
            </p>
        </div>
        <div class="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 mt-12">
            <Card class="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-900/60 hover:border-emerald-500/30">
                <CardHeader>
                    <CardTitle class="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <span class="p-2 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400">💻</span>
                        {{ t.skills.hardSkills }}
                    </CardTitle>
                    <CardDescription class="text-slate-600 dark:text-slate-400">{{ t.skills.hardSkillsDesc }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex flex-wrap gap-2">
                        <Badge 
                            v-for="skill in hardSkills" 
                            :key="skill" 
                            variant="secondary"
                            class="px-3 py-1 text-sm transition-transform hover:scale-110 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 cursor-default border border-slate-200 dark:border-slate-700"
                        >
                            {{ skill }}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
            <Card class="group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-900/60 hover:border-emerald-500/30">
                <CardHeader>
                    <CardTitle class="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <span class="p-2 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">🤝</span>
                        {{ t.skills.softSkills }}
                    </CardTitle>
                    <CardDescription class="text-slate-600 dark:text-slate-400">{{ t.skills.softSkillsDesc }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex flex-wrap gap-2">
                        <Badge 
                            v-for="skill in softSkills" 
                            :key="skill" 
                            variant="outline"
                            class="px-3 py-1 text-sm transition-transform hover:scale-110 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-300 cursor-default border border-slate-200 dark:border-slate-700"
                        >
                            {{ skill }}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    </section>
</template>
