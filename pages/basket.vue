<template>
  <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">{{ basketMessage }}</h1>
    <div
      class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
    >
      <div class="rounded-lg md:w-2/3">
        <div
          v-for="(product, index) in basketStore.basket"
          :key="product.id"
          class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <img
            :src="product.images[0]"
            alt="product-image"
            class="w-full rounded-lg sm:w-40"
          />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div
              class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
            >
              <div class="flex items-center border-gray-100">
                <span
                  @click="decreaseProduct()"
                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </span>
                <input
                  class="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value="{{"
                  product
                  }}
                  min="1"
                />
                <span
                  @click="increaseProduct()"
                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{{}} Euro</p>
                <Icon
                  name="i-ic:sharp-delete-forever"
                  class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  @click="basketStore.removeFromBasket(product)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div
        class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
      >
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button
          class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
        >
          Check out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBasketStore } from "~/store/basketStore";
const basketStore = useBasketStore();

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

const product: Product | undefined = basketStore.basket.find(
  (product: Product) => product.id === Number(product)
);

const increaseProduct = (item: Product) => {};

const basketMessage = computed(() => {
  const basketLength = basketStore.basket.length;
  if (basketLength === 0) {
    return "Your basket is empty";
  } else if (basketLength === 1) {
    return "You have 1 item on your basket";
  } else {
    return `You have ${basketLength} items on your wishlist`;
  }
});
</script>
