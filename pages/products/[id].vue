<template>
  <div class="grid grid-cols-4 mt-5 gap-x-2 px-4 w-full">
    <div
      class="col-span-1 p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      <p
        class="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400 leading-10"
      >
        Our store offers thousands of products at an affordable price. You can
        find from us everything according to your taste. If you have any
        suggestions - how we can improve our work, or you have not found the
        products you need, or you just want to communicate with us - please
        follow this link and send us a message. We will read it carefully and
        contact you if necessary.
      </p>
      <NuxtLink
        to="/contact"
        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <Icon name="i-ic:baseline-contact-mail" /> &nbsp; Go to contact page
      </NuxtLink>
    </div>
    <div
      class="col-span-2 flex-grow p-4 mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      <div>
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
          class="w-[25rem] mx-auto"
        >
          <img :src="item" class="max-h-[25rem]" draggable="false" />
        </UCarousel>
      </div>
      <div class="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400">
        <p class="flex items-center">
          <Icon name="flat-color-icons:about" /> &nbsp;{{ product?.title }}
        </p>
        <p class="flex items-center">
          <Icon name="i-fluent-emoji-high-contrast:id-button" color="#4FB563" />
          &nbsp;Product ID: {{ productId }}
        </p>
        <p class="flex items-center">
          <Icon
            name="i-fluent-emoji-high-contrast:green-square"
            color=""
          />&nbsp;Category: {{ capitalizeFirstLetter(product?.category ?? "") }}
        </p>
        <p class="flex items-center">
          <Icon
            name="i-fluent-emoji-high-contrast:clipboard"
            color="#4FB5A9"
          />&nbsp;Product Name:
          {{ product?.brand }}
        </p>
        <p class="flex items-center">
          <Icon
            name="i-ic:baseline-assignment-turned-in"
            color="#9414AD"
          />&nbsp; Stock status:
          {{ product?.availabilityStatus }}
        </p>
        <p class="flex items-center">
          <Icon name="i-heroicons-solid:home" color="#604FB5" />&nbsp;In stock
          quantity:
          {{ product?.stock }}
        </p>
        <p class="flex items-center">
          <Icon
            name="i-ic:baseline-app-registration"
            color="#14AD8F"
          />&nbsp;Minimum order quantity:
          {{ product?.minimumOrderQuantity }}
        </p>
        <p class="flex items-center">
          <Icon name="i-ic:baseline-info" color="#14AD8F" />&nbsp;Shipping
          Information:
          {{ product?.shippingInformation }}
        </p>
        <p class="flex items-center">
          <Icon name="i-cryptocurrency-color:eur" />&nbsp;Price:
          {{ product?.price }} Euro
        </p>
        <p class="flex items-center">
          <Icon name="i-subway:star" color="#FFD700" />&nbsp;Rating:
          {{ product?.rating }}
        </p>
        <p class="flex items-center">
          <Icon name="i-grommet-icons:task" color="#1714AD" /> &nbsp; Size: W:
          {{ product?.dimensions.width }} x H:
          {{ product?.dimensions.height }} x D:
          {{ product?.dimensions.depth }}
        </p>
        <p class="flex items-center">
          <Icon name="i-ic:twotone-line-weight" color="#849A96" /> &nbsp;
          Weight:
          {{ product?.weight }}
        </p>
        <p class="flex items-center">
          <Icon
            name="i-heroicons-solid:arrow-left-on-rectangle"
            color="#1473AD"
          />
          &nbsp; Return policy: {{ product?.returnPolicy }}
        </p>

        <p>Description: {{ product?.description }}</p>
      </div>

      <div class="flex justify-between">
        <NuxtLink
          to="/"
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Icon name="i-ic:baseline-keyboard-arrow-left" /> &nbsp; Back to
          Catalog
        </NuxtLink>
        <NuxtLink
          href="#"
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Icon name="i-ic:baseline-local-grocery-store" /> &nbsp; Add to cart
        </NuxtLink>
      </div>
    </div>

    <div
      class="col-span-1 flex-grow p-4 max-w-xl mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      <div>
        <p
          class="mb-3 text-xl font-bold text-gray-700 dark:text-gray-400 leading-10"
        >
          You can add your favorite item to your wish list and come back to it
          later. Maybe the price becomes more affordable, maybe you want to see
          the details of the item again.
        </p>
        <div class="flex justify-between">
          <button
            @click="wishListStore.addToWishList(product)"
            class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Icon name="i-heroicons-solid:heart" /> &nbsp; Add to wish list
          </button>

          <NuxtLink
            to="/wishlist"
            class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Icon name="i-heroicons-solid:heart" /> &nbsp; Go to wish list
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col">
        <ReviewsList v-if="product?.id" :productId="product.id" />
      </div>
    </div>
  </div>

  <div class="relative">
    <UAlert
      v-if="wishListStore.showAlert"
      description="You have already added this item to your wish list."
      title="Heads up!"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[5rem] bg-gradient-to-r from-red-200 to-red-600"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCategoriesStore } from "../../store/categoriesStore";
import { useWishListStore } from "../../store/wishListStore";

const categoriesStore = useCategoriesStore();
const wishListStore = useWishListStore();
const route = useRoute();
const productId = route.params.id;
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
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

// Получаем информацию о продукте из стора по его ID
const product: Product | undefined = categoriesStore.products.find(
  (product: Product) => product.id === Number(productId)
);

const items = (product as unknown as Product)?.images || [];
</script>
