<template>
  <Mug>
    <Cold v-if="beverage.currentTemp === 'Cold'" />
    <Hot v-else />
    <Contents>
      <template #top>
        <Creamer v-if="(!isNoCreamer && isNoSyrup) || (!isNoCreamer && !isNoSyrup)" />
      </template>
      <template #mid>
        <Syrup v-if="!isNoSyrup && !isNoCreamer" />
      </template>
      <template #bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

import { computed } from "vue";
import { useBeverageStore } from "../stores/beverage";

const beverage = useBeverageStore();

const isNoCreamer = computed(() =>
  !beverage.selectedCreamer || beverage.selectedCreamer.toLowerCase().includes("no cream")
);
const isNoSyrup = computed(() =>
  !beverage.selectedSyrup || beverage.selectedSyrup.toLowerCase().includes("no syrup")
);

</script>
