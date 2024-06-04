import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
  const dadosCartao = ref({});
  const dadosEndereco = ref({});
  
  const salvarCartao = (cartao) => {
    dadosCartao.value = cartao;
    console.log("store", dadosCartao)
  }

  const salvarEndereco = (endereco) => {
    dadosEndereco.value = endereco;
  }

  return {
    dadosCartao,
    dadosEndereco,
    salvarCartao,
    salvarEndereco
  }
  
})