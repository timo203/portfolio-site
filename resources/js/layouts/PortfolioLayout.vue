<script setup>
import PortfolioNavbar from '@/components/PortfolioNavbar.vue';
</script>

<template>
    <div class="min-h-screen font-sans antialiased relative text-slate-900 dark:text-slate-100 selection:bg-emerald-500/30 overflow-x-hidden">
        <!-- Global Fancy Background -->
        <!-- Global Fancy Background -->
        <div class="fixed inset-0 -z-50 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <!-- Light Mode Background -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:hidden"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:hidden"></div>

            <!-- Dark Mode Background (Original) -->
            <!-- <div class="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> -->
        </div>

        <PortfolioNavbar />
        <main class="relative z-10 pt-5">
            <slot></slot>
        </main>
        <footer class="py-6 md:px-8 md:py-0 relative z-10 border-t border-slate-800/50 bg-slate-950/70 backdrop-blur-sm">
            <div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p class="text-balance text-center text-sm leading-loose text-slate-400 md:text-left">
                    Built by Timo. The source code is available on <a href="#" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4 hover:text-emerald-400 transition-colors">GitHub</a>.
                </p>
            </div>
        </footer>
    </div>
</template>
