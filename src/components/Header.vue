<script>

import { useI18n } from 'vue-i18n';

export default {
  mounted() {
    console.log(this.$t('test'));
  },
};
</script>



<template>
    <header class="flex justify-between">
        <div>
            <p>Test menu :<span>{{ $t('test')}}</span></p>
        </div>
        <select v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <div class="flex space-x-5">
            <img @click="changeLanguage()" src="/src/assets/header/flags/france.svg" alt="">
            <img src="/src/assets/header/sunset.svg" alt="">
        </div>
    </header>
</template>


