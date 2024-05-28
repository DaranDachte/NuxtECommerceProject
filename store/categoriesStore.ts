import { defineStore } from "pinia";
import axios from "axios";

export const useCategoriesStore = defineStore("categoriesStore", () => {
  const categories = ref([]);
  const activeCategory = ref("");
  const products = ref([]);
  const error = ref("");

  const fetchCategories = async () => {
    try {
      const { data: categoriesFromAPI } = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      // Убедитесь, что вы сохраняете данные в нужном формате
      categories.value = categoriesFromAPI;
      activeCategory.value = categoriesFromAPI[0]?.slug; // Используем slug
      error.value = "";
      // Получаем продукты для первой категории
      if (activeCategory.value) {
        await fetchProductsByCategory(activeCategory.value);
      }
    } catch (err) {
      error.value = "Error fetching data";
      categories.value = [];
      products.value = [];
    }
  };

  const fetchProductsByCategory = async (categorySlug: string) => {
    try {
      const { data: productsFromAPI } = await axios.get(
        `https://dummyjson.com/products/category/${categorySlug}`
      );
      console.log("Products from API:", productsFromAPI);
      products.value = productsFromAPI.products;
      error.value = "";
    } catch (err) {
      error.value = "Error fetching products";
      products.value = [];
    }
  };

  const onCategoryClick = async (categorySlug: string) => {
    activeCategory.value = categorySlug;
    await fetchProductsByCategory(categorySlug);
  };

  fetchCategories();

  return { categories, activeCategory, products, error, onCategoryClick };
});
