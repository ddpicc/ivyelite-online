<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="2">
				<profile-left></profile-left>
			</v-col>
      <v-col cols="7">
        <v-card>
					<v-card-text>
						<v-tabs>
							<v-tab>正在上课</v-tab>
							<v-tab>已结课</v-tab>
						</v-tabs>
						<v-divider class="mb-4"></v-divider>
						<v-list three-line>
							<v-list-item
								v-for="(item, i) in searching"
								:key="i"
								ripple
								@click="prepareCourse(item)"
							>
								<v-img
									:src="item.cover_url"
									class="ma-2"
									max-width="164"
								></v-img>

								<v-list-item-content>
									<span
										class="text-uppercase font-weight-regular text-caption"
										v-text="item.summary"
									></span>

									<div v-text="item.name"></div>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import relationApi from '../../api/relationApi'
  export default {
    data: () => ({
			coursesList: [],
		}),

		components: {
			profileLeft
		},

		methods: {
      prepareCourse: function(item) {
        this.$router.push({ path: '/course/prepare', query: {courseTitle: item.name, courseId: item.id} });
      },

      getUserCourses: function(){
				relationApi.findCourseByUser(this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 200) {
            this.coursesList = res.data.data;
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
			}
		},

		computed: {
      searching () {
        return this.coursesList

        /* const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        }) */
      },
    },

		mounted: function(){
			this.getUserCourses()
		}
	}
</script>