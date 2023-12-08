import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import MainView from './components/CardList.vue'
import CardDetails from './components/CardDetails.vue'
import App from './App.vue'
import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import Card from './modals/card'


const routes = [
    { path: '/', component: MainView, props: true, name: 'main'},
    { path: '/cardDetails', component: CardDetails, props: {Card}, name: 'cardDetails' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');


