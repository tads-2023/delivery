<script setup>
import { useCategoriesStore } from '@/stores/categories';
import { useRouter } from 'vue-router';
const store = useCategoriesStore();
const props = defineProps(["category"])
const router = useRouter();

const onCategoryClick = () => {
    store.selectCategory(props.category.name);
    router.push("/detalhe-categoria")
}

</script>

<template>
    <div class="category-item" @click="onCategoryClick">
        <img :src="category.image" alt="Foto da categoria">
        <h3>{{ category.name }}</h3>
        <span>({{ category.quantity }})</span>
    </div>
</template>

<style scoped>
.category-item {
    width: 50%;
    padding: 4px;
    border: solid 1px #A9A9A9;
}

img {
    width: 100%;
}
</style>