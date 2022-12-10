<template>
    <div class="flex flex-col gap-8">
        <p>
            Page <span class="font-bold">{{ route.path }}</span> not found on this website.
        </p>
        <p>
            Go to
            <NuxtLink to="/" class="text-teal-600 hover:underline">home page</NuxtLink>
        </p>
    </div>
</template>

<style scoped></style>
<script lang="ts" setup>
const route = useRoute();
</script>
