import Vue from 'vue'
import App from './App.vue'
// const fs = require("fs")
// console.log(fs.readFileSync('C:/Users/jason/Desktop/memo.txt', 'utf-8'))

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
