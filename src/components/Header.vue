<script>

import { useI18n } from 'vue-i18n';

export default {
  data() {
    return { langue: this.$i18n.locale};

  },
  mounted() {
    console.log(this.$t('test'));
    console.log(this.$i18n.locale);
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
    }
  }
};
</script>



<template>
    <header data-scroll-section class="flex justify-between">
        <div>
            <p>Test menu :<span>{{ $t('test')}}</span></p>
        </div>
        <div class="flex space-x-5">
            <img @click="changeLanguage($i18n.locale)" src="/src/assets/header/flags/france.svg" alt="">
            <img src="/src/assets/header/sunset.svg" alt="">
        </div>
    </header>
</template>


