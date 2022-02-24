<template>
  <v-app-bar
    app
    absolute
    color="white"
    flat
    class="header"
  >

      <div class="logo" @click="jumpHome()"></div>

      <v-spacer></v-spacer>

      <div class="dropdown btn-margin">
        <div class="dropbtn">
          留学服务
          <img src="../assets/icon/down arrow.png"/>
        </div>
        <div class="dropdown-content">
          <a href="/">测试</a>
          <a href="/">测试</a>
          <a href="/">测试</a>
        </div>
      </div>

      <div class="dropdown btn-margin">
        <div class="dropbtn">
          精英课程
          <img src="../assets/icon/down arrow.png"/>
        </div>
        <div class="dropdown-content">
          <a href="/#/course/explore/1v1">GRE 1v1 私教班</a>
          <a href="/#/course/explore/smallclass">GRE 全程提分班</a>
          <a href="/#/course/explore/1v1">GMAT 1v1 私教班</a>
          <a href="/#/course/explore/smallclass">GMAT 全程提分班</a>
        </div>
      </div>

      <a class="aboutus">关于我们</a>

      <button
        class="header-menu register"
        @click="jumpLogin()"
      >
        <p class="word20">登录</p>
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
      jumpLogin: function(type){
        this.$router.push({ path: '/login' });
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
    margin-right: 2rem;
  }
  .header .register{
    background: #1A8750;
    color: #fff;
  }


  .header .dropdown {
    position: relative;
    display: inline-block;
  }
  .header .dropbtn {
    display: flex;
    align-items: center;
    width: auto;
    height: 1.75rem;
    text-align: center;
    line-height: 1.75rem;

    font-weight: 600;
    font-size: 1.25rem;
  }
  .header .dropbtn img{
    max-height: 1.4375rem;
    margin-left: 0.5rem;
  }
  .header .btn-margin{
    margin-right: 3.1875rem;
  }
  .header .aboutus {
    width: auto;
    height: 1.75rem;
    text-align: center;
    line-height: 1.75rem;
    margin-right: 8.6875rem;

    font-weight: 600;
    font-size: 1.25rem;
  }
  .header a{
    color: #2C2E30;
  }

  .header .dropdown-content {
    display: none;
    position: absolute;
    min-width: 9.375rem;
    background-color: #fff;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
  }

  .header .dropdown-content a {
    color: #2C2E30;
    padding: 0.75rem 0.5rem;
    display: block;
    text-decoration: none;
  }

  .header .dropdown-content a:hover {
    background-color: #f1f1f1;
    color: #1A8750;
  }

  .header .dropdown:hover .dropdown-content {
    display: block;
  }


</style>
