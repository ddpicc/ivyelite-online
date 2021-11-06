<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="2">
				<profile-left></profile-left>
			</v-col>
      <v-col cols="7">
        <v-card>
					<v-card-text>
						购买记录
            <v-btn @click="test()">test roomkit</v-btn>
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import classApi from '../../api/roomKitApi'
  export default {
    components: {	profileLeft	},

    data: () => ({
			
		}),

		methods: {
      test: function(){
        classApi.testRoomkit()
      }
		},

		computed: {

    },

		mounted: function(){
			
		}
	}
</script>