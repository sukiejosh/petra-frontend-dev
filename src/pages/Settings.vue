<template>
  <div>
    <div class="text-5xl font-bold flex items-center justify-start">Settings</div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
<script setup lang="ts">
useHead({
  title: 'Settings',
  meta: [
    { name: 'description', content: 'Settings' },
  ],
})
</script>

