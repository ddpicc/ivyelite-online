<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="course.banner_url"
          >
          </v-img>
        </v-col>
      </v-row>
    </section>
    <section
      id="introduction"
      class="lighten-3"
    >
      <div class="py-16"></div>

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#FFFFFF" class="a titleChn titlegreen">课程介绍</div>
              </div>
              <h2 style="color:#B4B5B8" class="titleEng">COURSES INTRODUCTION</h2>
            </div>

            <div class="py-md-12 py-sm-8 py-4"></div>
            <v-row justify="center">
              <v-col cols="12">
                <div class="text-h6 mt-8" style="text-indent: 2em;"
                  v-text="course.description"
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

      <v-container fluid style="max-width: 1280px">
        <v-row justify="center">
          <v-col cols="12">
            <div class="text-center">
              <div class="titleWrap">
                <div style="color:#FFFFFF" class="a titleChn titlegreen">学生反馈</div>
              </div>
              <h2 style="color:#B4B5B8" class="titleEng">STUDENTS FEEDBACJS</h2>
            </div>
            <div class="py-md-12 py-sm-8 py-4"></div>

            <v-carousel
              cycle
              hide-delimiters
              :show-arrows="false"
              v-model="model"              
            >
              <v-carousel-item v-for="(element, i) in comments" :key="i">
                <div style="position: relative;margin-top:50px;">
                  <div class="bubble white--text">{{element.comment}}</div>
                  <img class="bubble img"
                    src="../../assets/avatorDemo.jpeg"
                  >
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-snackbar
			v-model="snackbar"
			:color="snackbarColor"
			timeout="3000"
			top
			dark
		>
			<v-icon
				color="white"
				class="mr-3"
			>
				mdi-bell-plus
			</v-icon>
			{{notification}}
			<v-btn
				icon
				@click="snackbar = false"
			>
				<v-icon>
					mdi-close-circle
				</v-icon>
			</v-btn>
		</v-snackbar>
  </div>
</template>

<script>
  import courseApi from '../../api/courseApi'
  import ClassInfoCard from '../../components/ClassInfoCard.vue'
  export default {
    components: { ClassInfoCard },
    data: () => ({
      selection: '',
      course: {
        name: null,
      },
      courseId: null,

      snackbar: false,
      snackbarColor: '',
      notification: '',

      classes: [],
      comments: [],

      comment: "评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评。",

      model: 0,
    }),

    methods: {
      getCourseInfo: function(){
        courseApi.findOneCourseById(this.courseId).then( (res) => {
          if (res.data.code === 200) {
						this.course = res.data.data[0];
            courseApi.getClassesbyCourseId(this.courseId).then( res => {
              if(res.data.code === 200) {
						    this.classes = res.data.data
              }else{
                this.snackbar = true;
                this.notification = '读取课堂列表错误，请重试或联系管理员';
                this.snackbarColor = 'red';
              }
            })
            courseApi.getCommentbyCourseId(this.courseId).then( res => {
              if(res.data.code === 200) {
						    this.comments = res.data.data
              }else{
                this.snackbar = true;
                this.notification = '读取学生反馈错误';
                this.snackbarColor = 'red';
              }
            })
					}else{
            this.snackbar = true;
            this.notification = '读取课程错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
    },

    mounted: function(){
      this.getCourseInfo();      
		},

    created: function(){
      if(this.$route.query.courseId){
        this.courseId = this.$route.query.courseId
      }
    }
  }
</script>

<style scoped>
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

  div.bubble{
    margin: 30px auto;
    padding: 50px 30px;
    width: 65%;
    height: auto;
    line-height: 30px;
    position: relative;
    border-radius: 5px;
    background-color: #70A943;
  }
  div.bubble:after{
    content:'';
    position:absolute;
    top:100%;
    right:80px;
    width:56px;
    height:25px;
    border-width:0;
    border-style:solid;
    border-color:transparent;
    border-right-width:15px;
    border-right-color:currentColor;
    border-radius:0 0 55px;
    color:#70A943;
  }
  .bubble.img{
    position:absolute;
    border-radius:50%;
    bottom:70%;
    left:14%;
    max-width:100px;
    height:100px;
    }
</style>
