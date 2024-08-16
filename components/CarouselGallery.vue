<template>
  <div class="carousel-container">
    <swiper
      :slidesPerView="1"
      :centeredSlides="true"
      :spaceBetween="30"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :style="{
        '--swiper-navigation-color': 'sepia',
        '--swiper-pagination-color': 'white',
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img
          :src="`${baseUrl}/pictures/${image}`"
          :alt="`Gallery image ${index + 1}`"
          class="carousel-image"
          @click="$emit('open-lightbox', index)"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["open-lightbox"]);

const modules = [Pagination, Navigation, Autoplay];
</script>

<style scoped>
.carousel-container {
  height: calc(100vh - 200px); /* Adjust based on your layout */
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: cream;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Default width */
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}
</style>
