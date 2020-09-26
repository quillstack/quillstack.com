<template>
    <div>
        <div class="border-b w-full border-solid" style="border-color: #2c2c2c;">
            <div class="w-11/12 md:w-1/3 lg:w-1/4 pl-2 mx-auto">
                <nuxt-link to="/">
                    <object type="image/svg+xml"
                            width="100"
                            id="logo"
                            :data="require('@/assets/quillstack-simple.svg')"
                            class="mx-auto pointer-events-none">
                        Quill Stack
                    </object>
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
