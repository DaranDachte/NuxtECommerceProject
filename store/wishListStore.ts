import { defineStore } from "pinia";
import { ref } from "vue";

export const useWishListStore = defineStore("wishListStore", () => {
  const wishList = ref<any[]>([]);
  const showAlert = ref(false);
  const removeFromWishList = (product: any) => {
    wishList.value = wishList.value.filter((wish) => wish !== product); // Присваиваем новое значение отфильтрованного массива
  };

  const addToWishList = (product: any) => {
    // Проверяем, существует ли товар уже в списке
    const existingProduct = wishList.value.find(
      (item) => item.id === product.id
    );

    // Если товар уже есть в списке, не добавляем его заново
    if (!existingProduct) {
      wishList.value.push(product);
    } else {
      showAlert.value = true;
      setTimeout(() => {
        showAlert.value = false;
      }, 5000);
    }
  };

  return {
    wishList,
    removeFromWishList,
    addToWishList,
    showAlert,
  };
});
