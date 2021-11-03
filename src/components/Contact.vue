<template>
    <div data-scroll-section :id="'Contact'">
        <h3 data-scroll data-scroll-speed="3" class="text-8xl font-extrabold">Contact.</h3>
        <form name="contact" method="POST" data-netlify="true">
            <div>
                <label for="email">Votre email</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div>
                <label>Message: <textarea name="message"></textarea></label>
            </div>
            <div>
                <button type="submit">envoyer</button>
            </div>
        </form>
    </div>
</template>