import { createRouter, createWebHistory } from "vue-router";
import home from "../views/HomeView.vue";
import post from "../views/PostView.vue";
import posts from "../views/PostsView.vue";

const routes = [
  { path: "/", component: home },
  { path: "/post/:postId", component: post },
  { path: "/posts/:page", component: posts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
