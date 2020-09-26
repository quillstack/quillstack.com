<template>
    <div>
        <p>
            Components:
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
        title: 'QuillStack'
    }
}
</script>
