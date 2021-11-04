<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return { mail: "rien",mot: "rien" }
    }
})
</script>

<template>
    <div data-scroll-section :id="'Contact'" class="space-y-10">
        <h3 data-scroll data-scroll-speed="1" class="text-8xl font-extrabold">Contact.</h3>
        <form class="space-y-10 p-3 flex flex-col items-center border border-blue-light" name="contact" method="post" data-netlify="true">
            <div class="space-x-5">
                <label for="votre_email">Votre email</label>
                <input class="bg-blue-dark p-1 text-white" type="email" name="email" :value="mail" id="votre_email" required>
            </div>
            <div>
                <label for="message_envoi" >Message: <textarea class=" ml-5 bg-blue-dark p-1 text-white" id="message_envoi" :value="mot" name="message"></textarea></label>
            </div>
            <div>
                <button class="text-white bg-blue-dark p-2 rounded" type="submit">envoyer</button>
            </div>
        </form>
    </div>
</template>