<template>
  <div class="syrup" :style="{ backgroundColor: syrupColor }"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBeverageStore } from '../stores/beverage';
const store = useBeverageStore();
const syrupColor = computed(() => {
  const selected = store.syrups.find(s => s.name === store.selectedSyrup);
  return selected ? selected.color : '#c6c6c6';
});
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
