<template>
  <v-app id="app">
    <core-app-bar />

    <core-view />

    <core-footer />
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

