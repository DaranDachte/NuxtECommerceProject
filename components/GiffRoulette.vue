<template>
  <div class="flex flex-col">
    <button @click="getRandomGif">This could have been your ad</button>
    <img v-if="currentGif" :src="currentGif" alt="Random GIF" />
  </div>
</template>

<script setup lang="ts">
const gifArray = [
  "/static/gifs/gif1.gif",
  "/static/gifs/gif2.gif",
  "/static/gifs/gif3.gif",
  "/static/gifs/gif4.gif",
  "/static/gifs/gif5.gif",
  "/static/gifs/gif6.gif",
  "/static/gifs/gif7.gif",
  "/static/gifs/gif8.gif",
  "/static/gifs/gif9.gif",
  "/static/gifs/gif10.gif",
];

const gifRoulette = () => {
  const randomIndex = Math.floor(Math.random() * gifArray.length);
  return gifArray[randomIndex];
};

const currentGif = ref("");

const getRandomGif = () => {
  currentGif.value = gifRoulette();
};
</script>
