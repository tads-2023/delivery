<script setup>
import { ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useRouter } from 'vue-router';

const store = useCarrinhoStore();
const router = useRouter();

const endereco = ref({
    rua: "",
    numero: "",
    bairro: "",
    complemento: ""
});

const salvarEndereco = () => {
    store.salvarEndereco(endereco.value);
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

            <el-form-item label="Rua">
                <el-input v-model="endereco.rua" />
            </el-form-item>
            <el-form-item label="Numero">
                <el-input v-model="endereco.numero" />
            </el-form-item>
            <el-form-item label="Bairro">
                <el-input v-model="endereco.bairro" />
            </el-form-item>
            <el-form-item label="Complemento">
                <el-input v-model="endereco.complemento" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="salvarEndereco">Salvar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>
.form-container {
    padding: 8px 16px;
}
</style>