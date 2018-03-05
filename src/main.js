import App from './app/app.js';
import './app/app.css';

new Vue({
  el: '#app',
  components: {
    'app': App
  },
  render: h => h(App)
})
