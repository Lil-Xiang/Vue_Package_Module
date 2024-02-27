<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="body">
    <div class="link center">
      <RouterLink class="textColor" to="/">組織圖</RouterLink>
      <RouterLink class="textColor" to="/echarts">地圖</RouterLink>
      <RouterLink class="textColor" to="/apexcharts">樹狀&條狀</RouterLink>
      <RouterLink class="textColor" to="/sweetalert">Sweetalert彈窗</RouterLink>
      <RouterLink class="textColor" to="/dataTable">DataTable表單</RouterLink>
      <RouterLink class="textColor" to="/formWizard">購物流程</RouterLink>
    </div>
    <div class="routerView center">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.textColor {
  color: rgb(255, 255, 255);
}
.link {
  width: 100%;
  height: 5%;
  gap: 50px;
  font-size: 20px;
  background-color: rgb(101, 101, 101);
}
.routerView {
  width: 100%;
  height: 95%;
  background-color: rgb(176, 176, 176);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
