import Vue from "vue";
import VueRouter from "vue-router";

//component
import Login from "../views/page/Login.vue";
import Register from "../views/page/Register.vue";
import TheApp from "../components/layout/TheApp.vue";
import Dashboard from "../views/page/Dashboard.vue";
import History from "../views/page/History.vue";
import ManageDevice from "../views/page/ManageDevice.vue";
import ManageUser from "../views/page/ManageUser.vue";
import SettingFeed from "../views/page/SettingFeed.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/app",
    redirect: "/app/dashboard",
    name: "TheApp",
    component: TheApp,
    meta: { anonymous: true },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "history",
        name: "History",
        component: History,
      },
      {
        path: "manage-device",
        name: "ManageDevice",
        component: ManageDevice,
      },
      {
        path: "manage-user",
        name: "ManageUser",
        component: ManageUser,
      },
      {
        path: "setting-feed",
        name: "SettingFeed",
        component: SettingFeed,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;