<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-4 py-sm-4 py-4"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
					<v-col cols="9">
						<v-card>
              <v-expansion-panels accordion v-model="panel">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    联系方式
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="wechat"
                          label="微信号"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="phone"
                          label="手机号"
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="email"
                          label="邮箱"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <vue-upload-imgs 
                          class="uploadimg"
                          multiple
                          compress
                          :before-read="beforeRead"
                          :after-read="afterRead"
                          :before-remove="beforeRemove"
                          :limit="limit"
                          :type="type"
                          @preview="preview"
                          @exceed="exceed"
                          @oversize="oversize"
                          v-model="files"
                        >
                          <div>上传微信二维码图片</div>                        
                        </vue-upload-imgs>

                        <div class="preview-bg" v-show="isPreview">
                          <div class="dialog">
                            <button class="close-preview" @click="closePreview"><v-icon
                              large
                              color="white"
                            >
                              mdi-close
                            </v-icon></button>
                            <img :src="previewIMG" class="preview-img">
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <v-btn class="mt-4" color="blue" @click="updateContactConfig()">更新</v-btn>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import profileLeft from "../../components/ProfileLeft.vue"
  import infoApi from '../../api/infoApi'
  import userApi from '../../api/userApi'
  import axios from 'axios'
  export default {
    data: () => ({
      wechat: '',
      phone: '',
      email: '',
      panel: null,

      files: [
        {
          url: '',
          name: 'qrcode.jpg'
        }
      ],
      maxSize: 1024 * 10, // 10 KB
      previewIMG: null,
      limit: 1,
      isPreview: false,
      type: 0,
		}),

		components: {
			profileLeft
		},

		methods: {
      oversize(file) {
        console.log('oversize')
        console.log('filesize:' + file.size / 1024 + 'KB')
      },

      afterRead(file) {
        console.log('after-read')
      },

      beforeRemove(index, file) {
        console.log(index, file)
        return true
      },

      preview(index, file) {
        this.previewIMG = file.url
        this.isPreview = true
      },

      exceed() {
        alert(`只能上传${this.limit}张图片`)
      },

      beforeRead(files) {
        console.log('before-read')
        for (let i = 0, len = files.length; i < len; i++) {
          const file = files[i]
          if (file.type != 'image/jpeg' && file.type != 'image/png') {
            alert('只能上传jpg和png格式的图片')
            return false
          }
        }
        return true
      },

      closePreview() {
        this.isPreview = false
      },
      updateContactConfig: function(){
        let pic = this.files[0].url.replace(/^.*?base64,/, '')
        userApi.getQiniuToken().then(res => {
          infoApi.uploadContactQRCode(res.data.data,pic).then(res => {
            let url_pic = res.data.data
            infoApi.saveContactConfig(this.phone, this.wechat, this.email, url_pic).then(res => {
              if (res.data.code === 200) {            
                this.loadConfig()
                this.snackbar = true
                this.notification = '更新成功'
                this.snackbarColor = 'green'
              }else{
                this.snackbar = true
                this.notification = '发生错误，请重试或联系管理员'
                this.snackbarColor = 'red'
              }
            })
          })
        })        
      },
      loadConfig: function(){
        infoApi.loadConfig().then( res => {
          if(res.data.code === 200) {
            let config = res.data.data
            this.wechat = config[0].contact_wechat
            this.phone = config[0].contact_phone
            this.email = config[0].contact_email
            this.files[0].url = `${process.env.VUE_APP_IMAGE_BASEURL}${config[0].qr_code}`
          }else{
            this.snackbar = true;
            this.notification = '读取课堂列表错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      }
		},

		mounted: function(){
      this.loadConfig()
		}
	}
</script>
<style scoped>
  .preview-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 100;
  }
  .dialog img {
    display: block;
    width: 50rem;
    margin: 15vh auto;
  }
  .close-preview {
    position: fixed;
    top: 5vh;
    left: 15vw;
  }
</style>
              

