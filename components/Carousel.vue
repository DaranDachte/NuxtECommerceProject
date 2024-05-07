<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden h-[20rem]"
    arrows
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>

<script setup>
const items = [
  "https://picsum.photos/1200/1000?random=1",
  "https://picsum.photos/1200/100?random=2",
  "https://picsum.photos/1200/1000?random=3",
  "https://picsum.photos/1200/1000?random=4",
  "https://picsum.photos/1200/1000?random=5",
  "https://picsum.photos/1200/1000?random=6",
];
</script>
