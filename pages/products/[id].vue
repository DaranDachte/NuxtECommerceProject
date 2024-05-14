<template>
  <div>
    <h1>Product Details</h1>
    <div class="w-[50rem] mx-auto">
      <UCarousel
        v-if="product && product.images && product.images.length > 0"
        v-slot="{ image, index }"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden"
        indicators
      >
        <template v-for="(img, id) in product?.images" :key="product.id">
          <img
            :src="img"
            class="w-full"
            draggable="false"
            :alt="product.brand"
          />
        </template>
      </UCarousel>
    </div>

    <p>Product ID: {{ productId }}</p>
    <p>Product Name: {{ product?.brand }}</p>
    <!-- Другие детали продукта -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCategoriesStore } from "../../store/categoriesStore";

const categoriesStore = useCategoriesStore();

const route = useRoute();
const productId = route.params.id;

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  discountPercentage: number;
  stock: number;
  images: string[];
  thumbnail: string;
}

// Получаем информацию о продукте из стора по его ID
const product: Product | undefined = categoriesStore.products.find(
  (product: Product) => product.id === Number(productId)
);
</script>
