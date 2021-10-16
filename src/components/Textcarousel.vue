<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return { subjects: [{ name: 'UX/UI Design'},{ name: 'Branding graphic design'},{ name: 'Website development'}]}
    }
})
</script>


<template>
    <div data-scroll-container class="text-6xl">
        <span data-scroll data-scroll-position="left" class="text-grey" v-for="subject in subjects">
            {{ subject.name }}
        </span>
    </div>
</template>