/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const routes = [
//         { path: '/dashboard', component: require('./components/Dashboard.vue') },
//         { path: '/profile', component: require('./components/Profile.vue') }
//     ]
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


const routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    router,
});