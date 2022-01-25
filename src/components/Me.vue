<script>
import cvpdf from '/cv_edward_brunetiere.pdf';

export default ({
    data() {
        return {};
    },
    mounted() {
        document.getElementById('pdflink').href = cvpdf;
    }
})
</script>



<template>
    <div :id="'Me'" data-scroll-section class="flex flex-col items-center">
        <h3 class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">{{ $t('me.title') }}</h3>
        <img class="sm:max-w-md xl:max-w-xl 2xl:max-w-2xl ppeffet" data-scroll data-scroll-speed="3" src="../assets/me/pp.webp" alt=""> 
        <div class="max-w-md xl:max-w-xl 2xl:max-w-2xl text-sm sm:text-md xl:text-xl">
            <p>{{ $t('me.d1') }}</p>
            <p>{{ $t('me.d2') }}</p>
            <p>{{ $t('me.d3') }}</p>
        </div>
        <a id="pdflink" class="mt-3" target="_blank" rel="noopener noreferrer" href="./public/cv_edward_brunetiere.pdf"><span class="outline-black">{{ $t('me.d4') }}</span></a>
    </div>
</template>