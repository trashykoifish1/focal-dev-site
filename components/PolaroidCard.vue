<template>
  <div
    class="polaroid-card bg-white p-5 shadow-lg transform transition-all duration-300 hover:scale-105"
  >
    <div class="aspect-square overflow-hidden">
      <img
        :src="src"
        :alt="alt"
        class="w-full h-full object-cover transition-transform duration-10000 ease-linear hover:scale-110 hover:translate-x-[5%]"
      />
    </div>
    <div class="p-2 text-center">
      <p class="text-2xl text-gray-700 font-handwriting font-extrabold">
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  caption: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.polaroid-card {
  background-color: #fff;
  border: 2px solid #ffffff;
  border-radius: 5px;
}

.polaroid-card:hover img {
  animation: pan 5s linear infinite alternate;
}

@keyframes pan {
  from {
    transform: scale(1.1) translateX(0);
  }
  to {
    transform: scale(1.1) translateX(5%);
  }
}
</style>
