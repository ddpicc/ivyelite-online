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
						</v-card>
						<v-card>									
							<v-list subheader>
								<v-subheader>设置</v-subheader>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title v-if="!editSubject">课堂名称 : {{classSubject}}</v-list-item-title>
										<v-text-field v-else dense v-model="classSubject"></v-text-field>
									</v-list-item-content>
									<v-list-item-icon>
										<v-btn text @click="editBtnClick()">
											{{btnText}}
										</v-btn>
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
	export default {
		data: () => ({
			classTitle: '',
			class_id: null,
			theClass: null,
			classSubject: '',
			editSubject: false,
			btnText: '编辑',

			ismic_open: true,
			iscamera_open: true,


			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		components: {
			profileLeft
		},

		methods: {
			editBtnClick: function(){
				if(this.editSubject == false){
					this.editSubject = true
					this.btnText = '保存'
				}else{
					this.editSubject = false
					this.btnText = '编辑'
				}				
			},
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
				const duration = 120;
				const host = {
					uid: Number(this.$store.state.user.uid)
				};
				//使用管理员的id作为host id，但是它不是房间老师的id，老师加入的时候也使用这个host id
				classRoomApi.createRoom(subject, room_type, duration, host).then( (res) => {
          if (res.data.code === 200) {
						let roomkitResult = res.data.data;
						console.log(roomkitResult)
						//把房间信息存入数据库
						classRoomApi.saveRoom(this.class_id, subject, roomkitResult.room_id, this.$store.state.user.uid, roomkitResult.begin_timestamp, 1,'','进行中').then( (res) => {
							if (res.data.code === 200) {
								this.snackbar = true;
								this.notification = '成功';
								this.snackbarColor = 'green';
								this.$socket.emit('classcreated', this.class_id)	
								this.theClass = {
									id: res.data.data.insertId,
									class_id: this.class_id,
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
				classRoomApi.deleteRoomFromDb(theClass.id).then( (res) => {
					if (res.data.code === 200) {
						this.snackbar = true;
						this.notification = '删除成功';
						this.snackbarColor = 'green';
						this.$socket.emit('classdeleted', this.class_id)
						this.getClass();
						//从educloud删除课堂
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
				})
			},
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
      }
		}
	}
</script>