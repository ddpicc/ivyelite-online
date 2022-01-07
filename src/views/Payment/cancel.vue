<template>
  <v-container fluid style="max-width: 1280px">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat class="elevation-12">
              <v-card-text>
                <div>支付取消，如需继续支付，请重新选择课程，发起支付</div>
                <router-link to="/" style="color:blue">点击跳转回到首页</router-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>