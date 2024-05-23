<script setup> 
import { useProductsStore } from '@/stores/products';
import { CollectionTag, ShoppingCart } from '@element-plus/icons-vue'

const store = useProductsStore();
</script>

<template>
    <main>
        <el-carousel>
            <el-carousel-item>
                <img :src="store.selectedProduct.image" alt="Foto do produto">
            </el-carousel-item>
            <el-carousel-item>
                <img :src="store.selectedProduct.image" alt="Foto do produto">
            </el-carousel-item>
            <el-carousel-item>
                <img :src="store.selectedProduct.image" alt="Foto do produto">
            </el-carousel-item>
        </el-carousel>
        <div class="product-container">
            <h1>{{ store.selectedProduct.name }}</h1>
            <span>{{ store.selectedProduct.price }} R$ / {{ store.selectedProduct.unit.symbol }}</span>
            <h2>{{ store.selectedProduct.local }}</h2>
            <p>
                {{ store.selectedProduct.description }}
            </p>
            <div class="actions">
                <button class="like"><el-icon><CollectionTag /></el-icon></button>
                <button class="shop"><el-icon><ShoppingCart /></el-icon> ADD TO CART</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.product-container {
    padding: 16px;
}

.actions {
    display: flex;
    margin: 16px 0;
    gap: 12px;
}

.actions button {
    height: 28px;
    border-radius: 4px;
    border: solid 1px #444;
}

.like {
    flex: 1;
    background-color: white;
}

.shop {
    flex: 3;
    background-color: aquamarine;
}
</style>