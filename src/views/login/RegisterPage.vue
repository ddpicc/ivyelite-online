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
                <v-form>
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
        let uid = await this.getUseableUid();
        let md5Password = md5(this.password);
      },

    }
  }
</script>
