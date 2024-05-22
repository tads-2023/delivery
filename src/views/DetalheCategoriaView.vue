<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';
import { onMounted } from 'vue';

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

        <p 
            v-for="product in productStore.products">
            {{ product.name }}
        </p>
    </main>
</template>

<style scoped>
    .category-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>