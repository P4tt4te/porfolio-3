<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true
    })
    return { locale, t }
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
    <header>
        <div>
            <p>Test <span>{{ t('test') }}</span></p>
        </div>
        <div>
            <img @click="changeLanguage()" src="/header/flags/france.svg" alt="">
            <img src="/header/flags/usa.svg" alt="">
        </div>
    </header>
</template>
