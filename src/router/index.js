import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from "@/views/MainView";
import SignUpView from "@/views/SignUpView";
import SignInView from "@/views/SignInView";

Vue.use( VueRouter );

export const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainView,
        },
        {
            path: '/register',
            component: SignUpView,
        },
        {
            path: '/login',
            component: SignInView,
        },
    ],
} );