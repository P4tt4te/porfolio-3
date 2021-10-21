import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import '../index.css';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
    legacy: true,
    locale: 'en',
    messages
  })

const app = createApp(App);


app.use(i18n);
app.mount('#app');

