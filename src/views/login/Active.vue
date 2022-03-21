<template>
  <div id="active" class="page">
    <v-container fluid style="max-width: 1280px">
      <v-row justify="center">
        <v-col cols="12">
          <div class="py-md-4 py-sm-4 py-4"></div>
          <v-card>
            <div>
              <h1>验证你的账户</h1>
              <p class="reminder">一个四位数的验证码已经发送到了你的邮箱。如果没有收到，请检查你的垃圾邮件箱 </p>
            </div>
            <div>
              <verificationCodeInput
                :wrong="verifyCodeWrong"
                :max-length=4
                @deleteEvent="deleteEvent"
                @finishEvent="finishEvent"
              />
            </div>
            <div>
              <a href="/#/">Wrong email?</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
      verifyCodeWrong: true
    }),

    methods: {
      deleteEvent(code) {
        // code 删除前输入的值
        this.verifyCodeWrong = false
      },
      finishEvent(code) {
        // code 完成时输入的值
        this.verifyCodeWrong = true
      },
      activeAccount: function(){
        userApi.activeUser('是',this.uid,this.email).then( (res) => {
          if (res.data.code === 200) { 
            this.message = '激活账号成功，即将跳转到登录页面'
            setTimeout( () => {this.$router.push({path: '/login'});}, 3000);

          }else{
            this.message = '遇到错误，请联系管理员'
          }
        })
      },
      handleOnComplete(value) {
      }
    },

    mounted: function(){
      
		},

    created: function(){
      
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
</style>
            