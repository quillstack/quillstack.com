<template>
    <div>
        <p>
            Components:
        </p>
        <ul class="list-disc">
            <li>
                <router-link :to="{ name: 'di' }" class="link">
                    Dependency Injection Container
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
