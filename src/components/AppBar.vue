<template>
  <header class="header">

      <div class="logo" @click="jumpHome()"></div>

      <v-spacer></v-spacer>

      <div class="dropdown btn-margin">
        <div class="dropbtn">
          留学服务
          <img src="../assets/icon/down arrow.png"/>
        </div>
        <div class="dropdown-content">
          <a href="https://www.ivyelite.net/studying-abroad/high-school-application">高中申请</a>
          <a href="https://www.ivyelite.net/studying-abroad/undergraduate-application">本科申请</a>
          <a href="https://www.ivyelite.net/studying-abroad/graduate-application">研究生申请</a>
        </div>
      </div>

      <div class="dropdown btn-margin">
        <div class="dropbtn">
          精英课程
          <img src="../assets/icon/down arrow.png"/>
        </div>
        <div class="dropdown-content">
          <a href="/#/course/explore/gre1v1">GRE 1v1 私教班</a>
          <a href="/#/course/explore/gresmallclass">GRE 全程提分班</a>
          <a href="/#/course/explore/gmat1v1">GMAT 1v1 私教班</a>
          <a href="/#/course/explore/gmatsmallclass">GMAT 全程提分班</a>
        </div>
      </div>

      <a class="aboutus" href="https://www.ivyelite.net/about-us-home">关于我们</a>

      <button
        v-if="!verifyLogin()"
        class="header-menu register hvr-grow"
        @click="jumpLogin()"
      >
        <p class="word20">登录</p>
      </button>

      <div v-if="verifyLogin()" class="dropdown btn-margin">
        <div class="dropbtn hvr-grow">
          Welcome, {{userName}}
          <img src="../assets/icon/down arrow.png"/>
        </div>
        <div class="dropdown-content">
          <a href="/#/myprofile/profile">个人资料</a>
          <a v-if="$store.state.user.roles == 'student'" href="/#/myprofile/class">我的课程</a>
          <a v-if="$store.state.user.roles == 'teacher'" href="/#/myprofile/teacherclass">我的课堂</a>
          <a @click="logout()">退出</a>
        </div>
      </div>

  </header>
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
      jumpLogin: function(){
        this.$router.push({ path: '/login' });
      },
      verifyLogin: function(){
        let check = this.$store.state.user.name;
        this.userName = this.$store.state.user.name;
        return check != '';
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
    font-size: 1.25rem;
    font-weight: 600;
  }
  .hvr-grow {
    display: inline-block;
    transform: translateZ(0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
  }

  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    transform: scale(1.1);
  }
  .header {
    height: 7.625rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 0.125rem 0.375rem rgba(0, 0, 0, 0.13);
    background: #FFFFFF;
  }
  .logo{
    width: 14.75rem;
    height: 6.25rem;
    background: url("../assets/ivyelite-final-logo-green.png") no-repeat center; 
    background-size: cover;
    cursor: pointer;
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
  .header .register{
    background: #1A8750;
    color: #fff;
    margin-right: 5.4375rem;
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
    cursor: pointer;
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
    margin-right: 3.6875rem;

    font-weight: 600;
    font-size: 1.25rem;
    text-decoration: none;
  }
  .header a{
    color: #2C2E30;
  }

  .header .dropdown-content {
    display: none;
    position: absolute;
    min-width: 9.375rem;
    background-color: #fff;
    z-index: 999;
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
