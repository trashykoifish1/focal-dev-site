<template>
  <div class="container mx-auto px-4 bg-cream">
    <div class="mb-10 text-4xl font-serif text-sepia text-center pt-8">
      <h2>Aspiring Programmer with a Camera</h2>
    </div>

    <div class="divider divider-accent">
      <CodeBracketIcon class="h-10 w-10 text-sepia" />
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10">
      <PolaroidCard
        v-for="(image, index) in highlightImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :caption="image.caption || ''"
      />
    </section>

    <div class="divider divider-accent">
      <h2 class="text-3xl font-serif font-semibold text-sepia">About</h2>
    </div>

    <section class="mb-12 mt-10 prose lg:prose-xl mx-auto">
      <p class="text-sepia text-justify">
        Hello world! I'm Khoi Tran, a full-stack developer with photography as a
        side hobby. Given the amount of money I spent on camera gear 😓, I
        figured I should at least showcase some of them. Enjoy!
      </p>
    </section>

    <div class="divider divider-accent">
      <Bars3Icon class="h-10 w-10 text-sepia" />
    </div>

    <section class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
      <PolaroidCard
        v-for="(image, index) in additionalImages"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :caption="image.caption || ''"
      />
    </section>

    <div class="divider divider-accent">
      <h2 class="text-3xl font-mono text-sepia">Current Tech Stack</h2>
    </div>

    <section
      class="grid grid-cols-2 md:grid-cols-1 gap-4 mb-12 mt-10 prose lg:prose-xl mx-auto font-mono text-cream"
    >
      <div class="mockup-browser bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <div class="input text-xl text-cream">Frontend</div>
        </div>
        <div class="bg-base-200 flex justify-left text-cream">
          <ul class="list-none">
            <li>Vue3</li>
            <li>Nuxt3</li>
            <li>Vuetify</li>
            <li>Tailwind CSS</li>
            <li>DaisyUI</li>
          </ul>
        </div>
      </div>
      <div class="mockup-browser bg-base-300 border">
        <div class="mockup-browser-toolbar">
          <div class="input text-xl text-cream">Backend</div>
        </div>
        <div class="bg-base-200 flex justify-left text-cream">
          <ul class="list-none">
            <li>Spring Boot (Java)</li>
            <li>Django (Python)</li>
            <li>PostgreSQL, SQLite</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </div>
      <!-- <p class="text-sepia text-center font-mono">

        <ul class="list-none text-sepia font-mono">
          <li> Backend: Java, Spring Boot, Python, Django, PostgreSQL, Docker</li>
          <li>Frontend: Vue3, Nuxt3, Vuetify, Tailwind CSS, DaisyUI</li>
        </ul>
      </p> -->
    </section>
  </div>
</template>

<script setup>
import { Bars3Icon, CodeBracketIcon } from "@heroicons/vue/24/solid";
import PolaroidCard from "~/components/PolaroidCard.vue";

const highlightImages = [
  {
    src: "highlight/hl-1.jpg",
    alt: "Description 1",
    caption:
      "Pocket Dispo / This was taken the week before my internship started. I was scared I won't get the chance to use my camera for a while.",
  },
  {
    src: "highlight/hl-2.jpg",
    alt: "Description 2",
    caption:
      "Pocket Dispo / So I decided to take a scooter ride around my neighborhood with my new cheap lens out for a spin.",
  },
];

const additionalImages = [
  { src: "/ex-3.jpg", alt: "Description 3", caption: "Additional 1" },
  { src: "/ex-4.jpg", alt: "Description 4", caption: "Additional 2" },
  { src: "pictures/ex-8.jpg", alt: "Description 8", caption: "Additional 3" },
  { src: "pictures/ex-9.jpg", alt: "Description 9", caption: "Additional 4" },
  { src: "pictures/ex-10.jpg", alt: "Description 10", caption: "Additional 5" },
  { src: "pictures/ex-11.jpg", alt: "Description 10", caption: "Additional 6" },
];
</script>
