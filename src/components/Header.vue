<script>

import { useI18n } from 'vue-i18n';

export default {
  name: 'App',
    setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t, locale }
  },
  data() {
    return {
      srcfr : "/header/flags/france.svg",
      srcen : "/header/flags/usa.svg"
    }
  },
  methods: {
      changeLanguage() {
        var langue;
        if (langue == "en") {
            langue = "fr";
        } else {
            langue = "en";
        }
    }
  }
  
}
</script>



<template>
    <header class="flex justify-between">
        <div>
            <p>Test menu :<span>{{t('test')}}</span></p>
        </div>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <div class="flex space-x-5">
            <img @click="changeLanguage()" src="/src/assets/header/flags/france.svg" alt="">
            <img src="/src/assets/header/sunset.svg" alt="">
        </div>
    </header>
</template>
