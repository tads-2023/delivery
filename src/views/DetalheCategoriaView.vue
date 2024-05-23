<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';
import { onMounted } from 'vue';
import FormSearch from '@/components/FormSearch.vue'
import ProductItem from '@/components/ProductItem.vue'

const categoryStore = useCategoriesStore();
const productStore = useProductsStore();

onMounted(() => {
    productStore.fetchProducts();
})

</script>

<template>
    <main>
        <h1>{{ categoryStore.selectedCategory }}</h1>
        <FormSearch />

        <ProductItem 
            v-for="product in productStore.products"
            :produto="product">
        </ProductItem>
    </main>
</template>

<style scoped>
    .category-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>