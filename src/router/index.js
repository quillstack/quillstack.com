import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import DependencyInjection from '../views/DependencyInjection.vue';

const history = createWebHistory();
const routes = [
    {
        path: '/dependency-injection.htm',
        name: 'dependency-injection',
        component: DependencyInjection
    },
    {
        path: '/di.htm',
        redirect: {
            name: 'dependency-injection'
        }
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    }
];

const router = createRouter({
    routes,
    history
});

export default router;
