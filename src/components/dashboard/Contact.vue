<template>
    <div>
        <!-- Contact -->
        <div class="contact">
            <div class="container">
                <div class="row">

                    <!-- Contact Info -->
                    <div class="col-lg-6">
                        <div class="contact_info">
                            <div class="contact_title">contact us</div>
                            <div class="contact_info_content">
                                <ul>
                                    <li><div><i class="fa fa-map-marker" aria-hidden="true"></i></div><span style="top: 12px; position: relative;">17/19, Jacob Street, Off Martins Street, <br> along Ojuelegba Road, Tejuosho, Yaba, Lagos</span></li>
                                    <li><div><i class="fa fa-phone" aria-hidden="true"></i></div><span>+234 802 3094 298</span></li>
                                    <li><div><i class="fa fa-envelope" aria-hidden="true"></i></div><span>4sqtejuoshomedia@gmail.com</span></li>
                                    <!-- <li><div><i class="fa fa-globe" aria-hidden="true"></i></div><span>www.mimosanchurch.com</span></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="col-lg-6 contact_form_col">
                        <div class="contact_form">
                            <div class="contact_title">keep in touch</div>

                            <!-- Contact Form -->
                            <div class="contact_form_container">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="text" class="form_input" placeholder="Your Name" required="required">
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="email" class="form_input email_input" placeholder="Your Email" required="required">
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form_text" placeholder="Your Message" required="required"></textarea>
                                            <button type="submit" class="form_submit_button">send comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Map -->

        <!-- <div class="contact_map">
            
            <div class="map">
                <div id="google_map" class="google_map">
                    <div class="map_container">
                        <div id="map"></div>
                    </div>
                </div>
            </div>

        </div> -->
    </div>
</template>


<script>

export default {
    methods:{
        initGoogleMap(){
            
        }
    },
    mounted(){
        this.initGoogleMap()
    }
}
</script>

<style scoped>
/*********************************
6. Contact
*********************************/

.contact
{
	padding-top: 100px;
	padding-bottom: 100px;
	background: #FFFFFF;
}
.contact_title
{
	font-size: 24px;
	font-weight: 700;
	color: #181818;
	text-transform: uppercase;
}
.contact_info_content
{
	margin-top: 21px;
}
.contact_info_content ul li:not(:last-child)
{
	margin-bottom: 20px;
}
.contact_info_content ul li div,
.contact_info_content ul li span
{
	display: inline-block;
}
.contact_info_content ul li div
{
	width: 40px;
	height: 40px;
	background: #ebebeb;
	text-align: center;
	border-radius: 50%;
}
.contact_info_content ul li div i
{
	line-height: 40px;
	color: #b10707;
}
.contact_info_content ul li span
{
	font-size: 16px;
	color: #7c7c7c;
	margin-left: 30px;
}
.contact_form_container
{
	margin-top: 21px;
}
.form_input
{
	width: 100%;
	height: 40px;
	border: solid 1px #cccccc;
	outline: none;
	padding-left: 20px;
	font-size: 14px;
}
.form_text
{
	width: 100%;
	height: 100px;
	border: solid 1px #cccccc;
	outline: none;
	margin-top: 30px;
	padding-left: 20px;
	font-size: 14px;
	padding-top: 12px;
}
.form_input::-webkit-input-placeholder,
.form_text::-webkit-input-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.form_input:-moz-placeholder,
.form_text:-moz-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.form_input::-moz-placeholder,
.form_text::-moz-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
} 
.form_input:-ms-input-placeholder,
.form_text:-ms-input-placeholder
{ 
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.form_input::input-placeholder,
.form_text::input-placeholder
{
	font-size: 14px !important;
	font-weight: 400 !important;
	color: #c0c0c0 !important;
}
.form_submit_button
{
	width: 170px;
	height: 40px;
	cursor: pointer;
	background: #b10707;
	color: #FFFFFF;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	border: none;
	outline: none;
	border-radius: 3px;
	margin-top: 24px;
}

/*********************************
6. Contact Map
*********************************/

.contact_map
{
	width: 100%;
}
.map
{
	width: 100%;
}
.google_map
{
	width: 100%;
	height: 500px;
}
.map_container
{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#map
{
	width: 100%;
	height: calc(100% + 30px);
}
</style>