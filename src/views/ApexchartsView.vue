<script lang="ts" setup>
import DefaultApexChart from "../components/apexCharts/DefaultApexChart.vue";

const barSeries = [
  {
    name: "自有品牌",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 63, 60, 66],
  },
  {
    name: "合作品牌",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 87, 105, 91],
  }
];

const barChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  title: {
    text: "年度當月個別業績",
    align: "left",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yaxis: {
    title: {
      text: "業績",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

const lineSeries = [
  {
    name: "自有品牌",
    data: [28, 29, 33, 36, 32, 32, 33, 29, 33, 36, 32, 32],
  },
  {
    name: "合作品牌",
    data: [12, 11, 14, 18, 17, 13, 13, 11, 14, 18, 17, 11],
  },
];

const lineChartOptions = {
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#77B6EA", "#545454"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "年度當月累計業績",
    align: "left",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 5,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    title: {
      text: "月份",
    },
  },
  yaxis: {
    title: {
      text: "業績",
    },
    min: 0,
    max: 100,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -20,
    offsetX: -10,
  },
};

const pieSeries = [44, 55, 13, 43, 22]
const pieChartOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}
</script>

<template>
  <div class="container">
    <DefaultApexChart type="bar" width="550" :options="barChartOptions" :series="barSeries" />
    <DefaultApexChart type="line" width="550" :options="lineChartOptions" :series="lineSeries" />
    <DefaultApexChart type="pie" width="550" :options="pieChartOptions" :series="pieSeries" />
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
