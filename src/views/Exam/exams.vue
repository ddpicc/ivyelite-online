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
            <v-btn @click="joinExam()">进入考试</v-btn>
          </v-col>
        </v-row>
      </v-col>    
    </v-row>
  </v-container>  
</template>

<script>
	import profileLeft from "../../components/ProfileLeft.vue"
  export default {
    data: () => ({

		}),

		components: {
			profileLeft
		},

		methods: {
      joinExam: function(){
				let examSet = {
					1: {type: 'info',ids: [1]},
					2: {type: 'question', ids: [1,2]},
				}
				this.$router.push({ path: '/exams/start', query: {examSet: examSet }});
      }
    }
  }
</script>
