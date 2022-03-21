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
              <v-card-text>
                <v-list
                  two-line
                  dense
                >

                  <v-list-item v-for="(receipt, i) in receiptList"
                    :key="i"
                    @click="test(receipt)"
                  >
                    <v-list-item-avatar class="d-none d-sm-flex">
                      <v-icon
                        v-if="receipt.processed == 1"
                        class="green"
                        dark
                        small
                      >
                        mdi-check
                      </v-icon>
                      <v-icon
                        v-if="receipt.processed == 0"
                        class="grey lighten-1"
                        dark
                        small
                      >
                        mdi-list-status
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-text="receipt.name  + receipt.comment"></v-list-item-title>

                      <v-list-item-subtitle v-text="new Date(receipt.create_timestamp).toLocaleString()"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-chip>
                        {{receipt.amount/100}}
                      </v-chip>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="createClassDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="class name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="time schedule"
                  hint="例如： 周一到周五 8:30 - 10:30"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="comment"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-autocomplete
                  v-model="student"
                  :items="studentList"
                  dense
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="选择学生"
                  item-text="name"
                  item-value="uid"
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      @click="data.select"
                    >
                      <v-avatar left>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-avatar>
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template>
                      <v-list-item-avatar>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col
                cols="12"
              >
                <v-autocomplete
                  v-model="teachers"
                  :items="teacherList"
                  dense
                  filled
                  chips
                  color="blue-grey lighten-2"
                  label="选择老师"
                  item-text="name"
                  item-value="uid"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      @click="data.select"
                    >
                      <v-avatar left>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-avatar>
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                    <template>
                      <v-list-item-avatar>
                        <v-img :src="'https://avatar.ivyelite.net/' + data.item.avatar_url"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="createClassDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createClassDialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import receiptApi from '../../api/receiptApi'
  import relationApi from '../../api/relationApi'
  export default {
    components: { profileLeft },
    data: () => ({
			receiptList: null,

      createClassDialog: false,
      teacherList: [],
      studentList: [],
      teachers: [],
      student: '',
		}),

		methods: {
      focus(event) {
        event.currentTarget.select();
			},
      
      getCourse: function(){
				receiptApi.getAllUserReceipt().then(res => {
					if (res.data.code === 200) {
						this.receiptList = res.data.data
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},

      test: function(receipt){
        this.createClassDialog = true
      },
      findAllUsersNotInClass: function(){
				relationApi.findAllUsersNotInClass().then( (res) => {
          if (res.data.code === 200) {
						let otherUsers = res.data.data
						this.teacherList = otherUsers.filter(item => {
              return item.roles == 'teacher'
            })
            this.studentList = otherUsers.filter(item => {
              return item.roles == 'student'
            })
					}else{
						this.snackbar = true
						this.notification = '发生错误，请重试或联系管理员'
						this.snackbarColor = 'red'
					}
        })
			},
		},

		mounted: function(){
			this.getCourse()
      this.findAllUsersNotInClass()
		},
	}
</script>
<style scoped>

</style>