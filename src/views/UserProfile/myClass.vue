<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
			<v-col cols="3">
				<profile-left></profile-left>
			</v-col>
      <v-col cols="8">
        <v-card>
					<v-card-text>
						<v-tabs>
							<v-tab>正在上课</v-tab>
							<v-tab>即将开课</v-tab>
							<v-tab>已结课</v-tab>
						</v-tabs>
						<v-divider class="mb-4"></v-divider>
						<v-list three-line>
							<v-list-item
								v-for="(item, i) in searching"
								:key="i"
								ripple
								@click="prepareCourse()"
							>
								<v-img
									:src="item.image"
									class="ma-2"
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
	import profileLeft from "../../components/ProfileLeft.vue"
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

		components: {
			profileLeft
		},

		methods: {
      prepareCourse: function() {
        this.$router.push({ path: '/course/prepare' });
      },
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