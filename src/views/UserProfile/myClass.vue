<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-4 py-sm-4 py-4"></div>
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
											v-for="(item, i) in classesList"
											:key="i"
										>
											<v-banner
												single-line
												color="titlegreen"
												v-if="item.classBegin"
											>
												已经开课了，快来一起加入课堂吧!

												<template v-slot:actions>
													<hello-zoom v-bind:meetingNumber="item.room.room_id.toString()" v-bind:passWord="item.room.password" v-bind:role="0" v-bind:userName="username"/>
												</template>
											</v-banner>
											<div class="d-flex flex-no-wrap justify-space-between">
												<div>
													<v-card-title
														class="text-h6"
														v-text="item.name"
													></v-card-title>

													<v-card-subtitle v-text="item.comment"></v-card-subtitle>

													<v-card-actions>
														<v-btn
															class="ml-2 mt-2"
															outlined
															rounded
															small
															@click="explore(item)"
														>
															查看课程
														</v-btn>
													</v-card-actions>
												</div>
												<v-avatar
													class="ma-3 d-none d-sm-flex"
													size="125"
													tile
												>
													<v-img :src="item.cover_url"></v-img>
												</v-avatar>
											</div>
										</v-card>
									</v-tab-item>
									<v-tab-item>
										<!--



										-->
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
      :multi-line="true"
    >
      {{ notification }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import relationApi from '../../api/relationApi'
	import classRoomApi from '../../api/classRoomApi'
	import HelloZoom from '../../components/HelloZoom.vue'
  export default {
    data: () => ({
			classesList: [],
			tab: null,
			theClass: null,
			snackbar: false,
      snackbarColor: '',
      notification: '',

			username: '',
		}),

		sockets: {
			connect: function () {
				console.log('socket connected')
			},
			classopen: function (data) {				
				let findTheClass = this.classesList.find(function(p){
          return p.id == data;
        });
				console.log(typeof(findTheClass))
        if(typeof(findTheClass)!="undefined"){
          this.$set(findTheClass,'classBegin',true)
        }
			},
			classclose: function (data) {
				let findTheClass = this.classesList.find(function(p){
          return p.id == data;
        });
				console.log(typeof(findTheClass))
        if(typeof(findTheClass)!="undefined"){
          this.$set(findTheClass,'classBegin',false)
        }
			}
    },

		components: {
			profileLeft,HelloZoom
		},

		methods: {
			explore: function(item){
				this.$router.push({ path: '/course/classinfo', query: { class_id: item.id} });
      },

      getUserCourses: function(){
				relationApi.findClasseseByUser(this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 200) {
            this.classesList = res.data.data;
						for(let element of this.classesList){
							classRoomApi.searchRoomByClassId(element.id,'进行中').then( (res) => {
								if (res.data.code === 200) {
									if(res.data.data.length > 0){     //有对应的房间
										//element.classBegin = true;
										this.$set(element,'room',res.data.data[0])
										this.$set(element,'classBegin',true)
									}
								}
							})
						}
						
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
			},
    },
		created() {
			const zoomMeetingSDK = document.getElementById('zmmtg-root')

			// To hide
			zoomMeetingSDK.style.display = 'none';
		},

		mounted: function(){
			this.getUserCourses()
			this.username = this.$store.state.user.name;
			
		}
	}
</script>