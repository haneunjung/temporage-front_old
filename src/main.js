import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import TsHeader from './components/TemporageHeader'
import TsLogin from './components/TemporageLogin'
import TsSender from './components/TemporageSender'
import TsRepo from './components/TemporageRepo'

Vue.use(VueRouter);

Vue.config.productionTip = false;

var router = new VueRouter({
  mode: 'history',
  routes :[
    { path: '/login', component: TsLogin },
    { path: '/', component: TsSender },
    { path: '/repo', component: TsRepo },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
