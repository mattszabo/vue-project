import Vue from 'vue'
import App from './App'

// entry point for build.js referenced in index.html
new Vue({
  el: '#app',
  render: h => h(App)
})
