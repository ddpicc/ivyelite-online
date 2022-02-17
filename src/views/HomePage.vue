<template>
  <div id="body">
    <section id="banner">
      <v-window
        v-model="swiperOn"
        reverse
      >
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper pic1"
            color="#E8F5EE"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="banner-title1">
                双G保分班，助你申请扶摇直上！
              </div>
            </v-row>
          </v-sheet>
        </v-window-item>
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper back2"
          >
            <div class="pic2">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  Slide 
                </div>
              </v-row>
            </div>
          </v-sheet>
        </v-window-item>
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper pic3"
            color="#F5F0FF"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                Slide 
              </div>
            </v-row>
          </v-sheet>
        </v-window-item>
      </v-window>
      <v-item-group
        v-model="swiperOn"
        class="d-flex swiper-btn-group justify-center"
        mandatory
      >
        <v-item
          v-for="n in 3"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <div :class="{'btn-active': active, 'btn-inactive': !active}" @click="toggle"></div>
        </v-item>
      </v-item-group>
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
                :endVal="98"
                :options="option1"
              />
            </div>
            <div class="word22 word-margin">申请成功率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="87"
                :options="option1"
              />
            </div>
            <div class="word22 word-margin">TOP 30 名校录取率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="1800"
                :options="option2"
              />
            </div>
            <div class="word22 word-margin">VIP推荐录取学员</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="400"
                :options="option3"
              />
            </div>
            <div class="word22 word-margin">累计录取奖学金</div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="feature">
      <div class="cont">
        <div class="title-wrap">
          全美第一线上平台，名师在线授课
        </div>

        <div class="feature-wrap">
          <div class="card1">
            <div class="feature-icon d-flex align-center">
              <div class="outer">
                <img src="../assets/icon/Education.png"/>
              </div>          
              业界顶级教辅团队助力
            </div>
            <div class="des">
              常青藤网罗业界最具口碑的资深提分老师，组建成VIP教<br>
              辅团队助力学员短期出分。并定期邀请最强大脑等嘉宾老<br>
              师举办讲座，传授单词记忆与提分秘笈。
            </div>
          </div>

          <div class="card2">
            <div class="feature-icon d-flex align-center">
              <div class="outer">
                <img src="../assets/icon/Medal.png"/>
              </div>              
              针对北美学生研发教案
            </div>
            <div class="des">
              常青藤提分团队针对北美留学生的数理阅读基础和学习<br>
              特性开发最适合的课程体系和配套教案，因材施教，做<br>
              最有效的冲分辅导。
            </div>
          </div>
        </div>
        <div class="feature-wrap">
          <div class="card3">
            <div class="feature-icon d-flex align-center">
              <div class="outer">
                <img src="../assets/icon/Crown.png"/>
              </div>              
              授课时间私人定制
            </div>
            <div class="des">
              常青藤双G教辅团队将尽可能配合学员的时间行程，通过<br>
              线上直播、课后录播、周中周末私人定制等方式，让学生<br>
              免受时间和地点的困扰，随时随地轻松提分。
            </div>
          </div>

          <div class="card4">
            <div class="feature-icon">
              <div class="outer">
                <img src="../assets/icon/Star.png"/>
              </div>              
              配套全面监督体系
            </div>
            <div class="des">
              为每个私教班和提分班都配备了常青藤导师作为课程小<br>
              助手，全程陪伴并监督学生定时打卡、按时上课、练习<br>
              复习、查漏补缺等等。
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="course">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            精英课程
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">
          <v-item-group
            v-model="onboarding"
            class="d-inline-flex align-center"
            mandatory
          >
            <v-item
              v-for="n in courseList.length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <div :class="{'item-active courseTab': active, 'item-inactive courseTab': !active}" @click="toggle">
                <div class="course-word">{{courseList[n-1]}}</div>
              </div>
              
            </v-item>
            <div class="allCourse">
              全部课程
            </div>
          </v-item-group>
          
          <v-window
            v-model="onboarding"
          >
            <v-window-item>
              <div class="d-flex gre-1v1">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer">
                      <div class="inner">
                        <img src="../assets/icon/gre 1v1.png"/>
                      </div>
                    </div>
                    
                    GRE 1v1 私教班
                  </div>
                  <div class="slogan">私人定制，出分神器</div>
                  <div class="des">往届参与学生屡出330高分，人<br>均提分20+，为冲刺名校申请保<br>驾护航。</div>
                  <button class="btn-joinclass1">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/online-learning-concept-1.png"/>
                  <div class="fe1">真题模拟<br>独家讲座</div>
                  <div class="fe2">课程定制<br>课时灵活</div>
                  <div class="fe3">专注北美<br>顶级师资</div>
                  <div class="fe4">1v1 伴学<br>全程监督</div>
                </div>
              </div>
            </v-window-item>

            <v-window-item>
              <div class="d-flex gre-small">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer">
                      <div class="inner">
                        <img src="../assets/icon/gre small class.png"/>
                      </div>
                    </div>                    
                    GRE 全程提高班
                  </div>
                  <div class="slogan">小规模授课，大规模提分</div>
                  <div class="des">以短期提分为首要目标的学生群体，授课以科学化教<br>学、大数据筛题为内核，合理化陪伴管理为标配，高保<br>真习题反复操练，周期测试不断打磨，实现沉浸式学习<br>体验的同时，顺利达到名校申请的标化成绩。</div>
                  <button class="btn-joinclass2">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/students-in-a-class.png"/>
                  <div class="fe1">业界大牛教师主讲陪练<br>答题技巧亲传亲授</div>
                  <div class="fe2">大数据精准配备题库<br>真题机经定期拉练</div>
                  <div class="fe3">视频直播配套教学<br>保真无障碍高效学习</div>
                  <div class="fe4">层层递进分级教学<br>不同level学生齐头并进</div>
                </div>
              </div>
            </v-window-item>

             <v-window-item>
              <div class="d-flex gmat-1v1">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer">
                      <div class="inner">
                        <img src="../assets/icon/gmat 1v1.png"/>
                      </div>
                    </div>
                    
                    GMAT 1v1 私教班
                  </div>
                  <div class="slogan">高效提分，直击痛点</div>
                  <div class="des">开课前精准评估各知识点掌握程度，优先<br>强化训练高频薄弱知识点。往届参与学生<br>屡出720高分，人均提分40+，为冲刺名<br>校申请保驾护航。</div>
                  <button class="btn-joinclass3">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/teaching.png"/>
                  <div class="fe1">真题模拟<br>独家讲座</div>
                  <div class="fe2">课程定制<br>课时灵活</div>
                  <div class="fe3">专注北美<br>顶级师资</div>
                  <div class="fe4">1v1 伴学<br>全程监督</div>
                </div>
              </div>
            </v-window-item>

             <v-window-item>
              <div class="d-flex gmat-small">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer">
                      <div class="inner">
                        <img src="../assets/icon/gmat small class.png"/>
                      </div>
                    </div>
                    
                    GMAT 全程提高班
                  </div>
                  <div class="slogan">名师讲堂，因材施教</div>
                  <div class="des">四大全科名师中文授课， 深入浅出的覆盖各<br>个考点，以通俗易懂的形式将复杂的语法，逻<br>辑，阅读等考点一一突破；以新颖、特色教学<br>风格吸引学生在线听课保持专注力。</div>
                  <button class="btn-joinclass4">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/group-of-people.png"/>
                  <div class="fe1">业界大牛教师主讲陪练<br>答题技巧亲传亲授</div>
                  <div class="fe2">大数据精准配备题库<br>真题机经定期拉练</div>
                  <div class="fe3">视频直播配套教学<br>保真无障碍高效学习</div>
                  <div class="fe4">层层递进分级教学<br>不同level学生齐头并进</div>
                </div>
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </section>
    <section id="unique">
      <div class="cont" >
        <v-row justify="center">
          <div class="title-wrap">
            独家课程
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <v-row justify="center"> 
            <div class="headline-wrap">
              <img src="../assets/katie.png" alt="katie"/>
              《最强大脑高效记忆法 – 如何高效记忆GRE核心词》
            </div>
        </v-row>
        <v-row>
          <div class="left">
            最强大脑中国队队长，世界记忆大师李威老师曾受邀到哈佛大学、哥伦比亚大学等顶尖名校分享高效记忆方法和思维，并收获大批学生的青睐和赞赏。常青藤精英教育Ivy Elite 特邀李威老师为GRE暑假班全体学员亲授GRE核心词汇记忆大法，助力大家短时间克服单词难关，冲击高分并申请名校！
          </div>
          <div class="right">

          </div>
        </v-row>
      </div>
    </section>
    <section id="teacher">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            导师介绍
            <div class="yellow-line"></div>
          </div>
        </v-row>

          <div class="content-wrap">
            <div class="teacher-slider d-flex align-center justify-center">
              <div @click="prev()" class="icon-outter left">
                <img src="../assets/icon/left arrow.png"/>
              </div>
              <div class="slider-wrap">
                <slider ref="slider" :options="options" @slide='slide'>
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem v-for="(item,index) in teacherImgList" :key="index">
                    <div class="overlay">
                      <img :src="teacherImgList[index]"/>
                    </div>
                  </slideritem>
                </slider>
              </div>
              <div @click="next()" class="icon-outter right">
                <img src="../assets/icon/right arrow.png"/>
              </div>
            </div>
            <v-window
              v-model="teacherOn"
              reverse
            >
              <v-window-item
                v-for="(item,index) in teacherImgList" 
                :key="index"
              >
                <ul class="intro-wrap">
                  <li >9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富</li>
                  <li >作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员</li>
                </ul>
              </v-window-item>
            </v-window>      
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
        <v-row justify="center"> 
          <div class="content-wrap">
            <div class="d-flex">
              <div class="media-block media1">
                <img src="../assets/media/image 17.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 18.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 19.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 20.png"/>
              </div>
            </div>
            <div class="d-flex">
              <div class="media-block media1">
                <img src="../assets/media/image 21.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 22.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 23.png"/>
              </div>
              <div class="media-block">
                <img src="../assets/media/image 24.png"/>
              </div>
            </div>
          </div>
        </v-row>
      </div>
    </section>
    <section id="news">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            新闻资讯
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">
          <div class="d-flex">
            <div class="news-btn word22 gmat">
              GMAT
            </div>
            <div class="news-btn word22 gre">
              GRE
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <v-window
              v-model="newsOn"
              vertical
            >
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li >GRE考试介绍</li>
                      <li >GRE国内考点疫情期间防控须知</li>
                      <li >GRE国内考点疫情期间安排调整</li>
                      <li >关于恢复北京地区GRE考试的通知</li>
                    </ul>
                  </div>
                  <div class="news-block2">
                    <ul class="wrap">
                      <li >从0到1，考320冲击名校不得不了解的GRE考点！</li>
                      <li >纽约再现价值640万的GRE真题！！！</li>
                      <li >9月GRE王牌出分班火热报名中，揭秘快速出分秘籍！</li>
                      <li >2022申请季还要备考GRE吗？学校大趋势还是GRE optional！</li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li >GRE考试介绍</li>
                      <li >GRE国内考点疫情期间防控须知</li>
                      <li >GRE国内考点疫情期间安排调整</li>
                      <li >关于恢复北京地区GRE考试的通知</li>
                    </ul>
                  </div>
                  <div class="news-block2">
                    <ul class="wrap">
                      <li >从0到1，考320冲击名校不得不了解的GRE考点！</li>
                      <li >纽约再现价值640万的GRE真题！！！</li>
                      <li >9月GRE王牌出分班火热报名中，揭秘快速出分秘籍！</li>
                      <li >2022申请季还要备考GRE吗？学校大趋势还是GRE optional！</li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
            </v-window>
            <v-item-group
              v-model="newsOn"
              class="swiper-btn-group justify-center"
              mandatory
              vertical
            >
              <v-item
                v-for="n in 2"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <div :class="{'btn-active': active, 'btn-inactive': !active}" @click="toggle"></div>
              </v-item>
            </v-item-group>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: { ICountUp, slider, slideritem },
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
      },
      courseList: [
        'GRE 1v1 私教班',
        'GRE 全程提分班',
        'GMAT 1v1 私教班',
        'GMAT 全程提分班'
      ],
      teacherImgList: [        
        require('../assets/Cat.png'),
        require('../assets/Renee.png'),
        require('../assets/William.png'),
        require('../assets/Mika.png'),
        require('../assets/Julia.png'),
        require('../assets/Victoria.png'),
      ],
      onboarding: 0,
      swiperOn: 0,
      teacherOn: null,
      newsOn: 0,

      //Slider configuration [obj]
      options: {
        currentPage: 0,
        itemAnimation: true,
        centeredSlides: true,
        pagination: false,
        slidesToScroll: 1,
        loop: true
      }
    };
  },
  methods: {
    next () {
      this.$refs.slider.$emit('slideNext')
    },
    prev () {
      this.$refs.slider.$emit('slidePre')

    },
    // Listener event
    slide (data) {
      this.teacherOn = data.currentPage;
    },
  },

  mounted: function(){
    /* let timer = setInterval(() => {
      this.swiperOn = this.swiperOn + 1 === 3
        ? 0
        : this.swiperOn + 1
    },6000) */
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
  #banner .swiper{
    position: relative;
  }
  #banner .pic1{
    background: url("../assets/Banner_1.jpg") no-repeat center; 
    background-size:contain;
  }
  #banner .banner-title1{
    font-weight: 600;
    font-size: 5rem;
    line-height: 125%;
    color: #1A8750;
    padding-left: 0.875rem;
  }
  #banner .back2{
    background: linear-gradient(to right, #C6EBFF , #E0F4FF);
  }
  #banner .pic2{
    height: 36.75rem;
    background: url("../assets/Banner_2.jpg") no-repeat center; 
    background-size:contain;
  }
  #banner .pic3{
    background: url("../assets/Banner_3.jpg") no-repeat center; 
    background-size:contain;
  }
  #banner .swiper-btn-group{
    position: absolute;
    top: 22.68rem;
    left: 50%;
    margin-left: -1.656rem;
  }
  #banner .swiper-btn-group .btn-active{
    width: 1.4375rem;
    height: 0.375rem;
    background: #1A8750;
    border-radius: 1.875rem;
    margin: 0 0.1875rem;
  }
  #banner .swiper-btn-group .btn-inactive{
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 1.875rem;
    background: #C4C4C4;
    margin: 0 0.1875rem;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 32.68rem;
    left: 50%;
    margin-left: -37.81rem;
    width: 75.625rem;
    height: 18.06rem;
    filter: drop-shadow(0px 0.25rem 1.0625rem rgba(0, 0, 0, 0.12));
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
  #banner .word-margin{
    margin: 2rem 0 0;
  }
  /* #endregion */

  /* #region feature css */  
  #feature .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    background: url("../assets/mascot.png") no-repeat center bottom; 
  }
  #feature .title-wrap{
    position: relative;
    margin: 9.875rem 0 0;
    font-style: normal;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 155.2%;
    display: inline-block;

    letter-spacing: 0.06em;
    color: #A58917;
  }
  #feature .feature-wrap {
    display: flex;
  }
  #feature .feature-wrap .card1{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(94.71deg, rgba(211, 241, 255, 0.5) 19.24%, rgba(255, 255, 255, 0.5) 48.92%, rgba(176, 176, 176, 0.165) 96.63%);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.5625rem 0 0 10.3125rem;
  }
  #feature .feature-wrap .card2{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(286.38deg, rgba(255, 243, 193, 0.5) -16.97%, rgba(255, 246, 193, 0.5) 12.44%, rgba(255, 248, 193, 0.5) 33.72%, rgba(255, 236, 226, 0.5) 68.15%, rgba(228, 183, 188, 0.5) 86.92%, rgba(228, 182, 187, 0.5) 103.19%);
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.5625rem 0 0 8.9375rem;
  }
  #feature .feature-wrap .card3{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(104.61deg, rgba(240, 225, 255, 0.5) -1.68%, rgba(240, 225, 255, 0.5) 19.29%, rgba(255, 255, 255, 0.5) 62.34%, rgba(202, 202, 207, 0.5) 98.21%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.3125rem 0 1.8125rem 10.3125rem;
  }
  #feature .feature-wrap .card4{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(286.03deg, rgba(193, 255, 211, 0.5) -16.93%, rgba(193, 255, 211, 0.5) 13.15%, rgba(230, 185, 190, 0.155) 92.8%, rgba(255, 255, 255, 0.5) 100.92%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.3125rem 0 1.8125rem 8.9375rem;
  }
  #feature .feature-wrap .feature-icon{
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 155.2%;

    display: flex;
    align-items: center;
    margin: 2rem 0 0 3rem;   
  }
  #feature .feature-wrap .outer{
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    margin: 0 1.375rem 0 0;  

    display: flex;
    align-items: center;
    justify-content: center;
  }
  #feature .feature-wrap .card1 .outer{
    background: #E3F6FF;
  }
  #feature .feature-wrap .card2 .outer{
    background: #FFF3C1;
  }
  #feature .feature-wrap .card3 .outer{
    background: #F0E1FF;
  }
  #feature .feature-wrap .card4 .outer{
    background: #C1FFD3;
  }
  #feature .feature-wrap .des{
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 172.7%;
    text-align: left;
    margin: 1.25rem 0 0 3rem;
  }
  /* #endregion */

  /* #region course css */
  #course .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
  }
  #course .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 2rem;
    line-height: 155.2%;
    margin: 16.5rem 0 0;  
  }
  #course .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #course .content-wrap{
    margin: 4.75rem 0 0;
  }
  #course .content-wrap .courseTab{    
    padding: 0.375rem 1.6875rem 0.3125rem;
    background: #E8F5EE;
    border-radius: 0.25rem 0.25rem 0px 0px;
    margin: 0 3.25rem 0 0; 
  }
  #course .content-wrap .item-active{
    color: #1A8750;
    border-bottom: 0.1875rem solid #1A8750;
  }
  #course .content-wrap .item-inactive{
    background: #ffffff;
  }
  #course .content-wrap .course-word{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 155%;
  }
  #course .content-wrap .allCourse{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 155.2%;

    text-decoration-line: underline;
    color: #9F9F9F;
  }
  #course .gre-1v1 .left{
    margin: 0 16.4375rem 0 8.8125rem;
  }
  #course .gre-small .left{
    margin: 0 1.4375rem 0 8.8125rem;
  }
  #course .gmat-1v1 .left{
    margin: 0 9.25rem 0 8.8125rem;
  }
  #course .gmat-small .left{
    margin: 0 4.25rem 0 8.8125rem;
  }
  #course .left .course-icon{
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 155.2%;
    margin: 6.9375rem 0 0;
  }
  #course .left .course-icon .outer{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #FFF3C1;
    margin: 0 1.3125rem 0 0;

    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #course .left .course-icon .inner{
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #course .left .slogan{
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 177%;
    letter-spacing: 0.04em;
    margin: 2.75rem 0 0;
  }
  #course .left .des{
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 177%;
    letter-spacing: 0.04em;
    margin: 1.5rem 0 0;
  }
  #course .left .btn-joinclass1{
    margin: 5.75rem 0 10.5rem;
    width: 18.0625rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 1.9375rem;
  }
  #course .left .btn-joinclass2{
    margin: 4.3125rem 0 10.5rem;
    width: 18.0625rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 1.9375rem;
  }
  #course .left .btn-joinclass3{
    margin: 3.0625rem 0 10.5rem;
    width: 18.0625rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 1.9375rem;
  }
  #course .left .btn-joinclass4{
    margin: 2.9375rem 0 10.5rem;
    width: 18.0625rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 1.9375rem;
  }
  #course .right{
    position: relative;
  }
  #course .gre-1v1 .right img{
    position: absolute;
    width: 35.25rem;
    height: 35.25rem;
    top: -2.125rem;
    left: 0;
  }
  #course .gre-1v1 .right div{
    width: 11.25rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140.7%;
  }
  #course .gre-1v1 .right .fe1{
    position: absolute;
    top: 13.75rem;
    left: -3.125rem;
  }
  #course .gre-1v1 .right .fe2{
    position: absolute;
    top: 9.0625rem;
    left: 25.4375rem;
  }
  #course .gre-1v1 .right .fe3{
    position: absolute;
    top: 27.4375rem;
    left: -5.125rem;
  }
  #course .gre-1v1 .right .fe4{
    position: absolute;
    top: 24.875rem;
    left: 28.0625rem;
  }


  #course .gre-small .right img{
    position: absolute;
    width: 46.5625rem;
    height: 46.5625rem;
    top: -3.5rem;
    left: 0;
  }
  #course .gre-small .right div{
    width: 19.1875rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 24px;
    line-height: 154.7%;
  }
  #course .gre-small .right .fe1{
    position: absolute;
    top: 84px;
    left: 1rem;
  }
  #course .gre-small .right .fe2{
    position: absolute;
    top: 138px;
    left: 441px;
  }
  #course .gre-small .right .fe3{
    position: absolute;
    top: 428px;
    left: 6px;
  }
  #course .gre-small .right .fe4{
    position: absolute;
    top: 428px;
    left: 477px;
  }


  #course .gmat-1v1 .right img{
    position: absolute;
    width: 43.8125rem;
    height: 43.8125rem;
    top: -1rem;
    left: 0;
  }
  #course .gmat-1v1 .right div{
    width: 11.25rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 24px;
    line-height: 140.7%;
  }
  #course .gmat-1v1 .right .fe1{
    position: absolute;
    top: 195px;
    left: -10px;
  }
  #course .gmat-1v1 .right .fe2{
    position: absolute;
    top: 168px;
    left: 535px;
  }
  #course .gmat-1v1 .right .fe3{
    position: absolute;
    top: 435px;
    left: 49px;
  }
  #course .gmat-1v1 .right .fe4{
    position: absolute;
    top: 399px;
    left: 501px;
  }


  #course .gmat-small .right img{
    position: absolute;
    width: 48.6875rem;
    height: 31.3125rem;
    top: 5.625rem;
    left: 0;
  }
  #course .gmat-small .right div{
    width: 19.1875rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 24px;
    line-height: 154.7%;
  }
  #course .gmat-small .right .fe1{
    position: absolute;
    top: 77px;
    left: 48px;
  }
  #course .gmat-small .right .fe2{
    position: absolute;
    top: 153px;
    left: 473px;
  }
  #course .gmat-small .right .fe3{
    position: absolute;
    top: 429px;
    left: 40px;
  }
  #course .gmat-small .right .fe4{
    position: absolute;
    top: 429px;
    left: 511px;
  }
  /* #endregion */

  /* #region unique css */
  #unique {
    background: #FDF5E7;
  }
  #unique .cont{
    width: 90rem;
    margin: 0 auto;
    padding: 8rem 0;
  }
  #unique .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 32px;
    line-height: 155.2%;    
  }
  #unique .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 39px;
  }
  #unique .headline-wrap{
    position: relative;
    margin: 10.4rem 0 0;
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 155.2%;
    display: inline-block;
  }
  #unique .headline-wrap img{
    width: 7.375rem;
    height: 7.875rem;
    position: absolute;
    top: -4.38rem;
    left: -6.5625rem;
  }
  #unique .cont .left{
    font-weight: 400;
    font-size: 18px;
    line-height: 172.7%;
    width: 33.3125rem;
    letter-spacing: 0.02em;
    margin: 6.875rem 10.375rem 0 9.875rem;
  }
  #unique .cont .right{
    width: 28.9375rem;
    height: 19.0625rem;
    margin: 6.25rem 0 0;

    background: #FFFFFF;
    box-shadow: 0px 7px 16px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
  }
/* #endregion */

  /* #region media css */
  #media {
    background: #E8F5EE;
  }
  #media .cont{
    width: 90rem;
    height: 56rem;
    margin: 0 auto;
    padding: 8rem 0;
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
  #media .content-wrap{
    margin: 8.625rem 0 0;
  }
  #media .content-wrap .media-block{
    width: 15.5rem;
    height: 7.1875rem;
    background: #F8FFFB;
    border-radius: 11px;
    margin: 0 5.375rem 4.6875rem 0;

    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #media .content-wrap .media1{
    margin-left: 6rem;
  }
/* #endregion */

  /* #region teacher css */
  #teacher .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    padding: 8rem 0;
  }
  #teacher .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 32px;
    line-height: 155.2%;    
  }
  #teacher .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 39px;
  }
  #teacher .content-wrap{
    margin-top: 5.9375rem;
  }
  #teacher .teacher-slider{
    height: 26.375rem;
    background-image: url("../assets/Teacher-group.png"); 
  }
  #teacher .teacher-slider .slider-wrap{
    width: 75rem;
    height: 25rem;
  }
  #teacher .teacher-slider .overlay{
    width: 303px;
    height: 303px;
    cursor: pointer;
  }
  #teacher .teacher-slider img{
    max-width: 100%;
    max-height: 100%;
  }
  .slider-item {
    width: 350px;
    transform:scale(0.5);
    transition-timing-function: ease;
    transition-duration: 100ms;
  }
  .slider-item.slider-active {
    width: 350px;
    transform:scale(1.0);
    z-index: 999;
  }
  #teacher .teacher-slider .icon-outter{
    width: 3rem;
    height: 2.6875rem;
    border-radius: 50%;
    border: 1px solid #B8B8B8;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    cursor: pointer;
  }
  #teacher .teacher-slider .left{
    margin: 0 0 0 84px;
  }
  #teacher .teacher-slider .right{
    margin: 0 70px 0 0;
  }
  #teacher .intro-wrap{
    display: inline-block;
    border: 1px solid #E8F5EE;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px #C0E1D1;
    border-radius: 6px;
    text-align: left;
    padding: 32px 43px 32px 64px;

    font-weight: 400;
    font-size: 18px;
    line-height: 186.7%;
  }
  #teacher .intro-wrap li::marker{
    color: #1A8750;
    font-size: 1.5rem;
  }
/* #endregion */

/* #region news css */
  #news .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    padding: 8rem 0;
  }
  #news .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 32px;
    line-height: 155.2%;    
  }
  #news .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 39px;
  }
  #news .content-wrap{
    padding: 5.0625rem 9.0625rem 0 9.3125rem;
  }
  #news .content-wrap .news-btn{
    width: 9.875rem;
    height: 3.375rem;
    text-align: center;
    line-height: 3.375rem;

    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
  }
  #news .content-wrap .gmat{
    border: 1px solid #1A8750;
    color: #1A8750;
    margin-right: 2rem;
  }
  #news .content-wrap .gre{
    background: #1A8750;
    color: #fff;
  }
  #news .swiper-btn-group .btn-active{
    width: 0.375rem;
    height: 1.4375rem;
    background: #1A8750;
    border-radius: 1.875rem;
    margin: 3px 0;
  }
  #news .swiper-btn-group .btn-inactive{
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 1.875rem;
    background: #C4C4C4;
    margin: 3px 0;
  }
  #news .content-wrap .news-block1{
    margin: 3.875rem 14.5625rem 0 0;
    text-align: left;
  }
  #news .content-wrap .news-block2{
    margin: 3.875rem 0 0;
    text-align: left;
  }
  #news .content-wrap .wrap{
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
  #news .content-wrap .wrap li{
    margin-bottom: 0.875rem;
  }
  #news .content-wrap .wrap li::marker{
    color: #1A8750;
    size: 9px;
  }
/* #endregion */
</style>
