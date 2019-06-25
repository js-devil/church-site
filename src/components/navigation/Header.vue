<template>
    <div>
		<div class="header">
			<!-- <header class="header">    -->
			<!-- Top Bar -->
			<div class="top_bar">
				<div class="top_bar_background"></div>
				<div class="top_bar_container">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
									<ul class="top_bar_contact_list">
										<li>
											<i class="fas fa-envelope" aria-hidden="true"></i>
											<div>Email: 4sqtejuoshomedia@gmail.com</div>
										</li>
										<li>
											<i class="fas fa-phone" aria-hidden="true"></i>
											<div>Call Us: +234 8023 09 4298</div>
										</li>
									</ul>
									<div class="top_bar_social ml-auto">
										<ul class="social_list">
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
				</div>				
			</div>

			<!-- Header Content -->
			<div class="header_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="header_content d-flex flex-row align-items-center justify-content-start">
								<div class="logo_container">
									<router-link to="">
										<div class="logo"><img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/foursquare.jpg" alt=""></div>
										<div class="logo_text">Foursquare <br> Tejuosho</div>
									</router-link>
								</div>
								<nav class="main_nav_contaner ml-auto">
									<ul class="main_nav">
										<li ref="home" class="active"><router-link to="/">Home</router-link></li>
										<li ref="about"><router-link to="/about">About</router-link></li>
										<li ref="sermons"><router-link to="/sermons">Sermons</router-link></li>
										<li ref="events"><router-link to="/events">Events</router-link></li>
										<li ref="contact"><router-link to="/contact">Contact</router-link></li>
									</ul>
									<div class="search_button"><i class="fas fa-search" aria-hidden="true"></i></div>
								</nav>

								<!-- Hamburger -->

								<div class="hamburger ml-auto">
									<i class="fas fa-bars" aria-hidden="true"></i>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Header Search Panel -->
			<div class="header_search_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="header_search_content d-flex flex-row align-items-center justify-content-end">
								<form action="#" class="header_search_form">
									<input type="search" class="search_input" placeholder="Search" required="required">
									<button class="header_search_button d-flex flex-column align-items-center justify-content-center">
										<i class="fas fa-search" aria-hidden="true"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>			
			</div>			
		<!-- </header> -->		
		</div>
		
		<subMenu></subMenu>

		<div class="menu d-flex flex-column align-items-center justify-content-center">
			<div class="menu_content">
				<div class="cross_1 d-flex flex-column align-items-center justify-content-center"><img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/foursquare.jpg" alt=""></div>
				<form action="#" class="menu_search_form">
					<input type="search" class="menu_search_input" placeholder="Search" required="required">
					<button class="menu_search_button d-flex flex-column align-items-center justify-content-center">
					<i class="fas fa-search" aria-hidden="true"></i>
				</button>
				</form>
				<nav class="menu_nav">
					<ul>
						<li class="active"><router-link to="/">Home</router-link></li>
						<li><router-link to="/about">About</router-link></li>
						<li><router-link to="/sermons">Sermons</router-link></li>
						<li><router-link to="/events">Events</router-link></li>
						<li><router-link to="/contact">Contact</router-link></li>
					</ul>
				</nav>
			</div>
			<div class="menu_close"><i class="fas fa-times" aria-hidden="true"></i></div>
		</div>
	</div>
</template>

<script>
var self;
import subMenu from '../dashboard/Submenu.vue'
    
export default {
	components:{
		subMenu,
	},
    methods:{
		addActive(){
			let url = String(this.$route.name).toLowerCase()
			
			const navbar = document.querySelectorAll(".main_nav li");
			for (let i = 0; i < navbar.length; i++) {
				const element = navbar[i];
				if(element.classList.contains('active')){
					element.classList.remove("active");
				}
			}

			if(url.includes('about')){
				this.$refs.about.classList.add("active");
			}
			else if(url.includes('sermons')){
				this.$refs.sermons.classList.add("active");
			}else if(url.includes('events')){
				this.$refs.events.classList.add("active");
			}else if(url.includes('contact')){
				this.$refs.contact.classList.add("active");
			}
			else{
				this.$refs.home.classList.add("active");				
			}
		},
        setHeader(){
            if($(window).scrollTop() > 100){
                $('.header').css('top', '-40px');
            }
	  
	  else{
                $('.header').css('top', '0');
            }
        },
        initHeaderSearch(){
            if($('.search_button').length){
                $('.search_button').on('click', function(){
                    if($('.header_search_container').length){
                        $('.header_search_container').toggleClass('active');
                    }
                });
            }
		},
		initMenu(){
            if($('.hamburger').length){
                if($('.menu').length){
                    $('.hamburger').on('click', function(){
                        if(menuActive){
                            this.closeMenu();
                        }
                        else{
                            this.openMenu();
                        }
                    });	

                    $('.menu_close').on('click', function(){
                        if(menuActive){
                            this.closeMenu();
                        }
                        else{
                            this.openMenu();
                        }
                    });
                }
            }
        },

        closeMenu(){
            $('.menu').removeClass('active');
            menuActive = false;
        },
        openMenu(){
            $('.menu').addClass('active');
            menuActive = true;
        },
    },
    mounted(){
        this.setHeader();
		this.initHeaderSearch();
		this.addActive()
        self = this;

        $(window).on('resize', function(){
            self.setHeader();
        });

        $(document).on('scroll', function(){
            self.setHeader();
        });
	},
	watch:{
		$route(){
			this.addActive()
		}
	}
}

</script>

<style scoped>
/*********************************
3. Header
*********************************/

.header
{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	box-shadow: 0px 5px 20px rgba(0,0,0,0.05);
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.header.scrolled
{
	top: -40px;
}

/*********************************
3.1 Top Bar
*********************************/

.top_bar
{
	width: 100%;
}
.top_bar_background
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    background-repeat: no-repeat;
    background-image:url('https://res.cloudinary.com/tejuosho4sq/image/upload/v1560359459/top_bar.jpg');
	background-size: cover;
	background-position: center center;
}
.top_bar_container
{
	width: 100%;
	height: 100%;
}
.top_bar_content
{
	width: 100%;
	height: 40px;
}
.top_bar_contact_list li
{
	display: inline-block;
}
.top_bar_contact_list li i,
.top_bar_contact_list li > div
{
	display: inline-block;
	font-size: 12px;
	color: #FFFFFF;
}
.top_bar_contact_list li > div
{
	margin-left: 5px;
}
.top_bar_contact_list li:not(:last-child)
{
	margin-right: 21px;
}
.social_list
{
	margin-right: -10px;
}
.social_list li
{
	display: inline-block;
}
.social_list li:not(:last-child)
{
	margin-right: 6px;
}
.social_list li a i
{
	font-size: 12px;
	color: #FFFFFF;
	padding: 10px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.social_list li:hover a i
{
	color: #b10707;
}

/*********************************
3.2 Header Content
*********************************/

.header_container
{
	width: 100%;
	background: #FFFFFF;
}
.header_content
{
	height: 120px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.header.scrolled .header_content
{
	height: 80px;
}

/*********************************
3.3 Logo
*********************************/

.logo,
.logo_text
{
	display: inline-block;
}
.logo
{
	width: 60px;
	height: 60px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.logo img
{
    max-width: 100%;
    
}
.logo_text
{
	font-size: 25px;
	font-weight: 700;
	text-transform: uppercase;
	line-height: 1;
	color: #181818;
	vertical-align: middle;
	margin-left: 7px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.header.scrolled .logo
{
	width: 40px;
	height: 40px;
}
.header.scrolled .logo_text
{
	font-size: 24px;
}

/*********************************
3.4 Main Nav
*********************************/

.main_nav,
.search_button
{
	display: inline-block;
}
.main_nav li
{
	display: inline-block;
}
.main_nav li:not(:last-child)
{
	margin-right: 60px;
}
.main_nav li a
{
	font-size: 16px;
	font-weight: 600;
	color: #181818;
	text-transform: uppercase;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.main_nav li a:hover,
.main_nav li.active a
{
	color: #b10707;
}
.search_button
{
	margin-left: 46px;
	cursor: pointer;
}
.search_button i
{
	font-size: 16px;
	color: #181818;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.search_button:hover i
{
	color: #b10707;
}
.header_search_form
{
	display: block;
	position: relative;
	width: 40%;
}
.header_search_container
{
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	background: #b10707;
	z-index: -1;
	opacity: 0;
	-webkit-transition: all 400ms ease;
	-moz-transition: all 400ms ease;
	-ms-transition: all 400ms ease;
	-o-transition: all 400ms ease;
	transition: all 400ms ease;
}
.header_search_container.active
{
	bottom: -73px;
	opacity: 1;
}
.header_search_content
{
	width: 100%;
	height: 73px;
}
.search_input
{
	width: 100%;
	height: 40px;
	border: none;
	outline: none;
	padding-left: 20px;
}
.header_search_button
{
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 100%;
	border: none;
	outline: none;
	cursor: pointer;
}

/*********************************
3.5 Hamburger
*********************************/

.hamburger
{
	display: none;
	cursor: pointer;
	margin-right: 10px
}
.hamburger i
{
	font-size: 20px;
	color: #353535;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.hamburger:hover i
{
	color: #eb4141;
}

/*********************************
4. Menu
*********************************/

.menu
{
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: rgba(255,255,255,0.98);
	z-index: 101;
	visibility: hidden;
	opacity: 0;
	-webkit-transition: all 400ms ease;
	-moz-transition: all 400ms ease;
	-ms-transition: all 400ms ease;
	-o-transition: all 400ms ease;
	transition: all 400ms ease;
}
.menu.active
{
	visibility: visible;
	opacity: 1;
}
.menu_search_form
{
	display: block;
	position: relative;
	margin-top: 50px;
}
.menu_search_input
{
	width: 400px;
	height: 40px;
	background: #c0c0c0;
	border: none;
	border-radius: 3px;
	outline: none;
	padding-left: 20px;
}
.menu_search_button
{
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	border: none;
	outline: none;
	cursor: pointer;
	background: #c0c0c0;
}
.menu_nav
{
	margin-top: 50px;
	text-align: center;
}
.menu_nav ul li:not(:last-child)
{
	margin-bottom: 6px;
}
.menu_nav ul li a
{
	font-size: 18px;
	font-weight: 700;
	color: #353535;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.menu_nav ul li a:hover
{
	color: #eb4141;
}
.menu_close
{
	position: absolute;
	top: 100px;
	right: 100px;
	cursor: pointer;
}
.menu_close i
{
	font-size: 20px;
}
.menu_close:hover i
{
	color: #eb4141;
}

</style>