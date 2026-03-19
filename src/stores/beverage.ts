import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

export interface CreamerType {
  id: string;
  name: string;
  color: string;
}

export interface SyrupType {
  id: string;
  name: string;
  color: string;
}

export const useBeverageStore = defineStore("beverage", () => {
  const temps = ["Hot", "Cold"];
  const bases: BaseBeverageType[] = [
    { id: "b1", name: "Black Tea", color: "#8B4513" },
    { id: "b2", name: "Green Tea", color: "#C8E6C9" },
    { id: "b3", name: "Coffee", color: "#6F4E37" },
  ];
  const creamers: CreamerType[] = [
    { id: "c1", name: "No Cream", color: "transparent" },
    { id: "c2", name: "Milk", color: "AliceBlue" },
    { id: "c3", name: "Cream", color: "#F5F5DC" },
    { id: "c4", name: "Half & Half", color: "#FFFACD" },
  ];
  const syrups: SyrupType[] = [
    { id: "s1", name: "No Syrup", color: "#c6c6c6" },
    { id: "s2", name: "Vanilla", color: "#FFEFD5" },
    { id: "s3", name: "Caramel", color: "#DAA520" },
    { id: "s4", name: "Hazelnut", color: "#6B4423" },
  ];

  // State for selections
  const currentTemp = ref(temps[1]);
  const selectedBase = ref(bases[1].name);
  const selectedCreamer = ref(creamers[3].name);
  const selectedSyrup = ref(syrups[3].name);

  // Getters for selected objects
  const selectedBaseObj = computed(() =>
    bases.find((b) => b.name === selectedBase.value),
  );
  const selectedCreamerObj = computed(() =>
    creamers.find((c) => c.name === selectedCreamer.value),
  );
  const selectedSyrupObj = computed(() =>
    syrups.find((s) => s.name === selectedSyrup.value),
  );

  return {
    temps,
    bases,
    creamers,
    syrups,
    currentTemp,
    selectedBase,
    selectedCreamer,
    selectedSyrup,
    selectedBaseObj,
    selectedCreamerObj,
    selectedSyrupObj,
  };
});
