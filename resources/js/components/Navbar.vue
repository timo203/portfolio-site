<!-- resources/js/components/Navbar.vue -->
<template>
  <nav class="w-full flex items-center justify-between px-8 py-4 bg-slate-900 border-b border-slate-800 backdrop-blur">
    <div class="text-lg font-semibold">
      <span class="text-emerald-400">&gt;</span> Timo<span class="text-slate-400">.dev</span>
    </div>

    <ul class="flex gap-9 text-sm text-slate-300">
        <li>
          <router-link to="/" class="hover:text-emerald-400">
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/career" class="hover:text-emerald-400">
            Career
          </router-link>
        </li>
    </ul>
  </nav>
</template>

<script setup>
</script>
