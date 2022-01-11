<template>
  <v-row justify="center" >
    <v-col cols="12" class="backimg">
      <v-container style="max-width: 1280px;">
      <v-row justify="center">
        <v-col
          cols="5"
          class="nobp-col"
        >
          <v-img
            src="../../assets/tutor-03.png"
          ></v-img>
        </v-col>

        <v-col
          cols="5"
          offset="2"
          class="nobp-col"
        >
          <div
            class="slide-title">赵建国</div>
          <div class="slide-des">毕业于马来西亚斯大学，授课8年有余，
            超过七千小时，善于写作教学，思考缜密
            ，授课细腻，研究型教师。通过在国外学
            习与工作，更加认识到英语的重要性，决
            心以“教书育人”为目标，帮助学生突破
            英语难关。
          </div>
        </v-col>
      </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" class="notp-col gradient-color">
        <v-row justify="center">
          <v-slide-group
            v-model="onboarding"
            class="d-flex align-self-center"
            mandatory
            show-arrows="always"
            center-active
            @click:next="next"
            @click:prev="prev"
            style="max-width: 1280px;"
          >
            <template v-slot:prev="{ on, attrs }">
              <v-icon
                color="success"
                v-bind="attrs"
                v-on="on"
              >mdi-plus</v-icon>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-icon
                color="success"
                v-bind="attrs"
                v-on="on"
              >mdi-plus</v-icon>
            </template>
            <v-slide-item
              v-for="n in length"
              :key="`btn-${n}`"
              class="ma-11"
            >

              <v-img  
                src="../../assets/tutor-04.png"
              ></v-img>

            </v-slide-item>
          </v-slide-group>
        </v-row>

    </v-col>
  </v-row>

</template>

<script>
  export default {
    name: 'SlideGroup',
    data: () => ({
			length: 5,
      onboarding: 2,
		}),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
		},

		mounted: function(){
			let timer = setInterval(() => {
				this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
			},8000)
		}
	}
</script>

<style scoped>
  .backimg{
    background-image: url('../../assets/tutor-back.png');
    background-repeat: no-repeat;
    background-size:100% 100%;
    justify-content: center!important;
    padding: 15px 15px 0 15px;
  }
  .gradient-color{
    background-color: #29AB4A; /* 不支持线性的时候显示 */
    background-image: linear-gradient(to right, #29AB4A , #7EBD44);
  }
  .slide-title{
    font-size: 48px;
    line-height: 1.5;
    font-weight: 700;
    color: #29AB4A;
    margin-top: 150px;
  }

  .slide-des {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    margin-top: 20px;
  }
  
  .nobp-col{
    padding: 15px 15px 0 15px;
  }


</style>