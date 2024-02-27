<script lang="ts" setup>
import { ref } from 'vue';
import DefaultDatable from '../components/datatable/DefaultDatable.vue';

const cols = ref([//欄位名
    { field: 'personName', title: '人' },
    { field: 'year', title: '年' },
    { field: 'month', title: '月' },
    { field: 'totalSales', title: '總金額' },
    { field: 'freeBrand', title: '自由品牌' },
    { field: 'cooperationBrand', title: '合作品牌' },
  ]) || [];
  const rows: any = ref([//欄位資料
  { personName: 'A', year: '2023', month: '12', totalSales: '999999', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'B', year: '2023', month: '11', totalSales: '888888', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'C', year: '2023', month: '10', totalSales: '777777', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'D', year: '2023', month: '9', totalSales: '666666', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'E', year: '2023', month: '8', totalSales: '555555', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'F', year: '2023', month: '7', totalSales: '444444', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'G', year: '2023', month: '6', totalSales: '333333', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'H', year: '2023', month: '5', totalSales: '222222', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
  { personName: 'I', year: '2023', month: '4', totalSales: '111111', freeBrand: '自由!!!', cooperationBrand: '合作!!!' },
]);
const params = ref({
  current_page: 1,
  pagesize: 10,
  column_filters: [],
});
</script>

<template>
  <div class="body">
    <DefaultDatable :cols="cols" :rows="rows" :params="params" />
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
}
</style>