<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { devs: [{ name: 'HTML5'},{ name: 'CSS3'},{ name: 'JS Vanilla'},{ name: 'Vue.js'},{ name: 'NPM'},{ name: 'SQL - NoSQL'},{ name: 'Webflow (CMS)'},{ name: 'Java'}], graphics: [{ name: 'Figma'},{ name: 'Affinity'},{ name: 'Photoshop'},{ name: 'Illustrator'},{ name: 'Da Vinci Resolve'},{ name: 'Premier Pro'},{ name: 'Blender'}]}
    }
})
</script>


<template>
    <div data-scroll-section class="flex justify-center">
        <div class="text-6xl flex flex-col">
            <span v-for="dev in devs">{{ dev.name }}</span>
        </div>
        <div>
           <p class="font-Sunydale text-5xl">Dev</p> 
        </div>
    </div>
    <div data-scroll-section class="flex justify-center">
        <div class="text-6xl flex flex-col">
            <span v-for="graphic in graphics">{{ graphic.name }}</span>
        </div>
        <div>
            <p class="font-Sunydale text-5xl">Graphic</p>
        </div>
    </div>
</template>