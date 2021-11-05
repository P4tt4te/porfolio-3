<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: "QAForm",
    data() {
        return {form: {
            email: "email",
            message: "message"
            }  }
    },
    methods: {
        encode (data) {
            return Object.keys(data)
                .map(
                    key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },
        envoi() {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        axios.post(
            "/",
            this.encode({
            "form-name": "contact",
            ...this.form
            }),
            axiosConfig
        );
        }
    }
})
</script>

<template>
    <div data-scroll-section :id="'Contact'" class="space-y-10">
        <h3 data-scroll data-scroll-speed="1" class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">Contact.</h3>
        <form @submit.prevent="envoi()" method="post" data-netlify="true" data-netlify-honeypot="bot-field" enctype="application/x-www-form-urlencoded" class="space-y-10 p-3 flex flex-col items-center border border-blue-light" name="contact">
            <div class="space-x-5">
                <label for="votre_email">Votre email</label>
                <input class="bg-blue-dark p-1 text-white" type="email" @input="ev => form.email = ev.target.value" required="required">
            </div>
            <div>
                <label for="message_envoi" >Message: <textarea class=" ml-5 bg-blue-dark p-1 text-white" required="required"  @input="ev => form.message = ev.target.value" name="message"></textarea></label>
            </div>
            <div>
                <button class="text-white bg-blue-dark p-2 rounded" type="submit">envoyer</button>
            </div>
        </form>
    </div>
</template>