<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { subjects: [{ name: 'UX/UI Design'},{ name: 'Branding'},{ name: 'Website development'}]}
    }
})
</script>

<template>
    <div id="direction" data-scroll-section data-scroll-direction='horizontal' class="text-6xl absolute space-x-10">
        <span data-scroll class="text-grey" v-for="subject in subjects">
            {{ subject.name }}
        </span>
    </div>
</template>