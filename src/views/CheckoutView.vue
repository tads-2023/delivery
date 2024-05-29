<script setup>
import CheckoutDivisor from '@/components/CheckoutDivisor.vue';
import { CreditCard, HomeFilled } from '@element-plus/icons-vue';

</script>

<template>
    <main>
        <h1>Checkout</h1>

        <CheckoutDivisor title="Payment Method" />

        <div class="checkout-item-content">
            <el-icon><CreditCard /></el-icon>
            <p>**** **** **** 4747</p>
        </div>

        <CheckoutDivisor title="Delivery Address" />

        <div class="checkout-item-content">
            <el-icon><HomeFilled /></el-icon>
            <div>
                <p>Alexa Smith</p>
                <p>Cesu 31 k2, SIA Chill</p>
                <p>Riga</p>
                <p>Latvia</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.checkout-item-content {
    display: flex;
    gap: 8px;
} 

.el-icon {
    color: #2D0C57;
    width: 1.5rem;
    height: 1.5rem;
}

.el-icon svg {
    width: 1.5rem;
    height: 1.5rem;
}

p {
    color: #9586A8;
    font-size: 16px;
}
</style>