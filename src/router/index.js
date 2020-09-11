import Vue from 'vue';
import VueRouter from 'vue-router';
import DependencyInjection from '@/views/DependencyInjection';
import HomePage from '@/views/HomePage';
import Benchmark from "@/views/Benchmark";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            title: 'QuillStack'
        }
    },
    {
        path: '/di/',
        name: 'di',
        component: DependencyInjection,
        meta: {
            title: 'QuillStack - Dependency Injection'
        }
    },
    {
        path: '/benchmark/',
        name: 'benchmark',
        component: Benchmark,
        meta: {
            title: 'QuillStack - Benchmark'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
