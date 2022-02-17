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
      <div class="content-wrap">
        <v-item-group
          v-model="tabIndex"
          class="d-flex align-start"
          mandatory
        >
          <v-item
            v-for="n in tabList.length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
            class="word22 mright"
          >
            <div :class="{'itemActive': active}" @click="toggle">{{tabList[n-1]}}
              <div :class="{'displayLine': active, 'noLine': !active}"></div>
            </div>
            
          </v-item>
        </v-item-group>

        <v-window
          v-model="tabIndex"
          reverse
        >
          <v-window-item
            v-for="n in tabList.length"
            :key="`card-${n}`"
          >
            <v-stepper
              v-model="e6"
              vertical
            >
              <v-stepper-step
                :complete="e6 > 1"
                step="1"
              >
                选择课时
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn
                  color="primary"
                  @click="e6 = 2"
                >
                  继续
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="e6 > 2"
                step="2"
              >
                分配课时
              </v-stepper-step>
              <v-stepper-content step="2">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn
                  color="primary"
                  @click="e6 = 3"
                >
                  继续
                </v-btn>
                <v-btn text @click="e6 = 1">
                  返回
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="e6 > 3"
                step="3"
              >
                个人信息
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn
                  color="primary"
                  @click="e6 = 4"
                >
                  继续
                </v-btn>
                <v-btn text @click="e6 = 2">
                  返回
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="e6 > 4"
                step="4"
              >
                支付
              </v-stepper-step>
              <v-stepper-content step="4">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
                <v-btn
                  color="primary"
                  @click="e6 = 5"
                >
                  立即支付
                </v-btn>
                <v-btn text @click="e6 = 3">
                  返回
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                step="5"
              >
                报名成功
              </v-stepper-step>

              <v-stepper-content step="5">
                <v-card
                  color="grey lighten-1"
                  class="mb-12"
                  height="200px"
                ></v-card>
              </v-stepper-content>
            </v-stepper>
          </v-window-item>
        </v-window>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      tabList: [
        '报名详情',
        '课程介绍',
        '评价',
        '课表安排'
      ],
      tabIndex: 0,
       e6: 1,
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
  .word22{
    font-size: 22px;
    font-weight: 600;
    line-height: 140%;
  }
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
  #des .content-wrap{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
  }
  #des .mright{
    margin-right: 7.75rem;
  }
  #des .content-wrap .itemActive{
    color: #1A8750;
  }
  #des .content-wrap .displayLine{
    margin: 0.625rem 0 0;
    background: #1A8750;
    height: 0.3125rem;
  }
  #des .content-wrap .noLine{
    margin: 0.625rem 0 0;
    height: 0.3125rem;
  }
</style>
