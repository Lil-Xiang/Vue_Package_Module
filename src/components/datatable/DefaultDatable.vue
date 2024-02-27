<script lang="ts" setup>
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';

const props = defineProps({
  cols: {
    type: Object,
    required: true,
  },
  rows: {
    type: Object,
    required: true,
  },
  params: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <vue3-datatable
    :loading="false"
    :columnFilter="true"
    :columns="props.cols"
    :rows="props.rows"
    :totalRows="props.rows.length"
    :pageSize="props.params.pagesize" />
</template>

<style scoped></style>