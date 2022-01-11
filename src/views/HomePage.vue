<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-col cols="12">
          <v-carousel v-if="!$vuetify.breakpoint.mobile" cycle hide-delimiter-background :show-arrows="false" :height="'calc(100vh - ' + $vuetify.application.top + 'px)'">
            <v-carousel-item>
              <v-img
                :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                src="../assets/banner-01.png"
              >
              </v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                src="../assets/banner-02.png"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>

          <v-carousel v-if="$vuetify.breakpoint.mobile" cycle hide-delimiter-background :show-arrows="false" height="750">
            <v-carousel-item>
              <v-img
                v-if="$vuetify.breakpoint.mobile"
                src="../assets/banner-mobile-01.jpg"
              >
              </v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
                src="../assets/banner-mobile-02.jpg"
              >
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </section>
    <section
      id="online"
      class="lighten-3"
    >
      <div class="py-md-16 py-sm-8 py-4"></div>

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <v-row>
              <v-col>
                <div class="text-center">
                  <div class="titleWrap">
                    <div style="color:#FFFFFF" class="a titleChn titlegreen font-weight-bold">线上课程</div>
                  </div>
                  <h2 style="color:#B4B5B8" class="titleEng font-weight-bold">ONLINE COURSES</h2>
                </div>
              </v-col>
            </v-row>
            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col
                v-for="(course, i) in courses"
                :key="i"
                cols="6"
                md="3"
                class="pa-5"
              >
                <v-card style="cursor: pointer;">
                  <v-img
                    :src="course.cover_url"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    :aspect-ratio="1/1.5"
                    @click="explore(course)"
                  >
                    <div class="otherTit font-weight-bold  white--text ml-4 text-no-wrap" v-text="course.name"/>
                    <v-card-actions>
                      <v-btn
                        color="white lighten-2"
                        text
                        plain
                        @click="explore(course)"
                      >
                        了解详情
                      </v-btn>

                     <!--  <v-spacer></v-spacer>

                      <v-btn
                        icon
                        color="white"
                        @click="show = !show"
                      >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn> -->
                    </v-card-actions>
                  </v-img>
                  <!-- <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        jiesho
                      </v-card-text>
                    </div>
                  </v-expand-transition>     -->          
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-md-10 py-sm-5 py-5"></div>
    </section>
    <section
      id="unique"
      class="lighten-3"
    >
      <div class="py-md-16 py-sm-8 py-4"></div>

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#29AB4A" class="a titleChn white font-weight-bold">独家课程</div>
              </div>
              <h2 style="color:#8FD39D" class="titleEng font-weight-bold">SPECIAL COURSES</h2>
            </div>
            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-img
                  height="46vh"
                  src="../assets/brain.png"
                />
              </v-col>

              <v-col
                cols="12"
                md="7"
                offset-md="1"
                align-self="center"
              >
                <div
                  v-text="uniqueCourse_title"
                  class="uniqueTit mb-2 font-weight-bold text-uppercase "
                  space="1"
                />
                <v-responsive
                  class="mx-auto mb-12"
                >
                  <v-divider class="mb-1 white"></v-divider>

                  <v-divider class="white"></v-divider>
                </v-responsive>
                <div class="uniqueDes white--text mt-8"
                  v-if="uniqueCourse_subtitle"
                  v-text="uniqueCourse_subtitle"
                  space="1"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-md-10 py-sm-5 py-5"></div>
    </section>
    <section
      id="features"
      class="lighten-3"
    >
      <div class="py-md-16 py-sm-8 py-4"></div>

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#FFFFFF" class="a titleChn titlegreen font-weight-bold">优势介绍</div>
              </div>
              <h2 style="color:#B4B5B8" class="titleEng font-weight-bold">COURSES FEATURES</h2>
            </div>

            <div class="py-md-6 py-sm-6 py-4"></div>
            <v-row justify="center">
              <v-col cols="6" md="3">
                <v-container>
                  <v-img  contain max-height="15vh" src="../assets/feature-04.png">                    
                  </v-img>
                  <v-container
                    class="ma-6"
                  >
                    <v-row>
                      <v-col>
                        <div class="otherTit text-center">
                          业界顶级教辅团队助力
                        </div>
                        <div class="otherDes mt-8" style="text-indent: 2em;">
                          常青藤网罗业界最具口碑的资深提分老师，组建成VIP教辅团队助力学员短期出分。并定期邀请最强大脑等嘉宾老师举办讲座，传授单词记忆与提分秘笈。
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-col>
              <v-col cols="6" md="3">
                <v-container>
                  <v-img  contain max-height="15vh" src="../assets/feature-02.png">                    
                  </v-img>
                  <v-container
                    class="ma-6"
                  >
                    <v-row>
                      <v-col>
                        <div class="otherTit text-center">
                          针对北美学生研发教案
                        </div>
                        <div class="otherDes  mt-8" style="text-indent: 2em;">
                          常青藤提分团队针对北美留学生的数理阅读基础和学习特性开发最适合的课程体系和配套教案，因材施教，做最有效的冲分辅导。
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-col>
              <v-col cols="6" md="3">
                <v-container>
                  <v-img  contain max-height="15vh" src="../assets/feature-03.png">                    
                  </v-img>
                  <v-container
                    class="ma-6"
                  >
                    <v-row>
                      <v-col>
                        <div class="otherTit text-center">
                          授课时间私人定制
                        </div>
                        <div class="otherDes mt-8" style="text-indent: 2em;">
                          常青藤双G教辅团队将尽可能配合学员的时间行程，通过线上直播、课后录播、周中周末私人定制等方式，让学生免受时间和地点的困扰，随时随地轻松提分。
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-col>
              <v-col cols="6" md="3">
                <v-container>
                  <v-img contain max-height="15vh" src="../assets/feature-01.png">                    
                  </v-img>
                  <v-container
                    class="ma-6"
                  >
                    <v-row>
                      <v-col>
                        <div class="otherTit text-center">
                          配套全面监督体系
                        </div>
                        <div class="otherDes mt-8" style="text-indent: 2em;">
                          为每个私教班和提分班都配备了常青藤导师作为课程小助手，全程陪伴并监督学生定时打卡、按时上课、练习复习、查漏补缺等等。
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

                <!-- <v-hover v-slot="{ hover }">
                  <v-card elevation="10" class="ma-5">
                    <v-img
                      :aspect-ratio="1/1.5"
                      src="../assets/feature-01.png"
                    >
                    <v-expand-transition>
                      <v-container
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2"
                        style="height: 100%;"
                      >
                        <v-row>
                          <v-col>
                            <div class="text-h6 font-weight-bold mt-8">
                              业界顶级教辅团队助力
                            </div>
                            <div class="text-h7 mt-8">
                              常青藤网罗业界最具口碑的资深提分老师，组建成VIP教辅团队助力学员短期出分。并定期邀请最强大脑等嘉宾老师举办讲座，传授单词记忆与提分秘笈
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover> -->
 
      <div class="py-md-10 py-sm-5 py-5"></div>
    </section>
    <section
      id="outcome"
      class="lighten-3"
    >
      <div class="py-md-16 py-sm-8 py-4"></div>

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#7EBD44" class="a titleChn white font-weight-bold">成果展示</div>
              </div>
              <h2 style="color:#BCDC98" class="titleEng font-weight-bold">COURSE OUTCOME</h2>
            </div>

            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col 
                class="text-center"
                cols="6"
                md="3"
                v-for="i in 4" 
                :key="i" 
              >
                <v-card elevation="10" class="ma-3">
                  <v-img
                    :aspect-ratio="1/1.5"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                </v-card>
                <span class="text-h6 font-weight-bold white--text">JACK 同学</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-md-10 py-sm-5 py-5"></div>
    </section>
  </div>
</template>

<script>
  import courseApi from '../api/courseApi'
  import CourseInfoCard from '../components/CourseInfoCard.vue'
  export default {
    name: 'HomePage',
    components: { CourseInfoCard },

    data: () => ({
      selection: '',
      courses: [],
      show: false,

      uniqueCourse_title: '最强大脑高效记忆法 – 如何高效记忆GRE核心词',
      uniqueCourse_subtitle: '最强大脑中国队队长，世界记忆大师李威老师曾受邀到哈佛大学、哥伦比亚大学等顶尖名校分享高效记忆方法和思维，并收获大批学生的青睐和赞赏。常青藤精英教育Ivy Elite 特邀李威老师为GRE暑假班全体学员亲授GRE核心词汇记忆大法，助力大家短时间克服单词难关，冲击高分并申请名校！',
      uniqueCourse_pic: 'https://www.ivyelite.net/wp-content/uploads/2020/07/首页BANNER_banner4.jpg'


    }),

    methods: {
      explore: function(course){
        if(course.type === '1v1'){
          this.$router.push({ path: '/course/explore/1v1',query: {courseId: course.id}})
        }else{
          this.$router.push({ path: '/course/explore/smallclass',query: {courseId: course.id}})
        }        
      },

      getAllCourses: function(){
				courseApi.getAllCourses().then( (res) => {
          if (res.data.code === 200) {
						this.courses = res.data.data;
					}
        })
			}
    },

    mounted: function(){
			this.getAllCourses();
		}
  }
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .titleChn {
    font-size: 36px;
    line-height: 1.25;
    font-weight: 700;
  }

  .titleEng {
    font-size: 38px;
    line-height: 1.25;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
  }

  .uniqueTit {
    font-size: 34px;
    line-height: 1.25;
    font-weight: 700;
    color: #fff;
  }

  .uniqueDes {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
    color: #fff;
  }

  .otherTit {
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;
  }

  .otherDes {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 400;
  }

  div.titleWrap{
    width: auto;
    position:relative;
    justify-content:center
  }
  div.a{
    position:absolute;
    top:-40px;
    left:0;
    right:0;
    padding: 8px 0 8px 0;
    margin:0 auto;
    z-index:1;
    width: 20%
  }
  section#online{
    height: 100vh;
  }
  section#unique{
    height: 100vh;
    background-color: #29AB4A;
  }
  section#features{
    height: 100vh;
  }
  section#outcome{
    background-color: #7EBD44;
    height: 100vh
  }
}

@media screen and (max-width:959px){
  .titleChn {
    font-size: 32px;
    line-height: 1.25;
    font-weight: 700;
  }

  .titleEng {
    font-size: 34px;
    line-height: 1.25;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
  }

  .uniqueTit {
    font-size: 30px;
    line-height: 1.25;
    font-weight: 700;
    color: #fff;
  }

  .uniqueDes {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    color: #fff;
  }

  .otherTit {
    font-size: 18px;
    line-height: 1.25;
    font-weight: 700;
  }

  .otherDes {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 400;
  }

  div.titleWrap{
    width: auto;
    position:relative;
    justify-content:center
  }
  div.a{
    position:absolute;
    top:-30px;
    left:0;
    right:0;
    padding: 4px 0 4px 0;
    margin:0 auto;
    z-index:1;
    width: 25%
  }
  section#online{
    height: auto;
  }
  section#unique{
    height: auto;
    background-color: #29AB4A;
  }
  section#outcome{
    background-color: #7EBD44;
    height: auto
  }
}

@media screen and (max-width:600px){
  .titleChn {
    font-size: 24px;
    line-height: 1.25;
    font-weight: 700;
  }

  .titleEng {
    font-size: 26px;
    line-height: 1.25;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
  }

  .uniqueTit {
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;
    color: #fff;
  }

  .uniqueDes {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: #fff;
  }

  .otherTit {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 700;
  }

  .otherDes {
    font-size: 14px;
    line-height: 1.25;
    font-weight: 400;
  }
  section#online{
    height: auto;
  }
  section#unique{
    height: auto;
    background-color: #29AB4A;
  }
  section#outcome{
    background-color: #7EBD44;
    height: auto
  }
  div.titleWrap{
    width: auto;
    position:relative;
    justify-content:center
  }
  div.a{
    position:absolute;
    top:-25px;
    left:0;
    right:0;
    margin:0 auto;
    z-index:1;
    width: 30%
  }
}
</style>
