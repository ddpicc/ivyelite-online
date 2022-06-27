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
							v-if="theClass"
							color="#385F73"
							dark
							flat
							class="elevation-12 mb-6"
						>
							<v-card-title class="text-h5">
								房间号: {{theClass.room_id}}
							</v-card-title>

							<v-card-subtitle>密码: {{theClass.password}}</v-card-subtitle>
							<v-card-actions>
								<v-btn @click="deleteCurrentClass(theClass)">删除课堂</v-btn>
								<hello-zoom v-bind:meetingNumber="theClass.room_id.toString()" v-bind:passWord="theClass.password" v-bind:role="1" userName="host"/>
							</v-card-actions>
						</v-card>

								<v-card v-if="operation == 'create'">						
									<v-card-text>
										<p class="text-h5 text--primary">
											创建一个zoom会议
										</p>
										<v-text-field label="课堂名称" outlined v-model="classSubject"></v-text-field>
										<v-text-field label="密码" outlined v-model="classPassword"></v-text-field>
									</v-card-text>
									<v-card-actions>
										<v-btn  color="blue" @click="createZoomClass()">创建课堂</v-btn>
									</v-card-actions>
								</v-card>

								<v-card v-if="operation == 'update'">						
									<v-card-text>
										<p class="text-h5 text--primary">
											我已经有一个zoom会议，保存会议号和密码到系统中
										</p>
										<v-text-field label="会议号" outlined v-model="zoomMeetingNumber"></v-text-field>
										<v-text-field label="密码" outlined v-model="zoomMeetingPassword"></v-text-field>
									</v-card-text>
									<v-card-actions>
										<v-btn  color="blue" @click="saveZoomClass">保存</v-btn>
									</v-card-actions>
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
	import classRoomApi from '../../api/classRoomApi'
	import HelloZoom from '../../components/HelloZoom.vue'
	export default {
		data: () => ({
			classTitle: '',
			class_id: null,
			theClass: null,
			operation: null,
			classSubject: '',
			classPassword: '123456',
			zoomMeetingNumber: '',
			zoomMeetingPassword: '',



			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft, HelloZoom
		},

		methods: {
			getClass: function(){
				classRoomApi.searchRoomByClassId(this.class_id, '进行中').then( (res) => {
					if (res.data.code === 200) {
						if(res.data.data.length > 0){
							this.theClass = res.data.data[0];
							this.classSubject = this.theClass.subject;
						}else{
							this.classSubject = this.classTitle + ' ' + new Date().toLocaleDateString();
							this.theClass = null;
						}
						

					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},

			deleteCurrentClass: function(theClass){
				classRoomApi.updateRoomStatus('已结束',theClass.id).then( (res) => {
					if (res.data.code === 200) {
						this.snackbar = true;
						this.notification = '删除成功';
						this.snackbarColor = 'green';
						this.$socket.emit('classdeleted', this.class_id)
						this.getClass();
						//从zoom删除课堂
						this.classPassword = '123456'
						this.zoomMeetingNumber = ''
						this.zoomMeetingPassword = ''
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},

			createZoomClass: function(){
				if(this.theClass){
					this.snackbar = true;
					this.notification = '当前已存在一个课堂，请先删除当前课堂再创建新的课堂';
					this.snackbarColor = 'red';
					return
				}
				classRoomApi.createZoomClass(this.classSubject, this.classPassword).then( (res) => {
					if (res.data.code === 200) {
						console.log(res.data.data)
						let zoomMeeting = res.data.data;
						this.theClass = {
							room_id: zoomMeeting.id,
							password: zoomMeeting.password
						}
						this.$socket.emit('classcreated', this.class_id)
						classRoomApi.saveRoom(this.class_id,this.classSubject,zoomMeeting.id,zoomMeeting.password,'进行中').then( (res) => {
							if (res.data.code != 200) {
								this.snackbar = true;
								this.notification = '发生错误，请重试或联系管理员';
								this.snackbarColor = 'red';
							}
						})
					}else{
						console.log(res.data.message)
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},

			saveZoomClass: function() {
				if(this.theClass){
					this.snackbar = true;
					this.notification = '当前已存在一个课堂，请先删除当前课堂再创建新的课堂';
					this.snackbarColor = 'red';
					return
				}
				classRoomApi.saveRoom(this.class_id,this.classSubject,this.zoomMeetingNumber,this.zoomMeetingPassword,'进行中').then( (res) => {
					if (res.data.code != 200) {
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}else{
						this.getClass();
						this.classPassword = '123456'
						this.zoomMeetingNumber = ''
						this.zoomMeetingPassword = ''
					}
				})
			}
		},

		mounted: function(){
			if(!this.class_id){
				this.snackbar = true;
				this.notification = '你还没有选择课程，请先选择一个课程';
				this.snackbarColor = 'red';
				setTimeout( () => {this.$router.push({path: '/admin/allclasses'});}, 3000);
			}else{
				this.getClass();
			}			
		},

		created() {
			if(this.$route.query.class_id){
        this.class_id = this.$route.query.class_id;
				this.classTitle = this.$route.query.classTitle;
				this.operation = this.$route.query.operation;
      }
		}
	}
</script>
<style>
	#zmmtg-root {
		display: none;
	}
</style>