<template>
  <v-container fluid >
		<v-row justify="center">
			<v-col cols="10">
				<div class="py-md-12 py-sm-8 py-4"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
          <v-col cols="9">
            <v-card>
              <v-card-text>
                我的讨论
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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