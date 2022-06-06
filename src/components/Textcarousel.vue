<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  data() {
    return {
      subjects: [
        { name: "UX/UI Design" },
        { name: "Branding" },
        { name: "Website development" },
        { name: "Logo design" },
      ],
    };
  },
});
</script>

<template>
  <div id="direction" data-scroll-section>
    <h3
      data-scroll
      data-scroll-speed="3"
      class="text-4xl sm:text-6xl xl:text-8xl font-extrabold mb-5"
    >
      {{ $t("textcarousel.title") }}
    </h3>
    <swiper
      class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-grey h-44"
      :pagination="{
        clickable: true,
      }"
      :slidesPerView="'auto'"
      :autoplay="{ delay: 1500, disableOnInteraction: false }"
      :centeredSlides="true"
      :space-between="50"
      :loop="true"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        class="text-center items-center"
        v-for="subject in subjects"
        :key="subject"
        >{{ subject.name }}</swiper-slide
      >
    </swiper>
  </div>
</template>
