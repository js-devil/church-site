<template>
    <div class="home" v-show="showMenu">
	    <div class="home_background"></div>
		    <div class="home_content">
			    <div class="container">
				    <div class="row">
				        <div class="col d-flex flex-row align-items-center justify-content-start">
						<div class="home_title">{{pathName}}</div>
						<div class="breadcrumbs ml-auto">
							<ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li>{{pathName}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			pathName: '',
			showMenu: true,
		}
	},
	methods: {
		showSubMenu(){
			this.pathName = this.$route.name

			if(this.pathName=='Home' || this.pathName=='404'){
				this.showMenu = false
			}
			else{
				this.showMenu = true
			}
		}
	},
	mounted(){
		this.showSubMenu()		
	},
	watch:{
		$route(){
			this.showSubMenu()
		}
	},
    computed:{
        submenu() {
            return this.$store.state.submenu;
		},
    }   
}
</script>


<style scoped>
/*  */
.home
{
	width: 100%;
	height: 310px;
}
.home_background
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
    background-image:url('https://res.cloudinary.com/tejuosho4sq/image/upload/v1560432080/events.jpg');
	background-position: center center;
}
.home_content
{
	position: absolute;
	bottom: 66px;
	left: 0;
	width: 100%;
	z-index: 10;
}
.home_title
{
	font-size: 30px;
	font-weight: 700;
	color: #FFFFFF;
	line-height: 0.75;
}
.breadcrumbs ul li
{
	display: inline-block;
	position: relative;
	font-size: 18px;
	font-weight: 400;
	color: #FFFFFF;
}
.breadcrumbs ul li a
{
	font-size: 18px;
	font-weight: 400;
	color: #FFFFFF;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.breadcrumbs ul li a:hover
{
	color: #b10707;
}
.breadcrumbs ul li:not(:last-child)::after
{
	display: inline-block;
	content: '/';
	margin-left: 4px;
}
</style>
