<template>
  <div>
    <Beverage />
    <ul>
      <li>
        <template v-for="temp in beverage.temps" :key="temp">
          <label>
            <input type="radio" name="temperature" :id="`r${temp}`" :value="temp" v-model="beverage.currentTemp" />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverage.bases" :key="base.id">
          <label>
            <input type="radio" name="base" :id="`${base.id}`" :value="base.name" v-model="beverage.selectedBase" />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverage.creamers" :key="creamer.id">
          <label>
            <input type="radio" name="creamer" :id="`r${creamer.id}`" :value="creamer.name"
              v-model="beverage.selectedCreamer" />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverage.syrups" :key="syrup.id">
          <label>
            <input type="radio" name="syrup" :id="`${syrup.id}`" :value="syrup.name" v-model="beverage.selectedSyrup" />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "./stores/beverage";
import Beverage from "./components/Beverage.vue";

const beverage = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}
</style>
