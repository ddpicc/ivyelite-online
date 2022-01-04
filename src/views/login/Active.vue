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
            <div v-text="message"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import userApi from '../../api/userApi'
  export default {
    data: () => ({
      uid: null,
      email: null,
      message: '',
    }),

    methods: {
      activeAccount: function(){
        userApi.activeUser('是',this.uid,this.email).then( (res) => {
          if (res.data.code === 200) { 
            this.message = '激活账号成功，即将跳转到登录页面'
            setTimeout( () => {this.$router.push({path: '/login'});}, 3000);

          }else{
            this.message = '遇到错误，请联系管理员'
          }
        })
      }
    },

    mounted: function(){
      this.activeAccount();      
		},

    created: function(){
      if(this.$route.query.email){
        this.email = this.$route.query.email
      }
      if(this.$route.query.uid){
        this.uid = this.$route.query.uid
      }
    }
  }
</script>
            