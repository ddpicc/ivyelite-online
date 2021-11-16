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
                <div v-if="editMode">
                  <!-- Use the component in the right place of the template -->
                  <tiptap-vuetify
                    min-height="100"
                    v-model="demoSummary"
                    :extensions="extensions"
                  />
                </div>
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
                    <v-expansion-panel-header>时间安排</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-btn block dense color="blue" @click="addTime()">添加</v-btn>
                      <v-list rounded dense>
                        <v-list-item-group
                          v-model="selectedItem"
                          color="primary"
                        >
                          <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
					</v-card-text>
        </v-card>
        <v-dialog max-width="500" v-model="chooseDateTimeDialog">
          <v-card>
            <v-col cols="12">
              <v-date-picker
                v-model="pickDate"
                full-width
                color="green lighten-1"
              ></v-date-picker>
            </v-col>
            <v-col cols="12" justify="center">
              <v-row justify="center">
                <v-col cols="6">
                  <v-select
                  :items="hours"
                  label="Hours"
                  v-model="pickHour"
                  solo
                ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                  :items="minitus"
                  v-model="pickMinute"
                  label="Minutes"
                  solo
                ></v-select>
                </v-col>
              </v-row>
            </v-col>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                确定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      demoSummary: '<p>This is a Demo Summary</p>',
      demoDescription: '<p><b>This is a Demo Description</b></p>',
      items: [
        { text: '11/11/2021 3:26pm'},
        { text: 'Audience' },
        { text: 'Conversions'},
      ],
      courseId: null,
      selectedItem: '',
      editBtnTitle: '编辑',

      chooseDateTimeDialog: false,
      pickDate: '',
      pickHour: '',
      pickMinute: '',
      hours: ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
      minitus: ['00','10','20','30','40','50'],
      
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

      addTime: function(){
        this.chooseDateTimeDialog = true;
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