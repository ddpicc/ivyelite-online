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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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