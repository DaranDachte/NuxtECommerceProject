<template>
  <div>
    <div class="flex flex-col items-center w-[12rem]">
      <h1 class="mb-5">Categories</h1>
      <ul
        class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li
          class="hover:cursor-pointer"
          v-for="category in categories"
          :key="category"
          @click="onCategoryClick(category)"
          :class="{ 'font-bold': category === activeCategory }"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<Props>();
interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}
</script>
