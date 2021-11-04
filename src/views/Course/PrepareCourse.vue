<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="8">
				<v-card flat class="elevation-12">
					<v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                加入
              </v-btn>
            </v-card-actions>
          </v-card>
					<v-btn @click="createClass()">创建课堂</v-btn>
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
			
		}),

		methods: {
			createClass: function(){
				let token = roomKitApi.getSDKToken();
				//let classResult = eduCloudApi.createCourse();
				//console.log('createClassResult',classResult)
				
			}
		},
	}
</script>