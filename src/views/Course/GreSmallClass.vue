<template>
  <div>
    <section id="banner">
      <v-sheet
        color="#E9F8FF"
        height="36.75rem"
        tile
        class="swiper"
      >
        <div class="cont">
          <div class="title-wrap">
            <div class="title-size">GRE 全程提高班</div>
            <div class="yellow-line"></div>
          </div>
          <div class="banner-bullet">
            <div class="d-flex align-center ln1">
              <div class="icon">
                <img src="../../assets/icon/cross mark.png"/>                  
              </div>
              远离50-60人 航母级“小班课”
            </div>
            <div class="d-flex align-center ln1">
              <div class="icon">
                <img src="../../assets/icon/cross mark.png"/>                  
              </div>
              拒绝“0”互动，低效瞌睡型直播
            </div>
            <div class="d-flex align-center ln2 checkline">
              <div class="icon">
                <img src="../../assets/icon/check mark.png"/>                  
              </div>
              常青藤团队匠心打造10人精品小班
            </div>
            <div class="d-flex ln2">
              <div class="icon">
                <img src="../../assets/icon/check mark.png"/>                  
              </div>
              直播录播配套教学，重点难点0错过
            </div>
            <div class="d-flex ln2">
              <div class="icon">
                <img src="../../assets/icon/check mark.png"/>                  
              </div>
              业界名师主讲，实时互动，立刻答疑
            </div>
            <div class="d-flex ln2">
              <div class="icon">
                <img src="../../assets/icon/check mark.png"/>                  
              </div>
              大数据网罗真题机经，定期拉练稳定冲分
            </div>
          </div>
          
        </div>
        <div class="card">
            <div class="card-banner">
              <div class="card-des">
                暑期是备考准备的绝佳时期，时间充裕的同学还能完成实习+GRE双管齐下的绝佳背景提升组合。
              </div>
            </div>
            <div class="card-content">
              <v-item-group
                v-model="classIndex"
                class="d-inline-flex align-center"
                mandatory
              >
                <v-item
                  v-for="(oneClass, i) in classes" 
                  :key="i"
                  v-slot="{ active, toggle }"
                >
                  <div :class="{'item-active courseTab': active, 'item-inactive courseTab': !active}" @click="toggle">
                    <div class="course-word">{{oneClass.name}}</div>
                  </div>                  
                </v-item>
              </v-item-group>
              
              <v-window
                v-model="classIndex"
              >
                <v-window-item 
                  v-for="(oneClass, i) in classes" 
                  :key="i"
                >
                  <div class="window-wrap">
                    <div class="line1">
                      <img class="people-icon" src="../../assets/icon/thumbnail_People.png"/>
                      {{oneClass.available_seat}}
                      <img class="clock-icon" src="../../assets/icon/thumbnail_clock.png"/>
                      {{oneClass.time_range}}
                    </div>
                    <div class="line2">
                      <div class="people">
                        剩余席位
                      </div>
                      <div class="clock">
                        {{oneClass.date_range}}
                      </div>
                    </div>
                  </div>
                  <div class="card-action">
                    <div class="money">
                      $799
                    </div>
                    <v-btn :disabled="oneClass.available_seat<=0" class="signup-button hvr-grow" @click="signupBtnClick()">
                      立即报名
                    </v-btn>
                  </div>
                </v-window-item>
              </v-window>
            </div>            
          </div>
      </v-sheet>      
    </section>
    <section id="des">
      <div class="cont">
        <div class="wrap">
          <v-item-group
            v-model="tabIndex"
            class="d-flex align-start"
            mandatory
          >
            <v-item
              v-for="n in tabList.length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
              class="word22 mright"
            >
              <div :class="{'itemActive': active}" @click="toggle">{{tabList[n-1]}}
                <div :class="{'displayLine': active, 'noLine': !active}"></div>
              </div>
              
            </v-item>
          </v-item-group>
        
          <v-window v-model="tabIndex">
            <div class="window-padding"></div>
            <v-window-item>
              <div id="href-signup" class="step-label complete-border" v-bind:class="{'inactive-label': active != 1}">
                <div class="label-title" @click="labelClick(1)">咨询老师</div>
                <div class="label-subtitle" v-if="active == 1">我们建议先通过以下方式咨询老师，DIY适合你的课时安排。<br><span style="color: red">常青藤精英教育已签约学生及已咨询过常青藤精英教育留学规划师的同学请直接点击“下一步”。</span></div>
              </div>
              <div v-if="active == 1" class="step-content" v-bind:class="{'complete-border': step > 1, 'uncomplete-border': step <= 1}">
                <div class="inner-wrap step1">
                  <div class="contact">
                    <div class="qrcode">
                      <img :src="qr_code"/>
                    </div>
                    <div class="contact-info">
                      <div>微信号：{{contact_wechat}}</div>
                      <div>手机号：{{contact_phone}}</div>
                      <div>邮箱：{{contact_email}}</div>
                    </div>
                  </div>
                  <button class="step-button next hvr-grow" @click="stepBtnClick(1)">
                    下一步
                    <img src="../../assets/icon/btn arrow.png"/>
                  </button>
                </div>
              </div>

              <!-- 个人信息 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 2, 'uncomplete-border': step < 2, 'inactive-label': active != 2}">
                <div class="label-title" @click="labelClick(2)">个人信息</div>
                <div class="label-subtitle" v-if="active == 2">您当前选择的是<span style="font-weight: 700; font-size: 1.375rem;">{{classes[classIndex].name}}</span>。 请填写您的个人信息。</div>
              </div>
              <div v-if="active == 2" class="step-content" v-bind:class="{'complete-border': step > 2, 'uncomplete-border': step <= 2}">
                <div class="inner-wrap step4">
                  <div class="line1">
                    <div class="label1">
                      <div>姓名<span style="color: red">*</span></div>
                      <input type="text" v-model="userName" @focus="focus($event)" @blur="checkNameAndWechat()">
                    </div>
                    <div class="label2">
                      <div>微信号<span style="color: red">*</span></div>
                      <input type="text" v-model="wechatNm" @focus="focus($event)" @blur="checkNameAndWechat()">
                    </div>
                    <div class="label3">
                      <div>电子邮箱<span style="color: red">*</span><div v-if="emailValid == false" class="email-msg">请输入合法的邮箱</div></div>
                      <input type="text" v-model="email" @focus="focus($event)" @blur="checkEmail()">
                    </div>
                  </div>
                  <div>
                    <button :disabled="!btnEnable2" class="step-button next hvr-grow" @click="stepBtnClick(2)" v-bind:class="{'btn-enable': btnEnable2, 'btn-unenable': !btnEnable2}">
                      下一步
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 在线支付 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 3, 'uncomplete-border': step < 3, 'inactive-label': active != 3}">
                <div class="label-title" @click="labelClick(3)">在线支付</div>
                <div class="label-subtitle" v-if="active == 3">请确认以下信息无误，然后支付。</div>
              </div>
              <div v-if="active == 3" class="step-content" v-bind:class="{'complete-border': step > 3, 'uncomplete-border': step <= 3}">
                <div class="inner-wrap step5">
                  <div class="card">
                    <div class="part1">
                      <div class="title1">个人信息</div>
                      <div class="d-flex line2">
                        <div>姓名：{{userName}}</div>
                        <div>微信号：{{wechatNm}}</div>
                        <div>邮箱：{{email}}</div>
                      </div>
                    </div>
                    <div class="part2">
                      <div class="title2">{{classes[classIndex].name}}</div>
                      <div class="subtitle2 line2">总共课时：48小时</div>
                      <div class="d-flex line3">                        
                        
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="step-button next hvr-grow" @click="stepBtnClick(3)">
                      前往支付
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 报名成功 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 4, 'uncomplete-border': step < 4, 'inactive-label': active != 4}">
                <div class="label-title" @click="labelClick(4)">报名成功</div>
              </div>
              <div v-if="active == 4" class="step-content" v-bind:class="{'complete-border': step > 4, 'uncomplete-border': step <= 4}">
                <div class="inner-wrap step6">
                  <div class="title1">恭喜你！准备上课啦！</div>
                  <div>
                    <button class="step-button next hvr-grow" @click="tomyclass()">
                      我的课堂
                    </button>
                  </div>
                </div>
              </div>
              <div id="href-success"></div>
            </v-window-item>
            <v-window-item>
              <div class="schedule">
                <img src="https://d22ssh14k1yxhv.cloudfront.net/gre de.jpeg" alt="class schedule"/>
              </div>
            </v-window-item>
            <v-window-item>
              评价
            </v-window-item>
            <v-window-item>
              <div class="schedule">
                <img :src="classSchedule[classIndex]" alt="class schedule"/>
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </section>
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
  import paymentApi from '../../api/paymentApi'
  import infoApi from '../../api/infoApi'
  export default {
    data: () => ({
      tabList: [
        '报名详情',
        '课程介绍',
        '评价',
        '课表安排'
      ],
      tabIndex: 0,
      classIndex: 0,
      classes: [],
      step: 1,
      active: 1,

      contact_wechat: 'dftrrgr',
      contact_phone: 'dftrrgr',
      contact_email: 'dftrrgr',
      qr_code: require("../../assets/image 28.png"),

      btnEnable2: false,
      btnEnable3: false,
      btnEnable4: false,

      userName: '',
      wechatNm: '',
      email: '',
      emailValid: null,
      allTypeinValid: false,

      snackbar: false,
      snackbarColor: '',
      notification: '',

      stripe_session_id: null,

      classSchedule: [
        'https://d22ssh14k1yxhv.cloudfront.net/gre schedule1.jpeg',
        'https://d22ssh14k1yxhv.cloudfront.net/gre schedule2.jpeg',
        'https://d22ssh14k1yxhv.cloudfront.net/gre schedule3.jpeg'
      ]
    }),

    methods: {
      focus(event) {
        event.currentTarget.select();
			},
      signupBtnClick: function(){
        document.querySelector("#href-signup").scrollIntoView({behavior: "smooth", block: "center"});
      },
      tomyclass: function(){
        this.$router.push({ path: '/myprofile/class' });
      },
      stepBtnClick: function(curStep) {
        if(curStep == 1){
          if(!this.$store.state.user.uid){
            this.snackbar = true;
            this.notification = '你还没有登录，请先登录账号';
            this.snackbarColor = 'red';
          }else if(this.classes[this.classIndex].available_seat <= 0){
            this.snackbar = true;
            this.notification = '下手晚了，这个课程已经没有空位了，请选择其他课程';
            this.snackbarColor = 'red';
          }else{
            this.step = 2
            this.active = 2
          }          
        }else if(curStep == 2){
          this.step = 3
          this.active = 3
          infoApi.saveToColInfo(this.userName,this.wechatNm,this.email,this.classes[this.classIndex].id,this.$store.state.user.uid,'GRE small class')
        }else if(curStep == 3){
          paymentApi.createCheckoutSession(this.classes[this.classIndex].stripe_api_id,1,this.classes[this.classIndex].id,this.$store.state.user.uid).then( (res) => {
            if (res.data.code === 303) {
              window.location.href = res.data.url
            }else{
              this.snackbar = true;
              this.notification = '发生错误，请重试或联系管理员';
              this.snackbarColor = 'red';
            }
          })
        }
      },
      labelClick: function(curLabel) {
        if(curLabel <= this.step){
          if(curLabel == 1){
            this.active = 1
          }else if(curLabel == 2){
            this.active = 2
          }else if(curLabel == 3){
            this.active = 3
          }else if(curLabel == 4){
            this.active = 4
          }
        }
      },
      checkNameAndWechat: function(){
        if(this.userName != '' && this.wechatNm != '' && this.emailValid){
          this.btnEnable4 = true
        }else{
          this.btnEnable4 = false
        }
      },
      checkEmail: function(){
        if(this.email != ''){
          let isemail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
          if(isemail){
            this.emailValid = true
          }else{
            this.emailValid = false
          }          
        }else{
          this.emailValid = false
        }
        if(this.userName != '' && this.wechatNm != '' && this.emailValid){
          this.btnEnable2 = true
        }else{
          this.btnEnable2 = false
        }
      },
      getClassInfo: function(){
        courseApi.getClassesbyCourseId(3).then( res => {
          if(res.data.code === 200) {
            this.classes = res.data.data
          }else{
            this.snackbar = true;
            this.notification = '读取课堂列表错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },
      loadConfig: function(){
        infoApi.loadConfig().then( res => {
          if(res.data.code === 200) {
            let config = res.data.data
            this.contact_wechat = config[0].contact_wechat
            this.contact_phone = config[0].contact_phone
            this.contact_email = config[0].contact_email
            this.qr_code = `${process.env.VUE_APP_IMAGE_BASEURL}${config[0].qr_code}`
          }else{
            this.snackbar = true;
            this.notification = '读取联系信息错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      }
    },

    mounted: function(){
      this.getClassInfo()
      this.loadConfig()
      if(this.stripe_session_id){
        this.active = 4
        this.step = 5
        document.querySelector("#href-success").scrollIntoView({behavior: "smooth", block: "end"});    
      }        
		},

    created: function(){
      if(this.$route.query.session_id){
        this.stripe_session_id = this.$route.query.session_id
      }
    }
  }
</script>

<style scoped>
  .word22{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 140%;
  }
  .hvr-grow {
    display: inline-block;
    transform: translateZ(0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
      transform: scale(1.1);
  }
  /* #region banner css */
  #banner .cont{
    width: 90rem;
    margin: 0 auto;
  }
  #banner .title-wrap{
    position: relative;
    padding: 9.6875rem 0 0 10.125rem;
  }
  #banner .title-size{
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 155.2%;
    position: absolute;
    top: 6rem;
  }
  #banner .title-wrap .yellow-line{
    width: 22.5rem;
    height: 0.625rem;
    background: #E5C12C;
    border-radius: 39px;
    z-index: 50;
  }
  #banner .banner-bullet{
    padding: 2.845rem 0 0 7.75rem;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
  }
  #banner .banner-bullet .ln1{
    margin-left: 2.3125rem;
    margin-bottom: 1rem;
  }
  #banner .banner-bullet .checkline{
    margin-top: 2rem;
  }
  #banner .banner-bullet .ln2{
    margin-left: 2.3125rem;
    margin-bottom: 0.75rem;
  }
  #banner .banner-bullet .icon{
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1.25rem;
  }
  #banner .banner-bullet .icon img{
    width: 100%;
    height: 100%;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 4.4375rem;
    left: 50%;
    margin-left: -0.875rem;
    width: 36.0625rem;
    height: 37.3125rem;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
  }
  #banner .card .card-banner{
    background: url("https://d22ssh14k1yxhv.cloudfront.net/Desktop-2.jpg") no-repeat center;
    background-size:contain;
    margin: 0.5rem 0.375rem 0;
    height: 15.9375rem;
  }
  #banner .card .card-banner .card-des{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 177.2%;
    color: #1A8750;

    padding: 4.0625rem 2.4375rem 0 12.625rem;
  }
  #banner .card-content{
    margin: 2.0625rem 0 0 3.3125rem;
  }
  #banner .card-content .courseTab{    
    padding: 0.375rem 1.6875rem 0.3125rem;
    background: #E8F5EE;
    border-radius: 0.25rem 0.25rem 0px 0px;
    margin: 0 3.25rem 0 0;
    cursor: pointer;
  }
  #banner .card-content .item-active{
    color: #1A8750;
    border-bottom: 0.1875rem solid #1A8750;
  }
  #banner .card-content .item-inactive{
    background: #ffffff;
  }
  #banner .card-content .course-word{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 155%;
  }
  #banner .card-content .window-wrap{
    margin: 2.375rem 3.3125rem 0 0;
    padding-bottom: 1.3125rem;
    border-bottom: 1px dashed #B3B3B3;    
  }
  #banner .card-content .window-wrap .line1{
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 155.2%;
    
    display: flex;
    align-items: center;
  }
  #banner .card-content .window-wrap .line1 .people-icon{
    max-width: 1.875rem;
    margin-right: 1rem;
  }
  #banner .card-content .window-wrap .line1 .clock-icon{
    max-width: 1.6875rem;
    margin-left: 6.5625rem;
    margin-right: 1.1875rem;
  }
  #banner .card-content .window-wrap .line2{
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 172.7%;
    
    display: flex;
    align-items: center;
  }
  #banner .card-content .window-wrap .line2 .people{
    margin-left: 2.875rem;
  }
  #banner .card-content .window-wrap .line2 .clock{
    margin-left: 8.2rem;
  }
  #banner .card-action{
    padding: 2rem 0 0;
    display: flex;
    align-items: center;
  }
  #banner .card-action .money{
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 155.2%;
  }
  #banner .card-action .signup-button{
    width: 16.4375rem;
    height: 4.4375rem;
    margin-left: 6.375rem;

    background: #1A8750;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
    border-radius: 6.625rem;

    font-weight: 600;
    font-size: 1.375rem;
    line-height: 4.4375rem;
    color: #FFFFFF;
  }
  /* #endregion */ 

  /* #region des css */
  #des .cont{
    width: 90rem;
    margin: 0 auto;
    padding: 7.1875rem 0 0;
  }
  #des .wrap{
    margin: 0 0 0 9.625rem;
  }
  #des .mright{
    margin-right: 7.75rem;
    cursor: pointer;
  }
  #des .wrap .itemActive{
    color: #1A8750;
  }
  #des .wrap .displayLine{
    margin: 0.625rem 0 0;
    background: #1A8750;
    height: 0.3125rem;
  }
  #des .wrap .noLine{
    margin: 0.625rem 0 0;
    height: 0.3125rem;
  }
  #des .wrap .window-padding{
    padding: 4.0625rem 0 0;
  }
  #des .wrap .step-label{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 155.2%;
  }
  #des .wrap .label-title{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 155.2%;
    cursor: pointer;

    padding: 0.25rem 0 0 2.625rem;
  }
  #des .wrap .label-subtitle{
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 155.2%;

    padding: 0 0 2.8125rem 2.625rem;
    margin-top: 1.1875rem;
  }
  #des .wrap .inactive-label{
    color: #E6E6E6;
    padding: 0 0 4rem;
  }
  #des .wrap .complete-border{
    border-left: 0.3125rem solid #1A8750;
  }
  #des .wrap .uncomplete-border{
    border-left: 0.3125rem solid #E6E6E6;
  }

  /* #region step1 css */
  #des .step-content .inner-wrap.step1{
    display: flex;
    align-items: flex-end;
    padding: 0 0 7.6875rem 8.125rem;
  }  
  #des .step-content .step1 .contact{
    width: 41.5rem;
    height: 17rem;

    box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;

    display: flex;
    align-items: center;
  }
  #des .step1 .contact .qrcode{
    width: 14.25rem;
    height: 14.25rem;
    margin-left: 3.375rem;
  }
  #des .step1 .contact .qrcode img{
    width: 100%;
  }
  #des .step1 .contact .contact-info{
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 155.2%;

    margin-left: 5.625rem;
  }
  #des .step1 .contact .contact-info div{
    margin-bottom: 0.9375rem;
  }
  #des .step-button{
    width: 14.125rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align: left;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
    line-height: 4.4375rem;

    font-weight: 600;
    font-size: 1.375rem;
    padding-left: 4.6875rem;
  }
  #des .step1 .next{
    background: #1A8750;
    color: #fff;
    margin-left: 4.25rem;
  }
  #des .step-button img{
    max-width: 0.5rem;
    margin-left: 1.4375rem; 
  }
  #des .btn-enable{
    background: #1A8750;
    color: #fff;
  }
  #des .btn-unenable{
    background: rgba(26, 135, 80, 0.42);
    color: rgba(255, 255, 255, 0.42);
  }
  /* #endregion */

    /* #region step4 css */
  #des .step-content .inner-wrap.step4{
    padding: 0 0 7.6875rem 8.125rem;
  }
  #des .step4 .line1{
    display: flex;

    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  #des .step4 .line1 .label1{
    margin-right: 6.8125rem;
  }
  #des .step4 .line1 .label2{
    margin-right: 6.8125rem;
  }
  #des .step4 .line1 input{
    width: 12.25rem;
    height: 3.5625rem;
    margin-top: 0.5rem;
    padding: 0 1rem;

    border: 1px solid #959595;
    box-sizing: border-box;
    border-radius: 0.5rem;
  }
  #des .step4 .label3 input{
    width: 18.8125rem;
    height: 3.5625rem;
  }
  #des .step4 .next{
    margin: 3.875rem 0 0 24.4375rem;
  }
  #des .step4 .email-msg{
    font-size: 0.8rem;
    color: red;
    float: right;
  }
  /* #endregion */

  /* #region step5 css */
  #des .step-content .inner-wrap.step5{
    padding: 0 0 7.6875rem 8.125rem;
  }
  #des .step5 .card{
    width: 58.125rem;
    height: 17.9375rem;

    background: #FFFFFF;
    box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;

    font-weight: normal;
    font-size: 1.125rem;
    line-height: 155.2%;
  }
  #des .step5 .card .part1{
    padding: 1.5rem 3.375rem 0;
    border-bottom: 1px solid #D7D7D7;
  }
  #des .step5 .card .part1 .line2{
    margin: 1rem 0;
  }
  #des .step5 .card .part1 .line2 div{
    flex: 1 0 33%;
  }
  #des .step5 .card .part2{
    padding: 1.875rem 3.375rem 0;
  }
  #des .step5 .card .part2 .line3 div{
    flex: 1 0 33%;
  }
  #des .step5 .card .part2 .line2, .line3{
    margin-top: 1rem;
  }
  #des .step5 .card .title1, .title2{
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 155.2%;
  }
  #des .step5 .next{
    background: #1A8750;
    color: #fff;
    margin: 3.875rem 0 0 24.4375rem;
  }
  /* #endregion */

  /* #region step6 css */
  #des .step-content .inner-wrap.step6{
    padding: 0 0 7.6875rem 8.125rem;
    height: 100vh;
    background: url("https://d22ssh14k1yxhv.cloudfront.net/firework.gif") center no-repeat;    
  }
  #des .step6 .title1{
    font-weight: 500;
    font-size: 2rem;
    line-height: 155.2%;
    color: #1A8750;

    padding-top: 20rem;
    padding-left: 22.4375rem;
  }
  #des .step6 .next{
    background: #1A8750;
    color: #fff;
    margin: 3.875rem 0 0 24.4375rem;
  }
  /* #endregion */
  #des .wrap .schedule img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* #endregion */  

@media screen and (max-width: 600px) {
    /* #region banner css */
  #banner .cont{
    width: 37.5rem;
    margin: 0 auto;
  }
  #banner .title-wrap{
    position: relative;
    padding: 4.6875rem 0 0 4.125rem;
  }
  #banner .title-size{
    top: 1.1rem;
  }
  #banner .banner-bullet{
    padding: 3.21214rem 0 0 2.125rem;
  }
  #banner .card{
    top: 27.4375rem;
    left: 0;
    margin-left: 0.875rem;
    width: 36.0625rem;
    height: 37.3125rem;
  }
  /* #endregion */ 

  /* #region des css */
  #des .cont{
    width: 37.5rem;
    margin: 0 auto;
    padding: 31.1875rem 0 0;
  }
  #des .wrap{
    margin: 0 0 0 1.625rem;
  }
  #des .mright{
    margin-right: 3.75rem;
  }

  /* #region step1 css */
  #des .step-content .inner-wrap.step1{
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0 0 4.6875rem 3.125rem;
  }  
  #des .step-content .step1 .contact{
    width: 30.5rem;
    height: 17rem;
  }
  #des .step1 .contact .qrcode{
    width: 10.25rem;
    height: 10.25rem;
    margin-left: 1.375rem;
  }
  #des .step1 .contact .contact-info{
    margin-left: 1.625rem;
  }
  #des .step-button{
    margin-top: 2rem;
  }
  /* #endregion */

  /* #region step4 css */
  #des .step-content .inner-wrap.step4{
    padding: 0 0 4.6875rem 3.125rem;
  }
  #des .step4 .line1{
    display: flex;
    flex-wrap: wrap;
  }
  #des .step4 .line1 input{
    width: 23.8125rem;
    height: 3.5625rem;
  }
  #des .step4 .label3 input{
    width: 23.8125rem;
    height: 3.5625rem;
  }
  #des .step4 .next{
    margin: 3.875rem 0 0 3.125rem;
  }
  /* #endregion */

  /* #region step5 css */
  #des .step-content .inner-wrap.step5{
    padding: 0 0 4.6875rem 3.125rem;
  }
  #des .step5 .card{
    width: 30.5rem;
    height: 17.9375rem;
  }
  #des .step5 .card .part1{
    padding: 1.5rem 1.375rem 0;
  }
  #des .step5 .card .part1 .line2{
    margin: 1rem 0;
    flex-wrap: wrap;
  }
  #des .step5 .card .part1 .line2 div{
    flex: 1 0 100%;
  }
  #des .step5 .card .part2{
    padding: 1.875rem 1.375rem 0;
  }
  #des .step5 .next{
    margin: 3.875rem 0 0 3.125rem;
  }
  /* #endregion */

  /* #region step6 css */
  #des .step-content .inner-wrap.step6{
    padding: 0 0 4.6875rem 3.125rem;
    height: 40rem;
    background: url("https://d22ssh14k1yxhv.cloudfront.net/firework.gif") center no-repeat;    
  }
  #des .step6 .title1{
    font-weight: 500;
    font-size: 2rem;
    line-height: 155.2%;
    color: #1A8750;

    padding-top: 20rem;
    padding-left: 2.4375rem;
  }
  #des .step6 .next{
    background: #1A8750;
    color: #fff;
    margin: 3.875rem 0 0 3.125rem;
  }
  /* #endregion */
  #des .wrap .schedule img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* #endregion */
}
</style>
