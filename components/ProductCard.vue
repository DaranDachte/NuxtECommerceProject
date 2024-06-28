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
        <button
          class="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          @click="basketStore.addToBasket(product)"
        >
          <Icon name="i-ic:baseline-local-grocery-store" class="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <div class="relative">
    <UAlert
      v-if="basketStore.showAlert"
      description="You have already added this item to your basket."
      title="Heads up!"
      class="fixed top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[5rem] bg-gradient-to-r from-red-200 to-red-600"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useBasketStore } from "~/store/basketStore";

const basketStore = useBasketStore();
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
