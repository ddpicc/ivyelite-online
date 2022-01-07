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
                    <v-subheader>名称</v-subheader>
                    <v-card-title>
                      <span v-if="!editMode" v-text="theCourse.name"></span>
                      <v-text-field outlined dense v-model="demoCourseTitle" v-if="editMode"></v-text-field>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-subheader>简介</v-subheader>
                    <div v-if="!editMode" v-text="theCourse.summary"></div>
                    <v-text-field outlined dense v-model="demoSummary" v-if="editMode"></v-text-field>
                    <v-divider></v-divider>

                    <v-subheader>详情</v-subheader>
                    <div v-if="!editMode" v-text="theCourse.description"></div>
                    <div v-if="editMode">
                      <!-- Use the component in the right place of the template -->
                      <tiptap-vuetify
                        min-height="300"
                        v-model="demoDescription"
                        :extensions="extensions"
                      />
                    </div>
                    <v-divider></v-divider>
                    
                    <v-subheader>时间安排</v-subheader>
                    <div v-if="!editMode" v-text="theCourse.time_arrange"></div>
                    <div v-if="editMode">
                      <!-- Use the component in the right place of the template -->
                      <tiptap-vuetify
                        min-height="200"
                        v-model="demoTimeSchedule"
                        :extensions="extensions"
                      />
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
                        <v-expansion-panel-header>封面图片</v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <v-img :src="theCourse.cover_url"></v-img>
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
  import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
  export default {
    components: { profileLeft, TiptapVuetify },
    data: () => ({
			panel: [0,1],
      editMode: false,
      theCourse: {
        name: null,
        summary: null,
        description: null,
      },
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading,{
          options: {
            levels: [1,2,3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ],
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