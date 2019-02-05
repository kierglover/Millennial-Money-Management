// routes.js

import Home from './components/Home.vue';
import Feature from './components/Feature.vue';
import Success from './components/Success.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/featured', component: Feature},
    { path: '/success', component: Success}
];

export default routes;