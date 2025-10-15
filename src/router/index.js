import { createRouter, createWebHistory } from "vue-router";
import Admin from "@/pages/Admin.vue";
import Members from "@/pages/admin/Members.vue";
import Savings from "@/pages/admin/Savings.vue";
import Loans from "@/pages/admin/Loans.vue";
import Penalties from "@/pages/admin/Penalties.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin",
            component: Admin,
            children: [
                { path: "members", component: Members },
                { path: "savings", component: Savings },
                { path: "loans", component: Loans },
                { path: "penalties", component: Penalties },
                { path: "", redirect: "/admin/members" },
            ],
        },
        // redirect root "/" to /admin
        { path: "/", redirect: "/admin" },
    ],
});
export default router;
