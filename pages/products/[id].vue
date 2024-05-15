<template>
  <div
    class="max-w-xl mt-10 p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="max-w-[50rem] rounded-xl">
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg',
        }"
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-left-12',
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-right-12',
        }"
        arrows
        class="w-64 mx-auto"
      >
        <img :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </div>

    <h5
      class="mb-2 text-2xl font-bold mt-4 tracking-tight text-gray-900 dark:text-white"
    >
      <Icon name="flat-color-icons:about" /> {{ product?.title }}
    </h5>
    <div class="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400">
      <p>Product ID: {{ productId }}</p>
      <p>Category: {{ product?.category }}</p>
      <p>Product Name: {{ product?.brand }}</p>

      <p>Description: {{ product?.description }}</p>
      <p>In stock: {{ product?.stock }}</p>
      <p>Price: {{ product?.price }} Euro</p>
      <p>
        <Icon name="line-md:star-twotone" color="#60CBD2" />Rating:
        {{ product?.rating }}
      </p>
    </div>

    <div class="flex justify-between">
      <NuxtLink
        to="/"
        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <!-- Иконка -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>

        Back to Catalog
      </NuxtLink>
      <NuxtLink
        href="#"
        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <!-- Иконка -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </NuxtLink>
    </div>
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
const items = (product as unknown as Product)?.images || [];
</script>
