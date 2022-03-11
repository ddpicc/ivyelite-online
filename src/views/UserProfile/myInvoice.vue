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
            <v-card>
              <v-card-text>
                购买记录
                <v-list
                  subheader
                  two-line
                  dense
                >

                  <v-list-item v-for="(receipt, i) in receiptList"
                    :key="i"
                  >
                    <v-list-item-avatar class="d-none d-sm-flex">
                      <v-icon
                        class="grey lighten-1"
                        dark
                        small
                      >
                        mdi-currency-usd
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-text="receipt.name  + receipt.comment"></v-list-item-title>

                      <v-list-item-subtitle v-text="new Date(receipt.create_timestamp).toLocaleString()"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-chip
                      >
                        {{receipt.amount/100}}
                      </v-chip>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
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
  import receiptApi from '../../api/receiptApi'
  export default {
    components: {	profileLeft	},
    data: () => ({
			receiptList: null,
		}),

		methods: {
      getAllReceipt: function(){
        receiptApi.getReceiptByUid(this.$store.state.user.uid).then(res => {
						if(res.data.code === 200) {
							this.receiptList = res.data.data
						}else{
							this.snackbar = true;
            	this.notification = '发生错误，请重试或联系管理员';
            	this.snackbarColor = 'red';
						}
					})			
      }
		},
		mounted: function(){
			this.getAllReceipt()
		}
	}
</script>