<template>
  <div>
    <v-dialog
      v-model="lectureDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{theClass.name}}</span>
        </v-card-title>
        <v-list-item-subtitle class="ml-6">开课时间： {{theClass.time_range}}</v-list-item-subtitle>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="您的称呼*"
                  required
                  v-model="userName"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="email*"
                  v-model="userEmail"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="微信号"
                  v-model="wechat"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="enrollLecture()"
          >
            提交报名
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </div>
</template>

<script>
  import courseApi from '../../api/courseApi'
  import classRoomApi from '../../api/classRoomApi'
  import infoApi from '../../api/infoApi'
  import md5 from 'md5'
  export default {
    data: () => ({
      title: '',
      userName: '',
      userEmail: '',
      wechat: '',
      user_uid: '',
      lectureDialog: false,

      classId: null,
      theClass: null,
      theRoom: null,

      snackbar: false,
      snackbarColor: '',
      notification: '',
    }),

    methods: {
      getUid() {
        const sign = md5(this.userName + this.userEmail).slice(-6);
        return parseInt(sign, 12);
      },
      enrollLecture: function(){
        //存入cookie
        let uid = this.getUid()
        
        //生成信息保存在数据库
        infoApi.saveToColInfo(this.userName,this.wechat,this.userEmail,this.classId,uid,'讲座')

        let obj = JSON.stringify({userName: this.userName, userEmail: this.userEmail, wechat: this.wechat, userUid: uid})
        this.$Cookies.set(`lecture_user`,obj,'30d')
        if(this.theRoom){
          let urlParams = {
            room_id: this.theRoom.room_id,
            role: 2,
            begin_timestamp: this.theRoom.begin_timestamp,
            user_uid: uid,
            user_name: this.userName,
          }
          this.$router.push({path: '/lectureClass', query: urlParams});
        }else{
          this.snackbar = true;
          this.notification = '目前还未开课';
          this.snackbarColor = 'green';
        }
      },
      getInfo: function(){
        courseApi.findOneClassById(this.classId).then(res => {
          if (res.data.code === 200) {
						this.theClass = res.data.data[0];
            if(this.theClass.course_id != 5){
              this.snackbar = true
              this.notification = '这不是一个公开课，请先注册登录账号'
              this.snackbarColor = 'red'
            }else{
              classRoomApi.searchRoomByClassId(this.theClass.id,'进行中').then( (res) => {
                if (res.data.code === 200) {
                  if(res.data.data.length > 0){     //有对应的房间
                    if (this.$Cookies.get(`lecture_user`)) {  //存在cookie
                      let obj = JSON.parse(this.$Cookies.get(`lecture_user`))
                      this.userName = obj.userName
                      this.userEmail = obj.userEmail
                      this.wechat = obj.wechat
                      this.user_uid = obj.userUid
                      //goto room
                      this.theRoom = res.data.data[0];
                      let urlParams = {
                        room_id: this.theRoom.room_id,
                        role: 2,
                        begin_timestamp: this.theRoom.begin_timestamp,
                        user_uid: this.user_uid,
                        user_name: this.userName,
                      }
                      this.$router.push({path: '/lectureClass', query: urlParams});
                    }else{
                      this.lectureDialog = true
                    }
                  }else{
                    //还没有创建房间
                    this.snackbar = true;
                    this.notification = '目前还未开课';
                    this.snackbarColor = 'green';
                    this.lectureDialog = true
                  }
                }else{
                  this.snackbar = true;
                  this.notification = '发生错误，请重试或联系管理员';
                  this.snackbarColor = 'red';
                }
              })
            }
          }else{
            this.snackbar = true
            this.notification = '读取课程错误，请重试或联系管理员'
            this.snackbarColor = 'red'
          }
        })
      },
    },

    created: function(){
      if(this.$route.query.class_id){
        this.classId = this.$route.query.class_id
      }
    },

    mounted: function(){
      this.getInfo()
    },
  }
</script>