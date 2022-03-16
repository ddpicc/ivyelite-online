<template>
  <v-container fluid >
		<v-row justify="center">
			<v-col cols="10">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
          <v-col cols="9">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="8">
                    <v-subheader>基本信息</v-subheader>
                    <div class="d-flex align-center">
                      <div>名称</div>
                      <input type="text" v-model="demoCourseTitle" @focus="focus($event)">
                    </div>
                    <div class="d-flex align-center">
                      <div>简介</div>
                      <input type="text" v-model="demoSummary" @focus="focus($event)">
                    </div>
                    <v-divider></v-divider>

                    <v-subheader>时间安排</v-subheader>
                    <div class="d-flex align-center">
                      <div>时间</div>
                      <input type="text" v-model="demoCourseTitle" @focus="focus($event)">
                    </div>

                    <div class="d-flex align-center">
                      <div>日期</div>
                      <input type="text" v-model="demoCourseTitle" @focus="focus($event)">
                    </div>

                  </v-col>
                  <v-divider
                    vertical
                  ></v-divider>
                  <v-col cols="4">
                    <v-expansion-panels accordion multiple v-model="panel">
                      <v-expansion-panel>
                        <v-expansion-panel-header>编辑课程</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-btn block dense color="blue" @click="editClick()">{{editBtnTitle}}</v-btn>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-header>课程状态</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-select
                            solo
                            dense
                            label="改变课程状态"
                            v-model="courseStatus"
                            :items="statusList"
                          ></v-select>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import courseApi from '../../api/courseApi'
  export default {
    components: { profileLeft },
    data: () => ({
			panel: [0,1],
      editMode: false,
      theCourse: {
        name: null,
        summary: null,
        description: null,
      },
      demoCourseTitle: 'This is a Demo Title',
      demoSummary: 'This is a Demo Summary',
      demoDescription: '<p><b>This is a Demo Description</b></p>',
      demoTimeSchedule: '<p>11/17/2021  06:00 pm</p><p>11/23/2021  05:00 pm</p>',
      courseId: null,
      editBtnTitle: '编辑',
      courseStatus: '即将开课',
      statusList: ['即将开课','正在上课','已结课'],
      
		}),

		methods: {
      focus(event) {
        event.currentTarget.select();
			},

      editClick: function(){
        if(this.editMode == false){
          //开始编辑
          this.editMode = true;
          this.editBtnTitle = '保存';
        }else{
          //保存
          this.editMode = false;
          if(this.courseId){
            //update
          }else{
            //insert
          }
        }        
      },

      getCourse: function(){
				courseApi.findOneCourseById(this.courseId).then( (res) => {
					if (res.data.code === 200) {
						if(res.data.data.length > 0){
							this.theCourse = res.data.data[0];
              this.demoCourseTitle = this.theCourse.name;
              this.demoSummary = this.theCourse.summary;
              this.demoDescription = this.theCourse.description;
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
			if(!this.courseId){
        this.editMode = true;
        this.editBtnTitle = '保存';
			}else{
				this.getCourse();
			}			
		},

		created() {
			if(this.$route.query.courseId){
        this.courseId = this.$route.query.courseId;
      }
		}
	}
</script>
<style scoped>
  input {
    width: 22.5rem;
    height: 2rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.2rem;
  }    
</style>