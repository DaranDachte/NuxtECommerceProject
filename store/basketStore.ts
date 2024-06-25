import { defineStore } from "pinia";

export const useBasketStore = defineStore("basketStore", () => {
  const basket = ref<any[]>([]);
  const showAlert = ref(false);
  const removeFromBasket = (product: any) => {
    basket.value = basket.value.filter((item) => item !== product);
    console.log(basket.value);
  };

  const addToBasket = (product: any) => {
    const existingProduct = basket.value.find((item) => item.id === product.id);

    if (!existingProduct) {
      basket.value.push(product);
    } else {
      showAlert.value = true;
      setTimeout(() => {
        showAlert.value = false;
      }, 5000);
    }
    console.log("Current basket:", basket.value);
  };

  return {
    basket,
    removeFromBasket,
    addToBasket,
    showAlert,
  };
});
