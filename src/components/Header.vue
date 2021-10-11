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
  methods: {
      changeLanguage(lang) {
        if (lang == 1) {
            locale = "fr";
        } else {
            locale = "en";
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
            <img @click="changeLanguage(1)" src="/header/flags/france.svg" alt="">
            <img src="/header/flags/usa.svg" alt="">
        </div>
    </header>
</template>
