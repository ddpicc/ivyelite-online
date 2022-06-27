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
												sticky
												color="titlegreen"
												v-if="item.classBegin"
											>
												正在上课中..
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
                              @click="classUser(item)"
                            >
                              人员配置
                            </v-btn>
                            <v-btn
                              class="ml-2 mt-2"
                              outlined
                              rounded
                              small
                              @click="manageClassRoom(item)"
                            >
                              新建Zoom课堂
                            </v-btn>
                            <v-btn
                              class="ml-2 mt-2"
                              outlined
                              rounded
                              small
                              @click="updateClassRoom(item)"
                            >
                              保存Zoom课堂
                            </v-btn>
                          </v-card-actions>
                        </div>
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
  </v-container>
</template>

<script>
  import courseApi from '../../api/courseApi'
  import classRoomApi from '../../api/classRoomApi'
  import profileLeft from "../../components/ProfileLeft.vue"
  export default {
    components: { profileLeft },
    data: () => ({
      tab: null,
      classesList: [],

      snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		methods: {
      classUser: function(item) {
				this.$router.push({ path: '/admin/classuser', query: { class_id: item.id} });
			},

      manageClassRoom: function(item) {
        classRoomApi.getZoomAccessToken().then( (res) => {
					if(res.data.code === 201){
						//跳转授权
						window.location.href = 'https://zoom.us/oauth/authorize?response_type=code&client_id=mv6OFQpSXuPy3qobJHHQ&redirect_uri=https%3A%2F%2Fonline.ivyelite.net%2Fclassroom%2Fzoomauth'
					}else if(res.data.code === 200){
						console.log('zoom token exist and valid')
            this.$router.push({ path: '/classroom/manage', query: {classTitle: item.name, class_id: item.id, operation: 'create'} });
					}
				})				
      },

      updateClassRoom: function(item) {
        this.$router.push({ path: '/classroom/manage', query: {classTitle: item.name, class_id: item.id, operation: 'update'} });
      },

      getAllClasses: function(){
				courseApi.getAllClasses().then( (res) => {
          if (res.data.code === 200) {
						this.classesList = res.data.data;
            for(let element of this.classesList){
							classRoomApi.searchRoomByClassId(element.id,'进行中').then( (res) => {
								if (res.data.code === 200) {
									if(res.data.data.length > 0){     //有对应的房间
										//element.classBegin = true;
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

		mounted: function(){
			this.getAllClasses()
		}
	}
</script>
              

