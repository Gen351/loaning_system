<script setup lang="ts">
    defineProps<{ btnColor: string, msg: string }>();
</script>

<template>
    <div class="card">
        <button type="button" @click="/* function */">{{ msg }}</button>
    </div>
</template>

<style scoped>
    button {
        background-color: cadetblue;
    }
</style>
