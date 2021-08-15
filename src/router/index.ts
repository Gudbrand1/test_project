import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Menu",
    name: "Menu",
    // route level code-splitting
    // this generates a separate chunk (TheMenu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "TheMenu" */ "../views/TheMenu.vue"),
  },
  {
    path: "/phone",
    name: "Phone",
    // route level code-splitting
    // this generates a separate chunk (Phone.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Phone" */ "../views/contact/PhonePage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/contact/ContactPage.vue"),
  },
  {
    path: "/mail",
    name: "Mail",
    // route level code-splitting
    // this generates a separate chunk (Mail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Mail" */ "../views/mail/Mail.vue"),
  },
  {
    path: "/recents",
    name: "Recents",
    // route level code-splitting
    // this generates a separate chunk (recents.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "recents" */ "../views/contact/RecentsPage.vue"
      ),
  },
  {
    path: "/places",
    name: "Places",
    // route level code-splitting
    // this generates a separate chunk (places.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "places" */ "../views/contact/PlacesPage.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
