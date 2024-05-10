import { defineStore } from "pinia";
import axios from "axios";

export const useCategoriesStore = defineStore("categoriesStore", () => {
  const categories = ref([]);
  const activeCategory = ref("");
  const products = ref([]);
  const error = ref("");

  onMounted(() => {
    const fetchCategories = async () => {
      try {
        const { data: categoriesFromAPI } = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        categories.value = categoriesFromAPI;
        activeCategory.value = categoriesFromAPI[0];
        const { data: productsFromAPI } = await axios.get(
          `https://dummyjson.com/products/category/${categoriesFromAPI[0]}`
        );
        products.value = productsFromAPI.products;
        error.value = "";
      } catch (err) {
        error.value = "Error fetching data";
        categories.value = [];
        products.value = [];
      }
    };

    fetchCategories();
  });

  const onCategoryClick = async (category: string) => {
    activeCategory.value = category;
    try {
      const { data: productsFromAPI } = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      products.value = productsFromAPI.products;
    } catch (err) {
      error.value = "Something is wrong!";
      categories.value = [];
      products.value = [];
    }
  };
  return { categories, activeCategory, products, error, onCategoryClick };
});
