<template>
  <v-content id="core">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-content>
</template>

<script>
  export default {
    name: 'CoreView',

    metaInfo () {
      return {
        title: 'ivyelite'
      }
    }
  }
</script>
<style scoped>
#core {
  padding: 8.5rem 0 0 !important;
}
</style>
