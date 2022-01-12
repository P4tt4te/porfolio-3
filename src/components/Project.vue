<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { projects: [
            {"name" : "Csgostuff.pw","desc" : "Csgostuff est un site qui permet d'aider les joueurs du jeu vidéo 'Counter Strike : Global Offensive' en les informants sur les prix des différents objets du jeu. Il dispose d'un système de recherche par prix et catégorie.","img": "csgostuff",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/csgostuffpw"
                },
                {
                    "name" : "web",
                    "src" : "https://csgostuff.pw/"
                }
                
            ]},
            {"name" : "Doonut","desc" : "Petit site pour s'initier à la librairie webGL three.js.","img": "doonut",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/doonut"
                },
                {
                    "name" : "web",
                    "src" : "https://doonut.netlify.app/"
                }
                
            ]},
            {"name" : "Findreferrer*","desc" : "Site de référencement de codes partenaires, uniquement la maquette est disponible car il est en phase de developpement.","img": "findreferrer",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116861071/Production-webdesign"
                },
                {
                    "name" : "figma",
                    "src" : "https://www.figma.com/file/WGXswY60JMKMkhjuKCxr61/findReferrer?node-id=202%3A4"
                }
                
            ]},
            {"name" : "France covid","desc" : "Site récupérant les chiffres de l'API du gouvernement sur le covid-19, il affiche aussi la dernière date de mise à jour des données.","img": "francecovid",links : [
                {
                    "name" : "github",
                    "src" : "https://github.com/P4tt4te/france-covid"
                },
                {
                    "name" : "web",
                    "src" : "https://france-covid.netlify.app/"
                }
                
            ]},
            {"name" : "LogoFolio","desc" : "Liste de logos que j'ai réalisé.","img": "logofolio",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116812395/Logofolio"
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
                },
                {
                    "name" : "figma",
                    "src" : "https://www.figma.com/file/wBtjtUxJTHhTJr1XOkrmoC/Relaxation-Project-(Copy)?node-id=1%3A5"
                }
                
            ]},
            {"name" : "Netdune","desc" : "Netdune est un projet fictif réalisé dans le cadre d'un cours de marketing. L'idée est de créer une application pour rassembler et trier les posts de différents réseaux sociaux.","img": "netdune",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116862259/Netdune-App"
                },
                {
                    "name" : "figma",
                    "src" : "https://www.figma.com/file/wsrpvu9azodXxZ3vHsRiMh/Diapo_merca?node-id=0%3A1"
                }
                
            ]},
            {"name" : "OnMangeQuoi","desc" : "On mange quoi est un site qui repertorie des recettes de cuisine simple pour étudiants. J'ai réalisé la maquette mobile de ce site fictif.","img": "onmangequoi",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/116861071/Production-webdesign"
                }
                
            ]},
            {"name" : "Print Indy 500","desc" : "Affiche fictive pour une course automobile américaine se trouvant à indianapolis. Cette affiche à été réalisé dans un cadre scolaire.","img": "indy",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/118242879/Print-Indy-500-2021"
                }
                
            ]},
            {"name" : "Print VW","desc" : "Data visualisation fictive pour la marque automobile Volkswagen, réalisé dans le cadre d'un projet scolaire.","img": "vw",links : [
                {
                    "name" : "behance",
                    "src" : "https://www.behance.net/gallery/112641813/Vw-Poster"
                }
                
            ]},
            
        ]}
        },
    methods : {
        imgbuild(link) {
            return new URL(`../assets/projets/${link}.webp`, import.meta.url).href;
        },
        imglink(name) {
            return new URL(`../assets/projets/links/${name}.svg`, import.meta.url).href;
        }
    }
})
</script>

<template>
    <div :id="'Projects'" class="lg:px-24 xl:px-32 space-y-16" data-scroll-section>
        <h3 data-scroll data-scroll-speed="3" class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">{{ $t('project.title') }}</h3>
        <div class="flex md:space-x-16" v-for="project in projects" :key='project'>
            <img class="hidden md:block md:h-44 xl:h-full xl:w-1/4" :src="imgbuild(project.img)" alt="">
            <div class="space-y-5 w-full md:w-3/4">
                <h3 class="text-4xl sm:text-5xl xl:text-7xl">{{ project.name }}</h3>
                <p class="text-sm xl:text-md">{{ project.desc }}</p>
                <div class="flex space-x-5">
                    <a target="_blank" rel="noopener noreferrer" v-for="link in project.links" :key='link' :href="link.src">
                        <img class="w-full md:w-3/4 xl:w-full" :src="imglink(link.name)" :alt="'logo ' + link.name">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>