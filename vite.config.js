import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuei18n from '@intlify/vite-plugin-vue-i18n'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Vuei18n({
    include: path.resolve(__dirname, './path/to/src/locales/**')
  })]
})
