<template>
  <div class="flex">
    <CategoriesList
      :categories="categoriesStore.categories"
      :activeCategory="categoriesStore.activeCategory"
      :onCategoryClick="categoriesStore.onCategoryClick"
    />
    <div>
      <ProductsList :products="categoriesStore.products" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "@/store/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>
