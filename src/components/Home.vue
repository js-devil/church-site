<template>
    <div>
	<!-- Home -->

	<div class="home">
		<div class="home_background"></div>
		<div class="home_content text-center">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="home_title outline">Sanctuary of His Divine Presence</div>
						<!-- <div class="home_text outline">God has revealed himself through the Bible. God has revealed himself most clearly through the gift of his Son, Jesus Christ. God makes himself known personally to each believer through the work of the Holy Spirit.</div> -->
						<!-- <div class="button home_link"><a href="#">join with us</a></div> -->
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Event -->

	<div class="event">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="event_container d-flex flex-lg-row flex-column align-items-center justify-content-start">
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">18</div>
							<div class="event_month">mar</div>
						</div>
						<div class="event_content">
							<div class="event_title">UPCOMING EVENT: <a href="#">exploring the Christian faith</a></div>
							<ul class="event_row">
								<li>
									<div class="event_icon"><img src="../assets/images/calendar.png" alt=""></div>
									<span>08:00 AM - 11:00 AM</span>
								</li>
								<li>
									<div class="event_icon"><img src="../assets/images/location.png" alt=""></div>
									<span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
								</li>
							</ul>
						</div>
						<div class="event_timer_container ml-lg-auto">
							<ul class="event_timer">
								<li><div class="event_num">{{days}}</div><div class="event_ss">day</div></li>
								<li><div class="event_num">{{hours}}</div><div class="event_ss">hrs</div></li>
								<li><div class="event_num">{{minutes}}</div><div class="event_ss">min</div></li>
								<li><div class="event_num">{{seconds}}</div><div class="event_ss">sec</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- About -->

	<div class="about">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title_container text-center">
						<div class="section_title">welcome to our church</div>
						<div class="section_subtitle">It's the start of an amazing journey of faith</div>
					</div>
				</div>
			</div>
			<div class="row about_row">
				<div class="col-lg-6">
					<div class="about_image"><img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1560444073/churchwelcome.jpg" alt=""></div>
				</div>
				<div class="col-lg-6">
					<div class="about_content">
						<div class="about_text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gestas ant eget risus varius, euismod tellus suscipit. Aenean condimentum cond mentum ulla, vitae imperd urna varius volutpa. Mauris lobotis comodo mollis nolle. In vetib  velit ifermentum empor euismod. Cras gravida maximus ligula ac posuere. Maecenas auctor interdum varius sollicitudin orci. Phasellus quis volutpat ex, id maximus magna. Sed elit posuere augue, tincid unt non ipsum sit amet, maximus sagittis lectus. Quisque tincidunt, antevis pharetra sodales, non ante magna tempus nulla, sed molestie orci magna quis tellus. Nulla facilisi sit amet libero sed condimentum.</p>
						</div>
						<div class="button about_button"><a href="#">read story</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Sermons -->

	<div class="sermons">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title_container text-center">
						<div class="section_title">sermons today</div>
						<div class="section_subtitle">Our lives in praising God</div>
					</div>
				</div>
			</div>
			<div class="row sermons_row">
				<div class="col-lg-4 sermon_col">
					<div class="card">
						<img class="card-img-top" src="../assets/images/sermon_1.jpg" alt="">
						<div class="card-body text-center">
							<div class="card-title sermon_title"><a href="sermon.html">Sermons on Prayer:  Running Well, FinIshing Strong</a></div>
							<div class="card-text sermon_info_container">
								<div class="sermon_info">
									<div class="sermon_info_title">Preacher: </div>
									<ul class="sermon_info_list">
										<li><a href="#">Josh Brighton</a></li>
									</ul>
								</div>
								<div class="sermon_info">
									<div class="sermon_info_title">Categories: </div>
									<ul class="sermon_info_list">
										<li><a href="#">God, </a></li>
										<li><a href="#">Prayer</a></li>
									</ul>
								</div>
								<div class="sermon_links">
									<ul>
										<li><a href="#"><i class="fas fa-link" aria-hidden="true"></i></a></li>
										
										<li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fas fa-download" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 sermon_col">
					<div class="card">
						<img class="card-img-top" src="../assets/images/sermon_2.jpg" alt="">
						<div class="card-body text-center">
							<div class="card-title sermon_title"><a href="sermon.html">Sermons on Faith: A Life Worth Living, A new purpose</a></div>
							<div class="card-text sermon_info_container">
								<div class="sermon_info">
									<div class="sermon_info_title">Preacher: </div>
									<ul class="sermon_info_list">
										<li><a href="#">Julia Amber</a></li>
									</ul>
								</div>
								<div class="sermon_info">
									<div class="sermon_info_title">Categories: </div>
									<ul class="sermon_info_list">
										<li><a href="#">God, </a></li>
										<li><a href="#">Faith</a></li>
									</ul>
								</div>
								<div class="sermon_links">
									<ul>
										<li><a href="#"><i class="fas fa-link" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fas fa-download" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 sermon_col">
					<div class="card">
						<img class="card-img-top" src="../assets/images/sermon_3.jpg" alt="">
						<div class="card-body text-center">
							<div class="card-title sermon_title"><a href="sermon.html">Sermons for Communion Services: Come to the Table</a></div>
							<div class="card-text sermon_info_container">
								<div class="sermon_info">
									<div class="sermon_info_title">Preacher: </div>
									<ul class="sermon_info_list">
										<li><a href="#">Ashley Young</a></li>
									</ul>
								</div>
								<div class="sermon_info">
									<div class="sermon_info_title">Categories: </div>
									<ul class="sermon_info_list">
										<li><a href="#">God, </a></li>
										<li><a href="#">Communion</a></li>
									</ul>
								</div>
								<div class="sermon_links">
									<ul>
										<li><a href="#"><i class="fas fa-link" aria-hidden="true"></i></a></li>
										
										<li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fas fa-download" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<!-- Belief -->
	<Belief></Belief>

	<!-- Events -->

	<div class="events">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title_container text-center">
						<div class="section_title">upcoming events</div>
						<div class="section_subtitle">Experience God's Presence</div>
					</div>
				</div>
			</div>
		</div>
		<div class="events_items d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-lg-between justify-content-center">

			<!-- Event -->
			<div class="events_item">
				<div class="events_item_image"><img src="../assets/images/event_1.jpg" alt=""></div>
				<div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
					<div class="event_date d-flex flex-column align-items-center justify-content-center">
						<div class="event_day">18</div>
						<div class="event_month">mar</div>
					</div>
					<div class="event_content">
						<div class="event_title"><a href="#">exploring the Christian faith</a></div>
						<ul class="event_row">
							<li>
								<div class="event_icon"><img src="../assets/images/calendar.png" alt=""></div>
								<span>08:00 AM - 11:00 AM</span>
							</li>
							<li>
								<div class="event_icon"><img src="../assets/images/location.png" alt=""></div>
								<span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Event -->
			<div class="events_item">
				<div class="events_item_image"><img src="../assets/images/event_2.jpg" alt=""></div>
				<div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
					<div class="event_date d-flex flex-column align-items-center justify-content-center">
						<div class="event_day">18</div>
						<div class="event_month">mar</div>
					</div>
					<div class="event_content">
						<div class="event_title"><a href="#">To Love and to Cherish, The Wedding</a></div>
						<ul class="event_row">
							<li>
								<div class="event_icon"><img src="../assets/images/calendar.png" alt=""></div>
								<span>08:00 AM - 11:00 AM</span>
							</li>
							<li>
								<div class="event_icon"><img src="../assets/images/location.png" alt=""></div>
								<span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- Event -->
			<div class="events_item">
				<div class="events_item_image"><img src="../assets/images/event_3.jpg" alt=""></div>
				<div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
					<div class="event_date d-flex flex-column align-items-center justify-content-center">
						<div class="event_day">18</div>
						<div class="event_month">mar</div>
					</div>
					<div class="event_content">
						<div class="event_title"><a href="#">The Christian Community in America</a></div>
						<ul class="event_row">
							<li>
								<div class="event_icon"><img src="../assets/images/calendar.png" alt=""></div>
								<span>08:00 AM - 11:00 AM</span>
							</li>
							<li>
								<div class="event_icon"><img src="../assets/images/location.png" alt=""></div>
								<span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>

	<!-- Donations -->

	<div class="donations">
		<div class="donations_background parallax-window"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="donations_content">
						<div class="donation_title">Offering and Tithes</div>
						<div class="donation_text">
							<p class="quote_quote">“Every man according as he purposeth in his heart, [so let him give]; not grudgingly, or of necessity: for God loveth a cheerful giver.”</p>
                            <p class="quote_source">II Corinthians 9:7</p>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="donation_details_container">
						<div class="donation_details">
							<div class="donation_funds">
								<div class="donation_funds_title">Account Name: </div>
								<div class="donations_funds_value">Foursquare Gospel Church Tejuosho</div>
							</div>
                            <div class="donation_funds">
								<div class="donation_funds_title">Account Number: </div>
								<div class="donations_funds_value">0036619922</div>
							</div>
                            <div class="donation_funds">
								<div class="donation_funds_title">Bank Name: </div>
								<div class="donations_funds_value">Access Bank PLC</div>
							</div>
                            <!-- 0036619922 -->
							<!-- <div class="donation_progress_container">
								<div class="donation_progress_outer">
									<div class="donation_progress" style="width: 50%;"><div class="donation_progress_value">70%</div></div>
								</div>
								<div class="donation_info d-flex flex-row align-items-center justify-content-start">
									<div class="donation_current">Raised: <span>$5,000</span></div>
									<div class="donation_goal ml-auto">Goal: <span>$7,100</span></div>
								</div>
								<div class="button donation_button"><a href="#">donate now</a></div>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Quote -->
	<Motto></Motto>

	<!-- Gallery -->

	<div class="gallery d-flex flex-row flex-wrap align-items-start justify-content-start">
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_1.jpg">
				<img src="../assets/images/gallery_1.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_2.jpg">
				<img src="../assets/images/gallery_2.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_3.jpg">
				<img src="../assets/images/gallery_3.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_4.jpg">
				<img src="../assets/images/gallery_4.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_5.jpg">
				<img src="../assets/images/gallery_5.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_6.jpg">
				<img src="../assets/images/gallery_6.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_7.jpg">
				<img src="../assets/images/gallery_7.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_8.jpg">
				<img src="../assets/images/gallery_8.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_9.jpg">
				<img src="../assets/images/gallery_9.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
		<div class="gallery_item">
			<a class="colorbox" href="../assets/images/gallery_10.jpg">
				<img src="../assets/images/gallery_10.jpg" alt="https://unsplash.com/@mantashesthaven">
			</a>
		</div>
	</div>

	<!-- Latest News -->

	<div class="latest_news">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title_container text-center">
						<div class="section_title">latest news</div>
						<div class="section_subtitle">Be part of a community of people experiencing God together.</div>
					</div>
				</div>
			</div>
			<div class="row news_row">

				<!-- News Post -->
				<div class="col-xl-4 col-lg-6 news_post_col">
					<div class="news_post">
						<div class="news_image"><img src="../assets/images/news_1.jpg" alt=""></div>
						<div class="news_post_content">
							<div class="news_post_title">
								<a href="blog_single.html">Find out why a priest prays around her hometown</a>
							</div>
							<div class="news_post_meta">
								<ul>
									<li><i class="fas fa-user" aria-hidden="true"></i><a href="#">Josh Brighton</a></li>
									<li><i class="fas fa-calendar-o" aria-hidden="true"></i><a href="#">08 MAR, 2018</a></li>
									<li><i class="fas fa-comment" aria-hidden="true"></i><a href="#">15</a></li>
								</ul>
							</div>
							<div class="news_post_text">
								<p>Integer luctus diam acto scerisque consectetur. Vimus euismod nec lacus sit amet. Aenean interdus mid vitae blandit  porta. Quisque dignissim commodo congue efficitur...</p>
							</div>
						</div>
					</div>
				</div>

				<!-- News Post -->
				<div class="col-xl-4 col-lg-6 news_post_col">
					<div class="news_post">
						<div class="news_image"><img src="../assets/images/news_2.jpg" alt=""></div>
						<div class="news_post_content">
							<div class="news_post_title">
								<a href="blog_single.html">Moderator joins Pope Francis in call to prayer for peace</a>
							</div>
							<div class="news_post_meta">
								<ul>
									<li><i class="fas fa-user" aria-hidden="true"></i><a href="#">Ashley Young</a></li>
									<li><i class="fas fa-calendar-o" aria-hidden="true"></i><a href="#">08 MAR, 2018</a></li>
									<li><i class="fas fa-comment" aria-hidden="true"></i><a href="#">12</a></li>
								</ul>
							</div>
							<div class="news_post_text">
								<p>Integer luctus diam acto scerisque consectetur. Vimus euismod nec lacus sit amet. Aenean interdus mid vitae blandit  porta. Quisque dignissim commodo congue efficitur...</p>
							</div>
						</div>
					</div>
				</div>

				<!-- News Post -->
				<div class="col-xl-4 col-lg-6 news_post_col">
					<div class="news_post">
						<div class="news_image"><img src="../assets/images/news_3.jpg" alt=""></div>
						<div class="news_post_content">
							<div class="news_post_title">
								<a href="blog_single.html">Church plays a major role in tackling loneliness</a>
							</div>
							<div class="news_post_meta">
								<ul>
									<li><i class="fas fa-user" aria-hidden="true"></i><a href="#">Josh Brighton</a></li>
									<li><i class="fas fa-calendar-o" aria-hidden="true"></i><a href="#">07 MAR, 2018</a></li>
									<li><i class="fas fa-comment" aria-hidden="true"></i><a href="#">10</a></li>
								</ul>
							</div>
							<div class="news_post_text">
								<p>Integer luctus diam acto scerisque consectetur. Vimus euismod nec lacus sit amet. Aenean interdus mid vitae blandit  porta. Quisque dignissim commodo congue efficitur...</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
    </div>
</template>

<script>
import Motto from './dashboard/Motto.vue'
import Belief from './dashboard/Belief.vue'

export default {
    data(){
        return{
            days: null, hours: null, minutes: null, seconds: null
        }
    },
	components:{
		Motto, Belief
	},
    methods:{
        initTimer(){
            if($('.event_timer').length){
                // Uncomment line below and replace date
                var target_date = new Date("June 20, 2019").getTime();

                // comment lines below
                // var date = new Date();
                // date.setDate(date.getDate() + 3);
                // var target_date = date.getTime();
                //----------------------------------------

                setInterval(() => {
                    var current_date = new Date().getTime();
                    var seconds_left = (target_date - current_date) / 1000;
                
                    this.days = parseInt(seconds_left / 86400);
                    seconds_left = seconds_left % 86400;
                    
                    this.hours = parseInt(seconds_left / 3600);
                    seconds_left = seconds_left % 3600;
                    
                    this.minutes = parseInt(seconds_left / 60);
                    this.seconds = parseInt(seconds_left % 60);
                
                }, 1000);
			}				
        },
        initLightbox(){
            if($('.gallery_item').length)
            {
                $('.colorbox').colorbox(
                {
                    rel:'colorbox',
                    photo: true,
                    maxWidth: '90%'
                });
            }
        }
    },
    mounted(){
        this.initTimer()
        this.initLightbox()
	},
	beforeMount() {
		this.$store.commit("showSubMenu", true);
	}
}
</script>

<style scoped>
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

/*********************************
5. Home
*********************************/

.home
{
	width: 100%;
	height: 100vh;
}
.home_background
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
    height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
    background-position: center center;
    background-image: url('../assets/images/index.jpg')
}
.home_content
{
	position: absolute;
	top: 40%;
	left: 0;
	width: 100%;
	z-index: 10;
}
.home_title
{
	font-size: 55px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.03em;
	color: #FFFFFF;
	line-height: 1.18;
}
.home_text
{
	font-size: 18px;
	color: #FFFFFF;
	padding-left: 70px;
	padding-right: 70px;
	margin-top: 27px;
}
.home_link
{
	margin-left: auto;
	margin-right: auto;
	margin-top: 33px;
}

/*********************************
6. Event
*********************************/

.event
{
	width: 100%;	
}
.event_container
{
	height: 160px;
	background: #f9f9f9;
	margin-top: -80px;
	border-radius: 6px;
	padding-left: 70px;
	padding-right: 35px;
}
.event_date
{
	width: 70px;
	height: 70px;
	background: #b10707;
}
.event_day
{
	font-size: 32px;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 0.75;
}
.event_month
{
	font-size: 16px;
	font-weight: 400;
	color: #FFFFFF;
	text-transform: uppercase;
	line-height: 0.75;
	margin-top: 11px;
}
.event_content
{
	padding-left: 60px;
}
.event_title,
.event_title a
{
	font-size: 18px;
	color: #181818;
	text-transform: uppercase;
	font-weight: 700;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.event_title a:hover
{
	color: #b10707;
}
.event_row
{
	margin-top: 5px;
}
.event_icon
{
	display: inline-block;
	width: 14px;
	height: 15px;
}
.event_icon i
{
	font-size: 16px;
	color: #b10707;
}
.event_row li span
{
	font-family: 'Standard', serif;
	font-style: italic;
	font-size: 12px;
	color: #7c7c7c;
	margin-left: 6px;
}
.event_row li:not(:last-child)
{
	margin-bottom: 7px;
}
.event_timer li
{
	display: inline-block;
	height: 80px;
	width: 100px;
	text-align: center;
}
.event_timer li:not(:last-child)
{
	border-right: solid 1px #e0e0e0;
}
.event_num
{
	font-size: 40px;
	font-weight: 600;
	line-height: 0.75;
	color: #181818;
	margin-top: 8px;
}
.event_ss
{
	font-size: 16px;
	line-height: 0.75;
	color: #7c7c7c;
	text-transform: uppercase;
	margin-top: 19px;
}

/*********************************
7. About
*********************************/

.about
{
	padding-top: 89px;
	padding-bottom: 100px;
	background: #FFFFFF;
}
.section_title
{
	font-size: 36px;
	font-weight: 700;
	line-height: 1.185;
	color: #181818;
	text-transform: uppercase;
}
.section_subtitle
{
	font-family: 'Old Standard TT', serif;
	font-size: 16px;
	color: #7c7c7c;
	font-style: italic;
	margin-top: 5px;
}
.about_row
{
	margin-top: 52px;
}
.about_image
{
	width: 100%;
}
.about_image img
{
	max-width: 100%
}
.about_content
{
	padding-left: 30px;
	padding-top: 11px;
}
.about_button
{
	margin-top: 31px;
}

/*********************************
8. Sermons
*********************************/

.sermons
{
	padding-top: 89px;
	padding-bottom: 100px;
	background: #f7f7f7;
}
.sermons_row
{
	margin-top: 52px;
}
.card
{
	display: block; /* IE fix for distorted card images */
	border: none;
	border-radius: 0px;
}
.card-img-top
{
	border-radius: 0px;
}
.card-body
{
	padding-top: 44px;
	padding-bottom: 50px;
}
.card-title
{
	margin-bottom: 0;
}
.sermon_info_container
{
	margin-top: 9px;
}
.sermon_info_title
{
	display: inline-block;
}
.sermon_info_list
{
	display: inline-block;
	margin-left: 4px;
}
.sermon_info_title
{
	font-family: 'Old Standard TT', serif;
	font-size: 13px;
	font-style: italic;
	color: #7c7c7c;
}
.sermon_info_list li
{
	display: inline-block;
}
.sermon_info_list li a
{
	font-family: 'Old Standard TT', serif;
	font-size: 13px;
	font-style: italic;
	color: #b10707;
}
.sermon_title a
{
	font-size: 18px;
	color: #181818;
	text-transform: uppercase;
	font-weight: 700;
	line-height: 1.33;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.sermon_title a:hover
{
	color: #b10707;
}
.sermon_links
{
	margin-top: 24px;
}
.sermon_links ul li
{
	display: inline-block;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #e6e6e6;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.sermon_links ul li:not(:last-child)
{
	margin-right: 16px;
}
.sermon_links ul li a
{
	display: block;
}
.sermon_links ul li a i
{
	line-height: 48px;
	font-size: 18px;
	color: #7c7c7c;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.sermon_links ul li:hover
{
	background: #b10707;
}
.sermon_links ul li:hover a i
{
	color: #FFFFFF;
}


/*********************************
10. Events
*********************************/

.events
{
	width: 100%;
	background: #FFFFFF;
	padding-top: 97px;
	padding-bottom: 64px;
}
.events_items
{
	padding-left: 75px;
	padding-right: 75px;
	margin-top: 52px;
}
.events_item
{
	width: calc((100% - 150px) / 3);
	padding-bottom: 30px;
}
.events_item_image
{
	width: 100%;
}
.events_item_image img
{
	max-width: 100%;
}
.events_item_content
{
	margin-top: 30px;
}
.events_item .event_content
{
	padding-left: 30px;
	margin-top: -5px;
}

/*********************************
11. Donations
*********************************/

.donations
{
	width: 100%;
	padding-top: 97px;
	padding-bottom: 94px;
}
.donations_background
{
	position: absolute;
	top: 0;
    left: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(3,3,3, 0.5), rgba(3,3,3,0.5)), url('https://res.cloudinary.com/tejuosho4sq/image/upload/v1560370105/5c62df365f086f954ae43fba_Tithing-in-the-Bible-_2.jpg');
	width: 100%;
	height: 100%;
}
.donations_content
{
	padding-top: 35px;
}
.donation_title
{
	font-size: 34px;
	font-weight: 700;
	color: #FFFFFF;
	text-transform: uppercase;
    filter: drop-shadow(0 0 3px #000);
}
.donation_info_container
{
	margin-top: 23px;
}
.donation_info_title
{
	display: inline-block;
	font-family: 'Old Standard TT', serif;
	font-size: 14px;
	font-style: italic;
	color: #c0c0c0;
}
.donation_info_list
{
	display: inline-block;
	margin-left: 4px;
}
.donation_info_list li
{
	display: inline-block;
}
.donation_info_list li a
{
	font-family: 'Old Standard TT', serif;
	font-size: 14px;
	font-style: italic;
	color: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.donation_info_list li a:hover
{
	color: #b10707;
}
.donation_text
{
	margin-top: 14px;
}
.donation_text p
{
	color: #FFFFFF;
	filter: drop-shadow(0 0 2px #000);
}
.donation_details_container
{
	width: 100%;
	padding-left: 70px;
	padding-right: 70px;
}
.donation_details
{
	background: #FFFFFF;
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 30px;
	padding-right: 30px;
}
.donation_funds_title
{
	display: inline-block;
	font-family: 'Old Standard TT', serif;
	font-style: italic;
	font-size: 20px;
	color: #181818;
	font-weight: 400;
}
.donations_funds_value
{
	display: inline-block;
	font-size: 30px;
	color: #181818;
	font-weight: 700;
	margin-left: 10px;
}
.donation_progress_container
{
	margin-top: 54px;
}
.donation_progress_outer
{
	width: 100%;
	height: 14px;
	background: #d7d7d7;
	border-radius: 7px;
}
.donation_progress
{
	height: 100%;
	background: #b10707;
	border-radius: 7px;
}
.donation_progress_value
{
	position: absolute;
	top: -38px;
	right: -25px;
	font-size: 24px;
	font-weight: 600;
	color: #181818;
	line-height: 0.75;
}
.donation_info
{
	margin-top: 13px;
}
.donation_current,
.donation_goal
{
	font-size: 18px;
	color: #7c7c7c;
}
.donation_current span,
.donation_goal span
{
	color: #181818;
	font-weight: 700;
}
.donation_button
{
	width: 100%;
	margin-top: 52px;
}

/*********************************
13. Gallery
*********************************/

.gallery_item
{
	width: 20%;
}
.gallery_item a
{
	display: block;
	width: 100%;
}
.gallery_item a img
{
	max-width: 100%;
}

/*********************************
14. Latest News
*********************************/

.latest_news
{
	padding-top: 97px;
	padding-bottom: 54px;
	background: #FFFFFF;
}
.news_row
{
	margin-top: 52px;
}
.news_post
{
	width: 100%;
}
.news_image
{
	width: 100%;
}
.news_image img
{
	max-width: 100%;
}
.news_post_title
{
	margin-top: 24px;
}
.news_post_col
{
	margin-bottom: 40px;
}
.news_post_title a
{
	font-size: 18px;
	text-transform: uppercase;
	color: #181818;
	font-weight: 700;
	line-height: 1.33;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.news_post_title a:hover
{
	color: #b10707;
}
.news_post_meta
{
	margin-top: 9px;
}
.news_post_meta ul li
{
	display: inline-block;
}
.news_post_meta ul li:not(:last-child)
{
	margin-right: 18px;
}
.news_post_meta ul li i
{
	color: #b10707;
}
.news_post_meta ul li a
{
	display: inline-block;
	font-family: 'Old Standard TT', serif;
	font-size: 12px;
	font-style: italic;
	color: #7c7c7c;
	margin-left: 6px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.news_post_meta ul li a:hover
{
	color: #b10707;
}
.news_post_text
{
	margin-top: 19px;
}
.news_post_text p
{
	font-size: 14px;
	color: #7c7c7c;
	line-height: 1.57;
}

</style>