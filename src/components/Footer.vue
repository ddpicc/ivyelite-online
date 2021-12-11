<template>
  <v-footer
    id="core-footer"
    color="#222628"
  >
      <v-row justify="center">
        <v-col cols="10">
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
        <v-col cols="10">
          <div class="white--text ml-6">
            All Rights Reserved | Powered by Ivyelite Inc.
          </div>
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
  padding: 30px 0 30px;
}
</style>
