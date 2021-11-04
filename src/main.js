import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import '../index.css';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
    legacy: true,
    locale: 'fr',
    globalInjection : true,
    messages
  })

const app = createApp(App);


app.use(i18n);
app.mount('#app');

function cursor() {

  if (window.matchMedia("(min-width: 1024px)").matches) {
    let mousePosX = 0,
      mousePosY = 0;
    const curseur = document.querySelector('#cursor');
    curseur.addEventListener('click',non);
    document.addEventListener('mousemove', coor);
    document.addEventListener('scroll',coor);

    function non(evt) {
      evt.preventDefault();
    }

    function coor(e) {
      setTimeout(function() {
        mousePosX = e.clientX - 10.5;
        mousePosY = e.clientY - 10.5;
        curseur.style.top = mousePosY + "px";
        curseur.style.left = mousePosX + "px";
      },10);
      

    }
  }

}

cursor();