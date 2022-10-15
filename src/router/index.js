import { createRouter, createWebHistory } from "vue-router";
import home from "../views/HomeView.vue";
import post from "../views/PostView.vue";
import posts from "../views/PostsView.vue";
import categories from "../views/CategoriesView.vue";

const routes = [
  { path: "/", component: home },
  { path: "/post/:postId", component: post },
  { path: "/posts/:page", component: posts },
  { path: "/categories", component: categories },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
