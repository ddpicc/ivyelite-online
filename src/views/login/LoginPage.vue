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
  let redirectUrl
  const whiteList = ['/login','/register']
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
        snackbarTimeout: 3000,
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
            this.$router.push({ path: url });
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
