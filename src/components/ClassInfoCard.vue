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
          class="pt-6 pb-6"
        >
          <v-img
            min-height="280px"
            :src="cover_url"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          offset-sm="1"
          class="pt-6 pb-6"
        >
          <v-row>
            <v-col style="height: 240px">
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
              <span @click="btnClickFun" class="btnC">选择TA</span>
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
        }else{
          //用户已经登录
          //跳转到支付checkout页面
          this.$router.push({ path: '/payment/checkout',query: {classId: this.id} });


          /* relationApi.setUserCourseRelation(this.$store.state.user.uid, this.id, 1, 0).then( (res) => {
            if (res.data.code === 200) {
              this.snackbar = true;
              this.notification = '选课成功';
              this.snackbarColor = 'green';
              this.$router.push({path: '/myprofile/class'});
            }else{
              this.snackbar = true;
              this.notification = '发生错误，请重试或联系管理员';
              this.snackbarColor = 'red';
            }
          }) */
        }
      }
    }
  }
</script>

<style scoped>
  .classtitle{
    font-size: 26px;
    line-height: 1.5;
    font-weight: 700;
    color: #29AB4A;
  }

  .classDes {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 26px;
  }

  .classTime {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 12px;
  }

  span.btnC {
    padding: 5px 16px 5px 16px;
    font-size: 26px;
    color:#fff;
    background-color: #29AB4A;
  }

  span.btnC:hover {
    cursor: pointer;
    background-color: #fff;
    color: #29AB4A;
    border:1px solid #29AB4A;
  }

</style>
