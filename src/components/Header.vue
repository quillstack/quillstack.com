<template>
    <div class="border-b-2 w-full border-solid pb-4" style="border-color: #2c2c2c;">
        <div class="w-11/12 md:w-1/3 lg:w-1/4 pl-2 mx-auto">
            <router-link :to="{ name: 'home' }">
                <img :src="topLogo" alt="QuillStack" class="mx-auto"/>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        topLogo() {
            return require('@/assets/top-logo.png');
        }
    }
}
</script>
