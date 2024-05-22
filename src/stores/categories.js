import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('category', () => {
  //Estado da minha app
  const categories = ref([])
  const selectedCategory = ref('')

  //Ações que o user pode fazer
  const fetchCategories = async () => {
    const request = await fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/categories");
    const response = await request.json();
    console.log("response", response);
    categories.value = response;
  }
  const selectCategory = async (categoryName) => {
    selectedCategory.value = categoryName;
  }
  
  return { 
    categories, 
    selectedCategory, 
    fetchCategories,
    selectCategory
 }
})