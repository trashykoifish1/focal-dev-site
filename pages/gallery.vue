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

    <!-- Lightbox -->
    <Transition name="fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        @click="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-cream text-2xl"
        >
          <XMarkIcon class="h-8 w-8" />
        </button>
        <button
          @click.stop="prevImage"
          class="absolute left-4 text-cream text-4xl"
        >
          <ChevronLeftIcon class="h-12 w-12" />
        </button>
        <button
          @click.stop="nextImage"
          class="absolute right-4 text-cream text-4xl"
        >
          <ChevronRightIcon class="h-12 w-12" />
        </button>
        <img
          :src="imageUrls[currentImageIndex]"
          :alt="`Gallery image ${currentImageIndex + 1}`"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </Transition>
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

const baseUrl = "/focal-dev-site"; // You might want to make this dynamic based on environment

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
