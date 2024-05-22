<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';

const input = ref('');

</script>

<template>
    <div>
        <el-input 
            v-model="input" 
            placeholder="Please input"
            :suffix-icon="Search"/>
    </div>
</template>