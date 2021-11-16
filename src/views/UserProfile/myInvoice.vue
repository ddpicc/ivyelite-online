<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="2">
				<profile-left></profile-left>
			</v-col>
      <v-col cols="6">
        <v-card>
					<v-card-text>
						购买记录
            
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  import classApi from '../../api/classRoomApi'
  export default {
    components: {	profileLeft	},

    data: () => ({
			
		}),

		methods: {
      test: function(){
        
      }
		},

		computed: {

    },

		mounted: function(){
			
		}
	}
</script>