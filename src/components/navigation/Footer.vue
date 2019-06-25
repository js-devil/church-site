<template>
    <div class="footer">
        <!-- <footer class="footer"> -->
		<div class="footer_background parallax-window"></div>
		<div class="container">
			<div class="row">

				<!-- Footer - Contact -->
				<div class="col-lg-4 footer_col">
					<div class="footer_column footer_contact_column">
						<div class="footer_logo_container">
							<!-- <div class="footer_logo"><img src="../../assets/images/logo_2.png" alt=""></div> -->
							<div class="footer_logo_text">Reach Us</div>
						</div>
						<div class="footer_contact">
							<ul>
								<li><div><i class="fas fa-map-marker" aria-hidden="true"></i></div><span>17/19, Jacob Street, Off Martins Street, along Ojuelegba Road, Tejuosho, Yaba, Lagos</span></li>
								<li><div><i class="fas fa-phone" aria-hidden="true"></i></div><span>+234 802 3094 298</span></li>
								<li><div><i class="fas fa-envelope" aria-hidden="true"></i></div><span>4sqtejuoshomedia@gmail.com</span></li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Footer - Links -->
				<div class="col-lg-4 footer_col">
					<div class="footer_column footer_links">
						<div class="footer_title">useful links</div>
						<ul class="footer_links_list">
							<li><router-link to="/about"><i class="fa fa-angle-double-right" aria-hidden="true"></i> About us</router-link></li>
							<li><router-link to="/contact"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Contact</router-link></li>
							<li><router-link to="/sermons"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Sermons</router-link></li>
							<li><router-link to="/events"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Events</router-link></li>
						</ul>
					</div>
				</div>

				<!-- Footer - Subscribe -->
				<div class="col-lg-4 footer_col">
					<div class="footer_column footer_subscribe">
						<div class="footer_title">subscribe</div>
						<div class="footer_text">Join our weekly email newsletter to receive news, events and other announcements about what is going on at our church.</div>
						<div class="footer_form_container">
							<form action="#" class="footer_form">
								<div>
									<input type="email" class="subscribe_input" placeholder="Enter your email" required="required">
									<button class="subscribe_button trans_200" type="submit">subscribe</button>
								</div>
							</form>
						</div>
					</div>
				</div>

			</div>
			<div class="row copyright_row">
				<div class="col">
					<div class="copyright_container d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
						<div class="copyright">
                            Copyright &copy; {{new Date().getFullYear()}}
                            All rights reserved | This template is made with <i class="fas fa-heart" style="color: #b10707" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </div>
						<div class="footer_social ml-lg-auto">
							<ul>
								<li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fab fa-pinterest" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	<!-- </footer> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/*********************************
15. Footer
*********************************/

.footer
{
	display: block;
	position: relative;
}
.footer_background
{
	position: absolute;
	top: 0;
	left: 0;
    width: 100%;
    background: url('../../assets/images/footer.jpg');
	height: 100%;
}
.footer_contact_column
{
	padding-top: 54px;
}
.footer_logo,
.footer_logo_text
{
	display: inline-block;
}
.footer_logo
{
	width: 60px;
	height: 60px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.footer_logo img
{
	max-width: 100%;
}
.footer_logo_text
{
	font-size: 30px;
	font-weight: 700;
	text-transform: uppercase;
	line-height: 0.75;
	color: #FFFFFF;
	vertical-align: middle;
	margin-left: 7px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.footer_contact
{
	margin-top: 33px;
}
.footer_contact ul li:not(:last-child)
{
	margin-bottom: 7px;
}
.footer_contact ul li div
{
	display: inline-block;
	width: 14px;
	height: 14px;
}
.footer_contact ul li div i
{
	color: #b10707;
}
.footer_contact ul li span
{
	font-size: 14px;
	color: #FFFFFF;
	margin-left: 7px;
}
.footer_links
{
	padding-top: 70px;
	padding-left: 70px;
	padding-right: 70px;
}
.footer_title
{
	font-size: 18px;
	color: #FFFFFF;
	line-height: 0.75;
	font-weight: 600;
	text-transform: uppercase;
}
.footer_links_list
{
	columns: 2;
	-webkit-columns: 2;
  	-moz-columns: 2;
  	margin-top: 32px;
}
.footer_links_list li
{
	margin-bottom: 11px;
}
.footer_links_list li a
{
	font-size: 14px;
	color: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.footer_links_list li a:hover
{
	color: #b10707;
}
.footer_links_list li a i
{
	color: #b10707 !important;
}
.footer_subscribe
{
	padding-top: 70px;
}
.footer_text
{
	font-size: 14px;
	color: #FFFFFF;
	line-height: 1.71;
	margin-top: 32px;
}
.footer_form_container
{
	margin-top: 30px;
}
.subscribe_input
{
	width: 100%;
	height: 40px;
	border: solid 1px rgba(235,235,235,0.15);
	border-radius: 3px;
	background: transparent;
	padding-left: 22px;
	outline: none;
	color: #FFFFFF;
}
.subscribe_input::-webkit-input-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.subscribe_input:-moz-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.subscribe_input::-moz-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
} 
.subscribe_input:-ms-input-placeholder
{ 
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.subscribe_input::input-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.subscribe_button
{
	position: absolute;
	top: 0;
	right: 0;
	width: 100px;
	height: 40px;
	background: #FFFFFF;
	border: none;
	outline: none;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	font-size: 12px;
	color: #b10707;
	font-weight: 700;
	text-transform: uppercase;
	cursor: pointer;
}
.subscribe_button:hover
{
	background: #b10707;
	color: #FFFFFF;
}
.copyright_row
{
	margin-top: 58px;
}
.copyright_container
{
	width: 100%;
	height: 68px;
	border-top: solid 1px rgba(235,235,235,0.15);
}
.footer_social ul
{
	margin-right: -10px;
}
.footer_social ul li
{
	display: inline-block;
}
.footer_social ul li:not(:last-child)
{
	margin-right: 8px;
}
.footer_social ul li a i
{
	font-size: 15px;
	padding: 10px;
	color: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.footer_social ul li a i:hover
{
	color: #b10707;
}
</style>