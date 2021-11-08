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
					<v-card-title class="text-h6">
            个人信息
						<v-btn plain @click="editBtnClick()">编辑</v-btn>
          </v-card-title>
					<v-card-text>
						<v-form>
							<v-row>
								<v-col cols="6" class="d-flex">
									<v-subheader>姓名</v-subheader>
									<v-subheader v-if="!editInfo">{{userName}}</v-subheader>
									<v-text-field
										v-if="editInfo"
										solo
										dense
										label="输入姓名"
										v-model="userName"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>性别</v-subheader>
									<v-subheader v-if="!editInfo">{{userSex}}</v-subheader>
									<v-text-field
										v-if="editInfo"
										solo
										dense
										label="输入性别"
										v-model="userSex"
									></v-text-field>
								</v-col>

								<v-col cols="6" class="d-flex">
									<v-subheader>学历</v-subheader>
									<v-subheader v-if="!editInfo">{{userEducation}}</v-subheader>
									<v-text-field
										v-if="editInfo"
										solo
										dense
										label="输入学历"
										v-model="userEducation"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="d-flex">
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

								<v-col cols="6" class="d-flex">
									<v-subheader>生日</v-subheader>
									<v-subheader v-if="!editInfo">{{userBirth}}</v-subheader>
									<v-text-field
										v-if="editInfo"
										solo
										dense
										label="输入生日"
										v-model="userBirth"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>地区</v-subheader>
									<v-subheader v-if="!editInfo">{{userArea}}</v-subheader>
									<v-text-field
										v-if="editInfo"
										solo
										dense
										label="输入密码1"
										type="password"
										v-model="password"
									></v-text-field>
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
								<v-col cols="6" class="d-flex">
									<v-subheader>账号ID</v-subheader>
									<v-subheader>{{accountID}}</v-subheader>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>手机号码</v-subheader>
									<v-subheader>{{phoneNM}}</v-subheader>
									<v-subheader @click="changePhone" class="blue--text">更换</v-subheader>
								</v-col>

								<v-col cols="6" class="d-flex">
									<v-subheader>邮箱</v-subheader>
									<v-subheader>{{email}}</v-subheader>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>密码</v-subheader>
									<v-subheader>{{password}}</v-subheader>
									<v-subheader @click="changePhone" class="blue--text">修改密码</v-subheader>
								</v-col>

								<v-col cols="6" class="d-flex">
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
								</v-col>
							</v-row>
						</v-form>
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  export default {
    data: () => ({
			editInfo: false,
			userName: '',
			userSex: '',
			userEducation: '',
			userSchool: '',
			userBirth: '',
			userArea: '',

			accountID: '',
			phoneNM: '',
			email: '',
			password: '',
			language: '',
			languages: [
				{
					title: '中文'
				},
				{
					title: 'English'
				}
			],
		}),

		components: {
			profileLeft
		},

		methods: {
			changePhone: function(){
				alert('change phone')
			},
		},

		mounted: function(){
			
		}
	}
</script>