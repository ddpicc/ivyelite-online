<template>
  <v-app-bar
    app
    absolute
    color="white"
    flat
    class="header"

  >

      <div class="logo">

      </div>

      <v-spacer></v-spacer>

      <button
        class="header-menu login"
      >
        <p class="word20">登录</p>
      </button>
      <button
        class="header-menu register"
      >
        <p class="word20">注册</p>
      </button>

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
.word20{
    font-size: 20px;
    font-weight: 600;
  }
.header {
  height: 8.5rem !important;
}
.logo{
  width: 236px;
  height: 100px;
  background: url("../assets/ivyelite-final-logo-green.png");
}

.v-toolbar__content {
  height: 8.5rem !important;
  padding: 1.375rem 1.5rem !important;
}
.header .header-menu{
  width: 8.75rem;
  height: 3.125rem;
  border-radius: 6.625rem;
  text-align:center;
  line-height: 3.125rem;
}
.header .login{
  border: 1px solid #1A8750;
  color: #1A8750;
}
.header .register{
  background: #1A8750;
  color: #fff;
}
</style>
