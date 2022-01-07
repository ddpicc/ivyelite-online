<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat class="elevation-12">
              <v-card-text>
                <div>感谢您的订单，{{userName}}</div>
                <div v-if="receiptMsg" v-text="receiptMsg"></div>
                <router-link to="/myprofile/class" style="color:blue">点击跳转到我的课程页面</router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import paymentApi from '../../api/paymentApi'
  import userApi from '../../api/userApi'
  export default {
    data () {
      return {
        stripe_session_id: null,
        uid: null,
        class_id: null,
        userName: null,
        receiptMsg: null,
      }
    },

    methods: {
      retriveSessionInfo: function(){
        paymentApi.retriveSessionInfo(this.stripe_session_id).then(res => {
          if (res.data.code === 200) {            
            this.uid = res.data.data.user_uid
            this.class_id = res.data.data.class_id
            userApi.getInfo(this.uid).then(res => {
              this.userName = res.data.data[0].name;
              this.receiptMsg = '账单信息已经生成并保存在账户中'
            })
          }
        })
      },
    },

    created: function(){
      if(this.$route.query.session_id){
        this.stripe_session_id = this.$route.query.session_id
      }
    },

    mounted: function(){
      this.retriveSessionInfo()
    }
  }
</script>
