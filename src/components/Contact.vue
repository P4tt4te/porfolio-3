<template>
    <div data-scroll-section :id="'Contact'">
        <h3 data-scroll data-scroll-speed="3" class="text-8xl font-extrabold">Contact.</h3>
        <form name="contact" netlify>
            <div>
                <label for="email">Votre email</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div>
                <label for="message">Votre message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button type="submit">envoyer</button>
            </div>
        </form>
    </div>
</template>