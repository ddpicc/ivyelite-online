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
					<v-card-title class="text-h6">
            个人信息
          </v-card-title>
					<v-card-text>
						<v-form>
							<v-row>
								<v-col cols="6" class="d-flex">
									<v-subheader>姓名</v-subheader>
									<v-text-field
										solo
										dense
										label="输入密码"
										type="password"
										v-model="password"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>性别</v-subheader>
									<v-text-field
										solo
										dense
										label="输入密码"
										type="password"
										v-model="password"
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
					</v-card-text>
        </v-card>
				<v-card>
					<v-card-title class="text-h6">
            账号信息
          </v-card-title>
					<v-card-text>
						<v-form>
							<v-row>
								<v-col cols="6" class="d-flex">
									<v-subheader>姓名</v-subheader>
									<v-text-field
										solo
										dense
										label="输入密码"
										type="password"
										v-model="password"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="d-flex">
									<v-subheader>性别</v-subheader>
									<v-text-field
										solo
										dense
										label="输入密码"
										type="password"
										v-model="password"
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
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
			
		}),

		components: {
			profileLeft
		},

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