// routes.js

import Home from './components/Home.vue';
import Feature from './components/Feature.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/featured', component: Feature}
];

export default routes;