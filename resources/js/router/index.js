import { createRouter, createWebHistory } from "vue-router";

import List from "../crud/List.vue";
import Add from "../crud/AddNew.vue";

const routes = [

    { path: "/", name: "List", component: List },
    { path: "/add-new", name: "Add", component: Add }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
