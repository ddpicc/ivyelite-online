<template>
 <div class="container">
		<v-row justify="center">
			<v-col cols="12">
				<div class="py-md-12 py-sm-8 py-8"></div>
				<v-row justify="center">
					<v-col sm="8" cols="12">
						<v-tabs
							fixed-tabs
							class="nav nav-justified image-tabs" id="course-tabs"
						>
							<v-tab class="summer-term active">
								<li role="presentation" >
									<a href="#summer-term" aria-controls="summer-term" role="tab" data-toggle="tab" class="dark-overlay .half-opacity ">
										<span>暑假班</span>
									</a>
								</li>
							</v-tab>
							<v-tab class="summer-term active">
								<li role="presentation" >
									<a href="#summer-term" aria-controls="summer-term" role="tab" data-toggle="tab" class="dark-overlay .half-opacity ">
										<span>寒假班</span>
									</a>
								</li>
							</v-tab>
							<v-tab class="summer-term active">
								<li role="presentation" >
									<a href="#summer-term" aria-controls="summer-term" role="tab" data-toggle="tab" class="dark-overlay .half-opacity ">
										<span>周末班</span>
									</a>
								</li>
							</v-tab>
						</v-tabs>
					</v-col>
					<v-col sm="4" cols="12">
						<div class="main_btn" >GRE 全程提分班</div>
						<div class="main_btn" >GRE VIP</div>
						<div class="main_btn" >GMAT 全程提分班</div>
						<div class="main_btn" >GMAT VIP</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		
	</div>
</template>

<script>
  export default {
    data: () => ({

		}),

		methods: {

		},

		mounted: function(){

		}
	}
</script>
<style scoped>
.container{
	width: 1170px;
}
#course-tabs .summer-term {
	background-image: url(../../assets/images/courses/image-tab-bg-1.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.main_btn {
  background: #4dbf1c;
  padding: 0px 40px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 48px;
  border-radius: 0px;
  outline: none !important;
  box-shadow: none !important;
  text-align: center;
  border: 1px solid #4dbf1c;
  cursor: pointer;
  border-radius: 5px;
  transition: all 300ms linear 0s; 
}
.main_btn:hover {
  background: transparent;
  color: #4dbf1c; 
}

</style>