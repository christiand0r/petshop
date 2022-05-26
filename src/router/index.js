import { createRouter, createWebHashHistory } from "vue-router";

const children = [
  {
    path: "",
    name: "allProducts",
    component: () => import("../views/AllProductsView.vue"),
  },
  {
    path: "categoria/:category",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
    props: (route) => ({
      category: route.params.category,
    }),
  },
];

const routes = [
  {
    path: "/",
    name: "shop",
    component: () => import("../layouts/ShopLayout.vue"),
    children,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
