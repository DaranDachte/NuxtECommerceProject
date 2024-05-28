<template>
  <div>
    <h5 class="mt-5 text-2xl italic font-medium">Our customers reviews</h5>
    <div v-if="product" class="flex flex-col mt-5">
      <div
        v-for="review in (product as any).reviews"
        :key="review.id"
        class="mb-5"
      >
        <ReviewCard :review="review" :productId="(product as any).id" />
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "@/store/categoriesStore";

const categoriesStore = useCategoriesStore();
const props = defineProps<{
  productId: number;
}>();

type Review = {
  id: number;
  [key: string]: any;
};

type Product = {
  id: number;
  reviews: Review[];
  [key: string]: any;
};

const products: Product[] = categoriesStore.products;
const product = computed(() =>
  categoriesStore.products.find(
    (product: Product) => product.id === props.productId
  )
);
</script>
