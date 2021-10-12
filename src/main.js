import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import '../index.css';

import fr from './locales/fr.json';
import en from './locales/en.json';

const i18n = createI18n({
    locale: 'en',
    messages: {
      en,
      fr
    }
  })

const app = createApp(App);
app.use(i18n).mount('#app');
