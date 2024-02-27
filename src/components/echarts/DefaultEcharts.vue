<script lang="ts" setup>
import { ref, onMounted } from "vue";

import * as echarts from "echarts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";


const props = defineProps({
  mapData: {
    type: Object,
    required: true,
  },
  mapDetailData: {
    type: Object,
    required: true,
  }
})

const chartEl = ref();

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
]);

onMounted(() => {
  const myChart = echarts.init(chartEl.value);
  echarts.registerMap("TW", props.mapData);
  const option = {
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      min: 500000,
      max: 38000000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
    },
    toolbox: {
      show: true,
      left: "left",
      top: "top",
    },
    series: [
      {
        name: "台灣各縣市資訊",
        type: "map",
        roam: true,
        map: "TW",
        emphasis: {
          label: {
            show: true,
          },
        },
        data: props.mapDetailData,
      },
    ],
  };
  myChart.setOption(option);
});
</script>

<template>
  <div class="map-main" ref="chartEl" />
</template>

<style scoped>
.map-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}
</style>