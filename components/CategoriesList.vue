<template>
  <template>
    <div>
      <div class="flex flex-col items-center w-[10rem]">
        <h1 class="mb-5">Categories</h1>
        <ul
          class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
        >
          <li
            class="hover:cursor-pointer"
            v-for="category in categories"
            :key="category"
            @click="onCategoryClick(category)"
            :class="{ 'font-bold': category === activeCategory }"
          >
            {{ category }}
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true, // categories обязательный пропс
    },
    activeCategory: {
      type: String,
      required: true, // activeCategory обязательный пропс
    },
    onCategoryClick: {
      type: Function,
      required: true, // onCategoryClick обязательный пропс
    },
  },
};
</script>
