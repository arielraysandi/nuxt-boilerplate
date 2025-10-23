<script setup lang="ts">
const _controller = useLoading();
</script>

<template>
  <div v-show="_controller.isLoading" class="overlay"></div>

  <div v-show="_controller.isLoading" class="modal-wrapper">
    <div class="loader">
      <!-- <img src="/images/logo/hwg-logo-white.webp" class="w-40 animate-flip" alt="HSS" /> -->
      <!-- <div class="loader-text"></div> -->
    </div>
  </div>
</template>

<style scoped>
.animate-flip {
  animation: flip 2s infinite;
}

@keyframes flip {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
