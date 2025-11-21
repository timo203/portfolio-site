<script setup>
import { useTheme } from '@/composables/useTheme';
import { useLanguage } from '@/composables/useLanguage';
import { useNavigation } from '@/composables/useNavigation';

const { isDark, toggleTheme } = useTheme();
const { currentLang, toggleLanguage, t } = useLanguage();
const { scrollToSection } = useNavigation();

</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
        <div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
            <!-- Logo -->
            <a href="#" @click.prevent="scrollToSection('hero')" class="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <span class="text-emerald-500 dark:text-emerald-500">&gt;</span> Timo<span class="text-emerald-500 dark:text-emerald-500">.dev</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-8">
                <ul class="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <li>
                        <a href="#hero" @click.prevent="scrollToSection('hero')" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{{ t.nav.home }}</a>
                    </li>
                    <li>
                        <a href="#skills" @click.prevent="scrollToSection('skills')" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{{ t.nav.skills }}</a>
                    </li>
                    <li>
                        <a href="#timeline" @click.prevent="scrollToSection('timeline')" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{{ t.nav.timeline }}</a>
                    </li>
                    <li>
                        <a href="#contact" @click.prevent="scrollToSection('contact')" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{{ t.nav.contact }}</a>
                    </li>
                </ul>

                <div class="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6">
                    <!-- Language Switcher -->
                    <button @click="toggleLanguage" class="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider">
                        {{ currentLang }}
                    </button>

                    <!-- Theme Toggle -->
                    <button @click="toggleTheme" class="text-slate-500 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                        <span v-if="isDark">🌙</span>
                        <span v-else>☀️</span>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Button (Simple placeholder for now) -->
            <button class="md:hidden text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                ☰
            </button>
        </div>
    </nav>
</template>