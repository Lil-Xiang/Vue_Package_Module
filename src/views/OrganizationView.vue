<script lang="ts" setup>
import { ref } from "vue";
import DefaultOrganization from "../components/organization/DefaultOrganization.vue";

interface Data {
  id: number;
  label: string;
  children: {
    id: number;
    pid: number;
    label: string;
  }[],
}

const data = ref({
  id: 1, label: "組織圖",
  children: [
    {
      id: 2,
      pid: 1,
      label: "A",
      children: [
        { id: 6, pid: 2, label: "A1" },
        { id: 8, pid: 2, label: "A2" },
        { id: 10, pid: 2, label: "A3" }
      ]
    },
    {
      id: 3,
      pid: 1,
      label: "B",
      children: [
        { id: 11, pid: 3, label: "B1" },
        { id: 12, pid: 3, label: "B2" }
      ]
    },
    {
      id: 4,
      pid: 1,
      label: "C",
      children: [
        { id: 11, pid: 3, label: "C1" },
        { id: 13, pid: 4, label: "C2" }
      ]
    }
  ]
});
</script>

<template>
  <div class="body">
    <DefaultOrganization :organizeData="data" />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
