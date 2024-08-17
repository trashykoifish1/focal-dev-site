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
          <CameraIcon class="h-8 w-8" />
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
        <p>
          &copy; {{ new Date().getFullYear() }} Khoi Tran. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  @apply bg-cream text-sepia font-sans;
}
</style>
