<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          height="550px"
          src="https://www.ivyelite.net/wp-content/uploads/2020/04/GMAT-Boot-Camp-1440x550-B9-1.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-"
                  cols="12"
                  tag="h1"
                >
                  <br>
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                    首页
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
    <section>
      <v-container>
        <h2 class="font-weight-bold mb-3 white--text">热门课程</h2>
        <v-row>
          <v-col
            v-for="({ cover_url, name, summary, id }, i) in courses"
            :key="i"
            cols="12"
            md="3"
          >
            <v-card
              class="mx-auto"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                :src="cover_url"
              ></v-img>

              <v-card-title>{{name}}</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>



                <div class="mt-4 text-subtitle-1">{{summary.substr(0,20)}}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="explore(id)"
                >
                  探索
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
				<div>
					<v-btn
						class="ma-1 justify-end"
						color="white"
						plain
						to="/course/all"
					>
						更多课程
					</v-btn>
				</div>
      </v-container>
    </section>
    <section>
      <v-container>
        <h2 class="font-weight-bold mt-5 mb-3 white--text">为什么选择常青藤在线?</h2>
        <h3 class="font-weight-bold mt-3 mb-5 white--text">『常青藤在线是常青藤精英教育发起建立的面向未来在线学习平台，为学习者提供从高校课程到实战技能的在线教育服务』</h3>
        <v-row class="mt-10 mb-5">
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
  import courseApi from '../api/courseApi'
  import BaseInfoCard from "../components/InfoCard.vue"
  export default {
    name: 'HomePage',
    components: { BaseInfoCard },

    data: () => ({
      selection: '',
      courses: [],
      des: [
        {
          title: '致力于提供优质课程',
          content: ''
        },
        {
          title: '致力于提供优质课程',
          content: ''
        },
        {
          title: '致力于提供优质课程',
          content: ''
        }
      ],
      cards: [
        {
          title: 'Grow your Revenue',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
        },
        {
          title: 'Affordable Prices',
          subtitle: 'Special Offers',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '02',
        },
        {
          title: 'Target Setting',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
        },
      ],
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
