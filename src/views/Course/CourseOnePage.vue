<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          height="350px"
          src="https://www.ivyelite.net/wp-content/uploads/2020/07/首页BANNER_banner4.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text"
                  cols="12"
                >
                  <span
                    class="display-3 font-weight-black"
                  >
                    {{course.name}}
                  </span>
                </v-col>
              </v-row>
              <v-row justify="end">
                <v-col
                  class="white--text"
                  cols="4"
                  offset="8"
                  align-self="end"
                >
                  <v-btn color="blue" @click="reserveCourse()">加入学习</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
    <section>
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-card
              class="mx-auto"
            >
              <v-card-text>
                <h2 class="font-weight-bold mb-3">课程介绍</h2>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
  import courseApi from '../../api/courseApi'
  export default {
    data: () => ({
      selection: '',
      course: {
        name: null,
      },
      courseId: null,
    }),

    methods: {
      getCourseInfo: function(){
        courseApi.findOneCourseById(this.courseId).then( (res) => {
          if (res.data.code === 200) {
						this.course = res.data.data[0];
					}
        })
      },

      reserveCourse: function(){
        this.$router.push({path: '/course/prepare'})
      }
    },

    mounted: function(){
      this.getCourseInfo()
		},

    created: function(){
      if(this.$route.query.courseId){
        this.courseId = this.$route.query.courseId
      }
    }
  }
</script>
