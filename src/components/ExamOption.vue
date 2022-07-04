<template>
  <div class="outer">
    <div v-for="n in count" :key="n" class="op" v-bind:class="{ 'active': active == n}" @click="optionActive(n)">
      {{options[n-1]}}
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    count: Number,
    options: Array,
  },
  data: () => ({
    active: 0,
  }),
  methods: {
    optionActive: function(n){
      this.active = n
    }
  }
}
</script>
<style scoped>
.outer{
  display: inline-block;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}
.op{
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-top: 1px solid #000;
  cursor: pointer;
}
.active{
  color: #fff;
  background: #000;  
}
</style>