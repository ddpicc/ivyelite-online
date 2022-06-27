<template>

    <v-btn @click="getSignature">加入课堂</v-btn>

</template>

<script>
import axios from "axios";
import { ZoomMtg } from '@zoomus/websdk';
import classRoomApi from '../api/classRoomApi'

export default {
  name: 'HelloWorld',
  created () {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.4.5/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('zh-CN');
    ZoomMtg.i18n.reload('zh-CN');
  },
  mounted() {
    ZoomMtg.inMeetingServiceListener("onUserJoin", (data) => {
      console.log("inMeetingServiceListener onUserJoin", data);
    });
  },
  props: {
    meetingNumber: String,
    passWord: String,
    role: {
      type: Number,
      default: 0
    },
    userEmail: {
      type: String,
      default: ''
    },
    userName: String,
  },
  data () {
    return {
      // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
      sdkKey: "QRlBnQfa93mEz9buWmdD8U5W76jIDrzmsDaB",
      //leaveUrl: "http://localhost:8080",
      leaveUrl: "https://online.ivyelite.net/#/myprofile/profile",
      //meetingNumber: "89681345390",
      //passWord: "8jQVJn",
      //role: 0,
      //signatureEndpoint: "http://localhost:3000/classroom/getSignature",
      signatureEndpoint: "https://online.ivyelite.net/classroom/getSignature",
      //signatureEndpoint: "http://localhost:4000",
      //userEmail: "",
      //userName: "Vue.js",
      // pass in the registrant's token if your meeting or webinar requires registration. More info here:
      // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
      // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
      registrantToken: '',
      zakToken: ''
    }
  },
  methods: {
    getSignature() {
      axios.post(this.signatureEndpoint, {
        meetingNumber: this.meetingNumber,
        role: this.role
      })
      .then(async (res) => {
        console.log(res.data.data);
        if(this.role == 1){
          this.zakToken = await this.getZakToken();
        }        
        this.startMeeting(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    getZakToken: function(){
      return new Promise ((resolve, reject) => {
        classRoomApi.getZakToken().then( (res) => {
          if(res.data.code === 200) {
            resolve(res.data.data);
          }else{
            reject('获取zak token失败');
          }
        })
      })
    },
    startMeeting(signature,zakToken) {
      document.getElementById("zmmtg-root").style.display = "block";

      ZoomMtg.init({
        leaveUrl: this.leaveUrl,
        success: (success) => {
          console.log(success);
          ZoomMtg.join({
            meetingNumber: this.meetingNumber,
            userName: this.userName,
            signature: signature,
            sdkKey: this.sdkKey,
            userEmail: this.userEmail,
            passWord: this.passWord,
            tk: this.registrantToken,
            zak: this.zakToken,
            success: (success) => {
              console.log(success);
            },
            error: (error) => {
              console.log(error);
            }
          });
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
</script>


