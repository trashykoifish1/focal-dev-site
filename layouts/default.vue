<script setup lang="ts">
import { Bars4Icon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-cream">
    <div class="navbar sticky top-0 z-50 bg-sepia text-cream shadow-md">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <Bars4Icon class="h-8 w-8" />
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sepia rounded-box w-52"
          >
            <li>
              <NuxtLink to="/" class="text-xl font-sans">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gallery" class="text-xl font-sans"
                >Gallery</NuxtLink
              >
            </li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost normal-case text-2xl font-mono">
          <div class="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 180"
              fill="none"
              stroke="currentColor"
              stroke-width="8"
              width="50"
              height="50"
            >
              <!-- Left curly brace -->
              <path
                d="M40 20 Q20 20 20 40 V70 Q20 90 10 90 Q20 90 20 110 V140 Q20 160 40 160"
              />

              <!-- Right curly brace -->
              <path
                d="M200 20 Q220 20 220 40 V70 Q220 90 230 90 Q220 90 220 110 V140 Q220 160 200 160"
              />

              <!-- Camera body -->
              <rect x="50" y="40" width="140" height="100" rx="10" />

              <!-- Camera top part -->
              <path d="M80 40 V20 H160 V40" />

              <!-- Lens -->
              <circle cx="120" cy="90" r="35" />

              <!-- Viewfinder -->
              <rect x="100" y="20" width="40" height="20" rx="5" />

              <!-- Shutter button -->
              <circle cx="175" cy="55" r="8" />

              <!-- Flash -->
              <rect x="65" y="25" width="20" height="10" rx="2" />
            </svg>
          </div>
          Focal_DEV</NuxtLink
        >
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NuxtLink to="/" class="text-xl font-sans">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery" class="text-xl font-sans">Gallery</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <main class="flex-grow pt-5">
      <slot />
    </main>

    <footer class="bg-sepia text-cream mt-5 p-4">
      <div class="container mx-auto px-4 py-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Khoi Tran.</p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  @apply bg-cream text-sepia font-sans;
}
</style>
