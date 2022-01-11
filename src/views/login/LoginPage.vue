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
            </v-card>
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
  </v-container>
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
              url = '/'
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
    }
  }
</script>
