<script setup>
import CheckoutDivisor from '@/components/CheckoutDivisor.vue';
import { CreditCard, HomeFilled } from '@element-plus/icons-vue';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCarrinhoStore();



</script>

<template>
    <main>
        <h1>Checkout</h1>

        <CheckoutDivisor title="Payment Method" @on-change-click="router.push('dados-cartao')" />

        <div class="checkout-item-content">
            <el-icon><CreditCard /></el-icon>
            <p>{{ store.dadosCartao.numero }}</p>
        </div>

        <CheckoutDivisor title="Delivery Address" @on-change-click="router.push('dados-endereco')" />

        <div class="checkout-item-content">
            <el-icon><HomeFilled /></el-icon>
            <div>
                <p>{{store.dadosEndereco.rua}}</p>
                <p>{{store.dadosEndereco.numero}}</p>
                <p>{{store.dadosEndereco.bairro}}</p>
                <p>{{store.dadosEndereco.complemento}}</p>
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