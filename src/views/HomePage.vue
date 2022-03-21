<template>
  <div id="body">
    <section id="banner">
      <v-window
        v-model="swiperOn"
        reverse
      >
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper"
            color="#E8F5EE"
          >
            <div class="pic1">
              <div class="swiper-inner">
                <div class="banner-title1">
                  双G保分班，助你申请扶摇直上！
                </div>
                <div class="banner-title2">
                  双G保分班，助你申请扶摇直上！
                </div>
                <button class="action-button btn hvr-grow" @click="scrolltocourse()">
                  立即上课
                </button>
              </div>
            </div>
          </v-sheet>
        </v-window-item>
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper back2"
            color="#F5F0FF"
          >
            <div class="pic2">
              <div class="swiper-inner">
                <div class="banner-title1 title-size2">
                  最懂北美留学生的GRE教辅团队
                </div>
                <div class="banner-title2 title-size2">
                  为你的名校申请保驾护航
                </div>
                <div class="banner-title3 title-size2">
                  最懂北美留学生的GRE教辅团队
                </div>
                <div class="banner-title4 title-size2">
                  为你的名校申请保驾护航
                </div>
                <button class="action-button btn hvr-grow" @click="scrolltocourse()">
                  立即上课
                </button>
              </div>
            </div>
          </v-sheet>
        </v-window-item>
        <v-window-item>
          <v-sheet
            height="36.75rem"
            tile
            class="swiper back3"
          >
            <div class="pic3">
              <!--div class="swiper-inner">
                <div class="banner-title1 title-size3">
                  学员100%提分，
                </div>
                <div class="banner-title2 title-size3">
                  平均涨幅高达18分！
                </div>
                <div class="banner-title3 title-size3">
                  100%
                </div>
                <div class="banner-title4 title-size3">
                  18
                </div>
                <button class="action-button btn hvr-grow" @click="scrolltocourse()">
                  立即上课
                </button>
              </div -->
            </div>
          </v-sheet>
        </v-window-item>
      </v-window>
      <v-item-group
        v-model="swiperOn"
        class="d-flex swiper-btn-group justify-center"
        mandatory
      >
        <v-item
          v-for="n in 3"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <div :class="{'btn-active': active, 'btn-inactive': !active}" @click="toggle"></div>
        </v-item>
      </v-item-group>
      <div class="paddingdiv-15"/>
      <div class="card">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="98"
                :options="option1"
              />
            </div>
            <div class="word20 word-margin">申请成功率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="87"
                :options="option1"
              />
            </div>
            <div class="word20 word-margin">TOP 30 名校录取率</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="1800"
                :options="option2"
              />
            </div>
            <div class="word20 word-margin">VIP推荐录取学员</div>
          </v-col>
          <v-col align="center" justify="center">
            <div class="iCountUp">
              <ICountUp
                :delay="delay"
                :endVal="400"
                :options="option3"
              />
            </div>
            <div class="word20 word-margin">累计录取奖学金</div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section id="feature">
      <div class="cont">
        <div class="title-wrap">
          全美第一线上平台，名师在线授课
        </div>

        <div class="feature-wrap">
          <div class="card1">
            <div class="feature-icon d-flex align-center">
              <div class="outer" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
                <div class="inner">
                  <img src="../assets/icon/Education.png"/>
                </div>
              </div>          
              业界顶级教辅团队助力
            </div>
            <div class="des">
              常青藤网罗业界最具口碑的资深提分老师，组建成VIP教<br>
              辅团队助力学员短期出分。并定期邀请最强大脑等嘉宾老<br>
              师举办讲座，传授单词记忆与提分秘笈。
            </div>
          </div>

          <div class="card2">
            <div class="feature-icon d-flex align-center">
              <div class="outer" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
                <div class="inner">
                  <img src="../assets/icon/Medal.png"/>
                </div>
              </div>              
              针对北美学生研发教案
            </div>
            <div class="des">
              常青藤提分团队针对北美留学生的数理阅读基础和学习<br>
              特性开发最适合的课程体系和配套教案，因材施教，做<br>
              最有效的冲分辅导。
            </div>
          </div>
        </div>
        <div class="feature-wrap">
          <div class="card3">
            <div class="feature-icon d-flex align-center">
              <div class="outer" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
                <div class="inner">
                  <img src="../assets/icon/Crown.png"/>
                </div>
              </div>              
              授课时间私人定制
            </div>
            <div class="des">
              常青藤双G教辅团队将尽可能配合学员的时间行程，通过<br>
              线上直播、课后录播、周中周末私人定制等方式，让学生<br>
              免受时间和地点的困扰，随时随地轻松提分。
            </div>
          </div>

          <div class="card4">
            <div class="feature-icon">
              <div class="outer" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
                <div class="inner">
                  <img src="../assets/icon/Star.png"/>
                </div>
              </div>              
              配套全面监督体系
            </div>
            <div class="des">
              为每个私教班和提分班都配备了常青藤导师作为课程小<br>
              助手，全程陪伴并监督学生定时打卡、按时上课、练习<br>
              复习、查漏补缺等等。
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="course">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">精英课程</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">
          <v-item-group
            v-model="onboarding"
            mandatory
          >
            <div class="tabLine d-inline-flex align-end">
              <v-item
                v-for="n in courseList.length"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <div class="d-inline-flex align-end">
                  <div class="courseTab" :class="{'item-active': active, 'item-inactive': !active}" @click="toggle">
                    <div class="course-word">{{courseList[n-1]}}</div>
                  </div>
                  <div class="space-padding"></div>
                </div>                
              </v-item>
              <div class="allCourse d-inline-block">
                全部课程
              </div>
            </div>
          </v-item-group>
          
          <v-window
            v-model="onboarding"
          >
            <v-window-item>
              <div class="d-flex gre-1v1">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer icon1">
                      <div class="inner">
                        <img src="../assets/icon/gre 1v1.png"/>
                      </div>
                    </div>
                    
                    GRE 1v1 私教班
                  </div>
                  <div class="slogan">私人定制，出分神器</div>
                  <div class="des">往届参与学生屡出330高分，人<br>均提分20+，为冲刺名校申请保<br>驾护航。</div>
                  <button class="btn-joinclass1 hvr-grow" @click="courseDetail(1)">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/online-learning-concept-1.png"/>
                  <div class="fe1" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopLeft'">真题模拟<br>独家讲座</div>                  
                  <div class="fe2" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopRight'">课程定制<br>课时灵活</div>
                  <div class="fe3" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomLeft'">专注北美<br>顶级师资</div>
                  <div class="fe4" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomRight'">1v1 伴学<br>全程监督</div>
                </div>
              </div>
            </v-window-item>

            <v-window-item>
              <div class="d-flex gre-small">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer icon2">
                      <div class="inner">
                        <img src="../assets/icon/gre small class.png"/>
                      </div>
                    </div>                    
                    GRE 全程提高班
                  </div>
                  <div class="slogan">小规模授课，大规模提分</div>
                  <div class="des">以短期提分为首要目标的学生群体，授课以科学化教<br>学、大数据筛题为内核，合理化陪伴管理为标配，高保<br>真习题反复操练，周期测试不断打磨，实现沉浸式学习<br>体验的同时，顺利达到名校申请的标化成绩。</div>
                  <button class="btn-joinclass2 hvr-grow" @click="courseDetail(2)">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/students-in-a-class.png"/>
                  <div class="fe1" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopLeft'">业界大牛教师主讲陪练<br>答题技巧亲传亲授</div>
                  <div class="fe2" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopRight'">大数据精准配备题库<br>真题机经定期拉练</div>
                  <div class="fe3" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomLeft'">视频直播配套教学<br>保真无障碍高效学习</div>
                  <div class="fe4" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomRight'">层层递进分级教学<br>不同level学生齐头并进</div>
                </div>
              </div>
            </v-window-item>

             <v-window-item>
              <div class="d-flex gmat-1v1">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer icon3">
                      <div class="inner">
                        <img src="../assets/icon/gmat 1v1.png"/>
                      </div>
                    </div>
                    
                    GMAT 1v1 私教班
                  </div>
                  <div class="slogan">高效提分，直击痛点</div>
                  <div class="des">开课前精准评估各知识点掌握程度，优先<br>强化训练高频薄弱知识点。往届参与学生<br>屡出720高分，人均提分40+，为冲刺名<br>校申请保驾护航。</div>
                  <button class="btn-joinclass3 hvr-grow" @click="courseDetail(3)">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/teaching.png"/>
                  <div class="fe1" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopLeft'">真题模拟<br>独家讲座</div>
                  <div class="fe2" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopRight'">课程定制<br>课时灵活</div>
                  <div class="fe3" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomLeft'">专注北美<br>顶级师资</div>
                  <div class="fe4" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomRight'">1v1 伴学<br>全程监督</div>
                </div>
              </div>
            </v-window-item>

             <v-window-item>
              <div class="d-flex gmat-small">
                <div class="left text-left">
                  <div class="course-icon d-flex align-center">
                    <div class="outer icon4">
                      <div class="inner">
                        <img src="../assets/icon/gmat small class.png"/>
                      </div>
                    </div>
                    
                    GMAT 全程提高班
                  </div>
                  <div class="slogan">名师讲堂，因材施教</div>
                  <div class="des">四大全科名师中文授课， 深入浅出的覆盖各<br>个考点，以通俗易懂的形式将复杂的语法，逻<br>辑，阅读等考点一一突破；以新颖、特色教学<br>风格吸引学生在线听课保持专注力。</div>
                  <button class="btn-joinclass4 hvr-grow" @click="courseDetail(4)">
                    立即上课
                  </button>
                </div>
                <div class="right">
                  <img src="../assets/group-of-people.png"/>
                  <div class="fe1" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopLeft'">业界大牛教师主讲陪练<br>答题技巧亲传亲授</div>
                  <div class="fe2" v-animate-onscroll.repeat="'animate__animated animate__fadeInTopRight'">大数据精准配备题库<br>真题机经定期拉练</div>
                  <div class="fe3" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomLeft'">视频直播配套教学<br>保真无障碍高效学习</div>
                  <div class="fe4" v-animate-onscroll.repeat="'animate__animated animate__fadeInBottomRight'">层层递进分级教学<br>不同level学生齐头并进</div>
                </div>
              </div>
            </v-window-item>
          </v-window>
        </div>
      </div>
    </section>
    <section id="unique">
      <div class="cont" >
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">独家课程</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <v-row justify="center"> 
            <div class="headline-wrap">
              <img src="../assets/katie.png" alt="katie"/>
              《最强大脑高效记忆法 – 如何高效记忆GRE核心词》
            </div>
        </v-row>
        <v-row>
          <div class="left">
            最强大脑中国队队长，世界记忆大师李威老师曾受邀到哈佛大学、哥伦比亚大学等顶尖名校分享高效记忆方法和思维，并收获大批学生的青睐和赞赏。常青藤精英教育Ivy Elite 特邀李威老师为GRE暑假班全体学员亲授GRE核心词汇记忆大法，助力大家短时间克服单词难关，冲击高分并申请名校！
          </div>
          <div class="right">

          </div>
        </v-row>
      </div>
    </section>
    <section id="teacher">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">导师介绍</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>

          <div class="content-wrap">
            <div class="teacher-slider d-flex">
              <div @click="prev()" class="icon-outter left">
                <img src="../assets/icon/left arrow.png"/>
              </div>
              <div class="slider-wrap">
                <slider ref="slider" :options="options" @slide='slide'>
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem v-for="(item,index) in teacherImgList" :key="index">
                    <div class="overlay">
                      <img :src="teacherImgList[index]"/>
                    </div>
                  </slideritem>
                </slider>
              </div>
              <div @click="next()" class="icon-outter right">
                <img src="../assets/icon/right arrow.png"/>
              </div>
            </div>
            <v-window
              v-model="teacherOn"
              reverse
            >
              <v-window-item
                v-for="(item,index) in teacherList" 
                :key="index"
              >
                <div class="teacher-name">{{item['name']}}</div>
                <ul class="intro-wrap">
                  <li v-html="item['bp1']"></li>
                  <li v-html="item['bp2']"></li>
                </ul>
              </v-window-item>
            </v-window>      
          </div>

      </div>
    </section>
    <section id="student">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">高分成功案例</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">
          <v-window
            v-model="studentOn"
          >       
            <v-window-item  v-for="(student,id) in studentList" 
                :key="id">
              <div  class="d-flex">
                <div class="left">  
                  <div class="layer1"></div>
                  <div class="student-pic">
                    <img :src="student.pic"/>
                  </div>
                  <div class="layer3">
                    <div class="name">{{student.name}}</div>
                    <div class="joined-class">{{student.class}}</div>
                    <div class="school">{{student.university}}</div>
                  </div>
                
                </div>
                <div class="right">
                  <div class="score">
                    <img src="../assets/GRE score1.png"/>
                  </div>
                  <div class="comment">
                    {{student.comment}}
                  </div>
                </div>
              </div>
            </v-window-item>
          </v-window>
          <div class="control">
            <div @click="studentprev()" class="icon-outter left">
              <img src="../assets/icon/left arrow.png"/>
            </div>
            <div @click="studentnext()" class="icon-outter right">
              <img src="../assets/icon/right arrow.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="media">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">媒体报道</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <v-row justify="center"> 
          <div class="content-wrap">
            <div class="d-flex" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
              <div class="media-block media1">
                <img src="../assets/media/image 17.png"/>
              </div>
              <div class="media-block media2">
                <img src="../assets/media/image 18.png"/>
              </div>
              <div class="media-block media3">
                <img src="../assets/media/image 19.png"/>
              </div>
              <div class="media-block media4">
                <img src="../assets/media/image 20.png"/>
              </div>
            </div>
            <div class="d-flex" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
              <div class="media-block media5">
                <img src="../assets/media/image 21.png"/>
              </div>
              <div class="media-block media6">
                <img src="../assets/media/image 22.png"/>
              </div>
              <div class="media-block media7">
                <img src="../assets/media/image 23.png"/>
              </div>
              <div class="media-block media8">
                <img src="../assets/media/image 24.png"/>
              </div>
            </div>
          </div>
        </v-row>
      </div>
    </section>
    <section id="news">
      <div class="cont">
        <v-row justify="center">
          <div class="title-wrap">
            <div class="title-word">新闻资讯</div>
            <div class="yellow-line"></div>
          </div>
        </v-row>
        <div class="content-wrap">
          <div class="d-flex">
            <div class="news-btn word22 btn1" v-bind:class="{'inactive': !inGmat, 'active': inGmat}" @click="inGmat = true">
              GMAT
            </div>
            <div class="news-btn word22" v-bind:class="{'inactive': inGmat, 'active': !inGmat}" @click="inGmat = false">
              GRE
            </div>
          </div>
          <div class="d-flex justify-space-between align-center">
            <v-window
              v-model="newsOn"
              v-if="inGmat"
              vertical
            >
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li ><a href="https://gmat.neea.edu.cn/content/outline/index.html" target="_blank">GMAT考试介绍</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/" target="_blank">GMAT网上报名步骤</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/content/candidaterules/index.html" target="_blank">GMAT考生须知</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/content/kdinfo/index.html" target="_blank">GMAT考点信息</a></li>
                    </ul>
                  </div>
                  <div class="news-block2">
                    <ul class="wrap">
                      <li ><a href="https://gmat.neea.edu.cn/content/faq/index.html" target="_blank">GMAT考试常见问题及解答</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/content/contact/index.html" target="_blank">GMAT官方NEEA联系方式</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/content/news/news20220124_AllInfo.html" target="_blank">新冠肺炎疫情常态化下GMAT考试考生进场要求</a></li>
                      <li ><a href="https://gmat.neea.edu.cn/content/news/20211210.html" target="_blank">关于恢复北京地区GMAT考试的通知</a></li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li ><a href="https://mp.weixin.qq.com/s/o4SoLXCvB7ccJSnajFQ_kQ" target="_blank">这仅有一次的GMAT在线考试，你如果参加需要注意什么？</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/crDmdZ_0_Zg30tWeb9jNDA" target="_blank">该来的还是来了！6月托福、雅思、GRE、GMAT全线取消！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/S-1xV-bbgIRhGLUbXxkt0A" target="_blank">好消息！7月托福、雅思、GRE、GMAT一键重启，多地考场恢复线下考试！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/q0avKTG3fDmHbn8T2UHpDA " target="_blank">3月托福雅思双G考试全取消…别爆炸, 文末有福利！</a></li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
            </v-window>

            <v-window
              v-if="!inGmat"
              v-model="newsOn"
              vertical
            >
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li ><a href="http://gre-main.neea.cn/html1/folder/1507/1796-1.htm" target="_blank">GRE考试介绍</a></li>
                      <li ><a href="https://news.neea.cn/GRE/1/news48.htm" target="_blank">GRE国内考点疫情期间防控须知</a></li>
                      <li ><a href="https://news.neea.edu.cn/GRE/1/news77_AllInfo.htm" target="_blank">GRE国内考点疫情期间安排调整</a></li>
                      <li ><a href="http://gre-main.neea.cn/html1/report/21121/7923-1.htm" target="_blank">关于恢复北京地区GRE考试的通知</a></li>
                    </ul>
                  </div>
                  <div class="news-block2">
                    <ul class="wrap">
                      <li ><a href="https://mp.weixin.qq.com/s/lGhtkqxfz54O0F0zqlK9bQ" target="_blank">从0到1，考320冲击名校不得不了解的GRE考点！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/z9tE3NB7ryFNGZM6GGxOPQ" target="_blank">纽约再现价值640万的GRE真题！！！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/UdFNFHJGp6k6ebYrvxF9Bw" target="_blank">9月GRE王牌出分班火热报名中，揭秘快速出分秘籍！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/jcWJGAyWDw0v4kuS4HPQyg" target="_blank">2022申请季还要备考GRE吗？学校大趋势还是GRE optional！</a></li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
              <v-window-item>
                <div class="d-flex">
                  <div class="news-block1">
                    <ul class="wrap">
                      <li ><a href="https://mp.weixin.qq.com/s/VpnA5YKoj9OjteE52UqIAw" target="_blank">研究生之路 | GMAT和 GRE到底该如何选择？</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/4wV0phg59hG67SUGNiITLw" target="_blank">哈佛耶鲁普林斯顿纷纷取消GRE，你还有必要考吗？</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/h6TMiutwvJgqvdUznicrjg" target="_blank">ETS重磅！GRE/托福实施在家考试，你的申请还有救！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/lSoM3unlTvn_a5ELf3n4Kg" target="_blank">悄悄告诉你，10个提升GRE/GMAT分数的好方法</a></li>
                    </ul>
                  </div>
                  <div class="news-block2">
                    <ul class="wrap">
                      <li ><a href="https://mp.weixin.qq.com/s/knNHOhlzjFe6kJPJftD2UA" target="_blank">SAT，托福，GRE等标化成绩能拼分嘛？</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/cDdmIN-tLPvZKUjldWW0SA" target="_blank">喜大普奔！耶鲁法学院官宣：开始接受GRE分数！</a></li>
                      <li ><a href="https://mp.weixin.qq.com/s/hAGszvbJ_0LTskBZQ1QDPA" target="_blank">申请DDL近在眼前，标化却还没出分？别急，先看了这篇文章再说！</a></li>
                    </ul>
                  </div>
                </div>
              </v-window-item>
            </v-window>
            <v-item-group
              v-model="newsOn"
              class="swiper-btn-group justify-center"
              mandatory
              vertical
            >
              <v-item
                v-for="n in 2"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <div :class="{'btn-active': active, 'btn-inactive': !active}" @click="toggle"></div>
              </v-item>
            </v-item-group>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: { ICountUp, slider, slideritem },
  data () {
    return {
      delay: 1000,
      option1: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '%'
      },
      option2: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '+'
      },
      option3: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: 'K'
      },
      courseList: [
        'GRE 1v1 私教班',
        'GRE 全程提分班',
        'GMAT 1v1 私教班',
        'GMAT 全程提分班'
      ],
      teacherImgList: [        
        require('../assets/Cat.png'),
        require('../assets/Renee.png'),
        require('../assets/William.png'),
        require('../assets/Mika.png'),
        require('../assets/Julia.png'),
        require('../assets/Victoria.png'),
      ],
      teacherList: [
        {
          name: '猫叔',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        },
        {
          name: 'Renee',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        },{
          name: 'William',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        },{
          name: 'Mika',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        },{
          name: 'Julia',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        },{
          name: 'Victoria',
          bp1: '9年教学经验，超过千名学员，7000＋小时授课，教学经验丰富',
          bp2: '作为GMAT项目全能主力讲师曾帮学生由480提分到710分，并带<br>出过众多GMAT 750+学员'
        }
      ],
      studentList: [
        {
          id: 1,
          pic: require('../assets/student/student1.png'),
          name: 'Victoria',
          class: 'GRE 1对1私教班',
          university: 'New York University',
          comment: '“1v1的课程就是我最想要的上课类型，时间能按照我方便的来，教学进度也是私人定制，不用怕自己的节奏赶不上。”',
        },
        {
          id: 2,
          pic: require('../assets/student/student2.png'),
          name: 'Siri L',
          class: 'GRE小班课',
          university: 'Columbia University',
          comment: '“暑假的时候蹭着常青藤的VIP小班课一起从0到1系统学习了一遍GRE，受益匪浅！尤其是Verbal部分老师特别注重逻辑的剖析和技巧的应用，极大地提高了我们解题速度。小班课也挺好的，大家一起上课也更有氛围~”',
        },
      ],
      onboarding: 0,
      swiperOn: 0,
      teacherOn: 0,
      newsOn: 0,
      studentOn: 0,

      //Slider configuration [obj]
      options: {
        currentPage: 0,
        itemAnimation: true,
        centeredSlides: true,
        pagination: false,
        slidesToScroll: 1,
        loop: true
      },

      inGmat: false,
    };
  },
  methods: {
    next () {
      this.$refs.slider.$emit('slideNext')
    },
    prev () {
      this.$refs.slider.$emit('slidePre')
    },
    studentprev: function(){
      this.studentOn = this.studentOn - 1 < 0
          ? this.studentList.length - 1
          : this.studentOn - 1
    },
    studentnext: function(){
      this.studentOn = this.studentOn + 1 === this.studentList.length
          ? 0
          : this.studentOn + 1
    },
    // Listener event
    slide (data) {
      this.teacherOn = data.currentPage;
    },
    courseDetail: function(index){
      if(index == 1){
        this.$router.push({ path: '/course/explore/gre1v1' });
      }else if(index == 2){
        this.$router.push({ path: '/course/explore/gresmallclass' });
      }else if(index == 3){
        this.$router.push({ path: '/course/explore/gmat1v1' });
      }else if(index == 4){
        this.$router.push({ path: '/course/explore/gmatsmallclass' });
      }
    },
    scrolltocourse: function(){
      document.querySelector("#course").scrollIntoView({behavior: "smooth", block: "center"});
    }
  },

  mounted: function(){
    let timer = setInterval(() => {
      this.swiperOn = this.swiperOn + 1 === 3
        ? 0
        : this.swiperOn + 1;
      this.studentOn = this.studentOn + 1 === 2
        ? 0
        : this.studentOn + 1
    },6000)
    
  }
}
</script>
<style scoped>
  .animate__animated.animate__fadeIn{
    --animate-duration: 2s;
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
  .word20{
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 140%;
  }
  .word22{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 140%;
  }
  /* #region banner css */
  #banner .swiper .swiper-inner{
    display: flex;
    flex-direction: column;    
  }
  #banner .action-button{
    width: 16.4375rem;
    height: 4.4375rem;

    font-weight: 600;
    font-size: 1.375rem;
    color: #fff;
    
    background: #1A8750;
    box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 0.13);
    border-radius: 6.625rem;
    text-align:center;
    line-height: 4.4375rem;
  }
  #banner .pic1{
    background: url("../assets/Banner_1.jpg") no-repeat center; 
    background-size:contain;
    height: 36.75rem;
    width: 90rem;
    margin: 0 auto;

    position: relative;
  }
  #banner .pic1 .banner-title1{
    font-weight: 600;
    font-size: 4.375rem;
    line-height: 140%;
    color: #1A8750;
    position: absolute;
    left: 13.5rem;
    top: 10rem;
    z-index: 50;
  }
  #banner .pic1 .banner-title2{
    font-weight: 600;
    font-size: 4.375rem;
    line-height: 140%;
    color: #989BDF;
    position: absolute;
    left: 13.6875rem;
    top: 10rem;
    z-index: 10;
  }
   #banner .pic1 .btn{
     margin-top: 21.875rem;
     margin-left: 36.75rem;
   }
  #banner .pic2{
    height: 36.75rem;
    background: url("../assets/Banner_2.jpg") no-repeat center; 
    background-size:contain;

    height: 36.75rem;
    width: 90rem;
    margin: 0 auto;

    position: relative;
  }
  #banner .pic2 .swiper-inner{
    align-items: flex-start;
  }
  #banner .pic2 .title-size2{
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 140%;
    color: #1A8750;
  }
  #banner .pic2 .banner-title1{
    margin: 6.9375rem 0 0 8.4375rem;
    color: #C7921F;
  }
  #banner .pic2 .banner-title2{
    margin: 1.375rem 0 0 8.475rem;
    color: #C7921F;
  }
  #banner .pic2 .banner-title3{
    position: absolute;
    top: 6.9375rem;
    left: 8.375rem;
  }
  #banner .pic2 .banner-title4{
    position: absolute;
    top: 12.6875rem;
    left: 8.375rem;
  }
  #banner .pic2 .btn{
    margin: 5.125rem 0 0 8.375rem;
  }
  #banner .back3{
    background: linear-gradient(to right, #C6EBFF , #E0F4FF);
  }
  #banner .pic3{
    height: 36.75rem;
    background: url("../assets/Banner_4.jpg") no-repeat center; 
    background-size: cover;

    height: 36.75rem;
    width: 90rem;
    margin: 0 auto;

    position: relative;
  }
  #banner .pic3 .swiper-inner{
    align-items: flex-start;
  }
  #banner .pic3 .title-size3{
    font-weight: 600;
    font-size: 4.375rem;
    line-height: 7.5rem;
    color: #EFB538;
  }
  #banner .pic3 .banner-title1{
    margin: 5.375rem 0 0 44.125rem;
  }
  #banner .pic3 .banner-title2{
    margin-left:44.125rem;
  }
  #banner .pic3 .banner-title3{
    position: absolute;
    top: 5.375rem;
    left: 52.8125rem;

    color: #1A8750;
  }
  #banner .pic3 .banner-title4{
    position: absolute;
    top: 12.875rem;
    left: 70.3125rem;

    color: #1A8750;
  }
  #banner .pic3 .btn{
    margin: 3.125rem 0 0 58.5625rem;
  }
  #banner .swiper-btn-group{
    position: absolute;
    top: 30.125rem;
    left: 50%;
    margin-left: -1.656rem;
  }
  #banner .swiper-btn-group .btn-active{
    width: 1.4375rem;
    height: 0.375rem;
    background: #1A8750;
    border-radius: 1.875rem;
    margin: 0 0.1875rem;
  }
  #banner .swiper-btn-group .btn-inactive{
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 1.875rem;
    background: #C4C4C4;
    margin: 0 0.1875rem;

    cursor: pointer;
  }
  #banner .card{
    background: #fff;
    position: absolute;
    top: 32.68rem;
    left: 50%;
    margin-left: -34.53rem;
    width: 69.0625rem;
    height: 15.5625rem;
    box-shadow: 0px 0.25rem 1.0625rem rgba(0, 0, 0, 0.12);
    border-radius: 0.9375rem;
  }
  .paddingdiv-15{
    padding: 15rem 0 0;
  }
  #banner .iCountUp {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: #1A8732;
  }
  #banner .word-margin{
    margin: 2rem 0 0;
  }
  /* #endregion */

  /* #region feature css */  
  #feature .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    background: url("../assets/mascot.png") no-repeat center bottom;
    background-size: 40.625rem 40.625rem;
  }
  #feature .title-wrap{
    position: relative;
    margin: 9.5rem 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Xingkai SC', 'KaiTi';
    font-style: normal;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 155.2%;
    display: inline-block;

    letter-spacing: 0.06em;
    color: #A58917;
  }
  #feature .feature-wrap {
    display: flex;
  }
  #feature .feature-wrap .card1{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(94.71deg, rgba(211, 241, 255, 0.5) 19.24%, rgba(255, 255, 255, 0.5) 48.92%, rgba(176, 176, 176, 0.165) 96.63%);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.5625rem 0 0 10.3125rem;
  }
  #feature .feature-wrap .card2{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(286.38deg, rgba(255, 243, 193, 0.5) -16.97%, rgba(255, 246, 193, 0.5) 12.44%, rgba(255, 248, 193, 0.5) 33.72%, rgba(255, 236, 226, 0.5) 68.15%, rgba(228, 183, 188, 0.5) 86.92%, rgba(228, 182, 187, 0.5) 103.19%);
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.5625rem 0 0 8.9375rem;
  }
  #feature .feature-wrap .card3{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(104.61deg, rgba(240, 225, 255, 0.5) -1.68%, rgba(240, 225, 255, 0.5) 19.29%, rgba(255, 255, 255, 0.5) 62.34%, rgba(202, 202, 207, 0.5) 98.21%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.3125rem 0 1.8125rem 10.3125rem;
  }
  #feature .feature-wrap .card4{
    width: 29.5rem;
    height: 14.6875rem;
    background: linear-gradient(286.03deg, rgba(193, 255, 211, 0.5) -16.93%, rgba(193, 255, 211, 0.5) 13.15%, rgba(230, 185, 190, 0.155) 92.8%, rgba(255, 255, 255, 0.5) 100.92%);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    margin: 3.3125rem 0 1.8125rem 8.9375rem;
  }
  #feature .feature-wrap .feature-icon{
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 155.2%;

    display: flex;
    align-items: center;
    margin: 2rem 0 0 3rem;   
  }
  #feature .feature-wrap .outer{
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    margin: 0 1.375rem 0 0;  

    display: flex;
    align-items: center;
    justify-content: center;
  }
  #feature .feature-wrap .outer .inner{
    width: 2.375rem;
    height: 2.375rem;
  }
  #feature .feature-wrap .outer .inner img{
    max-width: 100%;
  }
  #feature .feature-wrap .card1 .outer{
    background: #D9F3FF;
  }
  #feature .feature-wrap .card2 .outer{
    background: #FFF3C1;
  }
  #feature .feature-wrap .card3 .outer{
    background: #F0E1FF;
  }
  #feature .feature-wrap .card4 .outer{
    background: #C1FFD3;
  }
  #feature .feature-wrap .des{
    font-weight: 400;
    font-size: 0.9375rem;
    line-height: 172.7%;
    text-align: left;
    margin: 1.25rem 0 0 3rem;
  }
  /* #endregion */

  /* #region course css */
  #course .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
  }
  #course .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 155.2%;
    margin: 16.5rem 0 0;  
  }
  #course .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #course .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #course .content-wrap{
    margin: 4.75rem 0 0;
  }  
  #course .content-wrap .courseTab{    
    padding: 0.375rem 0.625rem 0.3125rem;
    border-radius: 0.25rem 0.25rem 0px 0px;
  }
  #course .content-wrap .courseTab:hover{
    cursor: pointer;
    background: #E8F5EE;
  }
  #course .content-wrap .space-padding{
    width: 5.275rem;
    height: 2.8125rem;
    border-bottom: 0.1875rem solid #D7D7D7;
  }
  #course .content-wrap .item-active{
    color: #1A8750;
    border-bottom: 0.1875rem solid #1A8750;
  }
  #course .content-wrap .item-inactive{
    background: #ffffff;
    border-bottom: 0.1875rem solid #D7D7D7;
  }
  #course .content-wrap .course-word{
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 2.125rem;
  }
  #course .content-wrap .allCourse{
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 155.2%;

    color: #9F9F9F;
    border-bottom: 0.1875rem solid #D7D7D7;
  }
  #course .gre-1v1 .left{
    margin: 0 16.4375rem 0 8.75rem;
  }
  #course .gre-small .left{
    margin: 0 4.8125rem 0 8.75rem;
  }
  #course .gmat-1v1 .left{
    margin: 0 9.25rem 0 8.75rem;
  }
  #course .gmat-small .left{
    margin: 0 6.75rem 0 8.75rem;
  }
  #course .left .course-icon{
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 155.2%;
    margin: 6.9375rem 0 0;
  }
  #course .left .course-icon .outer{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin: 0 1.3125rem 0 0;

    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #course .left .course-icon .outer.icon1{
    background: #FFF3C1;
  }
  #course .left .course-icon .outer.icon2{
    background: #E9F8FF;;
  }
  #course .left .course-icon .outer.icon3{
    background:#C1FFD3;
  }
  #course .left .course-icon .outer.icon4{
    background: #F0E1FF;
  }
  #course .left .course-icon img{
    max-width: 100%;
  }
  #course .left .course-icon .inner{
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #course .left .slogan{
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 177%;
    letter-spacing: 0.04em;
    margin: 2.75rem 0 0;
  }
  #course .left .des{
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 177%;
    letter-spacing: 0.04em;
    margin: 1.5rem 0 0;
  }
  #course .left .btn-joinclass1{
    margin: 4.5rem 0 10.5rem;
    width: 15.9375rem;
    height: 4.3125rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
  }
  #course .left .btn-joinclass2{
    margin: 4.3125rem 0 10.5rem;
    width: 15.9375rem;
    height: 4.3125rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
  }
  #course .left .btn-joinclass3{
    margin: 3.0625rem 0 10.5rem;
    width: 15.9375rem;
    height: 4.3125rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
  }
  #course .left .btn-joinclass4{
    margin: 2.9375rem 0 10.5rem;
    width: 15.9375rem;
    height: 4.3125rem;
    border-radius: 6.625rem;
    text-align:center;

    background: #1A8750;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
  }
  #course .right{
    position: relative;
  }
  #course .gre-1v1 .right img{
    position: absolute;
    width: 35.25rem;
    height: 35.25rem;
    top: -2.125rem;
    left: 0;
  }
  #course .gre-1v1 .right div{
    width: 11.25rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140.7%;
  }
  #course .gre-1v1 .right .fe1{
    position: absolute;
    top: 13.75rem;
    left: -3.125rem;
  }
  #course .gre-1v1 .right .fe2{
    position: absolute;
    top: 9.0625rem;
    left: 25.4375rem;
  }
  #course .gre-1v1 .right .fe3{
    position: absolute;
    top: 27.4375rem;
    left: -5.125rem;
  }
  #course .gre-1v1 .right .fe4{
    position: absolute;
    top: 24.875rem;
    left: 28.0625rem;
  }


  #course .gre-small .right img{
    position: absolute;
    width: 40.375rem;
    height: 40.375rem;
    top: -2.875rem;
    left: 0;
  }
  #course .gre-small .right div{
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 1.4375rem;
    line-height: 154.7%;
  }
  #course .gre-small .right .fe1{
    position: absolute;
    top: 4.5625rem;
    left: -3rem;
    width: 19.1875rem;
    height: 6.125rem;
  }
  #course .gre-small .right .fe2{
    position: absolute;
    top: 7.5rem;
    left: 24.1875rem;
    width: 16.9375rem;
    height: 6.125rem;
  }
  #course .gre-small .right .fe3{
    position: absolute;
    top: 25.625rem;
    left: -3rem;
    width: 16.4375rem;
    height: 6.125rem;
  }
  #course .gre-small .right .fe4{
    position: absolute;
    top: 25.625rem;
    left: 26.4375rem;
    width: 18.25rem;
    height: 6.125rem;
  }


  #course .gmat-1v1 .right img{
    position: absolute;
    width: 43.8125rem;
    height: 43.8125rem;
    top: -2.1875rem;
    left: 0;
  }
  #course .gmat-1v1 .right div{
    width: 11.25rem;
    height: 6.125rem;
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 140.7%;
  }
  #course .gmat-1v1 .right .fe1{
    position: absolute;
    top: 10.9375rem;
    left: -0.625rem;
  }
  #course .gmat-1v1 .right .fe2{
    position: absolute;
    top: 9.25rem;
    left: 33.4375rem;
  }
  #course .gmat-1v1 .right .fe3{
    position: absolute;
    top: 25.9375rem;
    left: 3.0625rem;
  }
  #course .gmat-1v1 .right .fe4{
    position: absolute;
    top: 23.6875rem;
    left: 31.3125rem;
  }


  #course .gmat-small .right img{
    position: absolute;
    width: 44.375rem;
    height: 28.562rem;
    top: 5.1875rem;
    left: 0;
  }
  #course .gmat-small .right div{
    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 154.7%;
  }
  #course .gmat-small .right .fe1{
    position: absolute;
    top: 3.5rem;
    left: 0.5rem;
    width: 19.1875rem;
    height: 6.125rem;
  }
  #course .gmat-small .right .fe2{
    position: absolute;
    top: 8.25rem;
    left: 27.0625rem;
    width: 16.937rem;
    height: 6.125rem;
  }
  #course .gmat-small .right .fe3{
    position: absolute;
    top: 25.5rem;
    left: 0;
    width: 19.1875rem;
    height: 6.125rem;
  }
  #course .gmat-small .right .fe4{
    position: absolute;
    top: 25.5rem;
    left: 29.4375rem;
    width: 18.25rem;
    height: 6.125rem;
  }
  /* #endregion */

  /* #region unique css */
  #unique {
    background: #FDF5E7;
  }
  #unique .cont{
    width: 90rem;
    margin: 0 auto;
    padding: 8rem 0;
  }
  #unique .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 155.2%;    
  }
  #unique .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #unique .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #unique .headline-wrap{
    position: relative;
    margin: 10.4rem 0 0;
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 155.2%;
    display: inline-block;
  }
  #unique .headline-wrap img{
    width: 7.375rem;
    height: 7.875rem;
    position: absolute;
    top: -4.38rem;
    left: -6.5625rem;
  }
  #unique .cont .left{
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 172.7%;
    width: 33.3125rem;
    letter-spacing: 0.02em;
    margin: 6.875rem 10.375rem 0 9.875rem;
  }
  #unique .cont .right{
    width: 28.9375rem;
    height: 19.0625rem;
    margin: 6.25rem 0 0;

    background: #FFFFFF;
    box-shadow: 0px 0.4375rem 1rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
  }
/* #endregion */

  /* #region media css */
  #media {
    background: #E8F5EE;
  }
  #media .cont{
    width: 90rem;
    height: 56rem;
    margin: 0 auto;
    padding: 8rem 0;
  }
  #media .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 155.2%;    
  }
  #media .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #media .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #media .content-wrap{
    margin: 8.625rem 0 0;
  }
  #media .content-wrap .media-block{
    width: 14rem;
    height: 6rem;
    background: #F8FFFB;
    border-radius: 0.5rem;
    margin: 0 4.75rem 3.3125rem 0;

    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
  }
  #media .content-wrap .media1{
    margin-left: 6rem;
  }  
  #media .content-wrap .media5{
    margin-left: 6rem;
  }
  #media .content-wrap .media1 img{
    max-width: 6.75rem;
  }
  #media .content-wrap .media2 img{
    max-height: 3.5rem;
  }
  #media .content-wrap .media3 img{
    max-height: 3.75rem;
  }
  #media .content-wrap .media4 img{
    max-width: 10.875rem;
  }
  #media .content-wrap .media5 img{
    max-width: 10.5rem;
  }
  #media .content-wrap .media6 img{
    max-width: 6.5625rem;
  }
  #media .content-wrap .media7 img{
    max-width: 9.875rem;
  }
  #media .content-wrap .media8 img{
    max-width: 7.9375rem;
  }
/* #endregion */

  /* #region teacher css */
  #teacher .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    padding: 8rem 0;
  }
  #teacher .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 155.2%;    
  }
  #teacher .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #teacher .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #teacher .teacher-slider{
    height: 26.375rem;
    background: url("../assets/Teacher-group.png") no-repeat top; 
  }
  #teacher .teacher-slider .slider-wrap{
    width: 62.5rem;
    height: 18.975rem;
    margin-top: 8.25rem;
  }
  #teacher .teacher-slider .overlay{
    width: 18.9375rem;
    height: 18.9375rem;
  }
  #teacher .teacher-slider img{
    max-width: 100%;
    max-height: 100%;
  }
  .slider-item {
    width: 25rem;
    transform:scale(0.5);
    transition-timing-function: ease;
    transition-duration: 100ms;
  }
  .slider-item.slider-active {
    width: 25rem;
    transform:scale(1.0);
    z-index: 999;
  }
  #teacher .teacher-slider .icon-outter{
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 50%;
    border: 1px solid #B8B8B8;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    cursor: pointer;
  }
  #teacher .teacher-slider .icon-outter img{
    max-width: 1.5rem;
  }
  #teacher .teacher-slider .left{
    margin: 15.625rem 5.4375rem 0 5.625rem;
  }
  #teacher .teacher-slider .right{
    margin: 15.625rem 5.625rem 0 5.4375rem;
  }
  #teacher .teacher-name{
    font-weight: 600;
    font-size: 2.125rem;
    line-height: 155.2%;
    margin-bottom: 1.5rem;
  }
  #teacher .intro-wrap{
    display: inline-block;
    border: 1px solid #E8F5EE;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px #C0E1D1;
    border-radius: 0.375rem;
    text-align: left;
    padding: 2rem 2.6875rem 2rem 4rem;

    font-weight: 400;
    font-size: 1.125rem;
    line-height: 186.7%;
  }
  #teacher .intro-wrap li::marker{
    color: #1A8750;
    font-size: 1.5rem;
  }
/* #endregion */

/* #region student css */
  #student .cont{
    width: 90rem;
    height: 56rem;
    margin: 0 auto;
    padding: 8rem 0;
  }
  #student .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 155.2%;    
  }
  #student .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #student .title-wrap .yellow-line{
    position: absolute;
    width: 11.375rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -5.625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #student .content-wrap{
    margin: 8.625rem 0 0;
    position: relative;
  }
  #student .left{
    position: relative;
    margin-left: 6.4375rem;
  }
  #student .left .layer1{
    width: 20.875rem;
    height: 20.875rem;
    background: #FFE5AC;
    border-radius: 50%;
  }
  #student .left .student-pic{
    width: 18.5rem;
    height: 18.5rem;  

    position: absolute;
    top: 2.5rem;
    left: 1.1875rem;
    z-index: 50;
  }
  #student img{
    width: 100%;
  }
  #student .left .layer3{
    width: 19.125rem;
    height: 19.125rem;
    border-radius: 50%;
    background: #fff;
    
    position: absolute;
    top: 14.3125rem;
    left: 1.1875rem;
    z-index: 999;
  }
  #student .layer3 .name{
    position: absolute;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 155.2%;

    top: 1.9375rem;
    left: 7.5rem;
  }
  #student .layer3 .joined-class{
    background: #FFFFFF;
    box-shadow: 0px 0.125rem 0.1875rem #E7CA8A;
    border-radius: 0.375rem;

    width: 13.125rem;
    height: 4rem;
    padding: 1.5rem 0 0 2.75rem;
    margin: 2.5625rem 0 0 3rem;

    font-weight: 600;
    font-size: 1.125rem;
    line-height: 155.2%;
    color: #1A8750;
  }
  #student .layer3 .school{
    background: #FFFFFF;
    box-shadow: 0px 0.125rem 0.1875rem #C0E1D1;
    border-radius: 0.375rem;

    width: 13.125rem;
    height: 4.875rem;
    margin: 1.3125rem 0 0 3rem;

    font-weight: 600;
    font-size: 1.25rem;
    line-height: 175.7%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  #student .right{
    
    margin-left: 4.6875rem;
  }
  #student .right .score{
    width: 52.5625rem;
    height: 16.4375rem;
    margin-top: 1.9375rem;
  }
  #student .right .comment{
    width: 34.5625rem;
    margin: 3rem 0;
    padding: 0.75rem 1rem;

    background: #FFFFFF;
    box-shadow: 0px 0.1875rem 0.5625rem rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;

    font-weight: normal;
    font-size: 1.125rem;
    line-height: 175.7%;
  }
  #student .control{
    position: absolute;
    display: flex;
    top: 22.6875rem;
    left: 66.6875rem;
  }
  #student .control .icon-outter{
    width: 2.6875rem;
    height: 2.6875rem;
    border-radius: 50%;
    border: 1px solid #B8B8B8;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    cursor: pointer;
  }
  #student .control .icon-outter img{
    max-width: 1.5rem;
  }

  /* #endregion */

/* #region news css */
  #news .cont{
    width: 90rem;
    margin: 0 auto;
    text-align: center;
    padding: 8rem 0;
  }
  #news .title-wrap{
    position: relative;
    font-weight: 600;
    font-size: 2rem;
    line-height: 155.2%;    
  }
  #news .title-wrap .title-word{
    position: relative;
    z-index: 99;
  }
  #news .title-wrap .yellow-line{
    position: absolute;
    width: 8.3125rem;
    height: 0.5rem;
    top: 2.5rem;
    left: 50%;
    margin-left: -4.15625rem;
    background: #E5C12C;
    border-radius: 2.4375rem;
  }
  #news .content-wrap{
    padding: 5.0625rem 9.0625rem 0 9.3125rem;
  }
  #news .content-wrap .news-btn{
    width: 9.875rem;
    height: 3.375rem;
    text-align: center;
    line-height: 3.375rem;

    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.13);
    border-radius: 0.375rem;
    cursor: pointer;
  }
  #news .content-wrap .news-btn.btn1{
    margin-right: 2rem;
  }
  #news .content-wrap .inactive{
    border: 1px solid #1A8750;
    color: #1A8750;
  }
  #news .content-wrap .active{
    background: #1A8750;
    color: #fff;
  }
  #news .swiper-btn-group .btn-active{
    width: 0.375rem;
    height: 1.4375rem;
    background: #1A8750;
    border-radius: 1.875rem;
    margin: 0.1875rem 0;
  }
  #news .swiper-btn-group .btn-inactive{
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 1.875rem;
    background: #C4C4C4;
    margin: 0.1875rem 0;
    cursor: pointer;
  }
  #news .content-wrap .news-block1{
    margin: 3.875rem 14.5625rem 0 0;
    text-align: left;
  }
  #news .content-wrap .news-block2{
    margin: 3.875rem 1.5rem 0;
    text-align: left;
  }
  #news .content-wrap .wrap{
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5625rem;
  }
  #news .content-wrap .wrap a{
    text-decoration: none;
  }
  #news .content-wrap .wrap li{
    margin-bottom: 0.875rem;
  }
  #news .content-wrap .wrap li::marker{
    color: #1A8750;
    size: 0.5625rem;
  }
/* #endregion */
</style>
