<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { devs: [{ name: 'HTML5'},{ name: 'CSS3'},{ name: 'JS Vanilla'},{ name: 'Vue.js'},{ name: 'NPM'},{ name: 'SQL - NoSQL'},{ name: 'Webflow (CMS)'},{ name: 'Java'}], graphics: [{ name: 'Figma'},{ name: 'Affinity'},{ name: 'Photoshop'},{ name: 'Illustrator'},{ name: 'Da Vinci Resolve'},{ name: 'Premier Pro'},{ name: 'Blender'}]}
    }
})
</script>


<template>
    
    <div :id="'Software'"  data-scroll-section class="flex flex-col space-y-16 lg:space-y-20 lg:px-24 xl:px-32">
        <h3 data-scroll data-scroll-speed="2" class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">Tools.</h3>
        <div data-scroll class="flex flex-col-reverse sm:flex-row justify-between">
            <div class="barre text-2xl md:text-4xl xl:text-6xl flex flex-col">
                <span v-for="dev in devs" :key="dev">{{ dev.name }}</span>
            </div>
            <div data-scroll data-scroll-speed="3" class="relative flex flex-row mb-10 sm:mb-0 justify-end">
            <p class="font-Sunydale text-3xl lg:text-4xl xl:text-5xl absolute right-14 sm:right-16 top-10  sm:top-32 md:top-36 xl:top-16 xl:left-10 text-white">Dev</p>
            <img class="w-32 sm:w-1/2 xl:w-3/4" src="/src/assets/software/blob1.svg" alt=""> 
            </div>
        </div>
        <div data-scroll class="flex flex-col-reverse sm:flex-row justify-between">
            <div class="barre text-2xl md:text-4xl xl:text-6xl flex flex-col">
                <span v-for="graphic in graphics" :key="graphic">{{ graphic.name }}</span>
            </div>
            <div data-scroll data-scroll-speed="3" class="relative flex flex-row mb-10 sm:mb-0 justify-end">
                <p class="font-Sunydale text-3xl lg:text-4xl xl:text-5xl absolute right-9 sm:right-12 md:right-14 top-8 sm:top-28 md:top-36 lg:top-32 xl:top-16 xl:left-10 text-white">Graphic</p>
                <img class="w-36 sm:w-1/2 xl:w-3/4" src="/src/assets/software/blob2.svg" alt="">
            </div>
        </div>
    </div>
    
</template>