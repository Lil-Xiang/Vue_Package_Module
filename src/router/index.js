import { createRouter, createWebHistory } from 'vue-router'
import OrganizationView from '../views/OrganizationView.vue'
import EchartsView from '../views/EchartsView.vue'
import ApexchartsView from '../views/ApexchartsView.vue'
import SweetalertView from "../views/SweetalertView.vue"
import DataTableView from "../views/DataTableView.vue"
import FormWizardView from "../views/FormWizardView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '組織圖',
      component: OrganizationView
    },
    {
      path: '/echarts',
      name: '地圖',
      component: EchartsView
    },
    {
      path: '/apexcharts',
      name: 'apexcharts',
      component: ApexchartsView
    },
    {
      path: '/sweetalert',
      name: '彈窗',
      component: SweetalertView
    },
    {
      path: '/dataTable',
      name: '表單',
      component: DataTableView
    },
    {
      path: '/formWizard',
      name: '購物流程',
      component: FormWizardView
    }
  ]
})

export default router
