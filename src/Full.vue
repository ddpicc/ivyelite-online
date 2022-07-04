<template>
  <v-app>
      <core-app-bar />
      <core-view />
  </v-app>
</template>

<script>
  export default {
    name: 'full',
    components: {
      CoreFooter: () => import('@/components/Footer'),
      CoreAppBar: () => import('@/components/AppBar'),
      CoreView: () => import('@/components/View')
    }
  }
</script>
<style scoped>

</style>

