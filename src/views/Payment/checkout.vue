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
              <v-card-title v-text="theClass.name"></v-card-title>
              <v-card-subtitle v-text="`$ ${theClass.amount}`"></v-card-subtitle>
              <v-card-actions>
                <v-btn color="blue" @click.stop="checkout">结算</v-btn>
                <v-btn color="blue" @click.stop="cancel">取消</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        timeout="3000"
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
  import paymentApi from '../../api/paymentApi'
  import courseApi from '../../api/courseApi'
  export default {
    data () {
      return {
        classId: null,
        theClass: {
          name: null,
          stripe_api_id: null,
        },
        snackbar: false,
        snackbarColor: '',
        notification: '',
      }
    },

    methods: {
      checkout: function(){
        paymentApi.createCheckoutSession(this.theClass.stripe_api_id,1,this.classId,this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 303) {
            window.location.href = res.data.url
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      getInfo: function(){
        courseApi.findOneClassById(this.classId).then(res => {
          if (res.data.code === 200) {
						this.theClass = res.data.data[0];
          }else{
            this.snackbar = true;
            this.notification = '读取课程错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      cancel: function(){
        this.$router.go(-1);
      }
    },

    created: function(){
      if(this.$route.query.classId){
        this.classId = this.$route.query.classId
      }
    },

    mounted: function(){
      this.getInfo()
    }
  }
</script>
