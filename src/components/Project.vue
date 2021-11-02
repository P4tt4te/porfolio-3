<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { projects: [
            {"name" : "Moosic","desc" : "Moosic est un site d'écoute de webradio en ligne, il à été créer pendant notre projet tutoré de 1ère année MMI.","img": "moosic.png",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/moosic-app"
                },
                {
                    "name" : "web",
                    "src" : "https://github.com/P4tt4te/moosic-app"
                }
                
            ]},
            {"name" : "Moosic","desc" : "Moosic est un site d'écoute de webradio en ligne, il à été créer pendant notre projet tutoré de 1ère année MMI.","img": "moosic.png",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/moosic-app"
                },
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116861071/Production-webdesign"
                }
                
            ]}
        
            
        ]}
        },
    methods : {
        imgbuild(link) {
            return "/src/assets/projets/" + link + ".png";
        },
        imglink(name) {
            console.log("/src/assets/projets/links/" + name + ".svg");
            return "/src/assets/projets/links/" + name + ".svg";
        }
    }
})
</script>

<template>
    <div class="px-32 space-y-16" data-scroll-section>
        <div class="flex space-x-16" v-for="project in projects" :key='project'>
            <img class="w-1/4" :src="imgbuild(project.name)" alt="">
            <div class="space-y-5">
                <h3 class="text-7xl">{{ project.name }}</h3>
                <p>{{ project.desc }}</p>
                <div class="flex space-x-5">
                    <a v-for="link in project.links" :key='link' :href="link.src">
                        <img :src="imglink(link.name)" :alt="'logo ' + link.name">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>