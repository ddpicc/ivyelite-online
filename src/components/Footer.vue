<template>
  <v-footer
    id="core-footer"
    color="#222628"
  >
      <v-row class="d-flex" height="107px">
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            class="ma-3"
            color="white"
            plain
            href="https://www.ivyelite.net/about-us-media"
          >
            媒体关注
          </v-btn>
          
          <v-btn
            class="ma-3"
            color="white"
            plain
            href="https://www.ivyelite.net/about-us-join"
          >
            加入我们
          </v-btn>
          <v-img
            class="pt-12"
            contain
            max-height="90px"
            max-width="500"
            src="https://cdn.ivyelite.net/wp-content/uploads/2021/10/16171623/beepress2-1634418983.png"
            @click.stop="jumpHome"
          ></v-img>
          <v-btn
            class="ma-3"
            color="white"
            plain
            href="https://www.ivyelite.net/about-us-deploy"
          >
            联系我们
          </v-btn>
          <v-btn
            class="ma-3"
            color="white"
            plain
          >
            网站条款
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-flex justify-center white--text">
          All Rights Reserved | Powered by Ivyelite Inc.
        </v-col>
      </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    }),

    methods: {
      jumpHome: function(){
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style>
#core-footer {
  z-index: 0;
  padding: 80px 0 30px;
}

#inside {
  height: 107px;
}
</style>
