<template>
    <div>
        <div class="border-b-2 w-full border-solid pb-4" style="border-color: #2c2c2c;">
            <div class="w-11/12 md:w-1/3 lg:w-1/4 pl-2 mx-auto">
                <nuxt-link to="/">
                    <img src="~/assets/top-logo.png" alt="QuillStack" class="mx-auto"/>
                </nuxt-link>
            </div>
        </div>

        <Nuxt />

        <footer class="mt-32">
            <p>
                &copy; 2020
                <nuxt-link to="/" class="link">
                    The Quill Stack
                </nuxt-link>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Default'
}
</script>
