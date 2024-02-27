<script setup>
import { FormWizard, TabContent } from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'

const onComplete = () => {
  alert("Yay. Done!");
}
</script>
    
<template>
  <div class="formWizardBasic">
    <form-wizard @on-complete="onComplete">
      <tab-content class="tabContent" title="Personal details">
        My first tab content
      </tab-content>
      <tab-content class="tabContent" title="Additional Info">
        My second tab content
      </tab-content>
      <tab-content class="tabContent" title="Last step">
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>
  </div>
</template>

<style scoped>
.tabContent {
  width: 900px;
  height: 400px;
}
</style>