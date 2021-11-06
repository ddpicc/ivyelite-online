<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="8">
				<v-card
					v-if="theClass"
					color="#385F73"
					dark
					flat
					class="elevation-12 mt-4"
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
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-fab-transition>
					</v-card-title>

					<v-card-subtitle>{{theClass.room_id}}</v-card-subtitle>

					<v-card-actions>
						<v-btn @click="attendClass()" text>
							加入课堂
						</v-btn>
					</v-card-actions>
				</v-card>
				<v-card class='mt-6'>									
					<v-list subheader>
						<v-subheader>设置</v-subheader>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title>课堂名称 : </v-list-item-title>
								
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
	import roomKitApi from '../../api/roomKitApi'
	export default {
		data: () => ({
			courseTitle: '',
			courseId: null,
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
			snackbar: false,
      snackbarColor: '',
      notification: '',
		}),

		methods: {
			createClass: async function(){
				const subject = this.courseTitle;
				const room_type = 1;
				const duration = 90;
				const host = {
					uid: this.$store.state.user.uid
				};
				
				roomKitApi.createClass(subject, room_type, duration, host).then( (res) => {
          if (res.data.code === 200) {
						let createResult = res.data.data;
					}
        })
			},

			getClass: async function(){
				/* let token;
				if(this.$store.state.roomkit.sdk_token){
					token = this.$store.state.roomkit.sdk_token;
				}else{
					let tokenRes = await roomKitApi.getSDKToken();
					token = tokenRes.data.sdk_token;
				}

				let getClassParams = {
					begin_timestamp: new Date().getTime() - 12 * 60 * 60 * 1000,
					device_id: roomKitApi.getDeviceId(),
					uid: 12313,
					sdk_token: token,
					secret_id: 2000049,
					status: 3,
					verify_type: 3,
				}
				const classResult = await eduCloudApi.getClassList(getClassParams);
				this.theClass = classResult.data.room_list[0] */
				//this.theClass = Object.assign({},classResult.data.room_list[0]);
			},

			attendClass: function(){
				
			}
		},

		mounted: function(){
			if(!this.courseId){
				this.snackbar = true;
				this.notification = '你还没有选择课程，请先选择一个课程';
				this.snackbarColor = 'red';
				setTimeout( () => {this.$router.push({path: '/myprofile/teacherclass'});}, 3000);
			}else{
				this.getClass();
			}			
		},

		created() {
			if(this.$route.query.courseId){
        this.courseId = this.$route.query.courseId;
				this.courseTitle = this.$route.query.courseTitle;
      }
		}
	}
</script>