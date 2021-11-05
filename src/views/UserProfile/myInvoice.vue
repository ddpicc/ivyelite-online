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
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"  
  export default {
    components: {	profileLeft	},

    data: () => ({
			
		}),

		methods: {

		},

		computed: {

    },

		mounted: function(){
			
		}
	}
</script>