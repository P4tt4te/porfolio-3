import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuei18n from '@intlify/vite-plugin-vue-i18n'
import PrerenderSPAPlugin from 'prerender-spa-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Vuei18n({
    include: path.resolve(__dirname, './src/locales/**'),
  }),PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    indexPath: path.join(__dirname, 'dist', 'index.html'),
    routes: ['/']
  })]
})
