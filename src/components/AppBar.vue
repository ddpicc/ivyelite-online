<template>
  <v-app-bar
    app
    absolute
    color="white"
    flat
    class="header"

  >
    <v-container class="py-0 fill-height">
      <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
      ></v-avatar>      

      <v-spacer></v-spacer>

      <v-btn
        rounded
        class="header-menu"
        color="primary"
        outlined
        dark
      >
        登录
      </v-btn>
      <v-btn
        rounded
        class="header-menu"
        color="primary"
        dark
      >
        注册
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapMutations
  } from 'vuex'

  export default {
    data: () => ({
      title: '常青藤精英教育',
      responsive: false,
      userName: '',
    }),

    watch: {
      '$route' (val) {
        this.title = val.name
      }
    },

    mounted () {
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResponsiveInverted)
    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClick () {
        this.setDrawer(!this.$store.state.app.drawer)
      },
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      },

      verifyLogin: function(){
        let check = this.$store.state.user.name;
        this.userName = this.$store.state.user.name;
        return check;
      },

      logout: function(){
        this.$store.dispatch('user/LogOut').then(() => {
          this.$router.push({ path: '/' });
        })
      },

      jumpHome: function(){
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style>
.header {
  height: 8.5rem !important;
}

.v-toolbar__content {
  height: 8.5rem !important;
}
.header .header-menu{
  width: 8.75rem;
}
</style>
