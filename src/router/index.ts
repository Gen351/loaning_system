import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import Admin from "@/pages/Admin.vue";

const routes = [
  { path: "/", name: "Login", component: LoginView },
  { path: "/admin", name: "Admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
