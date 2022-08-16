<template>
  <div class="card">
    <button @click="storeCounter.value++">count is {{ value }}</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStoreCounter } from '../store/counter';

const storeCounter = useStoreCounter();
if (import.meta.env.SSR) {
  storeCounter.value = 3;
}
const { value } = storeToRefs(storeCounter);
</script>
