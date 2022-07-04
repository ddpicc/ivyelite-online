<template>
  <header class="header">

    <div class="logo" @click="jumpHome()"></div>

    <v-spacer></v-spacer>

    <div v-if="!hide" class="dropdown btn-margin">
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

    <div v-if="!hide" class="dropdown btn-margin">
      <div class="dropbtn">
        精英课程
        <img src="../assets/icon/down arrow.png"/>
      </div>
      <div class="dropdown-content">
        <a href="/#/course/explore/gre1v1">GRE 1v1私教班</a>
        <a href="/#/course/explore/gresmallclass">GRE 全程提分班</a>
        <a href="/#/course/explore/gmat1v1">GMAT 1v1私教班</a>
        <a href="/#/course/explore/gmatsmallclass">GMAT 全程提分班</a>
      </div>
    </div>

    <a v-if="!hide" class="aboutus" href="https://www.ivyelite.net/about-us-home">关于我们</a>

    <button
      v-if="!verifyLogin() && !hide"
      class="header-menu register hvr-grow"
      @click="jumpLogin()"
    >
      <p class="word20">登录</p>
    </button>

    <div v-if="verifyLogin() && !hide" class="dropdown btn-margin">
      <div class="dropbtn hvr-grow">
        欢迎你,{{userName}}
        <img src="../assets/icon/down arrow.png"/>
      </div>
      <div class="dropdown-content">
        <a href="/#/myprofile/profile">个人资料</a>
        <a href="/#/myprofile/class">我的课程</a>
        <a @click="logout()">退出</a>
      </div>
    </div>

    <v-app-bar-nav-icon class="drawer" v-if="hide" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="child.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <a style="text-decoration: none;" href="https://www.ivyelite.net/about-us-home">关于我们</a>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/login" v-if="!verifyLogin()">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>登录</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-if="verifyLogin()"
          v-model="active"
          prepend-icon="mdi-account"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>欢迎你，</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/myprofile/profile">
            <v-list-item-content>
              <v-list-item-title>个人资料</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$store.state.user.roles == 'student'" to="/myprofile/class">
            <v-list-item-content>
              <v-list-item-title>我的课程</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="$store.state.user.roles == 'teacher'" to="/myprofile/teacherclass">
            <v-list-item-content>
              <v-list-item-title>我的课堂</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>退出</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {
    data: () => ({
      userName: '',
      drawer: false,
      hide: false,

      items: [
        {
          action: 'mdi-school',
          items: [
            { title: '高中申请', to: 'https://www.ivyelite.net/studying-abroad/high-school-application' },
            { title: '本科申请', to: 'https://www.ivyelite.net/studying-abroad/undergraduate-application' },
            { title: '研究生申请', to: 'https://www.ivyelite.net/studying-abroad/graduate-application' },
          ],
          title: '留学服务',
        },
        {
          action: 'mdi-desktop-mac',
          active: true,
          items: [
            { title: 'GRE 1v1私教班', to: '/course/explore/gre1v1' },
            { title: 'GRE 全程提分班', to: '/course/explore/gresmallclass' },
            { title: 'GMAT 1v1私教班', to: '/course/explore/gmat1v1' },
            { title: 'GMAT 全程提分班', to: '/course/explore/gmatsmallclass' },
          ],
          title: '精英课程',
        },
      ],
      active: true,
    }),

    methods: {
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
      },
      onResponsiveInverted () {
        if (document.documentElement.clientWidth < 600) {
          this.hide = true
        } else {        
          this.hide = false
        }
      },
    },
    mounted: function(){
      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)
    },
    beforeDestroy: function(){
      window.removeEventListener('resize',this.onResponsiveInverted)
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

@media screen and (max-width: 600px) {
  .logo{
    width: 16.75rem;
    height: 8.25rem;
    margin-top: 1.5rem;
  }
  .drawer{
    margin-top: 1.5rem;
  }
}

</style>
