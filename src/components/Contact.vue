<template>
    <div data-scroll-section :id="'Contact'" class="space-y-10">
        <h3 data-scroll data-scroll-speed="1" class="text-8xl font-extrabold">Contact.</h3>
        <form name="contact" method="POST" netlify>
            <div>
                <label for="email">Votre email</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div>
                <label>Message: <textarea name="message"></textarea></label>
            </div>
            <div>
                <button class="text-white bg-blue-light p-2 rounded" type="submit">envoyer</button>
            </div>
        </form>
    </div>
</template>