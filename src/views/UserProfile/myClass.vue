<template>
  <v-container fluid >
		<v-row justify="center">
			<v-col cols="10">
				<div class="py-md-12 py-sm-8 py-4"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
					<v-col cols="9">
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
															@click="explore(item.id)"
														>
															查看课程
														</v-btn>
														<v-btn
															class="ml-2 mt-2"
															outlined
															rounded
															small
															@click="joinClass(item.id)"
														>
															加入课堂
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
										
									</v-tab-item>
								</v-tabs-items>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
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
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import relationApi from '../../api/relationApi'
	import classRoomApi from '../../api/classRoomApi'
  export default {
    data: () => ({
			coursesList: [],
			tab: null,
			theClass: null,
			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft
		},

		methods: {
			explore: function(id){
        this.$router.push({ path: '/course/explore',query: {courseId: id}})
      },
			
      joinClass: function(id) {
				//get room id
				classRoomApi.searchRoomByCourseId(id,'进行中').then( (res) => {
					if (res.data.code === 200) {
						if(res.data.data.length > 0){     //有对应的房间
							this.theClass = res.data.data[0];
							let urlParams = {
								room_id: this.theClass.room_id,
								role: 2,
								begin_timestamp: this.theClass.begin_timestamp,
							}
							this.$router.push({path: '/zegoClass', query: urlParams});
						}else{
							//还没有创建房间
							this.snackbar = true;
							this.notification = '目前还没开课';
							this.snackbarColor = 'green';
						}
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
      },

      getUserCourses: function(){
				relationApi.findClasseseByUser(this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 200) {
            this.coursesList = res.data.data;
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
			},

			gotoCheckout: function(){
				this.$router.push({ path: '/payment/checkout' })
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