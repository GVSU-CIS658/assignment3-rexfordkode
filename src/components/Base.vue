<template>
  <div class="baseBeverage" :style="{ backgroundColor: baseColor }"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBeverageStore } from '../stores/beverage';
const beverage = useBeverageStore();
const { selectedBaseObj } = storeToRefs(beverage);
const baseColor = selectedBaseObj.value?.color || '#c6c6c6';
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
