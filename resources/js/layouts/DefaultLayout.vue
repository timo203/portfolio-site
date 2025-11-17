<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen min-w-screen bg-slate-950 text-slate-100 flex flex-col">
    <Navbar />

    <main class="flex-1">
      <!-- Page content goes here -->
      <slot></slot>
    </main>

    <footer class="border-t border-slate-800 px-8 py-4 text-xs text-slate-500">
      © {{ new Date().getFullYear() }} Timo – Backend Developer
    </footer>
  </div>
</template>
