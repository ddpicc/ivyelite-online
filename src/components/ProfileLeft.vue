<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img @click="changeAvatar()" :src="avatar_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <div v-if="!editInfo">
                {{$store.state.user.name}}
                <v-icon @click="editName()">mdi-pencil</v-icon>
              </div>
              <v-text-field
                v-if="editInfo"
                dense
                outlined
                append-icon="mdi-check"
                @click:append="updateUserName()"
                v-model="userName"
              ></v-text-field>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
						:to="link.to"
						active-class="green--text"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
          
    <my-upload field="img"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="imgUploadShow"
      url="https://upload-na0.qiniup.com/putb64/-1/"
      :params="params"
      :headers="headers"
      img-format="png">
    </my-upload>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :multi-line="true"
    >
      {{ notification }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>

  </v-card>
</template>

<script>
  import userApi from '../api/userApi'
  import myUpload from 'vue-image-crop-upload/upload-2.vue';
  const allLinks = [
    { text: '我的课堂', icon: 'mdi-playlist-star', to: '/myprofile/class', roles: ['student']},
    //{ text: '我的讨论', icon: 'mdi-message-reply', to: '/myprofile/discuss' },
    { text: '购买记录', icon: 'mdi-receipt', to: '/myprofile/invoice', roles: ['student'] },
    { text: '订单处理', icon: 'mdi-star', to: '/order', roles: ['admin']},
    { text: '个人资料', icon: 'mdi-account-details', to: '/myprofile/profile' },
    { text: '我的课堂', icon: 'mdi-folder', to: '/myprofile/teacherclass', roles: ['teacher']},
    { text: '配置选项', icon: 'mdi-account-multiple', to: '/admin/config', roles: ['admin']},
    { text: '所有用户', icon: 'mdi-account-multiple', to: '/admin/allusers', roles: ['admin']},
    { text: '所有课堂', icon: 'mdi-play-box-multiple', to: '/admin/allclasses', roles: ['admin']}
    
  ]
  export default {
    components: {
			myUpload
		},
    data: () => ({
      editInfo: false,
      userName: '',
      imgUploadShow: false,
      links: [],
      avatar_url: '',
			params: {},
			headers: {},

      snackbar: false,
      snackbarColor: '',
      notification: '',
    }),
//https://cdn.vuetifyjs.com/images/john.png
    methods: {
      editName: function(){
        this.editInfo = true;
        this.userName = this.$store.state.user.name
      },

      updateUserName: function(){
        userApi.updateUserName(this.userName, this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 200) {
            this.$store.commit('user/SET_NAME', this.userName);
            this.editInfo = false;
            this.userName = '';
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      changeAvatar: function(){
        this.imgUploadShow = true;
        userApi.getQiniuToken().then(res => {
          if (res.data.code === 200) {
            this.headers = {
              'Content-Type': 'application/octet-stream',
              'Authorization': 'UpToken ' + res.data.data,
            };            
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
				console.log('-------- crop success --------');
				this.avatar_url = imgDataUrl;
        console.log(imgDataUrl)
        this.$set(this.params,'img_url',imgDataUrl.replace(/^.*?base64,/, ''))
			},
			/**
			 * upload success
			 *
			 * [param] jsonData   服务器返回数据，已进行json转码
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
        userApi.updateUserAvatar(jsonData.key,this.$store.state.user.uid).then( res => {
          if (res.data.code === 200) {
            this.snackbar = true;
            this.notification = '上传成功';
            this.snackbarColor = 'green';
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
    },

    mounted: function() {
      allLinks.forEach(element => {
        if(!element.roles || element.roles.indexOf(this.$store.state.user.roles) >=0 ){
          this.links.push(element);
        }
      });
      if(!this.$store.state.user.avatar_url){
        this.avatar_url = 'https://cdn.vuetifyjs.com/images/john.jpg';
      }else{
        this.avatar_url = `${process.env.VUE_APP_IMAGE_BASEURL}${this.$store.state.user.avatar_url}`
      }     
		}
  }
</script>

<style scoped>
  #imgDialog {
    background-color: aliceblue;
  }
</style>