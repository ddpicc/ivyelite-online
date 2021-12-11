<template>
  <v-container class="pa-0">
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        cols="5"
        class="ma-5 pa-5"
      >
        <v-img
          height="450px"
          :src="pic_url"
        />
      </v-col>

      <v-col
        cols="7"        
        class="ma-10 pa-5"
      >
        <div
          v-text="title"
          class="text-md-h4 text-lg-h3 text-sm-h5 font-weight-bold text-uppercase white--text"
          space="1"
        />
        <div class="text-md-h4 text-lg-h3 text-sm-h6 font-weight-bold  white--text mt-8"
          v-if="subtitle"
          v-text="subtitle"
          space="1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'CourseInfoCard',
    props: {
      pic_url: String,
      subtitle: String,
      title: String,
    },
  }
</script>

<style lang="sass">

</style>
