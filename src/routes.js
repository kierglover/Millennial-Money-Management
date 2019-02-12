// routes.js

import Home from './components/Home.vue';
import Feature from './components/Feature.vue';
import Success from './components/Success.vue';
import News from './components/News.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/featured', component: Feature},
    { path: '/success', component: Success},
    { path: '/news', component: News}
];

export default routes;