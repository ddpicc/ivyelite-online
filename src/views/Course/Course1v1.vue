<template>
  <div>
    <section id="banner">
      <v-sheet
        color="#E8F5EE"
        height="36.75rem"
        tile
        class="swiper"
      >

          <div class="text-h2">
            Slide 1
          </div>

      </v-sheet>
      <div class="paddingdiv-7"/>
      <div class="card">
        <div class="card-banner">

        </div>
      </div>
    </section>
    <section id="des">
      <div class="cont">
        <v-tabs>
          <v-tab class="tab-title">报名详情</v-tab>
          <v-tab class="tab-title">课程介绍</v-tab>
          <v-tab class="tab-title">评价</v-tab>
          <v-tab class="tab-title">课表安排</v-tab>
        </v-tabs>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),

    methods: {
      
    },

    mounted: function(){
    
		},

    created: function(){

    }
  }
</script>

<style scoped>
  #banner .swiper{
    position: relative;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 4.3125rem;
    left: 50%;
    margin-left: -0.75rem;
    width: 37.6875rem;
    height: 37.4375rem;
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;

  }
  .paddingdiv-7{
    padding: 7.1875rem 0 0;
  }
  #banner .card .card-banner{
    background: #FDF5E7;
    margin: 0.5rem 0.375rem 0;

    height: 15.9375rem;
  }
  #des .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
  }
  #des .v-tab{
    width: 10rem;
  }
  #des .cont .tab-title{
    font-weight: 600;
    font-size: 22px;
    line-height: 155.2%;
  }
</style>
