<template>
  <div>
    <section id="banner">
      <v-sheet
        color="#E8F5EE"
        height="36.75rem"
        tile
        class="swiper"
      >
        <div class="cont">
          <div class="title-wrap">
            <div class="title-size">GRE 1v1 私教班</div>
            <div class="yellow-line"></div>
          </div>
          <div class="banner-bullet">
            常青藤精英教育GRE私教团队面向北美学生群体长达<br>10年以上的教学辅导经验，让他们更加清楚该群体的<br>
            学习特性和现状，进而可针对零基础至各个复习阶段<br>的学员量身定制专属的1对1私教课程计划。
          </div>
          
        </div>
        <div class="card">
          <div class="card-banner">
            <div class="card-des1">
              私人定制
            </div>
            <div class="card-des2">
              出分神器
            </div>
          </div>
          <div class="card-content d-flex">
            <div class="ul-left">
              <ul>
                <li>专注北美，顶级师资</li>
                <li>1V1伴学，全程监督</li>
              </ul>
            </div>
            <div class="ul-right">
              <ul>
                <li>课程定制，课时灵活</li>
                <li>真题模拟，独家讲座</li>
              </ul>
            </div>
          </div>
          <div class="money">
            $159/hr
          </div>
          <div class="card-action word22">
            <button class="action-button signup hvr-grow" @click="signupBtnClick()">
              立即报名
            </button>
            <button class="action-button ask hvr-grow" @click="inquireBtnClick()">
              咨询详情
            </button>
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

              <!-- 选择课时 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 2, 'uncomplete-border': step < 2, 'inactive-label': active != 2}">
                <div class="label-title" @click="labelClick(2)">选择课时</div>
                <div class="label-subtitle" v-if="active == 2">请选择课时，您也可以自定义课时时间。</div>
              </div>
              <div v-if="active == 2" class="step-content" v-bind:class="{'complete-border': step > 2, 'uncomplete-border': step <= 2}">
                <div class="inner-wrap step2">
                  <div class="class-value">
                    <div class="time-option hvr-grow" v-bind:class="{'active': option1_active}" @click="optionSelect(1)">15小时</div>
                    <div class="time-option hvr-grow" v-bind:class="{'active': option2_active}" @click="optionSelect(2)">25小时</div>
                    <div class="time-option hvr-grow" v-bind:class="{'active': option3_active}" @click="optionSelect(3)">35小时</div>
                    <input v-model="option4_value" @focus="focus($event)" class="time-option hvr-grow" v-bind:class="{'active': option4_active}" @click="option4active()" @blur="optionSelect(4)">
                  </div>
                  <div>
                    <button :disabled="!btnEnable2" class="step-button next hvr-grow" @click="stepBtnClick(2)" v-bind:class="{'btn-enable': btnEnable2, 'btn-unenable': !btnEnable2}">
                      下一步
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 分配课时 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 3, 'uncomplete-border': step < 3, 'inactive-label': active != 3}">
                <div class="label-title" @click="labelClick(3)">分配课时</div>
                <div class="label-subtitle" v-if="active == 3">请根据咨询老师给予的建议分配课时。</div>
              </div>
              <div v-if="active == 3" class="step-content" v-bind:class="{'complete-border': step > 3, 'uncomplete-border': step <= 3}">
                <div class="inner-wrap step3">
                  <div class="assign-value">
                    <div class="left">
                      <div class="label1">填空</div>
                      <v-select
                        :items="assign_items1"
                        v-model="type_value"
                        @change="updateUnassigned()"
                        label="0"
                        solo
                        dense
                        class="select_value value1"
                      ></v-select>
                      <div class="label2">阅读</div>
                      <v-select
                        :items="assign_items2"
                        v-model="read_value"
                        @change="updateUnassigned()"
                        label="0"
                        solo
                        dense
                        class="select_value value2"
                      ></v-select>
                      <div class="label3">数学</div>
                      <v-select
                        :items="assign_items3"
                        v-model="math_value"
                        @change="updateUnassigned()"
                        label="0"
                        solo
                        dense
                        class="select_value value3"
                      ></v-select>
                    </div>
                    <div class="right">
                      <div class="line1">总共课时：{{selectValue}} 小时</div>
                      <div class="line2">未选课时：{{unassignedValue}} 小时</div>
                    </div>
                  </div>
                  <div>
                    <button :disabled="!btnEnable3" class="step-button next hvr-grow" @click="stepBtnClick(3)" v-bind:class="{'btn-enable': btnEnable3, 'btn-unenable': !btnEnable3}">
                      下一步
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 个人信息 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 4, 'uncomplete-border': step < 4, 'inactive-label': active != 4}">
                <div class="label-title" @click="labelClick(4)">个人信息</div>
                <div class="label-subtitle" v-if="active == 4">请填写您的个人信息。</div>
              </div>
              <div v-if="active == 4" class="step-content" v-bind:class="{'complete-border': step > 4, 'uncomplete-border': step <= 4}">
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
                    <button :disabled="!btnEnable4" class="step-button next hvr-grow" @click="stepBtnClick(4)" v-bind:class="{'btn-enable': btnEnable4, 'btn-unenable': !btnEnable4}">
                      下一步
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 在线支付 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 5, 'uncomplete-border': step < 5, 'inactive-label': active != 5}">
                <div class="label-title" @click="labelClick(5)">在线支付</div>
                <div class="label-subtitle" v-if="active == 5">请确认以下信息无误，然后支付。</div>
              </div>
              <div v-if="active == 5" class="step-content" v-bind:class="{'complete-border': step > 5, 'uncomplete-border': step <= 5}">
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
                      <div class="title2">课时分配</div>
                      <div class="subtitle2 line2">总共课时：{{selectValue}}小时</div>
                      <div class="d-flex line3">                        
                        <div>填空：{{type_value}}小时</div>
                        <div>阅读：{{read_value}}小时</div>
                        <div>数学：{{math_value}}小时</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button class="step-button next hvr-grow" @click="stepBtnClick(5)">
                      前往支付
                      <img src="../../assets/icon/btn arrow.png"/>
                    </button>
                  </div>
                </div>
              </div>

              <!-- 报名成功 -->
              <div class="step-label" v-bind:class="{'complete-border': step >= 6, 'uncomplete-border': step < 6, 'inactive-label': active != 6}">
                <div class="label-title" @click="labelClick(6)">报名成功</div>
              </div>
              <div v-if="active == 6" class="step-content" v-bind:class="{'complete-border': step > 6, 'uncomplete-border': step <= 6}">
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
              课程介绍
            </v-window-item>
            <v-window-item>
              评价
            </v-window-item>
          </v-window>
        </div>
      </div>
    </section>
    <v-dialog
      v-model="inquireDialog"
      width="41.5rem"
    >
      <v-card>
      <div class="inner-wrap dialog">
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
      </div>
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
  import paymentApi from '../../api/paymentApi'
  import infoApi from '../../api/infoApi'
  export default {
    data: () => ({
      tabList: [
        '报名详情',
        '课程介绍',
        '评价',
      ],
      tabIndex: 0,
      theClass: null,
      step: 1,
      active: 1,

      contact_wechat: 'dftrrgr',
      contact_phone: 'dftrrgr',
      contact_email: 'dftrrgr',
      qr_code: require("../../assets/image 28.png"),

      btnEnable2: false,
      btnEnable3: false,
      btnEnable4: false,

      option1_active: false,
      option2_active: false,
      option3_active: false,
      option4_active: false,
      option4_value: '自定义',
      selectValue: null,
      unassignedValue: null,

      assign_items1: [],
      assign_items2: [],
      assign_items3: [],
      type_value: 0,
      read_value: 0,
      math_value: 0,

      userName: '',
      wechatNm: '',
      email: '',
      emailValid: null,
      allTypeinValid: false,

      inquireDialog: false,

      snackbar: false,
      snackbarColor: '',
      notification: '',

      stripe_session_id: null
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
      inquireBtnClick: function(){
        this.inquireDialog = true
      },
      stepBtnClick: function(curStep) {
        if(curStep == 1){
          if(!this.$store.state.user.uid){
            this.snackbar = true;
            this.notification = '你还没有登录，请先登录账号';
            this.snackbarColor = 'red';
          }else{
            this.step = 2
            this.active = 2
          } 
        }else if(curStep == 2){
          this.step = 3
          this.active = 3
          this.calcAssignValue()
        }else if(curStep == 3){
          this.step = 4
          this.active = 4
        }else if(curStep == 4){
          this.step = 5
          this.active = 5
          infoApi.saveToColInfo(this.userName,this.wechatNm,this.email,this.theClass.id,this.$store.state.user.uid,'GRE 1v1 class')
        }else if(curStep == 5){
          paymentApi.createCheckoutSession(this.theClass.stripe_api_id,this.selectValue,this.theClass.id,this.$store.state.user.uid).then( (res) => {
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
            this.calcAssignValue()
          }else if(curLabel == 4){
            this.active = 4
          }else if(curLabel == 5){
            this.active = 5
          }else if(curLabel == 6){
            this.active = 6
          }
        }
      },
      option4active: function(){
        this.option1_active = false
        this.option2_active = false
        this.option3_active = false
        this.option4_active = true
      },
      optionSelect: function(option){
        if(option == 1){
          this.option1_active = true
          this.option2_active = false
          this.option3_active = false
          this.option4_active = false
          this.option4_value = '自定义'
          this.selectValue = 15
        }else if(option == 2){
          this.option1_active = false
          this.option2_active = true
          this.option3_active = false
          this.option4_active = false
          this.option4_value = '自定义'
          this.selectValue = 25
        }else if(option == 3){
          this.option1_active = false
          this.option2_active = false
          this.option3_active = true
          this.option4_active = false
          this.option4_value = '自定义'
          this.selectValue = 35
        }else if(option == 4){          
          this.selectValue = parseInt(this.option4_value)
          this.option4_value = this.option4_value + '小时'          
        }
        this.unassignedValue = this.selectValue
      },
      calcAssignValue: function(){
        for(let i=1; i<=this.selectValue;i++){
          this.assign_items1.push(i)
        }
        this.assign_items2 = this.assign_items1
        this.assign_items3 = this.assign_items1
      },
      updateUnassigned: function(){
        this.unassignedValue = this.selectValue - this.type_value - this.read_value - this.math_value
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
          this.btnEnable4 = true
        }else{
          this.btnEnable4 = false
        }
      },
      getInfo: function(){
        courseApi.findOneClassById(1).then(res => {
          if (res.data.code === 200) {
						this.theClass = res.data.data[0];
          }else{
            this.snackbar = true;
            this.notification = '读取课程错误，请重试或联系管理员';
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

    created: function(){
      if(this.$route.query.session_id){
        this.stripe_session_id = this.$route.query.session_id
        
      }
    },
    mounted: function(){
      this.getInfo()
      this.loadConfig()
      if(this.stripe_session_id){
        this.active = 6
        this.step = 6
        document.querySelector("#href-success").scrollIntoView({behavior: "smooth", block: "center"})
      }
        
    },

    watch: {
      selectValue (val) {
        if(val != null && val != 0){
          this.btnEnable2 = true
        }else{
          this.btnEnable2 = false
        }
      },
      unassignedValue (val) {
        if(val != null && val == 0){
          this.btnEnable3 = true
        }else{
          this.btnEnable3 = false
        }
      },
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
    padding: 4.3125rem 0 0 10.25rem;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
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
    background: url("https://d22ssh14k1yxhv.cloudfront.net/Desktop-1.jpg") no-repeat center;
    background-size: cover;
    margin: 0.5rem 0.375rem 0;
    height: 15.9375rem;
  }
  #banner .card .card-banner .card-des1{
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 3.125rem;

    color: #1A8750;
    padding: 3.875rem 0 0 4.375rem;
  }
  #banner .card .card-banner .card-des2{
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 3.125rem;

    color: #1A8750;
    padding: 0.5rem 0 0 13rem;
  }
  #banner .card .card-content{
    margin: 2rem 3.4375rem 0;
    padding-bottom: 2rem;
    border-bottom: 1px dashed #B3B3B3;
  }
  #banner .card .card-content .ul-left{
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
    margin-right: 4.125rem;
  }
  #banner .card .card-content .ul-right{
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
  }
  #banner .card .card-content li::marker{
    color: #E5C12C;
    font-size: 1.5rem;
  }
  #banner .card .money{
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 155.2%;
    margin: 0 0 0 3.3125rem;
  }
  #banner .card .card-action .action-button{
    width: 14.125rem;
    height: 4.4375rem;
    border-radius: 6.625rem;
    text-align:center;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
    line-height: 4.4375rem;
  }
  
  #banner .card .card-action .ask{
    border: 1px solid #1A8750;
    color: #1A8750;

  }
  #banner .card .card-action .signup{
    background: #1A8750;
    color: #fff;
    margin: 0.8125rem 1.55rem 0 3.3125rem;
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
  
  /* #region step2 css */
  #des .step-content .inner-wrap.step2{
    padding: 0 0 7.6875rem 8.125rem;
  }
  #des .step2 .class-value{
    display: flex;
  }
  #des .step2 .time-option{
    width: 12.4375rem;
    height: 3.875rem;
    margin-right: 5.375rem;
    cursor: pointer;

    border: 1px solid #1A8750;
    color: #1A8750;
    box-sizing: border-box;
    filter: drop-shadow(0px 0.1875rem 0.25rem rgba(0, 0, 0, 0.13));
    border-radius: 8.0625rem;
    text-align:center;    

    font-weight: 500;
    font-size: 1.25rem;
    line-height: 3.875rem;
  }
  #des .step2 .active{
    background: #1A8750;
    color: #fff;
  }
  #des .step2 .next{
    margin: 3.875rem 0 0 24.4375rem;
  }
  /* #endregion */

  /* #region step3 css */
  #des .step-content .inner-wrap.step3{
    padding: 0 0 7.6875rem 8.125rem;
  }
  #des .step3 .assign-value{
    width: 65.875rem;
    height: 8.6875rem;
    box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;
    
    display: inline-flex;
    align-items: center;
  }
  #des .step3 .assign-value .left{
    display: flex;
    align-items: center;    
  }
  #des .step3 .left .select_value{
    width: 5.8125rem;
    height: 2.875rem;
  }
  #des .step3 .left .label1{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.9375rem;
    color: #1A8750;
    margin: 0 0.625rem 0 2.5625rem;
  }
  #des .step3 .left .label2{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.9375rem;
    color: #1A8750;
    margin: 0 1.125rem 0 6.875rem;
  }
  #des .step3 .left .label3{
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 1.9375rem;
    color: #1A8750;
    margin: 0 1.125rem 0 6.875rem;
  }
  #des .step3 .left .value3{
    margin-right: 6.25rem;
  }
  #des .step3 .assign-value .right{
    width: 14.75rem;
    height: 8.6875rem;
    box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;

    font-weight: 500;
    font-size: 1.125rem;
    line-height: 155.2%;
  }
  #des .step3 .right .line1{
    margin: 2.125rem 0 0 2.5625rem;
  }
  #des .step3 .right .line2{
    color: #EF0000;
    margin: 0.875rem 0 0 2.5625rem;
  }
  #des .step3 .next{
    margin: 3.875rem 0 0 24.4375rem;
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

  .dialog{
    display: flex;
    align-items: flex-end;
  }  
  .dialog .contact{
    width: 41.5rem;
    height: 17rem;

    box-shadow: 0px 0.125rem 0.4375rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;

    display: flex;
    align-items: center;
  }
  .dialog .contact .qrcode{
    width: 14.25rem;
    height: 14.25rem;
    margin-left: 3.375rem;
  }
  .dialog .contact .qrcode img{
    width: 100%;
  }
  .dialog .contact .contact-info{
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 155.2%;

    margin-left: 5.625rem;
  }
  .dialog .contact .contact-info div{
    margin-bottom: 0.9375rem;
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
    padding: 6.6875rem 0 0 4.125rem;
  }
  #banner .title-size{
    top: 3.1rem;
  }
  #banner .banner-bullet{
    padding: 3.3125rem 0 0 4.25rem;
  }
  #banner .card{
    top: 24.4375rem;
    left: 0;
    margin-left: 0.875rem;
    width: 36.0625rem;
    height: 37.3125rem;
  }
  #banner .card .card-content .ul-left{
    margin-right: 2.125rem;
  }
  /* #endregion */ 

    /* #region des css */
  #des .cont{
    width: 37.5rem;
    margin: 0 auto;
    padding: 27.1875rem 0 0;
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
  
  /* #region step2 css */
  #des .step-content .inner-wrap.step2{
    padding: 0 0 4.6875rem 3.125rem;
  }
  #des .step2 .class-value{
    display: flex;
    flex-wrap: wrap;
  }
  #des .step2 .time-option{
    margin-right: 1.375rem;
    margin-top: 1rem;
  }
  #des .step2 .next{
    margin: 3.875rem 0 0 3.125rem;
  }
  /* #endregion */

  /* #region step3 css */
  #des .step-content .inner-wrap.step3{
    padding: 0 0 4.6875rem 3.125rem;
  }
  #des .step3 .assign-value{
    width: 30.5rem;
    height: 28.6875rem;
    
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }
  #des .step3 .assign-value .left{
    display: flex;
    flex-wrap: wrap;
    align-items: center;    
  }
  #des .step3 .left .select_value{
    width: 6.2125rem;
    height: 2.875rem;
  }
  #des .step3 .left .label1{
    margin: 0 3.625rem 0 1.5625rem;
  }
  #des .step3 .left .value1{
    flex: 1 0 50%;
    margin-right: 2rem;
  }
  #des .step3 .left .label2{
    margin: 1rem 3.625rem 0 1.5625rem;
  }
  #des .step3 .left .value2{
    flex: 1 0 50%;
    margin: 1rem 2rem 0 0;
  }
  #des .step3 .left .label3{
    margin: 1rem 3.625rem 0 1.5625rem;
  }
  #des .step3 .left .value3{
    flex: 1 0 50%;
    margin: 1rem 2rem 0 0;
  }
  #des .step3 .assign-value .right{
    width: 27rem;
    margin-left: 1.5rem;
  }
  #des .step3 .next{
    margin: 3.875rem 0 0 3.125rem;
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
  #des .step4 .line1 .label1{
    margin-right: 6.8125rem;
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
    height: 20.9375rem;
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
  #des .step5 .card .part2 .line2, .line3{
    margin-top: 0rem;
  }
  #des .step5 .next{
    background: #1A8750;
    color: #fff;
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
    padding-left: 22.4375rem;
  }
  #des .step6 .next{
    background: #1A8750;
    color: #fff;
    margin: 3.875rem 0 0 3.125rem;
  }
  /* #endregion */

  .dialog{
    display: flex;
    align-items: flex-end;
  }  
  .dialog .contact{
    width: 41.5rem;
    height: 17rem;
  }
  .dialog .contact .qrcode{
    width: 10.25rem;
    height: 10.25rem;
    margin-left: 1.375rem;
  }
  .dialog .contact .contact-info{
    margin-left: 1.625rem;
  }
  /* #endregion */

}
</style>
