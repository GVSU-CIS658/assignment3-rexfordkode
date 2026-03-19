<template>
  <div class="syrup" :style="{ backgroundColor: syrupColor }"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBeverageStore } from '../stores/beverage';
const beverage = useBeverageStore();
const { selectedSyrupObj } = storeToRefs(beverage);
const syrupColor = selectedSyrupObj.value?.color || '#c6c6c6';
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
