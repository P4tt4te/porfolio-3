<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { devs: [{ name: 'HTML5'},{ name: 'CSS3'},{ name: 'JS Vanilla'},{ name: 'Vue.js'},{ name: 'NPM'},{ name: 'SQL - NoSQL'},{ name: 'Webflow (CMS)'},{ name: 'Java'}], graphics: [{ name: 'Figma'},{ name: 'Affinity'},{ name: 'Photoshop'},{ name: 'Illustrator'},{ name: 'Da Vinci Resolve'},{ name: 'Premier Pro'},{ name: 'Blender'}]}
    }
})
</script>


<template>
    <div :id="'Software'"  data-scroll-section class="flex flex-col space-y-20 px-32">
        <div data-scroll class="flex justify-between">
        <div class="text-6xl flex flex-col">
            <span v-for="dev in devs" :key="dev">{{ dev.name }}</span>
        </div>
        <div class="relative">
           <p class="font-Sunydale text-5xl absolute top-16 left-10 text-white">Dev</p>
           <img class="w-3/4" src="/src/assets/software/blob1.svg" alt=""> 
        </div>
    </div>
    <div data-scroll class="flex justify-between">
        <div class="text-6xl flex flex-col">
            <span v-for="graphic in graphics" :key="graphic">{{ graphic.name }}</span>
        </div>
        <div class="relative">
            <p class="font-Sunydale text-5xl absolute top-16 left-10 text-white">Graphic</p>
            <img class="w-3/4" src="/src/assets/software/blob2.svg" alt="">
        </div>
    </div>
    </div>
    
</template>