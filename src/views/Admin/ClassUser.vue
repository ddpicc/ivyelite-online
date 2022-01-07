<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
					<v-col cols="9">
						<v-card>
              <v-list subheader>
                <v-subheader>老师</v-subheader>
                <v-list-item
                  v-for="(item, i) in teachers"
									:key="i"
                >
                  <v-list-item-avatar>
                    <v-img :src="'https://avatar.ivyelite.net/' + item.avatar_url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      icon
                      color="pink"
                      @click="deleteRelation(item)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-btn block text color="titlegreen" @click="addTeacherDialog = true"><v-icon>mdi-plus</v-icon></v-btn>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>同学</v-subheader>
                <v-list-item
                  v-for="item in students"
                  :key="item.id"
                >
                  <v-list-item-avatar>
                    <v-img :src="'https://avatar.ivyelite.net/' + item.avatar_url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-btn
                      icon
                      color="pink"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-btn block text color="titlegreen"  @click="addStudentDialog = true"><v-icon>mdi-plus</v-icon></v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="addTeacherDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="text-h6">
          选择老师
        </v-card-title>
        <v-card-text>
          <v-autocomplete
            v-model="teacher"
            :items="otherTeachers"
            dense
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="uid"
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
        </v-card-text>
        <v-card-actions>
          <v-btn @click="selectTeacherSure()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="addStudentDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title class="text-h6">
          选择学生
        </v-card-title>
        <v-card-text>
          <v-autocomplete
            v-model="student"
            :items="otherStudents"
            dense
            filled
            chips
            color="blue-grey lighten-2"
            label="Select"
            item-text="name"
            item-value="uid"
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
        </v-card-text>
        <v-card-actions>
          <v-btn @click="selectStudentSure()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  export default {
    data: () => ({
      users: null,
      teachers: null,
      students: null,
      otherUsers: null,
      otherTeachers: null,
      otherStudents: null,
      class_id: null,

      addTeacherDialog: false,
      addStudentDialog: false,
      teacher: '',
      student: '',

      snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft
		},

		methods: {
      findAllUsersNotInClass: function(){
				relationApi.findAllUsersNotInClass(this.class_id).then( (res) => {
          if (res.data.code === 200) {
						this.otherUsers = res.data.data;
						this.otherTeachers = this.otherUsers.filter(item => {
              return item.roles == 'teacher';
            })
            this.otherStudents = this.otherUsers.filter(item => {
              return item.roles == 'student';
            })
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
        })
			},
      getClassUsers:function(){
        relationApi.findUsersByClass(this.class_id).then( (res) => {
          if (res.data.code === 200) {            
            this.users = res.data.data
            this.teachers = this.users.filter(item => {
              return item.isTeacher == 1;
            })
            this.students = this.users.filter(item => {
              return item.isStudent == 1;
            })
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      selectTeacherSure: function(){
        relationApi.setUserClassRelation(this.teacher, this.class_id, 0, 1).then(res => {
          if (res.data.code === 200) {            
            this.getClassUsers()
            this.addTeacherDialog = false
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      selectStudentSure: function(){
        relationApi.setUserClassRelation(this.student, this.class_id, 1, 0).then(res => {
          if (res.data.code === 200) {            
            this.getClassUsers()
            this.addStudentDialog = false
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      deleteRelation: function(item){        
        relationApi.deleteRelation(item.uid,this.class_id).then(res => {
          if (res.data.code === 200) {            
            this.getClassUsers()
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      }
		},


		mounted: function(){
      this.getClassUsers()
      this.findAllUsersNotInClass()
		},

    created: function(){
      if(this.$route.query.class_id){
        this.class_id = this.$route.query.class_id
      }
    }
	}
</script>
              

