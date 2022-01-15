<template>
<body>
<section class="banner_area">
            <div class="banner_inner d-flex align-items-center">
            	<div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
				<div class="container">
					<div class="banner_content text-center">
						<h2>Course Details</h2>
						<div class="page_link">
							<a href="index.html">Home</a>
							<a href="courses.html">Course</a>
							<a href="course-details.html">Course Details</a>
						</div>
					</div>
				</div>
            </div>
        </section>
         <section class="course_details_area p_120">
        	<div class="container">
        		<div class="row course_details_inner">
        			<div class="col-lg-8">
                <v-tabs
                  color="deep-purple accent-4"
                  
                >
                  <v-tab>Objectives</v-tab>
                  <v-tab>Eligibility</v-tab>
                  <v-tab>Course Outline</v-tab>
                  <v-tab>Comments</v-tab>
                  <v-tab-item>
                  <div class="tab-content">
                  </div>
                  </v-tab-item>
                </v-tabs>
              </div>
              <div class="col-lg-4">
        				<div class="c_details_list">
        					<ul class="list">
        						<li><a href="#">Trainer’s Name <span>George Mathews</span></a></li>
        						<li><a href="#">Course Fee <span>$230</span></a></li>
        						<li><a href="#">Available Seats <span>15</span></a></li>
        						<li><a href="#">Schedule <span>2.00 pm to 4.00 pm</span></a></li>
        					</ul>
        					<a class="main_btn" href="#">Enroll the Course</a>
        				</div>
        			</div>
        		</div>
          </div>
         </section>
</body>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>
<style scoped>
  .banner_area {
  position: relative;
  z-index: 1;
  min-height: 300px; }
  .banner_area .banner_inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 300px;
    background: #04091e;
    z-index: 1; }
    .banner_area .banner_inner .overlay {
      background: url(../../assets/images/courses/banner.jpg) no-repeat scroll center center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 125%;
      bottom: 0;
      z-index: -1;
      opacity: .6; }
    .banner_area .banner_inner .banner_content h2 {
      color: #fff;
      font-size: 48px;
      font-family: "Playfair Display", serif;
      margin-bottom: 0px;
      font-weight: bold; }
    .banner_area .banner_inner .banner_content .page_link a {
      font-size: 14px;
      color: #fff;
      font-family: "Roboto", sans-serif;
      margin-right: 32px;
      position: relative; }
      .banner_area .banner_inner .banner_content .page_link a:before {
        content: "\e87a";
        font-family: 'Linearicons-Free';
        position: absolute;
        right: -25px;
        top: 50%;
        transform: translateY(-50%); }
      .banner_area .banner_inner .banner_content .page_link a:last-child {
        margin-right: 0px; }
        .banner_area .banner_inner .banner_content .page_link a:last-child:before {
          display: none; }
      .banner_area .banner_inner .banner_content .page_link a:hover {
        color: #4dbf1c; }

        .c_details_list .list li {
  margin-bottom: 10px; }
  .c_details_list .list li a {
    background: #f9f9ff;
    display: block;
    line-height: 40px;
    padding: 0px 18px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #777777; }
    .c_details_list .list li a span {
      float: right; }
  .c_details_list .list li:first-child a span {
    color: #4dbf1c; }
.c_details_list .main_btn {
  display: block; }
  .main_btn {
  display: inline-block;
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
  transition: all 300ms linear 0s; }
  .main_btn:hover {
    background: transparent;
    color: #4dbf1c; }
    .list {
  list-style: none;
  margin: 0px;
  padding: 0px; }

a {
  text-decoration: none;
  transition: all 0.3s ease-in-out; }
  a:hover, a:focus {
    text-decoration: none;
    outline: none; }
</style>