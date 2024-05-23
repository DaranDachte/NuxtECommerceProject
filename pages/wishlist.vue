<template>
  <div class="w-full mx-auto h-[100vh]">
    <h1 class="mb-10 text-center text-2xl font-bold">
      {{ wishlistMessage }}
    </h1>
    <div
      class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
    >
      <div class="rounded-lg md:w-2/3">
        <div
          v-for="(product, index) in wishListStore.wishList"
          :key="product.id"
          class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <img
            :src="product?.images[0]"
            alt="product-image"
            class="w-full rounded-lg sm:w-40 max-h-20 max-w-40"
          />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">
                {{ capitalizeFirstLetter(product?.title ?? "") }}
              </h2>
              <p class="mt-1 text-xs text-gray-700">
                {{ capitalizeFirstLetter(product?.category ?? "") }}
              </p>
            </div>
            <div
              class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
            >
              <div class="flex items-center border-gray-100">
                <span
                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >-</span
                >
                <input
                  class="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  v-model="product.quantity"
                  min="1"
                />
                <span
                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >+</span
                >
              </div>
              <div class="flex items-center space-x-4">
                <p>{{ product?.price }} Euro</p>

                <Icon
                  name="i-ic:sharp-delete-forever"
                  class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                  @click="wishListStore.removeFromWishList(product)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWishListStore } from "../store/wishListStore";
import { useRoute } from "vue-router";
const route = useRoute();
const productId = route.params.id;

const wishListStore = useWishListStore();

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

console.log("wishListStore:", wishListStore);
console.log("wishListStore.wishList:", wishListStore.wishList);

// Получаем информацию о продукте из стора по его ID
const product: Product | undefined = wishListStore.wishList.find(
  (product: Product) => product.id === Number(productId)
);

const wishlistMessage = computed(() => {
  const wishLength = wishListStore.wishList.length;
  if (wishLength === 0) {
    return "Your wishlist is empty";
  } else if (wishLength === 1) {
    return "You have 1 item on your wishlist";
  } else {
    return `You have ${wishLength} items on your wishlist`;
  }
});
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>
