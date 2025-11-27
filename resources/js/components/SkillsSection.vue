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
                        <!-- <span class="p-1 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400"> -->
                            <img src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png " width="45px" height="45px" alt="" title="" class="img-small">
                        <!-- </span> -->
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
                        <span class="flex items-center justify-center rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 w-[45px] h-[45px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 16 16"><g fill="none"><path fill="url(#fluentColorPeopleTeam160)" d="M12.562 13A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 2.562 2.5"/><path fill="url(#fluentColorPeopleTeam167)" fill-opacity=".5" d="M12.562 13A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 2.562 2.5"/><path fill="url(#fluentColorPeopleTeam161)" d="M3.562 13A2.5 2.5 0 0 0 6 10.5V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 3.562 13"/><path fill="url(#fluentColorPeopleTeam168)" fill-opacity=".5" d="M3.562 13A2.5 2.5 0 0 0 6 10.5V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 3.562 13"/><path fill="url(#fluentColorPeopleTeam162)" d="M5 7.993A1 1 0 0 1 6 7h4a1 1 0 0 1 1 1v3a3 3 0 0 1-.146.927A3.001 3.001 0 0 1 5 11z"/><path fill="url(#fluentColorPeopleTeam163)" d="M5 7.993A1 1 0 0 1 6 7h4a1 1 0 0 1 1 1v3a3 3 0 0 1-.146.927A3.001 3.001 0 0 1 5 11z"/><path fill="url(#fluentColorPeopleTeam164)" d="M12.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/><path fill="url(#fluentColorPeopleTeam165)" d="M3.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/><path fill="url(#fluentColorPeopleTeam166)" d="M8 2.002a1.998 1.998 0 1 0 0 3.996a1.998 1.998 0 0 0 0-3.996"/><defs><linearGradient id="fluentColorPeopleTeam160" x1="11.189" x2="14.454" y1="7.797" y2="12.142" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7A41DC"/><stop offset="1" stop-color="#5B2AB5"/></linearGradient><linearGradient id="fluentColorPeopleTeam161" x1="2.189" x2="5.454" y1="7.797" y2="12.142" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient><linearGradient id="fluentColorPeopleTeam162" x1="6.427" x2="10.205" y1="7.93" y2="13.101" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#BD96FF"/><stop offset="1" stop-color="#9C6CFE"/></linearGradient><linearGradient id="fluentColorPeopleTeam163" x1="8" x2="13.697" y1="6.166" y2="15.29" gradientUnits="userSpaceOnUse"><stop stop-color="#885EDB" stop-opacity="0"/><stop offset="1" stop-color="#E362F8"/></linearGradient><linearGradient id="fluentColorPeopleTeam164" x1="11.713" x2="13.242" y1="3.399" y2="5.84" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7A41DC"/><stop offset="1" stop-color="#5B2AB5"/></linearGradient><linearGradient id="fluentColorPeopleTeam165" x1="2.713" x2="4.242" y1="3.399" y2="5.84" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9C6CFE"/><stop offset="1" stop-color="#7A41DC"/></linearGradient><linearGradient id="fluentColorPeopleTeam166" x1="6.952" x2="8.989" y1="2.533" y2="5.785" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#BD96FF"/><stop offset="1" stop-color="#9C6CFE"/></linearGradient><radialGradient id="fluentColorPeopleTeam167" cx="0" cy="0" r="1" gradientTransform="matrix(4.02365 0 0 8.1916 9.214 9.86)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3B148A"/><stop offset="1" stop-color="#3B148A" stop-opacity="0"/></radialGradient><radialGradient id="fluentColorPeopleTeam168" cx="0" cy="0" r="1" gradientTransform="matrix(-4.45284 0 0 -9.06537 7.62 9.86)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3B148A"/><stop offset="1" stop-color="#3B148A" stop-opacity="0"/></radialGradient></defs></g></svg>
                        </span>
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
