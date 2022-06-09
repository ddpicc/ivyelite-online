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
                  <v-spacer/>
                  <v-btn text class="mt-2" @click="createLectureDialog = true">
                    添加讲座
                  </v-btn>
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
                              @click="prepareClass(item)"
                            >
                              管理教室
                            </v-btn>
                            <v-btn
                              class="ml-2 mt-2"
                              outlined
                              rounded
                              small
                              @click="classUser(item)"
                            >
                              人员配置
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
    <v-dialog
      v-model="createLectureDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">创建讲座</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="lecture name"
                  required
                  v-model="className"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="time schedule"
                  hint="例如： 周一到周五 8:30 - 10:30"
                  v-model="classTime"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="comment"
                  v-model="classComment"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-autocomplete
                  v-model="teachers"
                  :items="teacherList"
                  dense
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="选择老师"
                  item-text="name"
                  item-value="uid"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      @click="data.select"
                    >
                      <v-avatar left>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-avatar>
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template>
                      <v-list-item-avatar>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeClass()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveClass()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import courseApi from '../../api/courseApi'
  import classRoomApi from '../../api/classRoomApi'
  import relationApi from '../../api/relationApi'
  import profileLeft from "../../components/ProfileLeft.vue"
  export default {
    components: { profileLeft },
    data: () => ({
      tab: null,
      classesList: [],
      createLectureDialog: false,

      className: '',
      classTime: '',
      classComment: '',
      teacherList: [],
      teachers: [],
		}),

		methods: {
      classUser: function(item) {
				this.$router.push({ path: '/admin/classuser', query: { class_id: item.id} });
			},

      prepareClass: function(item) {
				this.$router.push({ path: '/course/prepare', query: {classTitle: item.name, class_id: item.id} });
      },

      findAllTeacherStudent: function(){
				relationApi.getAllTeacherOrStudent('teacher').then( (res) => {
          if (res.data.code === 200) {
						this.teacherList = res.data.data
					}else{
						this.snackbar = true
						this.notification = '发生错误，请重试或联系管理员'
						this.snackbarColor = 'red'
					}
        })
        relationApi.getAllTeacherOrStudent('student').then( (res) => {
          if (res.data.code === 200) {
						this.studentList = res.data.data
					}else{
						this.snackbar = true
						this.notification = '发生错误，请重试或联系管理员'
						this.snackbarColor = 'red'
					}
        })
			},
      saveClass: function(){
        courseApi.insertClass(this.className,this.classTime,5,this.classComment,'开放').then( (res) => {
          if (res.data.code === 200) {
            for(let i=0; i<this.teachers.length; i++){
              relationApi.setUserClassRelation(this.teachers[i], res.data.data.insertId, 0, 1).then(res => {
                if (res.data.code != 200) {
                  this.snackbar = true;
						      this.notification = '发生错误，请重试或联系管理员';
						      this.snackbarColor = 'red';
                }
              })
            }
            this.className = ''
            this.classTime = ''
            this.classComment = ''
            this.teachers = []
            this.createLectureDialog = false
            
						this.snackbar = true;
						this.notification = '创建成功';
						this.snackbarColor = 'green';
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
        })
      },
      closeClass: function(){
        this.className = ''
        this.classTime = ''
        this.classComment = ''
        this.teachers = []
        this.createLectureDialog = false
      },
      getAllCourses: function(){
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
			}
		},

		mounted: function(){
			this.getAllCourses()
      this.findAllTeacherStudent()
		}
	}
</script>
              

