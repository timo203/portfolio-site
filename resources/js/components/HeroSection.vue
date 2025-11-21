<script setup>
import { Button } from '@/components/ui/button'
import { onMounted, ref, watch } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useNavigation } from '@/composables/useNavigation'

const { scrollToSection } = useNavigation()
const { t } = useLanguage()

const displayedText = ref('')
const fullText = ref(t.value.hero.role)
const typingSpeed = 100
let timeoutId = null

// Watch for language changes to update the typing text
watch(() => t.value.hero.role, (newRole) => {
    if (timeoutId) clearTimeout(timeoutId)
    fullText.value = newRole
    displayedText.value = ''
    typeText()
})

const typeText = () => {
    if (timeoutId) clearTimeout(timeoutId)
    let i = 0
    const currentFullText = fullText.value
    const type = () => {
        if (i < currentFullText.length) {
            displayedText.value += currentFullText.charAt(i)
            i++
            timeoutId = setTimeout(type, typingSpeed)
        }
    }
    type()
}

onMounted(() => {
    typeText()
})

import { onUnmounted } from 'vue'
onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
})

</script>

<template>
    <section class="relative overflow-hidden py-20 md:py-32">
        <!-- Removed local background to use global fancy background -->

        <div class="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div class="flex max-w-[980px] flex-col items-start gap-4 animate-fade-in-up">
                <div class="inline-flex items-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400 ">
                    🎉 <span class="ml-1">{{ t.hero.available }}</span>
                </div>
                <h1 class="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-neutral-700 dark:text-white">
                    {{ t.hero.greeting }} <br />
                    <span class="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">{{ displayedText }}</span><span class="animate-blink text-emerald-400">|</span>
                </h1>
                <p class="max-w-[700px] text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
                    {{ t.hero.description }}
                </p>
            </div>
            <div class="flex gap-4 animate-fade-in-up delay-200">
                <a href="#contact" @click.prevent="scrollToSection('contact')">
                    <Button size="lg" class="bg-emerald-600 hover:bg-emerald-500 text-white border-0 shadow-[0_0_20px_rgba(5,150,105,0.4)] transition-all hover:scale-105">{{ t.hero.contactBtn }}</Button>
                </a>
                <Button variant="outline" size="lg" class="border-slate-700 text-slate-300 dark:hover:bg-rose-700 hover:bg-rose-700 hover:text-white">{{ t.hero.downloadBtn }}</Button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-blink {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

.delay-200 {
    animation-delay: 0.2s;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
