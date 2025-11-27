<script setup>
import { reactive } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

import PortfolioLayout from '@/layouts/PortfolioLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import ContactSection from '@/components/ContactSection.vue';

const visibilityMap = reactive({
    hero: false,
    skills: false,
    timeline: false,
    contact: true,
});

const onElementVisibility = (el, id) => {
    if (!el) return;

    useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
            visibilityMap[id] = isIntersecting;
        },
        {
            threshold: 0.25,
            rootMargin: '-10% 0px -10% 0px'
        }
    );
};
</script>

<template>
    <PortfolioLayout>
        <div id="hero" :ref="el => onElementVisibility(el, 'hero')"
            class="min-h-screen snap-start flex flex-col justify-center transition-all duration-1200 ease-in-out transform"
            :class="visibilityMap['hero'] ? 'opacity-100 scale-110 blur-0' : 'opacity-30 scale-40 blur-md'">
            <HeroSection />
        </div>
        <div id="skills" :ref="el => onElementVisibility(el, 'skills')"
            class="min-h-screen snap-start flex flex-col justify-center transition-all duration-1200 ease-in-out transform"
            :class="visibilityMap['skills'] ? 'opacity-100 scale-120 blur-0' : 'opacity-30 scale-40 blur-md'">
            <SkillsSection />
        </div>
        <div id="timeline" :ref="el => onElementVisibility(el, 'timeline')"
            class="min-h-screen snap-start flex flex-col justify-center transition-all duration-1200 ease-in-out transform"
            :class="visibilityMap['timeline'] ? 'opacity-100 scale-110 blur-0' : 'opacity-30 scale-40 blur-md'">
            <TimelineSection />
        </div>
        <div id="contact" :ref="el => onElementVisibility(el, 'contact')"
            class="min-h-screen snap-start flex flex-col justify-center transition-all duration-1200 ease-in-out transform"
            :class="visibilityMap['contact'] ? 'opacity-100 scale-120 blur-0' : 'opacity-30 scale-40 blur-md'">
            <ContactSection />
        </div>
    </PortfolioLayout>
</template>
