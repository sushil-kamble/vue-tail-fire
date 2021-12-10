import { createRouter, createWebHistory } from "vue-router";
import { getUserState } from "@/firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { noAuth: true }
  },
  {
    path: "/auth/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
    meta: { noAuth: true }
  },
  {
    path: "/auth/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
    meta: { noAuth: true }
  },
  {
    path: "/database",
    name: "Database",
    component: () => import("@/views/Database.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const noAuth = to.matched.some(record => record.meta.noAuth);

  const isAuth = await getUserState();

  if (requiresAuth && !isAuth) next({ name: "Login" });
  else if (noAuth && isAuth) next({ name: "Home" });
  else next();
});

export default router;
