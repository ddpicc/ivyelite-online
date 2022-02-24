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
              <div>邮箱<span style="color: red">*</span></div>
              <input type="text" v-model="loginEmail">
            </div>
          </div>
          <div class="line2">
            <div class="label2">
              <div>密码<span style="color: red">*</span><div class="forget">忘记密码?</div></div>
              
              <input type="text" v-model="password">
            </div>
          </div>
          <div v-if="!inLogin" class="line4">
            <div class="label4">
              <div>姓名<span style="color: red">*</span></div>
              
              <input type="text">
            </div>
          </div>
          <div class="line3" @click="loginClick">
            {{btnText}}
          </div>
        </div>
      </div>
      <div class="right">
      
      </div>
   </div>
  </div>
</template>

<script>
  let redirectUrl
  const whiteList = ['/login','/register']
  import userApi from '../../api/userApi'
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
        emailRules: [
          v => !!v || 'E-mail is required',
          //v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        snackbar: false,
        snackbarColor: '',
        notification: '',
      }
    },

    methods: {
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
            if(redirectUrl.indexOf('active')){
              url = '/myclass'
            }
            this.$router.push({ path: url });
          }else if(res == 'account not active'){
            let uid = this.$store.state.user.uid;
            let content = `<div>感谢您注册常青藤在线教育账号，请在24小时内点击以下链接完成注册验证</div><br>
                                  <a href='https://online.ivyelite.net/#/active?email=${this.loginEmail}&uid=${uid}'>
                                    https://online.ivyelite.net/#/active?email=${this.loginEmail}&uid=${uid}
                                  </a><br><br>
                                  <div>若链接点击无效，请复制链接到浏览器地址栏中打开。</div>
                                  <div>若您未申请注册常青藤在线教育账号，请忽略此邮件。</div>`
            userApi.sendActivateEmail(this.loginEmail, content).then(res => {
              if (res.data.code === 200) { 
                this.snackbar = true;
                this.notification = '账号未激活，请前往邮箱激活账号。如果未收到邮件，请先检查垃圾箱再联系管理员';
                this.snackbarColor = 'green';
                setTimeout( () => {this.$router.push({path: '/login'});}, 2000);
              }else{
                this.snackbar = true;
                this.notification = '邮件发送失败，您可以尝试登录账号，或者联系管理员';
                this.snackbarColor = 'red';
              }
            })
          }else if(res == 'login fail'){
            this.snackbar = true;
            this.notification = '用户名或密码错误';
            this.snackbarColor = 'red';
          }          
        })
      },
      changeLogin: function(){
        this.inLogin = true
      },
      changeRegister: function(){
        this.inLogin = false
        this.btnText = '注册'
      }
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
    height: 51.5625rem;
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
    z-index: 50;

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
  }
  #login .right{
    width: 45rem;
    height: 51.5625rem;
    background-color: #F5F0FF;
  }
</style>
