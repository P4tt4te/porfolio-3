<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { projects: [
            {"name" : "OnMangeQuoi","desc" : "On mange quoi est un site qui repertorie des recettes de cuisine simple pour étudiants. J'ai réalisé la maquette mobile de ce site fictif.","img": "onmangequoi",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116861071/Production-webdesign"
                }
                
            ]},
            {"name" : "Moosic","desc" : "Moosic est un site d'écoute de webradio en ligne, il à été créer pendant notre projet tutoré de 1ère année MMI.","img": "moosic",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/moosic-app"
                },
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116861071/Production-webdesign"
                }
                
            ]},
            {"name" : "Csgostuff.pw","desc" : "Csgostuff est un site qui permet d'aider les joueurs du jeu vidéo 'Counter Strike : Global Offensive' en les informants sur les prix des différents objets du jeu. Il dispose d'un système de recherche par prix et catégorie.","img": "csgostuff",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/csgostuffpw"
                },
                {
                    "name" : "web",
                    "src" : "https://csgostuff.pw/"
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
    <div :id="'Projects'" class="px-32 space-y-16" data-scroll-section>
        <h3 data-scroll data-scroll-speed="3" class="text-8xl font-extrabold">Projects.</h3>
        <div class="flex space-x-16" v-for="project in projects" :key='project'>
            <img class="w-1/4" :src="imgbuild(project.img)" alt="">
            <div class="space-y-5 w-3/4">
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