<template>
  <div id="app">
    <div v-if="!$route.path.includes('dashboard')">
		<Header v-if="!hideNavFor404 && !hideNavForLogin" />
    
		<transition :name="transition" mode="out-in">
			<router-view>
			<Home />
			</router-view>
		</transition>
		<Footer v-if="!hideNavFor404 && !hideNavForLogin" />
	</div>

	<div class="page-wrapper" v-else>
        <MobileHeader />
        <SideBar />
		<div class="page-container">
			<AdminHeader />
			<router-view>
				<Dashboard />
			</router-view>
		</div>
		
    </div>
  </div>
</template>

<script>
import Header from "./components/navigation/Header.vue";
import Footer from "./components/navigation/Footer.vue";
import Home from "./components/Home.vue";
import axios from 'axios'
import $ from "jquery";
import moment from 'moment'
import { mapState } from 'vuex'

// Admin
import MobileHeader from './components/admin/navs/MobileHeader.vue'
import SideBar from './components/admin/navs/Sidebar.vue'
import Dashboard from './components/admin/Home.vue'
import AdminHeader from './components/admin/components/Header.vue'


window.axios = axios
window.Endpoint = `http://localhost:5000/api/v1`
window.$ = $;
window.moment = moment
window.mapState = mapState

export default {
  name: 'App',
  data(){
	return {
		hideNavForLogin: false, hideNavFor404: false,
		transitions: ['flip', 'slide'],
		transition: '',
	}
  },
  components:{ Header, Footer, Home, MobileHeader, SideBar, Dashboard, AdminHeader },
  methods: {
	showNavMenu(){
		this.hideNavForLogin = (this.$route.name!=='Login') ? false : true
		this.hideNavFor404 = (this.$route.name!=='404') ? false : true
	},
	changeTransitions(){
		let randomNumber = Math.floor(Math.random() * this.transitions.length);
		this.transition = this.transitions[randomNumber]
	}
  },
  mounted(){
	this.changeTransitions()
	this.showNavMenu()
  },
  watch: {
	$route(){
	  this.showNavMenu()
	  this.changeTransitions()
	}
  }
}
</script>

<style>
/*slide transition*/
.slide-enter-active,
.slide-leave-active
 {
  transition: transform 0.4s ease-out;
}
.slide-enter {
  transform: translateX(-30%);
}
.slide-leave-to {
  transform: translateX(30%);
}

.flip-enter-active,
.flip-leave-active
 {
  transition: transform 0.3s ease-out;
}
.flip-enter {
  transform: rotateY(90deg);
}
.flip-leave-to {
  transform: rotateY(90deg);
}
/***********
1. Fonts
***********/

@import url('https://fonts.googleapis.com/css?family=Assistant:400,600,700,800|Old+Standard+TT:400i');

/*********************************
2. Body and some general stuff
*********************************/

*
{
	margin: 0;
	padding: 0;
	-webkit-font-smoothing: antialiased;
	-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
	text-shadow: rgba(0,0,0,.01) 0 0 1px;
}
body
{
	font-family: 'Assistant', sans-serif;
	font-size: 14px;
	font-weight: 400;
	background: #FFFFFF;
	color: #a5a5a5;
}
div
{
	display: block;
	position: relative;
	-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
	/* color: #b10707;
	color: #db5246 */
}
ul
{
	list-style: none;
	margin-bottom: 0px;
}
p
{
	font-family: 'Assistant', sans-serif;
	font-size: 16px;
	line-height: 1.75;
	font-weight: 400;
	color: #7c7c7c;
	-webkit-font-smoothing: antialiased;
	-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
	text-shadow: rgba(0,0,0,.01) 0 0 1px;
}
p a
{
	display: inline;
	position: relative;
	color: inherit;
	border-bottom: solid 1px #ffa07f;
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
p:last-of-type
{
	margin-bottom: 0;
}
a, a:hover, a:visited, a:active, a:link
{
	text-decoration: none;
	-webkit-font-smoothing: antialiased;
	-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
	text-shadow: rgba(0,0,0,.01) 0 0 1px;
}
p a:active
{
	position: relative;
	color: #FF6347;
}
p a:hover
{
	color: #FFFFFF;
	background: #ffa07f;
}
p a:hover::after
{
	opacity: 0.2;
}
h1{font-size: 48px;}
h2{font-size: 36px;}
h3{font-size: 24px;}
h4{font-size: 18px;}
h5{font-size: 14px;}
h1, h2, h3, h4, h5, h6
{
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
	text-shadow: rgba(0,0,0,.01) 0 0 1px;
}
.form-control
{
	color: #db5246;
}
section
{
	display: block;
	position: relative;
	box-sizing: border-box;
}
.clear
{
	clear: both;
}
.clearfix::before, .clearfix::after
{
	content: "";
	display: table;
}
.clearfix::after
{
	clear: both;
}
.clearfix
{
	zoom: 1;
}
.float_left
{
	float: left;
}
.float_right
{
	float: right;
}
.trans_200
{
	-webkit-transition: all 200ms ease;
	-moz-transition: all 200ms ease;
	-ms-transition: all 200ms ease;
	-o-transition: all 200ms ease;
	transition: all 200ms ease;
}
.trans_300
{
	-webkit-transition: all 300ms ease;
	-moz-transition: all 300ms ease;
	-ms-transition: all 300ms ease;
	-o-transition: all 300ms ease;
	transition: all 300ms ease;
}
.trans_400
{
	-webkit-transition: all 400ms ease;
	-moz-transition: all 400ms ease;
	-ms-transition: all 400ms ease;
	-o-transition: all 400ms ease;
	transition: all 400ms ease;
}
.trans_500
{
	-webkit-transition: all 500ms ease;
	-moz-transition: all 500ms ease;
	-ms-transition: all 500ms ease;
	-o-transition: all 500ms ease;
	transition: all 500ms ease;
}
.fill_height
{
	height: 100%;
}
.super_container
{
	width: 100%;
	overflow: hidden;
}
.prlx_parent
{
	overflow: hidden;
}
.prlx
{
	height: 130% !important;
}
.parallax-window
{
    min-height: 400px;
    background: transparent;
}
.nopadding
{
	padding: 0px !important;
}
.button
{
	width: 160px;
	height: 46px;
	text-align: center;
	background: #b10707;
	border-radius: 3px;
}
.button a
{
	display: block;
	font-size: 16px;
	color: #FFFFFF;
	line-height: 46px;
	text-transform: uppercase;
	font-weight: 700;
}


.page-container {
    background: #e5e5e5;
    padding-left: 300px;
}

@media (max-width: 991px) {
    .page-container {
        position: relative;
        top: 88px;
        padding-left: 0;
    }
}
</style>
