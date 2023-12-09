import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import MainView from './components/CardList.vue'
import CardDetails from './components/CardDetails.vue'
import DeckLegality from './components/DeckLegality.vue'
import App from './App.vue'
import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    { path: '/', component: MainView, props: true, name: 'main'},
    { path: '/cardDetails/:cardId', component: CardDetails, props: true, name: 'cardDetails' },
    { path: '/deckLegality', component: DeckLegality, props: true, name: 'deckLegality' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');


