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
                ref="mark1"
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
    <v-dialog
      v-model="dialog"
      width="25rem"
      class="dialog"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          修改密码
        </v-card-title>
        <v-card-text>
          <div class="line1">
            <div class="label1">
              <div>密码<div v-if="passValid == false" class="email-msg">至少包含一个大写字母，一个小写字母，一个数字</div></div>
              <input type="password" v-model="password" @blur="checkPass(password)">
            </div>
          </div>
          <div class="line2">
            <div class="label2">
              <div>
                再次输入
                <div v-if="repassValid == false" class="email-msg">两次输入的密码不一致</div>
              </div>              
              <input type="password" v-model="rePassword" @blur="verifyPass(rePassword)">
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="changePass()"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  import md5 from 'md5'
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
      dialog: false,
      password: '',
      rePassword: '',
      passValid: null,
      repassValid: null,

      snackbar: false,
      snackbarColor: '',
      notification: '',
    }),

    methods: {
      deleteEvent(code) {
        // code 删除前面输入的值
        this.verifyCodeWrong = false
      },
      checkPass: function(password){
        if(this.inLogin)
          return
        if(password != ''){
          let ispassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,16}$/.test(password)
          if(ispassword){
            this.passValid = true
          }else{
            this.passValid = false
          }
        }else{  
          this.passValid = false;
        }
      },
      verifyPass: function(rePassword) {
        if(rePassword != this.password){
          this.repassValid = false
        }else{
          this.repassValid = true
        }
      },
      changePass: function() {
        this.verifyPass(this.rePassword)
        if(!this.repassValid || !this.passValid){
          return
        }else{
          let md5Pass = md5(this.password);
          //update
          userApi.updateUserPass(md5Pass, this.loginEmail).then(res => {
            if (res.data.code === 200) {
              this.snackbar = true;
              this.notification = '修改成功,3秒钟后跳转到登录页面';  
              this.snackbarColor = 'green';
              setTimeout( () => {this.$router.push({path: '/login'});}, 3000);
              this.password = ''
            }else{
              this.snackbar = true;
              this.notification = '发生错误，请重试或联系管理员';
              this.snackbarColor = 'red';
            }
          })
        }
      },
      finishEvent: async function(code) {
        // code 完成时输入的值
        //check code
        let checkResult = await this.verifyCode(code)
        this.verifyCodeWrong = checkResult == 0? true : false
        if(!this.verifyCodeWrong){
          if(!this.userName || !this.uid){   //进入修改密码
            this.dialog = true
          }else{
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

    mounted: function() {
      this.$nextTick(()=>{ this.$refs.mark1.$el.querySelector('input').focus()}) 
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
          }else{
            
          }
        })
      }
      if(this.$route.query.name){
        this.userName = this.$route.query.name
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
  .line1{
    margin-top: 1.4375rem;
  }

  .line1 input{
    width: 22.5rem;
    height: 2.6875rem;
    margin-top: 0.25rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
  .email-msg{
    font-size: 0.8rem;
    color: red;
    float: right;
  }
  .line2{
    margin-top: 1.25rem;
  }
  .line2 input{
    width: 22.5rem;
    height: 2.6875rem;
    margin-top: 0.25rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
</style>
            