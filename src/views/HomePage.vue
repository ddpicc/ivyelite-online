<template>
  <div id="body">
    <section id="banner">
      <v-sheet
        color="#E8F5EE"
        height="36.75rem"
        tile
        class="swiper"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide 1
          </div>
        </v-row>
      </v-sheet>
      <div class="paddingdiv-15"/>
      <div class="card">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                endVal="98"
                :options="option1"
              />
            </div>
            <div class="word22">申请成功率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                endVal="87"
                :options="option1"
              />
            </div>
            <div class="word22">TOP 30 名校录取率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                endVal="1800"
                :options="option2"
              />
            </div>
            <div class="word22">VIP推荐录取学员</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                endVal="400"
                :options="option3"
              />
            </div>
            <div class="word22">累计录取奖学金</div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="feature">
      <div class="cont">
        <div class="title-wrap">
          <img src="../assets/katie.png" alt="katie"/>
          全美第一线上平台，名师在线授课
        </div>

        <div class="feature-wrap">
          <div class="fe">
            <div class="card1">

            </div>
          </div>
          <div class="fe">
            <div class="card2">

            </div>
          </div>
          <div class="fe">
            <div class="card3">

            </div>
          </div>
          <div class="fe">
            <div class="card4">

            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="media">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            媒体报道
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">

        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
export default {
  components: { ICountUp },
  data () {
    return {
      delay: 1000,
      option1: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '%'
      },
      option2: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '+'
      },
      option3: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: 'K'
      }
    };
  },
  methods: {

  },
}
</script>
<style scoped>
  .word22{
    margin: 2rem 0 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 140%;
  }
  /* 
    banner 
  */
  #banner .swiper{
    position: relative;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 32.68rem;
    left: 50%;
    margin-left: -37.81rem;
    width: 75.625rem;
    height: 18.06rem;
    filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.12));
    border-radius: 1.18rem;
  }
  .paddingdiv-15{
    padding: 15rem 0 0;
  }
  #banner .iCountUp {
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 3.875rem;
    color: #1A8732;
  }
  /* 
    feature 
  */
  #feature .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
  }
  #feature .title-wrap{
    position: relative;
    margin: 10.4rem 0 0;
    font-style: normal;
    font-weight: 600;
    font-size: 3.12rem;
    line-height: 155.2%;
    display: inline-block;

    letter-spacing: 0.06em;
    color: #A58917;
  }
  #feature .title-wrap img{
    max-width: 6.43rem;
    position: absolute;
    top: -4.38rem;
    left: -8.25rem;
  }
  #feature .feature-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  #feature .fe{
    flex: 1 1 50%;
  }
  #feature .fe .card1{
    width: 29.12rem;
    height: 14.625rem;
    background: linear-gradient(286.9deg, #E1F6FF -17.04%, rgba(225, 246, 255, 0) 64.04%, rgba(225, 246, 255, 0.1) 100%);
    filter: drop-shadow(0px 7px 16px rgba(0, 0, 0, 0.13));
    border-radius: 6px;
    margin: 5.75rem 0 0 11.625rem;
  }
  #feature .fe .card2{
    width: 29.12rem;
    height: 14.625rem;
    background: linear-gradient(286.9deg, #FFF3C1 -17.04%, rgba(255, 255, 255, 0.25) 64.04%, rgba(255, 255, 255, 0.21) 100%);
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    margin: 5.75rem 0 0 4.25rem;
  }
  #feature .fe .card3{
    width: 29.12rem;
    height: 14.625rem;
    background: linear-gradient(286.9deg, #F0E1FF -17.04%, rgba(240, 225, 255, 0.07) 64.04%, rgba(240, 225, 255, 0.04) 100%);
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    margin: 3.06rem 0 0 11.625rem;
  }
  #feature .fe .card4{
    width: 29.12rem;
    height: 14.625rem;
    background: linear-gradient(286.9deg, rgba(193, 255, 211, 0.75) -17.04%, rgba(193, 255, 211, 0.11) 36%, rgba(193, 255, 211, 0) 100%);
    filter: drop-shadow(0px 7px 16px rgba(0, 0, 0, 0.13));
    border-radius: 6px;
    margin: 3.06rem 0 0 4.25rem;
  }
  /* 
    media 
  */
  #media {
    background: #E8F5EE;
  }
  #media .cont{
    width: 90rem;
    height: 58.625rem;
    margin: 0 auto;
    text-align: center;
  }
  #media .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 32px;
    line-height: 155.2%;    
  }
  #media .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 39px;
  }
</style>
