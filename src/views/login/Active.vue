<template>
  <div id="active" class="page">
    <v-container fluid style="max-width: 1280px">
      <v-row justify="center">
        <v-col cols="8">
          <div class="padding-top"></div>
          <v-card>
            <v-card-title class="text-h5">
              验证你的账户
            </v-card-title>
            <v-card-subtitle class="mt-2">一个四位数的验证码已经发送到了你的邮箱{{loginEmail}}。如果没有收到，请检查你的垃圾箱</v-card-subtitle>
            <div class="py-md-6 py-sm-6 py-6"></div>
            <div class="mb-8">
              <verificationCodeInput
                :wrong="verifyCodeWrong"
                :max-length=4
                @deleteEvent="deleteEvent"
                @finishEvent="finishEvent"
              />
            </div>
            <v-card-actions>
              <a href="/#/login">错误的邮箱？返回上一步</a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
  </div>
</template>

<script>
  import VerificationCodeInput from 'vue-verification-input'
  import userApi from '../../api/userApi'
  export default {
    components: {
      VerificationCodeInput,
    },
    data: () => ({
      verifyCodeWrong: false,
      loginEmail: '',
      md5Pass: '',
      userName: '',
      uid: '',

      snackbar: false,
      snackbarColor: '',
      notification: '',
    }),

    methods: {
      deleteEvent(code) {
        // code 删除前面输入的值
        this.verifyCodeWrong = false
      },
      finishEvent: async function(code) {
        // code 完成时输入的值
        //check code
        let checkResult = await this.verifyCode(code)
        this.verifyCodeWrong = checkResult == 0? true : false
        if(!this.verifyCodeWrong){
          userApi.insertUser(this.userName, this.loginEmail, this.md5Pass, this.uid, new Date().getTime()).then(res => {
            if (res.data.code === 200) {
              this.snackbar = true;
              this.notification = '注册成功,3秒钟后跳转到登录页面';  
              this.snackbarColor = 'green';
              setTimeout( () => {this.$router.push({path: '/login'});}, 3000);
              this.password = ''
              this.userName = ''
              this.md5Pass = ''
              this.uid = ''
            }else{
              this.snackbar = true;
              this.notification = '发生错误，请重试或联系管理员';
              this.snackbarColor = 'red';
            }
          })
        }        
      },
      verifyCode: function(code) {
        return new Promise ((resolve, reject) => {
          userApi.verifyActivateCode(this.loginEmail, code).then(res => {
            if(res.data.code === 200) {
              resolve(1)
            }else{
              resolve(0)
            }
          })
        })
      }
    },

    created: function(){
      if(this.$route.query.uid){
        this.uid = this.$route.query.uid
      }
      if(this.$route.query.pass){
        this.md5Pass = this.$route.query.pass
      }
      if(this.$route.query.email){
        this.loginEmail = this.$route.query.email
        userApi.sendActivateEmail(this.loginEmail).then(res => {
          if (res.data.code != 200) {
            this.snackbar = true;
            this.notification = '邮件发送失败，您可以尝试登录账号，或者联系管理员';
            this.snackbarColor = 'red';
          }
        })
      }
      if(this.$route.query.name){
        this.userName = this.$route.query.name
      }
      if(!this.$route.query.uid){
        this.$router.push({path: '/login'});
      }
    }
  }
</script>
<style scoped>
  .page{
    height: calc(100vh - 8.5rem);
    background: #E8F5EE;
  }
  #active .cont{
    width: 90rem;
    margin: 0 auto;
  }
  #active .padding-top{
    padding-top: 20%;
  }
</style>
            