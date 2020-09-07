<template>
    <div class="w-11/12 md:w-1/3 lg:w-1/4 my-4 pl-2 mx-auto">
        <router-link :to="{ name: 'home' }">
            <img src="https://quillstack.com/quillstack.png" alt="The Quill Stack" class="mx-auto"/>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
