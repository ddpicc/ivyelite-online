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
                <div>支付成功</div>
                <router-link to="/" style="color:blue">点击跳转到我的课程页面</router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import paymentApi from '../../api/paymentApi'
  export default {
    data () {
      return {
        stripe_session_id: null,
      }
    },

    methods: {
      retriveSessionInfo: function(){
        paymentApi.retriveSessionInfo(this.stripe_session_id)
      }
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
