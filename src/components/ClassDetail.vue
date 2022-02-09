<template>
<body>

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
    name: 'ClassDetailSection',
    data: () => ({

    }),
  }
</script>
<style scoped>

  .c_details_list .list li {
    margin-bottom: 10px; 
  }
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