import Vue from 'vue';
import VueRouter from 'vue-router';
import DependencyInjection from "@/views/DependencyInjection";
import HomePage from "@/views/HomePage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/dependency-injection/',
        name: 'di',
        component: DependencyInjection,
        meta: {
            title: 'QuillStack - Dependency Injection',
        }
    },
    {
        path: '/di/',
        redirect: {
            name: 'di'
        }
    },
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            title: 'QuillStack',
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
