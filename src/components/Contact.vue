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
        )
        .then(data => console.log(data))
        .catch(error => console.log(error))
        .then(document.getElementById("formfinal").innerHTML = `
            <div>
                Thank you! I received your submission.
            </div>`)
        }
    }
})
</script>

<template>
    <div data-scroll-section :id="'Contact'" class="space-y-10">
        <h3 data-scroll data-scroll-speed="1" class="text-5xl sm:text-6xl xl:text-8xl font-extrabold">Contact.</h3>
        <a href="mailto:edward.brunetiere@gmail.com">
            <p class="mt-10 xl:text-3xl">edward.brunetiere@gmail.com</p>
        </a>
        <p class="xl:text-3xl">+33 652176279</p>
    </div>
</template>