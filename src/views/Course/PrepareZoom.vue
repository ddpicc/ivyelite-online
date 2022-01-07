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
							v-if="theClass"
							color="#385F73"
							dark
							flat
							class="elevation-12 mb-6"
						>
							<v-card-title class="text-h5">
								{{theClass.subject}}
								<v-fab-transition>
									<v-btn
										color="pink"
										dark
										small
										absolute
										top
										right
										fab
										@click="deleteCurrentClass(theClass)"
									>
										<v-icon>mdi-delete</v-icon>
									</v-btn>
								</v-fab-transition>
							</v-card-title>

							<v-card-subtitle>{{theClass.room_id}}</v-card-subtitle>

							<v-card-actions>
								<v-btn @click="attendClass(theClass.id,theClass.room_id,theClass.begin_timestamp)" text>
									加入课堂
								</v-btn>
							</v-card-actions>
						</v-card>
						<v-card>									
							<v-list subheader>
								<v-subheader>设置</v-subheader>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>课堂名称 : {{classSubject}}</v-list-item-title>
										
									</v-list-item-content>
									<v-list-item-icon>
										<v-btn text>
											编辑
										</v-btn>
									</v-list-item-icon>
								</v-list-item>

								<v-list-item
									v-for="chat in recent"
									:key="chat.title"
								>
									<v-list-item-content>
										<v-list-item-title v-text="chat.title"></v-list-item-title>
									</v-list-item-content>

									<v-list-item-icon>
										<v-switch
											inset
											v-model="switch1"
										></v-switch>
									</v-list-item-icon>
								</v-list-item>
							</v-list>
							<v-card-actions class="d-flex justify-center">
								<v-btn block color="blue" @click="createClass()">创建课堂</v-btn>
							</v-card-actions>
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
	import classRoomApi from '../../api/classRoomApi'
	export default {
		data: () => ({
			classTitle: '',
			class_id: null,
			switch1: true,
			recent: [
				{
					title: '进入房间时将麦克风开启',
				},
				{
					title: '进入房间时将摄像头开启',
				},
				{
					title: '开启笔锋',
				},				
			],
			theClass: null,
			classSubject: '',
			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft
		},

		methods: {
			createClass: async function(){
				//check if there is already one class and it is not closed
				//only one class for the course at the save time
				if(this.theClass){
					this.snackbar = true;
					this.notification = '已经存在一个课堂，请先删除现有的课堂之后再创建新的课堂'; 
					this.snackbarColor = 'red';
					return;
				}
				const subject = this.classSubject;
				const room_type = 1;
				const duration = 90;
				const host = {
					uid: Number(this.$store.state.user.uid)
				};
				
				classRoomApi.createRoom(subject, room_type, duration, host).then( (res) => {
          if (res.data.code === 200) {
						let roomkitResult = res.data.data;
						console.log(roomkitResult)
						//把房间信息存入数据库
						classRoomApi.saveRoom(this.class_id, subject, roomkitResult.room_id, roomkitResult.begin_timestamp, 1,'','进行中').then( (res) => {
							if (res.data.code === 200) {
								this.snackbar = true;
								this.notification = '成功';
								this.snackbarColor = 'green';
								this.$socket.emit('classcreated', 'Class begin!')	
								this.theClass = {
									id: res.data.data.insertId,
									course_id: this.course_id,
									begin_timestamp: roomkitResult.begin_timestamp,
									password: '',
									room_type: 1,
									status: '进行中',
									subject: subject,
									room_id: roomkitResult.room_id
								}
							}else{
								this.snackbar = true;
								this.notification = '发生错误，请重试或联系管理员'; 
								this.snackbarColor = 'red';
							}
						})
					}
        })
			},

			getClass: function(){
				classRoomApi.searchRoomByCourseId(this.class_id, '进行中').then( (res) => {
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
				classRoomApi.deleteRoomFromDb(theClass.id).then( (res) => {
					if (res.data.code === 200) {
						this.snackbar = true;
						this.notification = '删除成功';
						this.snackbarColor = 'green';
						this.getClass();
						//从educloud删除课堂
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},

			attendClass: function(id,room_id,begin_timestamp){
				let urlParams = {
					id: id,
					room_id: room_id,
					role: 1,
					begin_timestamp: begin_timestamp,
					mic: true,
					camera: true,
					isEndRoomButtonHidden: false,
					isMemberCountHidden: false,
					isMemberEquipmentInspectionHidden: false,
					isMemberJoinRoomMessageHidden: false,
					isMemberLeaveRoomMessageHidden: false,
					isVideoViewAutoHidden: false,
					isCompanyFilesHidden: false,
					isFixedInOutMessage: false,
					enableHandwriting: true,
				}
				this.$router.push({path: '/zegoClass', query: urlParams});
			}
		},

		mounted: function(){
			if(!this.class_id){
				this.snackbar = true;
				this.notification = '你还没有选择课程，请先选择一个课程';
				this.snackbarColor = 'red';
				setTimeout( () => {this.$router.push({path: '/myprofile/teacherclass'});}, 3000);
			}else{
				this.getClass();
			}			
		},

		created() {
			if(this.$route.query.class_id){
        this.class_id = this.$route.query.class_id;
				this.classTitle = this.$route.query.classTitle;
      }
		}
	}
</script>