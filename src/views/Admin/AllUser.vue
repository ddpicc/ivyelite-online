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
              <v-list subheader>
                <v-subheader>管理员</v-subheader>
                <v-list-item
                  v-for="item in admins"
                  :key="item.id"
                >
                  <v-list-item-avatar>
                    <v-img :src="'https://avatar.ivyelite.net/' + item.avatar_url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>

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
              </v-list>

              <v-divider></v-divider>

              <v-list subheader two-line>
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
                    <v-list-item-subtitle v-text="'注册时间: ' + new Date(item.register_time).toLocaleString()"></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon v-if="item.is_active == '否'">
                    <v-btn
                      text
                      color="pink"
                    >
                      send激活邮件
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import profileLeft from "../../components/ProfileLeft.vue"
  import userApi from '../../api/userApi'
  export default {
    data: () => ({
      users: null,
      admins: null,
      teachers: null,
      students: null,
		}),

		components: {
			profileLeft
		},

		methods: {
      getAllUsers: function(){
				userApi.getAllUsers().then( (res) => {
          if (res.data.code === 200) {
						this.users = res.data.data;
						this.admins = this.users.filter(item => {
              return item.roles == 'admin';
            })
            this.students = this.users.filter(item => {
              return item.roles == 'student';
            })
            this.teachers = this.users.filter(item => {
              return item.roles == 'teacher';
            })
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
        })
			}
		},

		mounted: function(){
			this.getAllUsers();
		}
	}
</script>
              

