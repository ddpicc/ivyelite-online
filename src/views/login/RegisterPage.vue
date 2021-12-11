<template>
  <div>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
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
                注册即代表阅读并同意《服务协议和隐私政策
                <v-card-actions>
                  <v-btn block color="blue" @click.stop="registerClick">注册</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar
          v-model="snackbar"
          :color="snackbarColor"
          :timeout="snackbarTimeout"
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
    </v-content>
  </div>
</template>

<script>
  import {randChar} from '../../plugins/helpFunc'
  import userApi from '../../api/userApi'
  import md5 from 'md5'
  export default {
    data () {
      return {
        registerEmail: '',
        password: '',
        repeatPassword: '',
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
        snackbarTimeout: 3000,
      }
    },

    methods: {
      registerClick: async function(){
        if(this.$refs.registerForm.validate()){
          //看是不是8位数
          let uid = await this.getUseableUid();
          let md5Pass = md5(this.password);
          userApi.findCountByEmail(this.registerEmail).then( (res) => {
            if (res.data.code === 200) {
              if(res.data.data[0].count === 0){
                userApi.insertUser(this.registerEmail, md5Pass, uid).then(res => {
                  if (res.data.code === 200) {
                    this.snackbar = true;
                    this.notification = '注册成功';
                    this.snackbarColor = 'green';
                    
                    //发送验证邮件链接
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
