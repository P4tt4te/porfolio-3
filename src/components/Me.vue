<script>
import cvpdf from '/cvtest_compressed.pdf';

export default ({
    data() {

    },
    mounted() {
        document.getElementById('pdflink').href = cvpdf;
    }
})
</script>



<template>
    <div :id="'Me'" data-scroll-section class="flex flex-col items-center">
        <h3 class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">About Me.</h3>
        <img class="sm:max-w-md xl:max-w-xl 2xl:max-w-2xl ppeffet" data-scroll data-scroll-speed="3" src="../assets/me/pp.png" alt=""> 
        <div class="max-w-md xl:max-w-xl 2xl:max-w-2xl text-sm sm:text-md xl:text-xl">
            <p>Etudiant en 2ème année de DUT MMI à Laval.</p>
            <p>Réalisation de site web et maquette.</p>
            <p>Actuellement en recherche d'un stage de 2 mois et demi à partir d'avril 2022.</p>
        </div>
        <a id="pdflink" class="mt-3" target="_blank" rel="noopener noreferrer" href="./public/cvtest_compressed.pdf"><span class="outline-black">Voir mon cv.</span></a>
    </div>
</template>