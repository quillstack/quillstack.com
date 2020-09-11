import Vue from 'vue';
import VueRouter from 'vue-router';
import DependencyInjection from '@/views/DependencyInjection';
import HomePage from '@/views/HomePage';
import Benchmark from "@/views/Benchmark";
import Request from "@/views/Request";

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
        path: '/benchmark/',
        name: 'benchmark',
        component: Benchmark,
        meta: {
            title: 'QuillStack - Benchmark'
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
        path: '/request/',
        name: 'request',
        component: Request,
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
