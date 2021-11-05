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
            <v-row>
              <v-col cols="9">
                <v-subheader>名称</v-subheader>
                <v-card-title>
                  <span v-if="!editMode" v-text="course.name"></span>
                  <v-text-field outlined dense v-if="editMode"></v-text-field>
                </v-card-title>
                <v-divider></v-divider>
                <v-subheader>简介</v-subheader>
                <div v-if="!editMode" v-text="course.summary"></div>
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
                <div v-if="!editMode" v-text="course.description"></div>
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
              <v-col cols="3">
                <v-expansion-panels accordion multiple v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>编辑课程</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-btn block dense color="blue" @click="editClick()">编辑</v-btn>
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
                            <v-list-item-icon>
                              <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'
  export default {
    components: { profileLeft, TiptapVuetify },
    data: () => ({
			panel: [0],
      editMode: false,
      course: {
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
      demoSummary: '<p>This is a Demo Summary</p>',
      demoDescription: '<p><b>This is a Demo Description</b></p>',
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
		}),

		methods: {
      editClick: function(){
        if(this.editMode == false){
          //开始编辑
          this.editMode = true;
        }else{
          //保存
          this.editMode = false;
        }        
      },

      addTime: function(){

      },
		},

		computed: {
      
    },

		mounted: function(){
			
		}
	}
</script>