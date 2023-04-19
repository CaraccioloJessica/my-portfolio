import { createApp } from 'vue'

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Fontawesome import
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// vue route
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.mount('#app')
