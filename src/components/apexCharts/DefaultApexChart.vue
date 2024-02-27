<script lang="ts" setup>
import apexchart from "vue3-apexcharts";

const props = defineProps({
  type: String,
  width: Number,
  options: '',
  series: '',
})
</script>

<template>
  <apexchart
    :type="props.type"
    :width="props.width"
    :options="props.options"
    :series="props.series"
  class="bg-white dark:bg-black rounded-lg" />
</template>

<style scoped>

</style>