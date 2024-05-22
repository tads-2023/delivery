<script setup>
import FormSearch from '@/components/FormSearch.vue';
import CategoryItem from '@/components/CategoryItem.vue';
import { onMounted } from 'vue'

import { useCategoriesStore } from '@/stores/categories';

const store = useCategoriesStore();

onMounted(() => {
    store.fetchCategories();
})
</script>

<template>
    <main>
        <h1>Categories</h1>
        <FormSearch />
        
        <div class="category-list">
            <CategoryItem 
                v-for="category in store.categories"
                :category="category"
            />
        </div>
    </main>
</template>

<style scoped>
    .category-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>