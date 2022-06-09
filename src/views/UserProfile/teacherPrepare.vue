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
							</v-card-title>

							<v-card-subtitle>{{theClass.room_id}}</v-card-subtitle>

							<v-card-actions>
								<v-btn @click="attendClass(theClass.id,theClass.room_id,theClass.host_id,theClass.begin_timestamp)" text>
									加入课堂
								</v-btn>
							</v-card-actions>
						</v-card>
            <v-card
							v-else
							color="#385F73"
							dark
							flat
							class="elevation-12 mb-6"
						>
							<v-card-title class="text-h5">
								当前还没有可用的课堂，等待管理员创建课堂
							</v-card-title>
						</v-card>
						<v-card>									
							<v-list subheader>
								<v-subheader>设置</v-subheader>

								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>进入房间时将麦克风开启</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										<v-switch
											inset
											v-model="ismic_open"
										></v-switch>
									</v-list-item-icon>
								</v-list-item>

								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>进入房间时将摄像头开启</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										<v-switch
											inset
											v-model="iscamera_open"
										></v-switch>
									</v-list-item-icon>
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

			//host_id来自保存的房间信息，是创建房间的管理员的id，跟老师自己的id可能不同
			attendClass: function(id,room_id,host_id,begin_timestamp){
				let urlParams = {
					id: id,
					room_id: room_id,
					host_id: host_id,
					role: 1,
					begin_timestamp: begin_timestamp,
					mic: this.ismic_open,
					camera: this.iscamera_open,
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