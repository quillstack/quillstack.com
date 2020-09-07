<template>
    <footer class="mt-32">
        <p>
            &copy; 2020
            <router-link :to="{ name: 'home' }" class="link">
                The Quill Stack
            </router-link>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
