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
							<v-chip
								filter
								outlined
							>
								Math
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
								@click="() => {}"
							>
								<v-img
									:src="item.image"
									class="mr-4"
									max-width="164"
								></v-img>

								<v-list-item-content>
									<span
										class="text-uppercase font-weight-regular text-caption"
										v-text="item.category"
									></span>

									<div v-text="item.title"></div>
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
  export default {
    data: () => ({
			classStatus: 0,
			classType: 0,

			items: [
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          status: 'Travel',
          category: 'Drinks',

        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          status: 'Technology',
          category: 'Phones',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'How to Get Media Mentions for Your Business',
          status: 'Media',
          category: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          status: 'Technology',
          category: 'Military',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          status: 'Travel',
          category: 'Social',
        },
      ],
		}),

		methods: {

		},

		computed: {
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },

		mounted: function(){
			
		}
	}
</script>