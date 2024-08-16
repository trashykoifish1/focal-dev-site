<template>
  <div class="container mx-auto px-4 bg-cream min-h-screen">
    <h1 class="text-4xl font-serif text-sepia mb-8 pt-8 text-center">
      Photo Gallery
    </h1>
    <div class="divider divider-accent">
      <CameraIcon class="h-10 w-10 text-sepia" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(image, index) in imageUrls"
        :key="image"
        class="aspect-square overflow-hidden rounded-lg shadow-lg"
      >
        <img
          :src="image"
          :alt="`Gallery image ${index + 1}`"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          @click="openLightbox(index)"
        />
      </div>
    </div>

    <!-- Lightbox (unchanged) -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CameraIcon,
} from "@heroicons/vue/24/solid";
import { galleryImages } from "~/utils/galleryImages";

const baseUrl = "/focal-dev-site"; // Add this line

const imageUrls = computed(() =>
  galleryImages.map((image) => `${baseUrl}/pictures/${image}`)
);

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

function openLightbox(index) {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function nextImage() {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % imageUrls.value.length;
}

function prevImage() {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + imageUrls.value.length) %
    imageUrls.value.length;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
