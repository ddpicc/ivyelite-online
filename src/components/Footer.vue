<template>
  <footer class="footer">
    <!-- Start Footer Top -->
      <div class="container">
        <div class="row row1">
          <div class="col-sm-9 clearfix">
            <div class="foot-nav">
              <h3>About US</h3>
              <ul>
                <li><a href="#">Edumart Group of Institutions</a></li>
                <li><a href="#">Our Institutes and Universities</a></li>
                <li><a href="#">Management Team</a></li>
                <li><a href="#">Approval and Recognition</a></li>
                <li><a href="#">Evaluation & Assessments</a></li>
              </ul>
            </div>
            <div class="foot-nav">
              <h3>Courses</h3>
              <ul>
                <li><a href="#">2 Year Online MBA General</a></li>
                <li><a href="#">Certificate in HRM</a></li>
                <li><a href="#">Certificate in Marketing</a></li>
                <li><a href="#">Certificate in Finance</a></li>
                <li><a href="#">Corporate Programs</a></li>
              </ul>
            </div>
            <div class="foot-nav">
              <h3>Why Edumart</h3>
              <ul>
                <li><a href="#">Introduction</a></li>
                <li><a href="#">Learn Everywhere</a></li>
                <li><a href="#">Modern Curriculum</a></li>
                <li><a href="#">Placement Assistance</a></li>
                <li><a href="#">Eligibility</a></li>
              </ul>
            </div>
            <div class="foot-nav">
              <h3>Learning Experience</h3>
              <ul>
                <li><a href="#">Course Preparations</a></li>
                <li><a href="#">Guided lessons</a></li>
                <li><a href="#">Interactive Practice</a></li>
                <li><a href="#">Virtual Classroom</a></li>
                <li><a href="#">Peer Learning</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="footer-logo hidden-xs"><a href="index.html"><img src="../assets/images/footer-logo.png" class="img-responsive" alt=""></a></div>
            <p>Copyright &copy; 2020.Company name All rights reserved.</p>
            <ul class="terms clearfix">
              <li><a href="#">TERMS OF USE</a></li>
              <li><a href="#">PRIVACY POLICY</a></li>
              <li><a href="#">SITEMAP</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Footer Top --> 
      <!-- Start Footer Bottom -->
      <div class="bottom">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="connect-us">
                <h3>Connect with Us</h3>
                <ul class="follow-us clearfix">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="subscribe">
                <h3>Subscribe  with Us</h3>
                <div class="input-wrapper clearfix">
                  <input name="email" type="text" placeholder="enter your email address">
                  <button><span class="icon-mail-icon"></span></button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="instagram">
                <h3>@INSTAGRAM</h3>
                <ul class="clearfix">
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img1.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img2.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img3.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img4.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img5.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                  <li><a href="#">
                    <figure><img src="../assets/images/insta-img6.jpg" class="img-responsive" alt=""></figure>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Footer Bottom --> 
  </footer>
</template>
<style scoped>
/* ================================================== */
/* 05. footer */
/* ================================================== */
	.container{
	  width: 1170px;
  }
.footer {
	display: block;
	background: #234a66;
}
.footer .row1 {
	display: block;
	padding-top: 60px;
	padding-bottom: 60px;
}
.footer .foot-nav {
	display: block;
	width: 25%;
	padding-right: 15px;
	float: left;
}
 ul{
  padding-left: 0px;  
}
.footer .foot-nav ul li {
	display: block;
	line-height: 22px;
}
.footer h3 {
	display: block;
	padding-bottom: 20px;
	font-family: 'texgyreadventorbold';
	font-size: 16px;
	color: #fff;
	text-transform: uppercase;
}
.footer .foot-nav ul li a {
	font-size: 12px;
	color: #8eb6d6;
}
.footer .foot-nav ul li a:hover {
	color: #fff;
}
.footer .footer-logo {
	display: block;
	padding-bottom: 30px;
	margin-bottom: 20px;
	border-bottom: 1px #3e6583 solid;
}
.footer p {
	font-size: 12px;
	color: #8eb6d6;
}
.footer p span {
	color: #fff;
	font-weight: 700;
}
.footer ul.terms {
	display: block;
}
.footer ul.terms li {
	display: block;
	float: left;
	font-size: 11px;
	font-weight: 700;
}
.footer ul.terms li:after {
	display: inline-block;
	padding: 0 4px;
	content: " I ";
}
.footer ul.terms li:last-child:after {
	display: none;
}
.footer ul.terms li:first-child {
	padding-left: 0px;
}
.footer ul.terms li a {
	color: #8eb6d6;
}
.footer ul.terms li a:hover {
	color: #fff;
}
.footer .bottom {
	display: block;
	padding: 40px 0;
	background: #2e5f85;
}
.footer .connect-us {
	display: block;
	padding: 14px 0 18px 0;
	width: 95%;
	border-right: 1px #537d9e solid;
}
.footer ul.follow-us {
	display: block;
}
.footer ul.follow-us li {
	display: block;
	padding: 0 4px;
	float: left;
}
.footer ul.follow-us li:first-child {
	padding-left: 0px;
}
.footer ul.follow-us li a {
	width: 40px;
	height: 40px;
	display: block;
	border: 2px #4d87b5 solid;
	border-radius: 50%;
	font-size: 18px;
	line-height: 38px;
	text-align: center;
	color: #fff;
}
.footer ul.follow-us li a:hover {
	background: #1c7bc3;
	border-color: #1c7bc3;
}
.footer .subscribe {
	display: block;
	padding: 14px 58px 18px 0;
	width: 95%;
	border-right: 1px #537d9e solid;
}
.footer .subscribe .input-wrapper {
	display: block;
	background: #fff;
	border-radius: 4px;
}
.footer .subscribe input {
	width: 82%;
	height: 44px;
	padding: 0 15px;
	border: none;
	background: none;
	font-size: 12px;
	color: #7da6c6;
}
.footer .subscribe button {
	width: 46px;
	height: 44px;
	float: right;
	border: none;
	background: #2c97ea;
	font-size: 20px;
	color: #fff;
	border-radius: 0 4px 4px 0;
	transition: all 0.3s ease 0s;
}
.footer .subscribe button:hover {
	background: #ff8500;
}
.footer .instagram {
	display: block;
	padding: 14px 58px 18px 0;
}
.footer .instagram ul {
	display: block;
}
.footer .instagram ul li {
	width: 16.6%;
	padding: 0 2.5px;
	float: left;
}
.footer .instagram ul li a:hover {
	opacity: 0.7;
}
a.scroll-top {
	width: 44px;
	height: 44px;
	line-height: 40px;
	color: #fff;
	border-radius: 50%;
	text-align: center;
	position: fixed;
	display: none;
	right: 20px;
	bottom: 20px;
	background-color: #17a43b;
}
a.scroll-top:hover {
	background: #ff9600;
}
</style>