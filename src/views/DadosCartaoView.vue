<script setup>
import { ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useRouter } from 'vue-router';

const store = useCarrinhoStore();
const router = useRouter();

const cartao = ref({
    nome: "",
    numero: "",
    validade: "",
    cvc: ""
});

const salvarCartao = () => {
    store.salvarCartao(cartao.value);
    router.push("home")
}
</script>

<template>
    <div class="form-container">
        <h1>Dado do cartão</h1>
        <el-form
            ref="form"
            label-width="auto"
            label-position="top">

            <el-form-item label="Nome">
                <el-input v-model="cartao.nome" />
            </el-form-item>
            <el-form-item label="Numero">
                <el-input v-model="cartao.numero" />
            </el-form-item>
            <el-form-item label="Validade">
                <el-input v-model="cartao.validade" />
            </el-form-item>
            <el-form-item label="CVC">
                <el-input v-model="cartao.cvc" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="salvarCartao">Salvar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>
.form-container {
    padding: 8px 16px;
}
</style>