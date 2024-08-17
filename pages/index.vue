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

    <section class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 mx-5">
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
      class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 mt-10 mx-auto font-mono text-cream"
    >
      <div class="mockup-code">
        <pre data-prefix="$"><code>./frontend</code></pre>
        <pre data-prefix=">" class="text-warning"><code>vue.js</code></pre>
        <pre data-prefix=">" class="text-warning"><code>nuxt.js</code></pre>
        <pre data-prefix=">" class="text-warning"><code>tailwindcss</code></pre>
        <pre data-prefix=">" class="text-warning"><code>daisyui</code></pre>
        <pre data-prefix=">" class="text-warning"><code>vuetify</code></pre>
        <pre data-prefix=">" class="text-success"><code>done...</code></pre>
      </div>
      <div class="mockup-code">
        <pre data-prefix="$"><code>./backend</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>springboot | java</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>django | python</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>postgresql && sqlite</code></pre>
        <pre data-prefix=">" class="text-warning"><code>docker</code></pre>
        <pre
          data-prefix=">"
          class="text-warning"
        ><code>aks && openshift | kubernetes</code></pre>
        <pre data-prefix=">" class="text-success"><code>done...</code></pre>
      </div>
    </section>
    <div class="divider divider-accent">
      <h2 class="text-3xl font-serif text-sepia">Get In Touch</h2>
    </div>
    <ContactSection />
  </div>
</template>

<script setup>
import { Bars3Icon, CodeBracketIcon } from "@heroicons/vue/24/solid";
import PolaroidCard from "~/components/PolaroidCard.vue";
import ContactSection from "~/components/ContactSection.vue";

const highlightImages = [
  {
    src: "highlight/hl-1.jpg",
    alt: "Picture of a basketball court, with the basket in the center, with trees in the foreground, framing the court.",
    caption:
      "Pocket Dispo / This was taken the week before my internship started. I was scared I won't get the chance to use my camera for a while.",
  },
  {
    src: "highlight/hl-2.jpg",
    alt: "Picture of a tree scattered with white flowers, with a blue sky in the background.",
    caption:
      "Pocket Dispo / So I decided to take a scooter ride around my neighborhood with my new cheap lens out for a spin.",
  },
];

const additionalImages = [
  {
    src: "highlight/hl-3.JPG",
    alt: "Vietnam District 1 city skyline",
    caption:
      "This was taken in Vietnam. It was one of my favorite spots. A lot of memories here.",
  },
  {
    src: "highlight/hl-4.jpg",
    alt: "Phoenix freeway with lightstreaks from cars, captured using long exposure.",
    caption:
      "A long exposure shot of the I10. Night photography was never my strong suit.",
  },
  {
    src: "highlight/hl-5.jpg",
    alt: "Tiffany Day performing on stage. The stage is filled with smoke with light penetrating through the smoke creating god rays.",
    caption:
      "ASU Culturefest 2023. Tiffany Day and Thuy were the headliners. Still don't like how the pic turns out so grainy though.",
  },
  {
    src: "highlight/hl-6.jpg",
    alt: "A black and white photo of the sky and clouds.",
    caption:
      "For some reason I love the way the clouds look in black and white edits.",
  },
];
</script>
