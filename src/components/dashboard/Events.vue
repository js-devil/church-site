<template>
    <div>
        <!-- Upcoming Event -->

        <div class="upcoming">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section_title_container text-center">
                            <div class="section_title">upcoming event</div>
                            <div class="section_subtitle">Experience God's Presence</div>
                        </div>
                    </div>
                </div>
                <div class="row about_row">
                    <div class="col-lg-6">
                        <div class="upcoming_image"><img src="../../assets/images/upcoming.jpg" alt=""></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="event_container d-flex flex-md-row flex-column align-items-start justify-content-start">
                            <div class="event_date">
                                <div class="d-flex flex-column align-items-center justify-content-center">
                                    <div class="event_day">18</div>
                                    <div class="event_month">mar</div>
                                </div>
                            </div>
                            <div class="event_content">
                                <div class="event_title"><a href="#">exploring the Christian faith</a></div>
                                <ul class="event_row">
                                    <li>
                                        <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                        <span>08:00 AM - 11:00 AM</span>
                                    </li>
                                    <li>
                                        <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                        <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="event_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gestas ante eget risus varius, sed euismod tellu suscipit. Aenean condimentum nulla, vitae imperdiet urna varius volutpat. Mauris lobotis comodo lana mollis. Integer ut neque eu augue hendrerit efficitur quis utona turpis uisques nibh ac magna faucibus lacinia bibendum nibh ac magna.</p>
                        </div>

                        <!-- Event Timer -->
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

        <!-- Events -->

        <div class="events">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section_title_container text-center">
                            <div class="section_title">list of events</div>
                            <div class="section_subtitle">Events held and scheduled by us</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="events_items d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-lg-between justify-content-center flex-wrap">

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_2.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">19</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">To Love and to Cherish, The Wedding</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_3.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">20</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">The Christian Community in  America</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_4.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">20</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">On-Campus Young Family Small Group</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_5.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">21</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">Parent Child Dedication Workshop</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_6.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">21</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">Group Leader Interest Meeting</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Event -->
                <div class="events_item">
                    <div class="events_item_image"><img src="../../assets/images/event_7.jpg" alt=""></div>
                    <div class="events_item_content d-flex flex-row align-items-start justfy-content-start">
                        <div class="event_date">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <div class="event_day">22</div>
                                <div class="event_month">mar</div>
                            </div>
                        </div>
                        <div class="event_content">
                            <div class="event_title"><a href="#">Wedding of KARYN and NICHOLAS</a></div>
                            <ul class="event_row">
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/calendar.png" alt=""></div>
                                    <span>08:00 AM - 11:00 AM</span>
                                </li>
                                <li>
                                    <div class="event_icon"><img src="../../assets/images/location.png" alt=""></div>
                                    <span>1195 Lobortis Rd, New Orleans, New Hampshire</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Page Nav -->
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="page_nav">
                            <ul>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Motto></Motto>
    </div>
</template>

<script>
import Motto from './Motto.vue'

export default {
    components:{
        Motto
    },
    data(){
        return{
            days: null, hours: null, minutes: null, seconds: null
        }
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
    },
    mounted(){
        this.initTimer()
    }
}
</script>

<style scoped>
/*********************************
6. Upcoming Event
*********************************/

.upcoming
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
.upcoming_image
{
	width: 100%;
}
.upcoming_image img
{
	max-width: 100%
}
.event
{
	width: 100%;	
}
.event_container
{
	border-radius: 6px;
	padding-left: 30px;
	padding-top: 18px;
}
.event_date
{
	background: #b10707;
}
.event_date > div
{
	width: 70px;
	height: 70px;
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
	padding-left: 35px;
}
.event_title
{
	margin-top: -5px;
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
.event_timer_container
{
	margin-top: 19px;
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
.event_text
{
	padding-left: 30px;
	padding-right: 30px;
	margin-top: 25px;
}

/*********************************
10. Events
*********************************/

.events
{
	width: 100%;
	background: #f7f7f7;
	padding-top: 97px;
	padding-bottom: 100px;
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
	padding-bottom: 60px;
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
.page_nav
{
	text-align: center;
	margin-top: 10px;
}
.page_nav ul li
{
	display: inline-block;
	width: 50px;
	height: 50px;
	background: #e1e1e1;
	border-radius: 3px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.page_nav ul li.active,
.page_nav ul li:hover
{
	background: #b10707;
}
.page_nav ul li.active a,
.page_nav ul li:hover a
{
	color: #FFFFFF;
}
.page_nav ul li:not(:last-child)
{
	margin-right: 15px;
}
.page_nav ul li a
{
	display: block;
	font-size: 18px;
	font-weight: 600;
	color: #181818;
	line-height: 50px;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
</style>