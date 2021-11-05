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
	</v-container>
</template>

<script>
	import roomKitApi from '../../api/roomKitApi'
	import eduCloudApi from '../../api/eduCloudKitApi'
	export default {
		data: () => ({
			courseTitle: '',
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
		}),

		methods: {
			createClass: async function(){
				let token;
				if(this.$store.state.roomkit.sdk_token){
					token = this.$store.state.roomkit.sdk_token;
				}else{
					let tokenRes = await roomKitApi.getSDKToken();
					token = tokenRes.data.sdk_token;
				}

				let createClassParams = {
					uid: 12313,
					subject: 'test 汽车',
					begin_timestamp: new Date().getTime() + 1000 * 600,
					duration: 30,
					pid: 1511,
					host: {
						uid: 12313
					},
					attendees: [
						{
							uid: 12313
						}
					],
					secret_id: 2000049,
					sdk_token: token,
					verify_type: 3,
					device_id: roomKitApi.getDeviceId()
				}
				const classResult = await eduCloudApi.createClass(createClassParams);
				if(classResult.ret.code != 0){
					//创建房间失败
				}else{
					this.getClass();
				}
			},

			getClass: async function(){
				let token;
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
				this.theClass = classResult.data.room_list[0]
				//this.theClass = Object.assign({},classResult.data.room_list[0]);
			},

			attendClass: function(){
				
			}
		},

		mounted: function(){
			this.getClass();
		}
	}
</script>