<template>
  <div
    class="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
  >
    <NuxtLink
      :to="`/products/${product.id}`"
      class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl :hover:"
    >
      <img class="object-cover" :src="product.images[0]" :alt="product.name" />
      <span
        class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
      >
        {{ Math.floor(product.discountPercentage) }}% OFF</span
      >
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center content-center text-white text-xl font-medium opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
      >
        Click for details
      </div>
    </NuxtLink>
    <div class="mt-4 px-5 pb-5">
      <a href="#">
        <h5 class="text-2xl tracking-tight text-slate-900">
          {{ product.brand }}
        </h5>
      </a>
      <div>
        <div class="mt-2 mb-2 flex sm:flex-row items-center justify-between">
          <div class="flex items-center">
            <p>
              Only
              <span class="text-3xl text-center font-bold text-slate-900">
                {{ product.price }}€</span
              >
            </p>
          </div>

          <div class="flex items-center ml-2">
            <!-- Здесь ваши svg-иконки -->
            <span
              class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold"
            >
              ⭐ {{ product.rating }}
            </span>
          </div>
        </div>
        <div class="sm:mt-0 mb-2">
          <span class="text-xl">Original price: </span>
          <span class="text-sm text-slate-900 line-through"
            >{{ calculateOriginalPrice }} €</span
          >
        </div>
      </div>
      <div>
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
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const calculateOriginalPrice = computed(() => {
  return Math.round(
    (1 + props.product.discountPercentage / 100) * props.product.price
  );
});
</script>
