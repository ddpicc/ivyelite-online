<template>
  <v-card class="pa-0" :color="cardBackColor">
    <v-card-text>
      <v-row
        no-gutters
        justify="center"
      >
        <v-col
          cols="12"
          sm="3"
          class="pt-2 pb-2"
        >
          <v-img
            class="pic_height"
            :src="cover_url"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          offset-sm="1"
          class="pt-2 pb-2"
        >
          <v-row>
            <v-col class="col_height">
              <div
                v-text="name"
                class="classtitle"
                space="1"
              />
              <div class="classDes"
                v-if="description"
                v-text="description"
                space="1"
              />
              <div class="classTime"
                v-if="classCount"
                v-text="'授课课时： ' + classCount"
                space="1"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mt-2">
              <span @click="btnClickFun" class="btnC">{{btnTitle}}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
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
  </v-card>
</template>

<script>
  import relationApi from '../api/relationApi'
  export default {
    name: 'ClassInfoCard',
    props: {
      id: Number,
      cardBackColor: {
        type: String,
        default: '#E2E3E6'
      },
      cover_url: String,
      description: String,
      name: String,
      classCount: String,
    },

    data: () => ({
      btnTitle: '选择TA',
      snackbar: false,
      snackbarColor: '',
      notification: '',
    }),

    methods: {
      btnClickFun: function(){
        if(!this.$store.state.user.uid){
          this.snackbar = true;
				  this.notification = '你还没有登录，请先登录账号';
				  this.snackbarColor = 'red';
				  setTimeout( () => {this.$router.push({path: '/login'});}, 3000);
        }else if(this.btnTitle == '已注册'){
          this.$router.push({ path: '/myprofile/class' });
        }
        else{
          //用户已经登录
          //跳转到支付checkout页面
          this.$router.push({ path: '/payment/checkout',query: {classId: this.id} });
        }
      },

      checkClassReserved: function(){
        relationApi.isClassReserved(this.$store.state.user.uid, this.id).then(res => {
          if (res.data.code === 200) {
            if(res.data.data[0].count != 0){
              this.btnTitle = '已注册'
            }else{
              this.btnTitle = '选择TA'
            }
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      }      
    },
    mounted: function(){
			this.checkClassReserved()
		}
  }
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .pic_height{
    height: 280px;
  }
  .col_height{
    height: 240px;
  }
  .classtitle{
    font-size: 24px;
    line-height: 1.5;
    font-weight: 700;
    color: #29AB4A;
  }

  .classDes {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 20px;
  }

  .classTime {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 12px;
  }

  span.btnC {
    padding: 5px 16px 5px 16px;
    font-size: 24px;
    color:#fff;
    background-color: #29AB4A;
  }

  span.btnC:hover {
    cursor: pointer;
    background-color: #fff;
    color: #29AB4A;
    border:1px solid #29AB4A;
  }
}
@media only screen and (max-width:959px) {
  .pic_height{
    height: 220px;
  }
  .col_height{
    height: 180px;
  }
  .classtitle{
    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;
    color: #29AB4A;
  }

  .classDes {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 20px;
  }

  .classTime {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 10px;
  }

  span.btnC {
    padding: 5px 16px 5px 16px;
    font-size: 20px;
    color:#fff;
    background-color: #29AB4A;
  }

  span.btnC:hover {
    cursor: pointer;
    background-color: #fff;
    color: #29AB4A;
    border:1px solid #29AB4A;
  }
}
@media only screen and (max-width:600px) {
  .classtitle{
    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;
    color: #29AB4A;
  }

  .classDes {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 14px;
  }

  .classTime {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 8px;
  }

  span.btnC {
    padding: 5px 16px 5px 16px;
    font-size: 18px;
    color:#fff;
    background-color: #29AB4A;
  }

  span.btnC:hover {
    cursor: pointer;
    background-color: #fff;
    color: #29AB4A;
    border:1px solid #29AB4A;
  }
}

</style>
