<template>
  <v-theme-provider dark>
    <v-container class="pa-0">
      <v-row
        no-gutters
      >
        <v-col
          v-if="title || subtitle"
          :cols="callout ? 9 : 12"
        >
          <div class="body-2 grey--text"
            v-if="subtitle"
            v-text="subtitle"
            space="1"
          />

          <h3
            v-text="title"
            class="text-uppercase white--text"
            space="1"
          />

          <v-responsive
            class="base-divider"
            max-width="28"
          >
            <v-divider color="green"/>
          </v-responsive>

          <div
            class="white--text"
            v-if="text"
            v-text="text"
            space="6"
          >
          </div>
        </v-col>

        <v-col
          v-if="callout"
          cols="2"
        >
          <div
            class="display-3 grey--text font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfoCard',


    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
    },
  }
</script>

<style lang="sass">
  .base-divider .v-divider
    border-width: 3px 0 0 0 !important

  .base-divider.base-divider--dense .v-divider
    border-width: 2px 0 0 0 !important
</style>
