<template>
    <h1>
        QuillStack
    </h1>
    <p>
        Components:
    </p>
    <ul class="list-disc">
        <li>
            <router-link :to="{ name: 'dependency-injection' }" class="link">
                Dependency Injection Container
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>
