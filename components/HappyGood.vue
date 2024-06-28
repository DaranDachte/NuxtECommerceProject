<template>
  <div
    class="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
  >
    <NuxtLink
      :to="`/products/${happyProduct?.id}`"
      class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl :hover:"
    >
      <img
        class="object-cover"
        :src="happyProduct?.images[0]"
        :alt="happyProduct?.title"
      />
      <span
        class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
      >
        {{ Math.floor(happyProduct?.discountPercentage ?? 0) }}% OFF</span
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
          {{ happyProduct?.brand }}
        </h5>
      </a>
      <div>
        <div class="mt-2 mb-2 flex sm:flex-row items-center justify-between">
          <div class="flex items-center">
            <p>
              Only
              <span class="text-3xl text-center font-bold text-slate-900">
                {{ product?.price }}€</span
              >
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          class="flex items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          @click="basketStore.addToBasket(product)"
        >
          <Icon name="i-ic:baseline-local-grocery-store" class="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCategoriesStore } from "~/store/categoriesStore";
import { useBasketStore } from "~/store/basketStore";
const categoriesStore = useCategoriesStore();
const basketStore = useBasketStore();
const happyProduct = ref<Product | null>(null);

onMounted(() => {
  happyProduct.value = categoriesStore.getRandomProduct();
});
console.log("this is happy product", happyProduct);

const route = useRoute();
const productId = route.params.id;

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

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
  returnPolicy: string;
  dimensions: Dimensions;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  weight: number;
}
const product: Product | undefined = categoriesStore.products.find(
  (product: Product) => product.id === Number(productId)
);
</script>
