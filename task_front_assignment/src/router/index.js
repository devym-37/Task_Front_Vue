import Vue from "vue";
import VueRouter from "vue-router";
import SignOut from "../views/SignOut.vue";
import Inventory from "../views/Inventory.vue";
import ManageMarket from "../views/ManageMarket.vue";
import ManageCustomer from "../views/ManageCustomer.vue";
import ReportSetting from "../views/ReportSetting.vue";
import Commission from "../views/Commission.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signout",
    component: SignOut
  },
  {
    path: "/inventory",
    name: "inventory",
    component: Inventory
  },
  {
    path: "/managemarket",
    name: "managemarket",
    component: ManageMarket
  },
  {
    path: "/managecustomer",
    name: "managecustomer",
    component: ManageCustomer
  },
  {
    path: "/reportsetting",
    name: "reportsetting",
    component: ReportSetting
  },
  {
    path: "/commission",
    name: "commission",
    component: Commission
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
