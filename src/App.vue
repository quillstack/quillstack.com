<template>
    <div class="w-11/12 md:w-1/3 lg:w-1/4 my-4 pl-2 mx-auto">
        <a href="/">
            <img src="https://quillstack.com/quillstack.png" alt="The Quill Stack" class="mx-auto"/>
        </a>
    </div>
    <router-view />
    <footer class="mt-32">
        <p>
            &copy; 2020
            <router-link class="link" :to="{ name: 'home' }">
                The Quill Stack
            </router-link>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'App'
};
</script>
