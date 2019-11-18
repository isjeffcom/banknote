import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

var VueScrollTo = require('vue-scrollto');

Vue.use(VueAxios, axios)

Vue.use(VueScrollTo,{container: "body",
        duration: 500,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
