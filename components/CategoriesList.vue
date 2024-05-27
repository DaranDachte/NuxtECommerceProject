<template>
  <div>
    <div class="flex flex-col items-center w-[15rem]">
      <h1 class="my50 text-2xl font-bold">Categories</h1>

      <ul class="max-w-md space-y-1 text-gray-800 dark:text-gray-400">
        <li
          v-for="category in categories"
          :key="category.slug"
          @click="onCategoryClick(category.slug)"
          class="hover:cursor-pointer italic text-xl leading-10"
          :class="{ 'font-bold': category.slug === activeCategory }"
        >
          <Icon name="i-svg-spinners:clock" color="#14A3AD" class="mr-2" />
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  slug: string;
  name: string;
}
interface Props {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const props = defineProps<Props>();
</script>
