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
            <v-img @click="changeAvatar()" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
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
    <v-dialog id="imgDialog" width="500" v-model="changeAvatarDialog">
      <v-card class="d-flex justify-center">
        <div>
          <v-avatar size="88">
            <img
              src="https://cdn.vuetifyjs.com/images/john.png"
              alt="John"
            >
          </v-avatar>
          <vue-core-image-upload 
            class="btn btn-primary"
            :crop="false"
            @imageuploaded="imageuploaded"
            :max-file-size="5242880"
            url="http://101.198.151.190/api/upload.php" >
          </vue-core-image-upload>
        </div>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  import VueCoreImageUpload from 'vue-core-image-upload'
  import userApi from '../api/userApi'
  export default {
    components: {
      'vue-core-image-upload': VueCoreImageUpload,
    },
    data: () => ({
      editInfo: false,
      userName: '',
      changeAvatarDialog: false,
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      links: [
        { text: '我的课程', icon: 'mdi-playlist-star', to: '/myprofile/class'},
        { text: '我的讨论', icon: 'mdi-message-reply', to: '/myprofile/discuss' },
        { text: '购买记录', icon: 'mdi-receipt', to: '/myprofile/invoice' },
        { text: '新建课程', icon: 'mdi-star', to: '/course/create' },
        { text: '个人资料', icon: 'mdi-account-details', to: '/myprofile/profile' },
        { text: '我的课程(老师)', icon: 'mdi-folder', to: '/myprofile/teacherclass'},        
      ],
    }),

    methods: {
      editName: function(){
        this.editInfo = true;
      },

      updateUserName: function(){
        userApi.updateUserName(this.userName, this.$store.state.user.uid).then( (res) => {
          if (res.data.code === 200) {
            this.$store.commit('user/SET_NAME', this.userName);
            this.editInfo = false;
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      changeAvatar: function(){
        this.changeAvatarDialog = true;
      },

      imageuploaded: function(){

      },
    }
  }
</script>

<style scoped>
  #imgDialog {
    background-color: aliceblue;
  }
</style>