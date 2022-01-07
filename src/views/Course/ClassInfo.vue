<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
					<v-col cols="9">
            <v-card
              class="mx-auto"
            >
              <v-list subheader>
                <v-subheader>老师</v-subheader>
                <v-list-item
                  v-for="(item, i) in teachers"
									:key="i"
                >
                  <v-list-item-avatar>
                    <v-img :src="'https://avatar.ivyelite.net/' + item.avatar_url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>

                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>同学</v-subheader>
                <v-list-item
                  v-for="item in students"
                  :key="item.id"
                >
                  <v-list-item-avatar>
                    <v-img :src="'https://avatar.ivyelite.net/' + item.avatar_url"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>

                </v-list-item>

              </v-list>
            </v-card>
            <div class="py-4"></div>
            <v-card
              class="mx-auto"
              v-if="this.$store.state.user.roles == 'teacher'"
            >
              <v-timeline
                dense
                clipped
              >
                <v-timeline-item
                  fill-dot
                  class="white--text mb-12"
                  color="orange"
                  large
                >
                  <template v-slot:icon>
                    <span>日期</span>
                  </template>
                  <v-text-field
                    v-model="input"
                    hide-details
                    flat
                    label="输入课堂内容..."
                    solo
                    @keydown.enter="comment"
                  >
                    <template v-slot:append>
                      <v-btn
                        class="mx-0"
                        depressed
                        @click="comment"
                      >
                        Post
                      </v-btn>
                    </template>
                  </v-text-field>
                </v-timeline-item>

                <v-timeline-item
                  v-for="event in timeline"
                  :key="event.id"
                  class="mb-4 mr-4"
                  small
                >
                  <v-card class="elevation-2">
                    <v-card-title>
                      Lorem ipsum
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar
			v-model="snackbar"
			:color="snackbarColor"
			timeout="3000"
			top
			dark
		>
			<v-icon
				color="white"
				class="mr-3"
			>
				mdi-bell-plus
			</v-icon>
			{{notification}}
			<v-btn
				icon
				@click="snackbar = false"
			>
				<v-icon>
					mdi-close-circle
				</v-icon>
			</v-btn>
		</v-snackbar>
  </v-container>
</template>

<script>
  import profileLeft from "../../components/ProfileLeft.vue"
  import relationApi from '../../api/relationApi'
  export default {
    data () {
      return {
        users: null,
        teachers: null,
        students: null,
        class_id: null,

        events: [],
        input: null,
        nonce: 0,

        snackbar: false,
        snackbarColor: '',
        notification: '',
      }
    },
    components: {
			profileLeft
		},

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },

    methods: {
      getClassUsers:function(){
        relationApi.findUsersByClass(this.class_id).then( (res) => {
          if (res.data.code === 200) {            
            this.users = res.data.data
            this.teachers = this.users.filter(item => {
              return item.isTeacher == 1;
            })
            this.students = this.users.filter(item => {
              return item.isStudent == 1;
            })
          }else{
            this.snackbar = true;
            this.notification = '发生错误，请重试或联系管理员';
            this.snackbarColor = 'red';
          }
        })
      },

      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    },

    mounted: function(){
      this.getClassUsers()
		},

    created: function(){
      if(this.$route.query.class_id){
        this.class_id = this.$route.query.class_id
      }
    }
  }
</script>