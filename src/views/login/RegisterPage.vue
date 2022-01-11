<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-4"></div>
				<v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat class="elevation-12">
              <v-card-text>
                <v-img
                  contain
                  max-height="70px"
                  position="left left"
                  src="https://cdn.ivyelite.net/wp-content/uploads/2021/10/16171623/beepress2-1634418983.png"
                  @click.stop="jumpHome"
                ></v-img>  
                <v-form class="mt-8"
                 ref="registerForm"
                 lazy-validation>
                 <small style="color: red" v-if="!nameValid">{{nameNotify}}</small>
                  <v-text-field
                    solo
                    label="输入用户名"
                    :rules="nameRules"
                    v-model="name"
                    @blur="validateAlias(name)"
                  ></v-text-field>
                  
                  <v-text-field
                    solo
                    label="输入邮箱"
                    :rules="emailRules"
                    v-model="registerEmail"
                  ></v-text-field>
                  <v-text-field
                    solo
                    label="输入密码 至少6位数"
                    :rules="passwordRules"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    solo
                    label="重复密码"
                    :rules="[v => v == this.password || '两次输入的密码不一致']"
                    type="password"
                    v-model="repeatPassword"
                    @keyup.enter.native="registerClick"
                  ></v-text-field>
                </v-form>
                注册即代表阅读并同意《服务协议和隐私政策》
                <v-card-actions>
                  <v-btn block color="blue" @click.stop="registerClick">注册</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
  import {randChar} from '../../plugins/helpFunc'
  import userApi from '../../api/userApi'
  import md5 from 'md5'
  export default {
    data () {
      return {
        name: '',
        nameValid: false,
        nameNotify: '',
        registerEmail: '',
        password: '',
        repeatPassword: '',
        nameRules: [
          v => !!v || 'name is required',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',

        ],
        snackbar: false,
        snackbarColor: '',
        notification: '',
      }
    },

    methods: {
      validateAlias: function(name) {
        userApi.findDataCountByName(name).then( (res) => {
          if (res.data.code === 200) {
            if(res.data.data[0].count != 0){
              this.nameValid = false;
              this.nameNotify = '该名字已被占用'
            }else{
              this.nameValid = true;
            }
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      
      registerClick: async function(){
        if(this.$refs.registerForm.validate() && this.nameValid){
          //看是不是8位数
          let uid = await this.getUseableUid();
          let md5Pass = md5(this.password);
          userApi.findCountByEmail(this.registerEmail).then( (res) => {
            if (res.data.code === 200) {
              if(res.data.data[0].count === 0){
                userApi.insertUser(this.name, this.registerEmail, md5Pass, uid, new Date().getTime()).then(res => {
                  if (res.data.code === 200) {
                    this.snackbar = true;
                    this.notification = '注册成功,正在发送激活邮件到您的邮箱';
                    this.snackbarColor = 'green';
                    let content = `<div>感谢您注册常青藤在线教育账号，请在24小时内点击以下链接完成注册验证</div><br>
                                  <a href='https://online.ivyelite.net/#/active?email=${this.registerEmail}&uid=${uid}'>
                                    https://online.ivyelite.net/#/active?email=${this.registerEmail}&uid=${uid}
                                  </a><br><br>
                                  <div>若链接点击无效，请复制链接到浏览器地址栏中打开。</div>
                                  <div>若您未申请注册常青藤在线教育账号，请忽略此邮件。</div>`
                    userApi.sendActivateEmail(this.registerEmail, content).then(res => {
                      if (res.data.code === 200) { 
                        this.snackbar = true;
                        this.notification = '请前往邮箱激活账号。如果未收到邮件，请先检查垃圾箱再联系管理员';
                        this.snackbarColor = 'green';
                        setTimeout( () => {this.$router.push({path: '/login'});}, 2000);
                      }else{
                        this.snackbar = true;
                        this.notification = '邮件发送失败，您可以尝试登录账号，或者联系管理员';
                        this.snackbarColor = 'red';
                      }
                    })                    
                  }else{
                    this.snackbar = true;
                    this.notification = '发生错误，请重试或联系管理员';
                    this.snackbarColor = 'red';
                  }
                })
              }else{
                this.snackbar = true;
                this.notification = '这个邮箱已被注册，请直接登录';
                this.snackbarColor = 'red';
              }
            }else{
              this.snackbar = true;
              this.notification = '发生错误，请重试或联系管理员';
              this.snackbarColor = 'red';
            }          
          })
        }
      },

      getUseableUid: function(){
        var uid = randChar(8,'0123456789');
        return new Promise(( resolve, reject) => {
          userApi.findDataCountByUid(uid).then(res => {
            if (res.data.code === 200) {
              if(res.data.data[0].count === 0){
                resolve(uid);
              }else{
                this.getUseableUid();
              }
            }else{
              reject('发生错误，请重试或联系管理员');
            }
				  })
        })
      }

      

    }
  }
</script>
