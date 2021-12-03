<template>
  <div />
</template>

<script lang="ts">
export default {
  beforeRouteEnter(to, from, next) {
    return next({ name: 'analytics' })
  },
  setup() {
    useHead({
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home' },
      ],
    })
  },
}
</script>

<route lang="yaml">
meta:
  layout: home
</route>
