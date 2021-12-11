<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://www.ivyelite.net/wp-content/uploads/2020/04/GMAT-Boot-Camp-1440x550-B9-1.jpg"
          >
          </v-img>
        </v-col>
      </v-row>
    </section>
    <section
      id="online"
      class="lighten-3"
    >
      <div class="py-16"></div>

      <v-container fluid >
        <v-row justify="center">
          <v-col cols="10">
            <v-row>
              <v-col>
                <div class="text-center">
                  <div class="titleWrap">
                    <div style="color:#FFFFFF" class="a text-md-h4 text-lg-h3 text-sm-h5 text-h6 titlegreen font-weight-bold">线上课程</div>
                  </div>
                  <h2 style="color:#B4B5B8" class="text-md-h4 text-lg-h3 text-sm-h5 text-h6 font-weight-bold">ONLINE COURSES</h2>
                </div>
              </v-col>
            </v-row>
            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col
                v-for="({ cover_url, name, summary, id }, i) in courses"
                :key="i"
                cols="6"
                md="3"
                sm="4"
                class="pa-5"
              >
                <v-card>
                  <v-img
                    :src="cover_url"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    :aspect-ratio="1/1.5"
                  >
                    <div class="text-h6 font-weight-bold  white--text ml-4 text-no-wrap" v-text="name"/>
                    <v-card-actions>
                      <v-btn
                        color="white lighten-2"
                        text
                        plain
                        @click="explore(id)"
                      >
                        Explore
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        icon
                        color="white"
                        @click="show = !show"
                      >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-img>
                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        jiesho
                      </v-card-text>
                    </div>
                  </v-expand-transition>              
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
      <div class="py-16"></div>

      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#29AB4A" class="a text-md-h4 text-lg-h3 text-sm-h5 text-h6 white font-weight-bold">独家课程</div>
              </div>
              <h2 style="color:#8FD39D" class="text-md-h4 text-lg-h3 text-sm-h5 text-h6 font-weight-bold">SPECIAL COURSES</h2>
            </div>
            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row>
              <v-col
                cols="12"
                sm="4"
              >
                <v-img
                  height="46vh"
                  :src="uniqueCourse_pic"
                />
              </v-col>

              <v-col
                cols="12"
                sm="7"
                offset-sm="1"
              >
                <div
                  v-text="uniqueCourse_title"
                  class="text-md-h4 text-lg-h3 text-sm-h6 text-h5 font-weight-bold text-uppercase white--text"
                  space="1"
                />
                <div class="text-md-h5 text-lg-h4 text-sm-h6 text-h6 font-weight-bold  white--text mt-8"
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
      <div class="py-16"></div>

      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#FFFFFF" class="a text-md-h4 text-lg-h3 text-sm-h5 text-h6 titlegreen font-weight-bold">优势介绍</div>
              </div>
              <h2 style="color:#B4B5B8" class="text-md-h4 text-lg-h3 text-sm-h5 text-h6 font-weight-bold">COURSES FEATURES</h2>
            </div>

            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col cols="3" v-for="i in 4" :key="i">
                <v-container class="text-center">
                  <v-img class="mb-8" contain max-height="13vh" src="../assets/featureDemo.png">                    
                  </v-img>
                  <span class="text-md-h4 text-lg-h3 text-sm-h6 font-weight-bold">FEATURE</span>
                </v-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-sm-4 py-8"></div>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10">
            <v-row justify="center">
              <v-col 
                cols="6"
                md="3"
                sm="4" 
                v-for="i in 4" 
                :key="i"
              >
                <v-hover v-slot="{ hover }">
                  <v-card elevation="10" class="ma-3">
                    <v-img
                      :aspect-ratio="1/1.5"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    >
                    <v-expand-transition>
                      <v-container
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2"
                        style="height: 100%;"
                      >
                        <v-row>
                          <v-col>
                            <div class="text-md-h5 text-lg-h4 text-sm-h6 text-h6 font-weight-bold mt-8">
                              优势介绍文字
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>
      <div class="py-md-10 py-sm-5 py-5"></div>
    </section>
    <section
      id="outcome"
      class="lighten-3"
    >
      <div class="py-16"></div>

      <v-container fluid>
        <v-row justify="center">
          <v-col cols="10">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#7EBD44" class="a text-md-h4 text-lg-h3 text-sm-h5 text-h6 white font-weight-bold">成果展示</div>
              </div>
              <h2 style="color:#BCDC98" class="text-md-h4 text-lg-h3 text-sm-h5 text-h6 font-weight-bold">COURSE OUTCOME</h2>
            </div>

            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col 
                class="text-center"
                cols="6"
                md="3"
                sm="4" 
                v-for="i in 4" 
                :key="i" 
              >
                <v-card elevation="10" class="ma-3">
                  <v-img
                    :aspect-ratio="1/1.5"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                </v-card>
                <span class="text-md-h4 text-lg-h3 text-sm-h6 font-weight-bold white--text">JACK 同学</span>
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

      uniqueCourse_title: '优质课程',
      uniqueCourse_subtitle: '课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程',
      uniqueCourse_pic: 'https://www.ivyelite.net/wp-content/uploads/2020/07/首页BANNER_banner4.jpg'
    }),

    methods: {
      explore: function(id){
        this.$router.push({ path: '/course/explore',query: {courseId: id}})
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
    background-color: #E2E3E6;
  }
  section#outcome{
    background-color: #7EBD44;
    height: 100vh
  }
  /*@media screen and (max-width:500px)*/
</style>
