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
          class="flex justify-between items-start mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <img
            :src="product.images[0]"
            alt="product-image"
            class="w-full rounded-lg sm:w-40"
          />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">
                {{ product.title }}
              </h2>
              <p class="mt-1 text-xs text-gray-700">
                {{ product.description }}
              </p>
              <p class="mt-1 text-xs text-gray-700">
                Category: {{ capitalizeFirstLetter(product?.category ?? "") }}
              </p>
            </div>
            <div
              class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
            >
              <div class="flex items-center border-gray-100">
                <span
                  @click="decreaseQuantity(product.id)"
                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </span>
                <input
                  class="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  v-model.number="quantities[product.id]"
                  min="1"
                />
                <span
                  @click="increaseQuantity(product.id)"
                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{{ product.price }} Euro</p>
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
          <p class="text-gray-700">{{ subtotal }} Euro</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">4.99 Euro</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{{ total }} Euro</p>
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
import { computed } from "vue";
import { useBasketStore } from "~/store/basketStore";

const basketStore = useBasketStore();

const basketMessage = computed(() => {
  const basketLength = basketStore.basket.length;
  if (basketLength === 0) {
    return "Your basket is empty";
  } else if (basketLength === 1) {
    return "You have 1 item in your basket";
  } else {
    return `You have ${basketLength} items in your basket`;
  }
});

const quantities = ref<{ [key: string]: number }>({});
basketStore.basket.forEach((product) => {
  if (!quantities.value[product.id]) {
    quantities.value[product.id] = 1; // Default quantity
  }
});

const subtotal = computed(() => {
  return basketStore.basket.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
});

const total = computed(() => {
  const shipping = 4.99;
  return subtotal.value + shipping;
});

const increaseQuantity = (productId: string | number) => {
  quantities.value[productId]++;

  console.log(increaseQuantity);
};

const decreaseQuantity = (productId: string | number) => {
  if (quantities.value[productId] > 1) {
    quantities.value[productId]--;
  }
};
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>
