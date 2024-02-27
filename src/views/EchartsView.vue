<script lang="ts" setup>
import DefaultEcharts from '../components/echarts/DefaultEcharts.vue';
import { twMapData } from '../assets/static/taiwan';

const twMapDataDetail = [
  { name: "連江縣", value: 731449 },
  { name: "宜蘭縣", value: 731449 },
  { name: "彰化縣", value: 6553255 },
  { name: "南投縣", value: 2949131 },
  { name: "雲林縣", value: 38041430 },
  { name: "基隆市", value: 5187582 },
  { name: "臺北市", value: 3590347 },
  { name: "新北市", value: 917092 },
  { name: "臺中市", value: 632323 },
  { name: "臺南市", value: 19317568 },
  { name: "桃園市", value: 9919945 },
  { name: "苗栗縣", value: 1392313 },
  { name: "嘉義市", value: 1595728 },
  { name: "嘉義縣", value: 12875255 },
  { name: "金門縣", value: 12875255 },
  { name: "高雄市", value: 3074186 },
  { name: "臺東縣", value: 2885905 },
  { name: "花蓮縣", value: 4380415 },
  { name: "澎湖縣", value: 4380415 },
  { name: "新竹市", value: 1329192 },
  { name: "新竹縣", value: 5884563 },
  { name: "屏東縣", value: 6646144 },
]
</script>

<template>
  <DefaultEcharts :mapData="twMapData" :mapDetailData="twMapDataDetail" />
</template>
