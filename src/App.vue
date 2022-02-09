<template>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script>
export default {
    name: 'APP',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(()=>{
          this.isRouterAlive =true;
        });
      }
    }
  }
</script>
<style scoped>
.v-application {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', "PingFang SC", "Hragino Sans GB","Microsoft YaHei", "Helvetica Neue", Arial, Helvetica, sans-serif !important;
}
  
</style>
