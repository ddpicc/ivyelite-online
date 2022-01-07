<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
					<v-col cols="12" sm="3">
						<v-card
							class="mx-auto"
							max-width="400"
						>
							<v-toolbar
								flat
								color="titlegreen accent-4"
								dark
							>
								<v-toolbar-title>课程筛选</v-toolbar-title>
							</v-toolbar>

							<v-card-text>
								<span class="text-h6 mb-2">
									上课状态
								</span>

								<v-chip-group
									v-model="classStatus"
									column
									active-class="green--text text--accent-4"
									mandatory
								>
									<v-chip
										outlined
										filter
									>
										全部
									</v-chip>
									<v-chip
										outlined
										filter
									>
										开课中
									</v-chip>
									<v-chip
										outlined
										filter
									>
										已结课
									</v-chip>
								</v-chip-group>
							</v-card-text>

							<v-card-text>
								<span class="text-h6 mb-2">
									课程分类
								</span>

								<v-chip-group
									v-model="classType"
									column
									active-class="green--text text--accent-4"
									mandatory
									@change="typeFilter(classType)"
								>
									<v-chip
										filter
										outlined
									>
										全部
									</v-chip>
									<v-chip
										filter
										outlined
									>
										GRE
									</v-chip>
									<v-chip
										filter
										outlined
									>
										GMAT
									</v-chip>
								</v-chip-group>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" sm="8">
						<v-card>
							<v-toolbar
								flat
								color="titlegreen accent-4"
								dark
							>
								<v-toolbar-title>课程筛选</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-list three-line>
									<v-list-item
										v-for="(item, i) in searching"
										:key="i"
										ripple
										class="ma-4"
										@click="() => {}"
									>
										<v-img
											:src="item.cover_url"
											class="mr-4"
											max-width="164"
										></v-img>

										<v-list-item-content>
											<span
												class="text-uppercase font-weight-regular text-caption"
												v-text="item.comment"
											></span>

											<div v-text="item.name"></div>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
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
	import courseApi from '../../api/courseApi'
  export default {
    data: () => ({
			classStatus: 0,
			classType: 0,
			classes: [],
			searching: null,

			snackbar: false,
      snackbarColor: '',
      notification: '',

		}),

		methods: {
			typeFilter: function(classType){
				//this.searching = 
				if(classType == 0){
					this.searching = this.classes
				}else if(classType == 1){
					this.searching = this.classes.filter(item => {
						return item.comment.indexOf('GRE') > -1
					})
				}else if(classType == 2){
					this.searching = this.classes.filter(item => {
						return item.comment.indexOf('GMAT') > -1
					})
				}
			},

			getAllCourses: function(){
				courseApi.getAllClasses().then( (res) => {
          if (res.data.code === 200) {
						this.classes = res.data.data;
						this.searching = this.classes;
					}else{
						this.snackbar = true;
						this.notification = '发生错误，请重试或联系管理员';
						this.snackbarColor = 'red';
					}
        })
			},

			next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
		},

		mounted: function(){
			this.getAllCourses();
			let timer = setInterval(() => {
				this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
			},8000)
		}
	}
</script>