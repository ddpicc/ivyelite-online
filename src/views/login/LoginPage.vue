<template>
  <div id="login" class="card">
    <div class="cont d-flex">
      <div class="left">
        <div class="wrap">
          <div class="btn-wrap d-flex">
            <div class="lg" v-bind:class="{'before': inLogin, 'after2': !inLogin}" @click="changeLogin()">登录</div>
            <div class="rg" v-bind:class="{'before': !inLogin, 'after': inLogin}" @click="changeRegister()">注册</div>
          </div>
          <div class="line1">
            <div class="label1">
              <div>邮箱<span style="color: red">*</span><div v-if="!inLogin && emailValid == false" class="email-msg">请输入合法的邮箱</div></div>
              <input type="text" v-model="loginEmail" @focus="focus($event)" @blur="checkEmail(loginEmail)">
            </div>
          </div>
          <div v-if="!inLogin" class="line4">
            <div class="label4">
              <div>姓名<span style="color: red">*</span><div v-if="!inLogin && nameValid == false" class="email-msg">该名字已被占用</div></div>
              
              <input type="text" v-model="name" @focus="focus($event)" @blur="validateAlias(name)">
            </div>
          </div>
          <div class="line2">
            <div class="label2">
              <div>
                密码
                <span style="color: red">*</span>
                <div v-if="inLogin" class="forget" @click="forgetPass()">忘记密码?</div>
                <div v-if="!inLogin && passValid == false" class="email-msg">至少包含一个大写字母，一个小写字母，一个数字</div>
              </div>              
              <input type="password" v-model="password" @keyup.enter="btnClick()" @blur="checkPass(password)">
            </div>
          </div>
          <div class="line3" @click="btnClick">
            {{btnText}}
          </div>
        </div>
      </div>
      <div class="right">

      </div>
    </div>
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
  let redirectUrl
  const whiteList = ['/login','/register']
  import userApi from '../../api/userApi'
  import {randChar} from '../../plugins/helpFunc'
  import md5 from 'md5'
  export default {
    beforeRouteEnter(to, from, next) {
      redirectUrl = from.fullPath;
      next();
    },
    data () {
      return {
        inLogin: true,
        btnText: '登录',
        loginEmail: '',
        password: '',
        name: '',
        nameValid: null,
        emailValid: null,
        passValid: null,

        snackbar: false,
        snackbarColor: '',
        notification: '',
      }
    },

    methods: {
      focus(event) {
        event.currentTarget.select();
			},
      btnClick: function(){
        if(this.inLogin){
          this.loginClick()
        }else{
          this.registerClick()
        }
      },
      loginClick: function(){
        this.$store.dispatch('user/LoginByEmail', {
          email: this.loginEmail,
          password: this.password,
        }).then( res => {
          if(res == 'login success'){
            this.snackbar = true;
            this.notification = '登录成功';
            this.snackbarColor = 'green';
            let url = whiteList.indexOf(redirectUrl) === -1? redirectUrl : '/';
            if(redirectUrl.indexOf('login')){
              url = '/myprofile/profile'
            }
            this.$router.push({ path: url });
          }else if(res == 'login fail'){
            this.snackbar = true;
            this.notification = '用户名或密码错误';
            this.snackbarColor = 'red';
          }          
        })
      },
      changeLogin: function(){
        this.inLogin = true
        this.btnText = '登录'
        this.password = ''
      },
      changeRegister: function(){
        this.inLogin = false
        this.btnText = '注册'
        this.password = ''
        this.name = ''
      },
      checkEmail: function(loginEmail){
        if(loginEmail != ''){
          let isemail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(loginEmail)
          if(isemail){
            this.emailValid = true
          }else{
            this.emailValid = false
          }          
        }else{
          this.emailValid = false
        }
        console.log(this.emailValid)
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
      validateAlias: function(name) {
        if(name.trim() == ''){
          return;
        }
        userApi.findDataCountByName(name).then( (res) => {
          if (res.data.code === 200) {
            if(res.data.data[0].count != 0){
              this.nameValid = false;
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

      forgetPass: function(){
        if(!this.emailValid){
          this.snackbar = true;
          this.notification = '这不是一个有效的邮箱地址';
          this.snackbarColor = 'red';
          return;
        }
        userApi.findCountByEmail(this.loginEmail).then( (res) => {
          if (res.data.code === 200) {
            if(res.data.data[0].count != 0){              
              this.$router.push({path: '/active', query: { email: this.loginEmail } })                
            }else{
              this.snackbar = true;
              this.notification = '这个邮箱不存在，请先注册账号';
              this.snackbarColor = 'red';
            }
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      
      registerClick: async function(){
        if(!this.emailValid || !this.passValid || !this.nameValid){
          return
        }        
        let uid = await this.getUseableUid();
        let md5Pass = md5(this.password);
        userApi.findCountByEmail(this.loginEmail).then( (res) => {
          if (res.data.code === 200) {
            if(res.data.data[0].count === 0){              
              this.$router.push({path: '/active', query: { uid: uid, pass: md5Pass, email: this.loginEmail, name: this.name} })                
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
      },
    },
  }
</script>
<style scoped>
  #login .cont{
    width: 90rem;
    margin: 0 auto;
  }
  #login .left{
    width: 45rem;
    height: calc(100vh - 8.5rem);
  }
  #login .left .wrap{
    padding: 8.6875rem 11.25rem 11.25rem;
  }
  #login .left .btn-wrap{
    position: relative;
  }
  #login .left .btn-wrap .lg{
    width: 10.875rem;
    height: 2.8125rem;
    text-align: center;
    cursor: pointer;

    font-weight: 600;
    font-size: 1.25rem;
    line-height: 2.8125rem;
    
    position: absolute;
  }
  #login .left .btn-wrap .rg{
    width: 10.875rem;
    height: 2.8125rem;
    text-align: center;
    cursor: pointer;

    font-weight: 600;
    font-size: 1.25rem;
    line-height: 2.8125rem;

    position: absolute;
    left: 9.5rem;
  }
  #login .left .btn-wrap .before{
    z-index: 6;

    background: #1A8750;
    color: #FFFFFF;
    border-radius: 6.625rem;
  }
  #login .left .btn-wrap .after{
    z-index: 5;

    background: #E8F5EE;
    border-radius: 0px 6.625rem 6.625rem 0px;
  }
  #login .left .btn-wrap .after2{
    z-index: 5;

    background: #E8F5EE;
    border-radius: 6.625rem 0 0 6.625rem;
  }
  #login .left .line1{
    margin-top: 6.4375rem;
  }
  #login .left .line1 input{
    width: 22.5rem;
    height: 2.6875rem;
    margin-top: 0.25rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
  #login .left .email-msg{
    font-size: 0.8rem;
    color: red;
    float: right;
  }
  #login .left .line2{
    margin-top: 1.25rem;
  }
  #login .left .line2 input{
    width: 22.5rem;
    height: 2.6875rem;
    margin-top: 0.25rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
  #login .left .line3{
    margin-top: 2.1875rem;
    background: #1A8750;
    border-radius: 0.3125rem;
    height: 2.8125rem;

    text-align: center;
    line-height: 2.8125rem;
    color: #FFFFFF;
    cursor: pointer;
  }
  #login .left .line4{
    margin-top: 1.25rem;
  }
  #login .left .line4 input{
    width: 22.5rem;
    height: 2.6875rem;
    margin-top: 0.25rem;
    padding: 0 1rem;

    border: 0.5px solid #2C2E30;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
  #login .left .line1, .line2, .line3, .line4{
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  #login .left .label2 .forget{
    float: right;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: pointer;
  }
  #login .right{
    width: 45rem;
    height: calc(100vh - 8.5rem);
    background: url("https://d22ssh14k1yxhv.cloudfront.net/login_banner.jpg") no-repeat top; 
    background-size: cover;
  }
@media screen and (max-width: 600px) {
  #login .right{
    display: none;
  }
  #login .cont{
    width: 37.5rem;
  }
  #login .left{
    width: 37.5rem;
    height: calc(100vh - 8.5rem);
  }
  #login .left .wrap{
    padding: 8.6875rem 11.25rem 11.25rem;
  }
}
</style>
