<template>
    <div>
        <my-header/>
        <router-view />
        <my-footer/>
    </div>
</template>

<script>
export default {
    watch: {
        '$route': {
            immediate: true,
            handler  : function (to) {
                document.title = to.meta.title || 'QuillStack';
                document.body.scrollTop            = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
        },
    },
};
</script>
