<template>
  <v-app-bar
    id="core-app-bar"
    absolute
    app
    flat
    style="height: 7vh"
  >
    <v-toolbar-title class="tertiary--text font-weight-light align-self-left">
      <v-img
        contain
        max-height="7vh"
        position="left left"
        src="https://cdn.ivyelite.net/wp-content/uploads/2021/10/16171623/beepress2-1634418983.png"
        @click.stop="jumpHome"
      ></v-img>      
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn
        class="ma-1"
        plain
        to="/course/all"
        :small="$vuetify.breakpoint.mobile"
      >
        全部课程
      </v-btn>
      <v-btn
        v-if="!verifyLogin()"
        class="ma-1"
        plain
        to="/login"
        :small="$vuetify.breakpoint.mobile"
      >
        登录
      </v-btn>
      <v-menu
        v-else
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            plain
            v-bind="attrs"
            class="ma-1"
            v-on="on"
            :small="$vuetify.breakpoint.mobile"
          >
            welcome, {{userName}}
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/myprofile/profile" active-class="green--text">
            <v-list-item-title>个人资料</v-list-item-title>
          </v-list-item>
          <v-list-item to="/myprofile/class" active-class="green--text">
            <v-list-item-title>我的课程</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout" active-class="green--text">
            <v-list-item-title>安全退出</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
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
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>
