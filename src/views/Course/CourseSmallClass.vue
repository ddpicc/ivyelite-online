<template>
  <div>
    <section id="banner">
      <v-sheet
        color="#E9F8FF"
        height="36.75rem"
        tile
        class="swiper"
      >
        <div class="cont">
          <div class="title-wrap">
            GRE 全程提高班
            <div class="yellow-line"></div>
          </div>
          <div class="banner-bullet">
            <ul>
              <li>小规模授课，大规模提分</li>
              <li>视频直播配套教学，保真无障碍高效学习</li>
              <li>大数据精准配备题库，真题机经定期拉练</li>
              <li>业界大牛教师主讲陪练，答题技巧亲传亲授</li>
              <li>层层递进分级教学，不同level学生齐头并进</li>
            </ul>
          </div>
          
        </div>
        <div class="card">
            <div class="card-banner">
              <div class="card-des">
                暑期是备考准备的绝佳时期，时间充裕的同学还能完成实习+GRE双管齐下的绝佳背景提升组合。
              </div>
            </div>
            <div class="card-content">
              <v-item-group
                v-model="classIndex"
                class="d-inline-flex align-center"
                mandatory
              >
                <v-item
                  v-for="n in classList.length"
                  :key="`btn-${n}`"
                  v-slot="{ active, toggle }"
                >
                  <div :class="{'item-active courseTab': active, 'item-inactive courseTab': !active}" @click="toggle">
                    <div class="course-word">{{classList[n-1]}}</div>
                  </div>                  
                </v-item>
              </v-item-group>
              
              <v-window
                v-model="classIndex"
              >
                <v-window-item>
                  <div class="window-wrap">
                    <div class="line1">
                      <img class="people-icon" src="../../assets/icon/people.png"/>
                      15
                      <img class="clock-icon" src="../../assets/icon/clock.png"/>
                      2:00 pm - 4:00 pm
                    </div>
                    <div class="line2">
                      <div class="people">
                        班级人数
                      </div>
                      <div class="clock">
                        时间段
                      </div>
                    </div>
                  </div>
                </v-window-item>
              </v-window>
            </div>
            <div class="card-action">
              <div class="money">
                ¥230
              </div>
              <button class="signup-button">
                立即报名
              </button>
            </div>
          </div>
      </v-sheet>      
    </section>
    <section id="des">
      <div class="cont">
        <div class="wrap">
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
              <v-card
                color="grey"
                height="200"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <h1
                    style="font-size: 5rem;"
                    class="white--text"
                  >
                    Slide {{ n }}
                  </h1>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
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
      classIndex: 1,
      classList: [
        '暑假班',
        '周末班',
        '寒假班',
      ],
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
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 140%;
  }
  /* #region banner css */
  #banner .cont{
    width: 90rem;
    margin: 0 auto;
  }
   #banner .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 155.2%;
    padding: 6.25rem 0 0 10.125rem;
  }
  #banner .title-wrap .yellow-line{
    position: absolute;
    width: 22.5rem;
    height: 0.625rem;
    top: 9.9875rem;
    left: 10.25rem;
    background: #E5C12C;
    border-radius: 39px;
  }
  #banner .banner-bullet{
    padding: 4.21214rem 0 0 10.125rem;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
  }
  #banner .banner-bullet li{
    margin-bottom: 0.8125rem;
  }
  #banner .banner-bullet li::marker{
    color: #E5C12C;
    font-size: 1.5rem;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 4.4375rem;
    left: 50%;
    margin-left: -0.875rem;
    width: 36.0625rem;
    height: 37.3125rem;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
  }
  #banner .card .card-banner{
    background: url("../../assets/Desktop-2.jpg") no-repeat center;
    background-size:contain;
    margin: 0.5rem 0.375rem 0;
    height: 15.9375rem;
  }
  #banner .card .card-banner .card-des{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 177.2%;
    color: #1A8750;

    padding: 4.0625rem 2.4375rem 0 12.625rem;
  }
  #banner .card-content{
    margin: 2.0625rem 0 0 3.3125rem;
  }
  #banner .card-content .courseTab{    
    padding: 0.375rem 1.6875rem 0.3125rem;
    background: #E8F5EE;
    border-radius: 0.25rem 0.25rem 0px 0px;
    margin: 0 3.25rem 0 0; 
  }
  #banner .card-content .item-active{
    color: #1A8750;
    border-bottom: 0.1875rem solid #1A8750;
  }
  #banner .card-content .item-inactive{
    background: #ffffff;
  }
  #banner .card-content .course-word{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 155%;
  }
  #banner .card-content .window-wrap{
    margin: 2.375rem 3.3125rem 0 0;
    padding-bottom: 1.3125rem;
    border-bottom: 1px dashed #B3B3B3;    
  }
  #banner .card-content .window-wrap .line1{
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 155.2%;
    
    display: flex;
    align-items: center;
  }
  #banner .card-content .window-wrap .line1 .people-icon{
    max-width: 1.875rem;
    margin-right: 1rem;
  }
  #banner .card-content .window-wrap .line1 .clock-icon{
    max-width: 1.6875rem;
    margin-left: 9.5625rem;
    margin-right: 1.1875rem;
  }
  #banner .card-content .window-wrap .line2{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 172.7%;
    
    display: flex;
    align-items: center;
  }
  #banner .card-content .window-wrap .line2 .people{
    margin-left: 2.875rem;
  }
  #banner .card-content .window-wrap .line2 .clock{
    margin-left: 10.2rem;
  }
  #banner .card-action{
    padding: 2rem 3.3125rem 0;
    display: flex;
    align-items: center;
  }
  #banner .card-action .money{
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 155.2%;
  }
  #banner .card-action .signup-button{
    width: 16.4375rem;
    height: 4.4375rem;
    margin-left: 6.375rem;

    background: #1A8750;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
    border-radius: 6.625rem;

    font-weight: 600;
    font-size: 1.375rem;
    line-height: 4.4375rem;
    color: #FFFFFF;
  }
  /* #endregion */ 

  /* #region des css */
  #des .cont{
    width: 90rem;
    margin: 0 auto;
    padding: 7.1875rem 0;
  }
  #des .wrap{
    margin: 0 0 0 9.625rem;
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
  /* #endregion */  
</style>
