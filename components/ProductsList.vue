<template>
  <div>
    <!-- Используем условный рендеринг с v-if и v-else -->
    <div v-if="products.length > 0" class="flex">
      <!-- Используем v-for для создания ProductCard для каждого продукта -->
      <ProductCard
        v-for="product in products"
        :key="(product as any).id"
        :product="(product as any)"
      />
    </div>
    <Loader v-else />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Стили компонента */
</style>
