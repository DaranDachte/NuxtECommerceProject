<template>
  <div class="flex flex-col">
    <h3 class="text-center text-[1.5rem] font-medium">
      This could have been your ad
    </h3>
    <button
      class="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-2"
      @click="getRandomGif"
    >
      Push it many times
    </button>
    <img
      class="max-h-[12rem]"
      v-if="currentGif"
      :src="currentGif"
      alt="Random GIF"
    />
  </div>
</template>

<script setup lang="ts">
import gif1 from "../static/gifs/gif1.gif";
import gif2 from "../static/gifs/gif2.gif";
import gif3 from "../static/gifs/gif3.gif";
import gif4 from "../static/gifs/gif4.gif";
import gif5 from "../static/gifs/gif5.gif";
import gif6 from "../static/gifs/gif6.gif";
import gif7 from "../static/gifs/gif7.gif";
import gif8 from "../static/gifs/gif8.gif";
import gif9 from "../static/gifs/gif9.gif";
import gif10 from "../static/gifs/gif10.gif";
const gifArray = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10];

const gifRoulette = () => {
  const randomIndex = Math.floor(Math.random() * gifArray.length);
  return gifArray[randomIndex];
};

const currentGif = ref("");

const getRandomGif = () => {
  currentGif.value = gifRoulette();
};
</script>
