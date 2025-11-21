<script setup>
import PortfolioLayout from '@/layouts/PortfolioLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<template>
    <PortfolioLayout>
        <div id="hero">
            <HeroSection />
        </div>
        <div id="skills">
            <SkillsSection />
        </div>
        <div id="timeline">
            <TimelineSection />
        </div>
        <div id="contact">
            <ContactSection />
        </div>
    </PortfolioLayout>
</template>
