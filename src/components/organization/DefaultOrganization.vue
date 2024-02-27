<script lang="ts" setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  organizeData: {
    type: Object,
    required: true,
  }
})

const tree = ref();
const keyword = ref('');// 篩選的字
const horizontal = ref(false);// 是否橫向
const collapsable = ref(true);// 是否可以展開收起節點
const onlyOneNode = ref(true);// 是否拖曳當前節點
const cloneNodeDrag = ref(true);// 是否可拖曳

// 組織圖style
const style = ref({
  background: "#fff",
  color: "#5e6d82"
});

const filter = () => {
  tree.value.filter(keyword.value);
  keyword.value = '';
}

// 對節點篩選
const filterNodeMethod = (value, data) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
}

onMounted(() => {
  if (tree.value) {
  }
})
</script>

<template>
  <div class="tree-container">
    <div class="search-box">
      <div>
        <span>搜索：</span>
        <input type="text" v-model="keyword" placeholder="請輸入搜尋內容" @keydown.enter="filter" />
      </div>
      <div>
        <label for="toggle"></label>
        <input id="toggle" v-model="collapsable" type="checkbox">
      </div>
    </div>
    <vue3-tree-org ref="tree" :data="props.organizeData" :horizontal="horizontal" :collapsable="collapsable" :label-style="style"
      :node-draggable="true" :scalable="false" :only-one-node="onlyOneNode" :default-expand-level="1"
      :filter-node-method="filterNodeMethod" :clone-node-drag="cloneNodeDrag" />
  </div>
</template>

<style scoped>
.tree-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
}

.search-box {
  display: flex;
  top: 0;
  left: 0;
}

.search-box input {
  width: 200px;
  height: 32px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
}
</style>