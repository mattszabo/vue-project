import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#app',
  data: {
    message: 'Hi'
  },
  render: h => h(App)
})
