<template>
 <div class="container">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-8 py-sm-4 py-4"></div>
				<v-row justify="center">
          <v-col cols="12">
            <section id="about">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="about-info">
                      <h2>Start your journey to a better life with online practical courses</h2>
                      <figure>
                        <span><i class="fa fa-users"></i></span>
                        <figcaption>
                          <h3>Professional Trainers</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                        </figcaption>
                      </figure>

                      <figure>
                        <span><i class="fa fa-certificate"></i></span>
                        <figcaption>
                          <h3>International Certifications</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                        </figcaption>
                      </figure>

                      <figure>
                        <span><i class="fa fa-bar-chart-o"></i></span>
                        <figcaption>
                          <h3>Free for 3 months</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                  <div class="col-md-offset-1 col-md-4 col-sm-12">
                    <div class="entry-form">
                        <h2>Login</h2>
                        <input v-model="loginEmail" type="email" name="email" class="form-control" placeholder="Your email address" required="">
                        <input v-model="password" type="password" name="password" class="form-control" placeholder="Your password" required="">
                        <button class="submit-btn form-control" @click.stop="loginClick">Get started</button>
                        <span>Not a member?</span>
                        <button class="register-btn form-control" @click.stop="registerClick">Register now</button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
<!--             <v-card flat class="elevation-12">
              <v-card-text>
                <v-img
                  contain
                  max-height="70px"
                  position="left left"
                  src="https://cdn.ivyelite.net/wp-content/uploads/2021/10/16171623/beepress2-1634418983.png"
                  @click.stop="jumpHome"
                ></v-img>  
                <v-form class="mt-8">
                  <v-text-field
                    solo
                    label="输入邮箱"
                    :rules="emailRules"
                    v-model="loginEmail"
                  ></v-text-field>
                  <v-text-field
                    solo
                    label="输入密码"
                    :rules="[v => !!v || 'Password is required']"
                    type="password"
                    v-model="password"
                    @keyup.enter.native="loginClick"
                  ></v-text-field>
                </v-form>                  
                
                <v-card-actions>
                  <v-btn block color="blue" @click.stop="loginClick">登录</v-btn>
                </v-card-actions>
                <v-row>
                  <v-col cols="6">
                    还没有帐号？
                    <router-link to="/register" style="color:red">免费注册</router-link>
                  </v-col>
                  <v-col cols="6" class="d-inline-flex justify-end">
                    <router-link to="/forgetPass" style="color:red">忘记密码</router-link>   
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card> -->
            <div class="py-md-8 py-sm-4 py-4"></div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="5000"
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
      registerClick: function(){
        this.$router.push({path: '/register'})
      }
    }
  }
</script>
<style scoped>
  #about figure {
    display: inline-block;
    vertical-align: top;
    margin-left: 15px;
  }

  #about figure span {
    float: left;
    margin-left: -15px;
    padding: 15px 20px;
    position: relative;
    top: 20px;
  }

  #about figure span i {
    background: #29ca8e;
    border-radius: 50px;
    color: #ffffff;
    font-size: 25px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
    .entry-form {
    background-color: #29AB4A; /* 不支持线性的时候显示 */
    background-image: linear-gradient(to bottom right, #29AB4A , #7EBD44);
    border-radius: 100%;
    text-align: center;
    padding: 6em;
    width: 450px;
    height: 450px;
  }

  .entry-form h2 {
    color: #ffffff;
    margin: 0;
  }

  .entry-form input {
    color: #ffffff;
    margin: 0;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #ffffff;
}

  .entry-form .form-control {
    background: transparent;
    border: 0;
    border-bottom: 1px solid;
    border-radius: 0;
    box-shadow: none;
    height: 45px;
    margin: 10px 0;
  }

  .entry-form .submit-btn {
    background: #ffffff;
    border-radius: 50px;
    border: 0;
    color: #252020;
    width: 50%;
    height: 50px;
    margin: 30px auto;
    margin-bottom: 10px;
  }

  .entry-form .submit-btn:hover {
    background: #3f51b5;
    color: #ffffff;
  }

  .entry-form .register-btn {
    background: #ffffff;
    border-radius: 50px;
    border: 0;
    color: #252020;
    width: 50%;
    height: 50px;
    margin: 10px auto;
    margin-bottom: 10px;
  }

  .entry-form .register-btn:hover {
    background: #3f51b5;
    color: #ffffff;
  }

  section {
    position: relative;

  }

    @media only screen and (max-width: 767px) {
      .entry-form {
      display: block;
      margin: 0 auto;
    }
    }

      @media only screen and (max-width: 480px) {


    .entry-form {
      border-radius: 0;
      padding: 2em;
      max-width: 100%;
      max-height: 100%;
      width: inherit;
      height: inherit;
    }
  }

</style>
