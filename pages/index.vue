<template>
    <div>
        <h1>
            The Quill Stack
        </h1>
        <p>
            The Quill Stack is a group of components you can use separately or combine them into the framework.
            The main goal was to create the packages which will be fast and simple without any magic features.
        </p>
        <ul class="list-disc main">
            <li>
                <nuxt-link to="/di" class="link">
                    Dependency Injection Container
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/request" class="link">
                    Request
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/benchmark" class="link">
                    Benchmark
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    head: {
        title: 'QuillStack',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    }
}
</script>
