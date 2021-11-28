<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="2">
				<profile-left></profile-left>
			</v-col>
      <v-col cols="6">
        <v-card>
					<v-card-text>
						<v-tabs v-model="tab">
							<v-tab>正在上课</v-tab>
							<v-tab>已结课</v-tab>
						</v-tabs>
						<v-divider class="mb-4"></v-divider>
						<v-tabs-items v-model="tab">
      				<v-tab-item>
								<v-card
									color="#1F7087"
									class="mt-2"
									dark
									v-for="(item, i) in searching"
									:key="i"
								>
									<div class="d-flex flex-no-wrap justify-space-between">
										<div>
											<v-card-title
												class="text-h5"
												v-text="item.name"
											></v-card-title>

											<v-card-subtitle v-text="item.summary"></v-card-subtitle>

											<v-card-actions>
												<v-btn
													class="ml-2 mt-2"
													outlined
													rounded
													small
													@click="prepareCourse(item)"
												>
													准备上课
												</v-btn>
												<v-btn
													class="ml-2 mt-2"
													outlined
													rounded
													small
													@click="editCourse(item)"
												>
													编辑课程
												</v-btn>
											</v-card-actions>
										</div>
										<v-avatar
										class="ma-3"
										size="125"
										tile
									>
										<v-img :src="item.cover_url"></v-img>
									</v-avatar>
									</div>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								fasa
							</v-tab-item>
						</v-tabs-items>
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

			tab: null,
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
			},

			editCourse: function(item) {
				//this.$router.push({ path: '/course/create', query: {courseId: item.id}});
				alert(process.env.QINIU_SECRETKEY)
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