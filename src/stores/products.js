import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore =  defineStore('products', () => {
    const products = ref([]);
    const selectedProduct = ref({});

    const fetchProducts = async () => {
       const request = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/products");
       const response = await request.json()
       products.value = response; 
    }

    const selectProduct = async (product) => {
        selectedProduct.value = product;
    }

    return {
        products,
        selectedProduct,
        selectProduct,
        fetchProducts
    }
});