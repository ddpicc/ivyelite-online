<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="3">
        <v-card
					class="mx-auto"
					max-width="400"
				>
					<v-toolbar
						flat
						color="deep-purple accent-4"
						dark
					>
						<v-toolbar-title>课程筛选</v-toolbar-title>
					</v-toolbar>

					<v-card-text>
						<h2 class="text-h6 mb-2">
							上课状态
						</h2>

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
								即将开课
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
						<h2 class="text-h6 mb-2">
							课程分类
						</h2>

						<v-chip-group
							v-model="classType"
							column
							active-class="green--text text--accent-4"
							mandatory
							@change="typeFilter()"
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
      <v-col cols="8">
        <v-card>
					<v-toolbar
						flat
						color="deep-purple accent-4"
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
										v-text="item.summary"
									></span>

									<div v-text="item.name"></div>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
	import courseApi from '../../api/courseApi'
  export default {
    data: () => ({
			classStatus: 0,
			classType: 0,
			courses: [],
		}),

		methods: {
			typeFilter: function(){
				//this.searching = 
			},

			getAllCourses: function(){
				courseApi.getAllCourses().then( (res) => {
          if (res.data.code === 200) {
						this.courses = res.data.data;
					}
        })
			}
		},

		computed: {
      searching () {
        if (!this.search) return this.courses

        const search = this.search.toLowerCase()

        return this.courses.filter(item => {
          const text = item.name.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },

		mounted: function(){
			this.getAllCourses();
		}
	}
</script>