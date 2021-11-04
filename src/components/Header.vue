<script>

import { useI18n } from 'vue-i18n';

export default {
  data() {
    return { langue: this.$i18n.locale, menu: false,pc: false};

  },
  mounted() {
    console.log(this.$i18n.locale);
    if (window.matchMedia("(min-width: 640px)").matches) {
      this.pc = true;
    } else {
      var menu = document.getElementById('menulist');
      menu.classList.add('on');
    }
  },
  methods: {
    changeLanguage(l) {
      if (l == "en") {
        console.log("frtest");
        l = "fr";
      } else {
        console.log("entest");
        l = "en";
      }
      this.$i18n.locale = l;
    },
    animmenu() {
      var cercle1 = document.getElementById('cercle1');
      var cercle2 = document.getElementById('cercle2');
      var menu = document.getElementById('menulist');
      if (this.menu == false) {
        cercle1.setAttribute("cx","76.0744");
        cercle1.setAttribute("cy","37.0004");
        cercle2.setAttribute("cx","48.9256");
        cercle2.setAttribute("cy","71.9996");
        menu.classList.add('on');
        this.menu = true;
      } else {
        cercle1.setAttribute("cx","43");
        cercle1.setAttribute("cy","44");
        cercle2.setAttribute("cx","82");
        cercle2.setAttribute("cy","65");
        menu.classList.remove('on');
        this.menu = false;
      }
      console.log('animmenu');
      console.log(this.menu);
    }
  }
};
</script>



<template>
    <header data-scroll-section class="relative flex justify-between">
        <span class="absolute transform -rotate-90 top-12 -left-20 opacity-60">click to nav.</span>
        <nav class="flex space-x-6 items-center">
          <svg v-if="pc" @click="animmenu()" width="125" height="116" viewBox="0 0 125 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54382 25.3086C9.54112 10.5317 28.7438 7.94403 44.581 3.92954C58.3483 0.439747 72.4153 -1.10712 85.5548 4.26658C99.4451 9.94735 111.225 19.9744 117.342 33.6867C123.942 48.4843 127.433 66.262 119.522 80.4148C111.888 94.0699 94.0846 95.6066 79.532 101.323C64.2249 107.336 48.8282 120.787 33.8245 114.078C18.7594 107.341 18.1164 86.9807 12.6284 71.4067C7.19466 55.9867 -4.45745 40.0938 2.54382 25.3086Z" fill="#00D1FF"/>
            <circle id="cercle1" cx="43" cy="44" r="15" fill="white"/>
            <circle id="cercle2" cx="82" cy="65" r="15" fill="white"/>
          </svg>
          <div id="menulist" class="flex flex-col listemenu">
            <div>
              <span :id="'btn1'" class="trait">About Me</span>
            </div>
            <div>
              <span :id="'btn2'" class="trait">Tools</span>
            </div>
            <div>
              <span :id="'btn3'" class="trait">Projects</span>
            </div>
            <div>
              <span :id="'btn4'" class="trait">Contact</span>
            </div>
          </div>
        </nav>
        <div class="flex flex-col sm:flex-row space-x-0 space-y-2 sm:space-y-0 sm:space-x-5">
            <img @click="changeLanguage($i18n.locale)" :src="this.$t('src')" alt="">
            <img src="/src/assets/header/sunset.svg" alt="">
        </div>
    </header>
</template>


