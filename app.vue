<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import socialImage from "/images/google-careers.jpg";

  useHead({
    title: "Job Search Site",
    meta: [
      {name: "description", content: "Clone of Google Job search"},
      {property: "og:image", content: `${socialImage}`},
    ]
  })
</script>
