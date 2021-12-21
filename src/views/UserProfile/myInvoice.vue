<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-4"></div>
				<v-row justify="center">
					<v-col cols="3">
						<profile-left></profile-left>
					</v-col>
          <v-col cols="9">
            <v-card>
              <v-card-text>
                购买记录
                
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