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
                <v-tabs v-model="tab">
                  <v-tab>邮箱登录</v-tab>
                  <v-tab>手机登录</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card class="mt-6" flat>
                      <v-form>
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
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card class="mt-6" flat>
                      <v-form>
                        <v-row class="d-flex flex-row">
                          <v-col id="nopaddingrightcol" cols="3"> 
                            <v-select
                              :items="phonePrefixs"
                              v-model="phonePrefix"
                              solo
                            ></v-select>
                          </v-col>
                          <v-col id="nopaddingleftcol" cols="9">
                            <v-text-field
                              solo
                              label="输入手机"
                              :rules="emailRules"
                              v-model="loginEmail"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-text-field
                          solo
                          label="输入密码"
                          :rules="[v => !!v || 'Password is required']"
                          type="password"
                          v-model="password"
                          @keyup.enter.native="loginClick"
                        ></v-text-field>
                      </v-form>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
                
                  <v-card-actions>
                    <v-btn block color="grey" @click.stop="loginClick">登录</v-btn>
                  </v-card-actions>
                  <v-row>
                    <v-col cols="6">
                      还没有帐号？
                      <router-link to="register" style="color:red">免费注册</router-link>
                    </v-col>
                    <v-col cols="6" class="d-inline-flex justify-end">
                      <router-link to="forgetPass" style="color:red">忘记密码</router-link>   
                      <!--a href="http://www.w3school.com.cn/" style="color:red">{{$t('lang.login_forgetPassword')}}</a -->
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
  export default {
    data () {
      return {
        loginEmail: '',
        password: '',
        phoneNumber: '',
        tab: null,
        loginBtnName: "登录",
        snackbar: false,
        snackbarColor: '',
        notification: '',
        snackbarTimeout: 3000,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phonePrefixs: ['+001','+86'],
        phonePrefix: '+001'
      }
    },

    methods: {
      loginClick: function(){
        if (this.loginEmail === '' || this.password === '') {
          alert('账号或密码不能为空');
        } else {
          var userInfo = {username: this.loginEmail, password: this.password};
          this.$store.dispatch('user/LoginByEmail', userInfo).then(() => {
            this.snackbar = true;
            this.notification = '登录成功';
            this.snackbarColor = 'green';
            
            this.$router.push({ path: '/dashboard' });
          }).catch(err => {
            this.snackbar = true;
            this.notification = '连接错误，请重试';
            console.log(err);
          });
        }         
      },

      jumpHome: function(){
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style scoped>
 #nopaddingleftcol{
   padding-left: 0;
 }

 #nopaddingrightcol{
   padding-right: 0;
 }
</style>