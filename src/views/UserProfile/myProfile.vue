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
							<v-card-title class="text-h6">
								个人信息
								<v-btn plain @click="editBtnClick()">{{editBtnTitle}}</v-btn>
							</v-card-title>
							<v-card-text>
								<v-form>
									<v-row>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>昵称</v-subheader>
											<v-subheader v-if="!editInfo">{{userName}}</v-subheader>
											<v-text-field
												v-if="editInfo"
												solo
												dense
												label="输入姓名"
												v-model="userName"
											></v-text-field>
										</v-col>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>性别</v-subheader>
											<v-subheader v-if="!editInfo">{{userSex}}</v-subheader>
											<v-select
												v-if="editInfo"
												solo
												dense
												label="输入性别"
												v-model="userSex"
												:items="sexList" 
											></v-select>
										</v-col>

										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>学历</v-subheader>
											<v-subheader v-if="!editInfo">{{userEducation}}</v-subheader>
											<v-select
												v-if="editInfo"
												solo
												dense
												label="输入学历"
												v-model="userEducation"
												:items="educationList"
											></v-select>
										</v-col>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>学校/公司</v-subheader>
											<v-subheader v-if="!editInfo">{{userSchool}}</v-subheader>
											<v-text-field
												v-if="editInfo"
												solo
												dense
												label="输入学校/公司"
												v-model="userSchool"
											></v-text-field>
										</v-col>

										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>生日</v-subheader>
											<v-subheader v-if="!editInfo">{{userBirth}}</v-subheader>
											<v-menu
												v-if="editInfo"
												v-model="birthMenu"
												:close-on-content-click="false"
												:nudge-right="40"
												transition="scale-transition"
												offset-y
												min-width="auto"
											>
												<template v-slot:activator="{ on, attrs }">
													<v-text-field
														v-model="userBirth"
														label="选择生日"
														readonly
														v-bind="attrs"
														v-on="on"
													></v-text-field>
												</template>
												<v-date-picker
													v-model="userBirth"
													@input="birthMenu = false"
												></v-date-picker>
											</v-menu>
										</v-col>
									</v-row>
								</v-form>
							</v-card-text>
						</v-card>
						<v-card>
							<v-card-title class="text-h6">
								账号信息
							</v-card-title>
							<v-card-text>
								<v-form>
									<v-row>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>账号ID</v-subheader>
											<v-subheader>{{accountID}}</v-subheader>
										</v-col>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>手机号码</v-subheader>
											<v-subheader>{{phoneNM}}</v-subheader>
											<v-subheader @click="changePhone" class="blue--text">更换</v-subheader>
										</v-col>

										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>邮箱</v-subheader>
											<v-subheader>{{email}}</v-subheader>
										</v-col>
										<v-col cols="12" sm="6" class="d-flex">
											<v-subheader>密码</v-subheader>
											<v-subheader>{{password}}</v-subheader>
											<v-subheader @click="changePhone" class="blue--text">修改密码</v-subheader>
										</v-col>

										<!-- <v-col cols="6" class="d-flex">
											<v-subheader>语言</v-subheader>
											<v-menu
												open-on-hover
												bottom
											>
												<template v-slot:activator="{ on, attrs }">
													<v-subheader
														v-bind="attrs"
														v-on="on"
													>
														{{language}}
													</v-subheader>
												</template>

												<v-list dense>
													<v-list-item
														v-for="(item, index) in languages"
														:key="index"
													>
														<v-list-item-title>{{ item.title }}</v-list-item-title>
													</v-list-item>
												</v-list>
											</v-menu>
										</v-col> -->
									</v-row>
								</v-form>
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
	import userApi from '../../api/userApi'
  export default {
    data: () => ({
			editInfo: false,
			editBtnTitle: '编辑',

			userName: '',
			sexList: ['男','女'],
			userSex: '',
			userEducation: '',
			educationList: ['高中','本科','研究生','博士'],
			userSchool: '',
			birthMenu: false,
			userBirth: '',

			accountID: '',
			phoneNM: '',
			email: '',
			password: '',
			/* language: '中文',
			languages: [
				{
					title: '中文'
				},
				{
					title: 'English'
				}
			], */

			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft
		},

		methods: {
			changePhone: function(){
				alert('change phone')
			},

			editBtnClick: function(){
				if(this.editInfo == false){
					this.editInfo = true;
					this.editBtnTitle = '保存';
				}else{
					this.editInfo = false;
					this.editBtnTitle = '编辑';
					//save to db
					userApi.updateUserProfile(this.userName,this.userSex,this.userEducation,this.userSchool,this.userBirth,this.$store.state.user.uid).then(res => {
						if(res.data.code === 200) {
							this.$store.commit('user/SET_NAME', this.userName);
							this.snackbar = true;
            	this.notification = '更新成功';
            	this.snackbarColor = 'green';
						}else{
							this.snackbar = true;
            	this.notification = '发生错误，请重试或联系管理员';
            	this.snackbarColor = 'red';
						}
					})
				}
				
			},
			
			getUserInfo: function(){
				userApi.getInfo(this.$store.state.user.uid).then(res => {
					if (res.data.code === 200) {
            this.userName = res.data.data[0].name;
						this.userSex = res.data.data[0].sex;
						this.userEducation = res.data.data[0].education;
						this.userSchool = res.data.data[0].school;
						this.userBirth = res.data.data[0].birth;

						this.accountID = res.data.data[0].uid;
						this.phoneNM = ''
						this.email = res.data.data[0].email;
						this.password = '********';
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
				})
			}
		},

		mounted: function(){
			this.getUserInfo()
		},

		watch: {
			"$store.state.user.name": {
				handler: function(){
					this.getUserInfo()
				}
			}
		}
	}
</script>