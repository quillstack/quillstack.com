<template>
    <div>
        <p>
            Components:
        </p>
        <ul class="list-disc main">
            <li>
                <router-link :to="{ name: 'di' }" class="link">
                    Dependency Injection Container
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'benchmark' }" class="link">
                    Benchmark
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
};
</script>
