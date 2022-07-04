<template>
  <div class="body">
    <div class="content">
      <div class="flex-row gre-header">
        <div>logo</div>
        <div class="operation flex-row">
          <div class="op-btn">Exit Section</div>
          <div class="op-btn">Quit Test</div>
          <div class="op-btn">Mark</div>
          <div class="op-btn">Review</div>
          <div class="op-btn">Help</div>
          <div class="op-btn" @click="nextQuestion()">Continue</div>
        </div>
      </div>
      <div class="section-header">

      </div>

      <div v-if="question">
        <div v-if="question.type == '11in5'" class="question">
          <span class="infobar">
            Select one entry for the blank. Fill the blank in the way that best completes the text.
          </span>
          <div class="des">
            {{question.question}}
          </div>
          
          <p>A&nbsp;&nbsp; {{question.o1}}</p>
          <p>B&nbsp;&nbsp; {{question.o2}}</p>
          <p>C&nbsp;&nbsp; {{question.o3}}</p>
          <p>D&nbsp;&nbsp; {{question.o4}}</p>
          <p>E&nbsp;&nbsp; {{question.o5}}</p>
          <exam-option :count="3" :options="['a','b','wrrrrrrrr']"/>
          <v-radio-group dense v-model="radioGroup" class="answer-option">
            <v-radio
              label="A"
              value="A"
              color="black"
            ></v-radio>
            <v-radio
              label="B"
              value="B"
              color="black"
            ></v-radio>
            <v-radio
              label="C"
              value="C"
              color="black"
            ></v-radio>
            <v-radio
              label="D"
              value="D"
              color="black"
            ></v-radio>
            <v-radio
              label="E"
              value="E"
              color="black"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
      <div v-else class="info-page">
        <div v-html="pageHtml">
          
        </div>  
      </div>
    </div>
		
  </div>  
</template>

<script>
  import examApi from '../../api/examApi'
  import ExamOption from '../../components/ExamOption.vue'
  export default {
    data: () => ({
      examSet: null,
      questionSet: [],
      sectionSet: null,
      currentQuestion: 0,
      currentSection: 1,
      radioGroup: '',
      question: null,
      pageHtml: '',
		}),
    components: {
      ExamOption
    },

		methods: {
      nextQuestion: function(){
        this.sectionSet = this.examSet[this.currentSection]
        if(this.sectionSet.type == 'question'){
          this.questionSet = this.sectionSet.ids
          if(this.currentQuestion >= this.questionSet.length){
            this.currentSection = this.currentSection + 1
            this.currentQuestion = 0
            this.sectionSet = this.examSet[this.currentSection]
            if(this.sectionSet.type == 'question'){
              this.questionId = this.questionSet[this.currentQuestion]
              examApi.loadQuestionById(this.questionId).then(res => {
                if (res.data.code === 200) {
                  this.question = res.data.data[0]
                  this.currentQuestion = this.currentQuestion + 1
                }else{
                  this.snackbar = true;
                  this.notification = '读取课程错误，请重试或联系管理员';
                  this.snackbarColor = 'red';
                }
              })
            }else{
              this.question = null
              this.questionId = this.questionSet[this.currentQuestion]
              examApi.loadInfoPageById(this.questionId).then(res => {
                if (res.data.code === 200) {
                  this.pageHtml = res.data.data[0].content
                  this.currentQuestion = this.currentQuestion + 1
                }else{
                  this.snackbar = true;
                  this.notification = '读取课程错误，请重试或联系管理员';
                  this.snackbarColor = 'red';
                }
              })
            }
          }else{
            this.questionId = this.questionSet[this.currentQuestion]
            examApi.loadQuestionById(this.questionId).then(res => {
              if (res.data.code === 200) {
                this.question = res.data.data[0]
                this.currentQuestion = this.currentQuestion + 1
              }else{
                this.snackbar = true;
                this.notification = '读取课程错误，请重试或联系管理员';
                this.snackbarColor = 'red';
              }
            })
          }
        }else{
          this.question = null
          this.questionSet = this.sectionSet.ids
          if(this.currentQuestion >= this.questionSet.length){
            this.currentSection = this.currentSection + 1
            this.currentQuestion = 0
            this.sectionSet = this.examSet[this.currentSection]
            if(this.sectionSet.type == 'question'){
              this.questionId = this.questionSet[this.currentQuestion]
              examApi.loadQuestionById(this.questionId).then(res => {
                if (res.data.code === 200) {
                  this.question = res.data.data[0]
                  this.currentQuestion = this.currentQuestion + 1
                }else{
                  this.snackbar = true;
                  this.notification = '读取课程错误，请重试或联系管理员';
                  this.snackbarColor = 'red';
                }
              })
            }else{
              this.question = null
              this.questionId = this.questionSet[this.currentQuestion]
              examApi.loadInfoPageById(this.questionId).then(res => {
                if (res.data.code === 200) {
                  this.pageHtml = res.data.data[0].content
                  this.currentQuestion = this.currentQuestion + 1
                }else{
                  this.snackbar = true;
                  this.notification = '读取课程错误，请重试或联系管理员';
                  this.snackbarColor = 'red';
                }
              })
            }
          }else{
            this.questionId = this.questionSet[this.currentQuestion]
            examApi.loadInfoPageById(this.questionId).then(res => {
              if (res.data.code === 200) {
                this.pageHtml = res.data.data[0].content
                this.currentQuestion = this.currentQuestion + 1
              }else{
                this.snackbar = true;
                this.notification = '读取课程错误，请重试或联系管理员';
                this.snackbarColor = 'red';
              }
            })
          }
        }
      }
    },
    mounted() {
      this.examSet = this.$route.query.examSet
      this.nextQuestion()
    }
  }
</script>
<style scoped>
.body{
  min-height: 100vh;
  background-image: url(../../assets/sky-background.jpeg);
  background-size: 100% 100%;
  padding: 6rem 0 3rem;
}
.content{
  background: #fff;
  width: 64rem;
  margin: 0 auto;
  
}
.flex-row{
  display: flex;
}
.gre-header{
  background: #3A3837;
  height: 4rem;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
}
.operation{
  color: #ffffff;
}
.op-btn{
  border: 2px solid #ffffff;
  margin-left: 0.25rem;
}
.section-header{
  background: #F0E1E4;
  height: 2.5rem;
}
.question{
  padding: 1rem 2rem;
}
.question .infobar{
  background: #D3D3D3;
  padding: 4px 20px;
  font-size: 1.25rem;
}
.question .des{
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.question p{
  font-size: 1rem;
}
.question p::before{
  content: '';
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #000;
  margin-right: 0.5rem;
}
.question .answer-option{
  margin-top: 8rem;
  margin-left: 15rem;
}
.info-page{
  padding: 1rem 4rem;
}
</style>
