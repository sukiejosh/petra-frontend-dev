<template>
  <div>
    <div class="text-5xl font-bold flex items-center justify-start">Overview</div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
<script setup lang="ts">
useHead({
  title: 'Overview',
  meta: [
    { name: 'description', content: 'Overview' },
  ],
})
</script>

