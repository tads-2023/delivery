import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', () => {
  const dadosCartao = ref({});
  
  const salvarCartao = (cartao) => {
    dadosCartao.value = cartao;
    console.log("store", dadosCartao)
  }

  return {
    dadosCartao,
    salvarCartao
  }
  
})