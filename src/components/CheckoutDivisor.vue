<script setup>
const props = defineProps(["title"])
</script>

<template>
    <div class="container">
        <h2>{{ props.title }}</h2>
        <button>CHANGE</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
}

h2 {
    color: #2D0C57;
    font-weight: 600;
}

button {
    background-color: white;
    border: none;
    color: #7203FF;
}
</style>