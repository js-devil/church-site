<template>
    <div>
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
                        <div class="about_image"><img src="../../assets/images/about.jpg" alt=""></div>
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

        <!-- Mission -->
        <Belief></Belief>
    
        <!-- Team -->

        <div class="team">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section_title_container text-center">
                            <div class="section_title">our team</div>
                            <div class="section_subtitle">It’s leader of a Christian congregation</div>
                        </div>
                    </div>
                </div>
                <div class="row team_row">
                    
                    <!-- Team Item -->
                    <div class="col-lg-4 team_col">
                        <div class="team_item">
                            <div class="team_image">
                                <img src="../../assets/images/team_1.jpg" alt="">
                                <div class="team_overlay d-flex flex-column align-items-center justify-content-end text-center trans_200">
                                    <div class="team_overlay_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sollicitudin arcu. Nullam sagittis ipsum aliquet gravida mattis.</p>
                                    </div>
                                    <div class="team_overlay_contact">
                                        <ul>
                                            <li>
                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                <div> : infodeercreative@gmail.com</div>
                                            </li>
                                            <li>
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                                <div>: +1234 800 8080</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="team_content text-center">
                                <div class="team_name">lena landrut</div>
                                <div class="team_title">Volunteer</div>
                            </div>
                        </div>
                    </div>

                    <!-- Team Item -->
                    <div class="col-lg-4 team_col">
                        <div class="team_item">
                            <div class="team_image">
                                <img src="../../assets/images/team_2.jpg" alt="">
                                <div class="team_overlay d-flex flex-column align-items-center justify-content-end text-center trans_200">
                                    <div class="team_overlay_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sollicitudin arcu. Nullam sagittis ipsum aliquet gravida mattis.</p>
                                    </div>
                                    <div class="team_overlay_contact">
                                        <ul>
                                            <li>
                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                <div> : infodeercreative@gmail.com</div>
                                            </li>
                                            <li>
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                                <div>: +1234 800 8080</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="team_content text-center">
                                <div class="team_name">Josh Brighton</div>
                                <div class="team_title">Lead Pastor</div>
                            </div>
                        </div>
                    </div>

                    <!-- Team Item -->
                    <div class="col-lg-4 team_col">
                        <div class="team_item">
                            <div class="team_image">
                                <img src="../../assets/images/team_3.jpg" alt="">
                                <div class="team_overlay d-flex flex-column align-items-center justify-content-end text-center trans_200">
                                    <div class="team_overlay_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sollicitudin arcu. Nullam sagittis ipsum aliquet gravida mattis.</p>
                                    </div>
                                    <div class="team_overlay_contact">
                                        <ul>
                                            <li>
                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                <div> : infodeercreative@gmail.com</div>
                                            </li>
                                            <li>
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                                <div>: +1234 800 8080</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="team_content text-center">
                                <div class="team_name">arnold pascal</div>
                                <div class="team_title">Pastor</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Mission -->
        <Motto></Motto>
    </div>
</template>

<script>
import Motto from './Motto.vue'
import Belief from './Belief.vue'

export default {
    components:{
		Motto, Belief
    },
    beforeMount() {
		this.$store.commit("showSubMenu", true);
	}
}
</script>

<style scoped>
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
8. Team
*********************************/

.team
{
	padding-top: 97px;
	padding-bottom: 34px;
	background: #FFFFFF;
}
.team_row
{
	margin-top: 52px;
}
.team_col
{
	margin-bottom: 30px;
}
.team_item
{
	width: 100%;
	padding-bottom: 30px;
}
.team_image
{
	width: 100%;
}
.team_image img
{
	max-width: 100%;
}
.team_name
{
	font-size: 20px;
	color: #181818;
	text-transform: uppercase;
	font-weight: 700;
	margin-top: 29px;
}
.team_title
{
	font-family: 'Old Standard TT', serif;
	font-size: 16px;
	font-style: italic;
	color: #b10707;
	margin-top: 4px;
}
.team_overlay
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(177,7,7,0.5);
	color: #FFFFFF;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 44px;
	visibility: hidden;
	opacity: 0;
}
.team_item:hover .team_overlay
{
	visibility: visible;
	opacity: 1;
}
.team_overlay_text p
{
	font-size: 14px;
	color: #FFFFFF;
	line-height: 1.57;
}
.team_overlay_contact
{
	margin-top: 15px;
}
.team_overlay_contact ul li i,
.team_overlay_contact ul li div
{
	display: inline-block;
}
.team_overlay_contact ul li div
{
	font-size: 14px;
	color: #FFFFFF;
}
</style>