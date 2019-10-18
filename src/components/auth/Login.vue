<template>
    <div>
        <!-- <h1 class="error"></h1> -->
    <div class="w3layouts-two-grids">
        <div class="mid-class">
            <div class="img-right-side">
                <h3>Manage This Site</h3>
                <p>Add, edit, update and delete members, sermons and events</p>
                <img src="https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png" class="img-fluid" alt="">
            </div>
            <div class="txt-left-side">
                
                <router-link to="/">
                <div id="slideshow">
                    <div>
                        <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/cross.png">
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/bird.png">
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/cup.png">
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/crown.png">
                    </div>
                </div>
                </router-link>

                <form @submit.prevent="userLogin()">
                    <div> <br /> </div>

                    <div class="form-left-to-w3l">
                        <span class="fas fa-user" aria-hidden="true"></span>
                        <input type="text" v-model="username" placeholder="Username" required="" autocomplete="off">
                        <div class="clear"></div>
                    </div>

                    <div> <br /> </div>

                    <div class="form-left-to-w3l ">
                        <span class="fa fa-lock" aria-hidden="true"></span>
                        <input type="password" v-model="password" placeholder="Password" required="">
                        <div class="clear"></div>
                    </div>

                    <div> <br /> </div>

                    <div class="btnn">
                        <button type="submit" @click.prevent="userLogin()" :disabled="disabled"> {{ signText }} </button>
                    </div>
                </form>

                <div class="clear"></div>
            </div>
        </div>
    </div>
    <footer class="copyrigh-wthree">
        <p>
            Copyright &copy; {{new Date().getFullYear()}} | Jesus Christ the same yesterday, and to day, and for ever.
        </p>
    </footer>
    </div>
</template>
<script>
let self;

export default {
    data(){
        return {
            username: '', password: '',
            signText: 'Sign In', disabled: false,
        }
    },
    methods: {
        async userLogin() {
            if(this.username === '' || this.password === ''){
                Swal.fire({
                    type: "error",
                    title:"Empty Input Field",
                    text: "Please Fill all Input Fields"
                })
            } else{
                if(this.password.length > 5 && this.username.length > 5){
                    let user = new User(this.username, this.password);
                    this.disabled = true
                    this.signText = 'Signing in..'
                    user.login();
                }
                else{
                    Swal.fire({
                        type: "error",
                        title:"Wrong Input",
                        text: "Username/Password should have at least 6 characters"
                    })
                }
            }
        }
    },
    mounted(){
        self = this;

        // emblems sildeshow
        $("#slideshow > div:gt(0)").hide();

        setInterval(() => {
            $('#slideshow > div:first').fadeOut(2500)
            .next().fadeIn(2500)
            .end().appendTo('#slideshow');
        }, 5000);

    }
}

class User{
  constructor(username, password) {
    this.username = username,
    this.password = password
  }

  login() {
    let details = {
      username: this.username,
      password: this.password,
    }

    axios.post(`${Endpoint}/login`, details)
    .then((response) => {
        setTimeout(() => {
            self.$router.push('/')
        }, 3000);

        // set user variables to session storage
        sessionStorage.setItem('user', JSON.stringify(response.data.user));

        Toast.fire({
            type: 'success',
            title: response.data.message,
        })
    }).catch((error) => {
        Swal.fire({
            type: 'error',
            title: 'Login Failed',
            text: error.response.data.message,
        })

        self.disabled = false
        self.signText = 'Sign In'
    })
  }
}
</script>


<style scoped>

#slideshow {
  margin: 30px auto;
  position: relative;
  width: 150px;
  height: 150px;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

#slideshow > div {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}

/* reset */

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt,
var, b, u, i, dl, dt, dd, ol, nav ul, nav li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header,
hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
	margin: 0px;
	padding: 0px;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* start editing from here */

a {
	text-decoration: none;
}

.txt-rt {
	text-align: right;
}


/* text align right */

.txt-lt {
	text-align: left;
}


/* text align left */

.txt-center {
	text-align: center;
}


/* text align center */

.float-rt {
	float: right;
}


/* float right */

.float-lt {
	float: left;
}


/* float left */

.clear {
	clear: both;
}


/* clear float */

.pos-relative {
	position: relative;
}


/* Position Relative */

.pos-absolute {
	position: absolute;
}


/* Position Absolute */

.vertical-base {
	vertical-align: baseline;
}


/* vertical align baseline */

.vertical-top {
	vertical-align: top;
}


/* vertical align top */

nav.vertical ul li {
	display: block;
}


/* vertical menu */

nav.horizontal ul li {
	display: inline-block;
}


/* horizontal menu */

img {
	max-width: 100%;
}


/*end reset*/

html, body {
	padding: 0;
	margin: 0;
	background: #fff;
font-family: 'Open Sans', sans-serif;
}

body a {
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
	text-decoration: none;
}

body a:hover {
	text-decoration: none;
}

body a:focus, a:hover {
	text-decoration: none;
}

select, input[type="email"], input[type="text"], input[type=password], input[type="button"], input[type="submit"], textarea {
    font-family: 'Open Sans', sans-serif;   
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
}

h1, h2, h3, h4, h5, h6 {
	margin: 0;
	padding: 0;
font-family: 'Montserrat', sans-serif;
	letter-spacing: 1px;
}

p {
	margin: 0;
	padding: 0;
	letter-spacing: 1px;
font-family: 'Open Sans', sans-serif;
}

ul {
	margin: 0;
	padding: 0;
}


/*-- //Reset-Code --*/


/*--background --*/
body {
    box-sizing: border-box;
    background: #ffffff;
    min-height: 100vh;
}
.w3layouts-two-grids {
    width: 82%;
    margin: 0px auto;
    margin: 49px auto;
}
.mid-class{
display: -webkit-flex;
 display: flex; 
 -webkit-justify-content: space-between; 
justify-content: space-between; 
-webkit-flex-wrap: wrap;
flex-wrap:wrap;
}
.img-right-side{   
  text-align: center;
 flex-basis: 65%;
    -webkit-flex-basis: 65%;
    box-sizing: border-box;}

.txt-left-side {
    flex-basis: 35%;
    -webkit-flex-basis: 35%;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    box-shadow: 0px 0px 10px 1px #cccccc;
}

.img-right-side h3, .txt-left-side h2 {
	text-transform:uppercase;
    color: #000;
    letter-spacing: 0px;
}
.img-right-side p {
    font-size: 13.5px;
    color: #908c8c;
    letter-spacing: 0px;
    line-height: 24px;
    margin-bottom: 48px;
}
.form-left-to-w3l {
    display: flex;
    display: -webkit-flex;
    border: none;
    border-bottom: 1px solid #a5a2a2;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
.form-left-to-w3l input[type="text"],.form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
    -webkit-flex-basis: 90%;
    flex-basis: 90%;
    width: 100%;
    color: #000;
    border: none; 
    border-left:1px solid #a5a2a2; 
    outline: none;
    -webkit-appearance: none;
    background: transparent;
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
    box-sizing: border-box;
}
.form-left-to-w3l:hover{border-bottom:1px solid #b10707;}
.form-left-to-w3l:hover span{color:#b10707;}
.form-left-to-w3l:hover.form-left-to-w3l input[type="email"],
.form-left-to-w3l:hover.form-left-to-w3l input[type="password"],
.form-left-to-w3l:hover.form-left-to-w3l input[type="text"]
{ border-left:1px solid #b10707; }
.form-left-to-w3l span {
    -webkit-flex-basis: 15%;
    flex-basis: 15%;
    border: none;
    text-align: center;
    color: #cccccc;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
}
button[type=submit] {
    background: #b10707; 
    outline: none;
    color: #fff;
    font-weight: 600;
    padding: 10px;
    font-size: 16px !important;
    border: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%;
    border-radius: 15px;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    box-shadow: 0px 0px 8px 0px #db5246;
}
button[type=submit]:hover, a.for:hover{opacity:0.8;}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
     color:#b7b6b6;
}
::-moz-placeholder { /* Firefox 19+ */
    color:#b7b6b6;
}
:-ms-input-placeholder { /* IE 10+ */
     color:#b7b6b6;
}
:-moz-placeholder { /* Firefox 18- */
    color:#b7b6b6;
}
input.checked {
    position: absolute;
    top: 3px;
    left:0px;
    cursor: pointer;
}
.remenber-me, a.for {
    color: #757272;
    letter-spacing: 0px;
    text-transform: capitalize;
}
.remenber-me {
    margin-left: 31px;
}
.copyrigh-wthree {
    text-align: center;
}
.copyrigh-wthree p {
    color: #000;
}

/*--responsive--*/
@media(max-width:1920px){
.img-right-side h3, .txt-left-side h2 {
    font-size: 25px;
    margin-bottom: 37px;
}
.remenber-me, a.for {
    font-size: 13px;
	}
.img-right-side, .txt-left-side {
    padding: 5.5em 5em 3.5em;
}
.form-left-to-w3l input[type="text"], .form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
    font-size: 16px;
    padding-left: 25px;
}
.form-left-to-w3l {
    margin: 0px 0px 36px;
    padding-bottom: 17px;
}
.form-left-to-w3l span {
    font-size: 25px;
}
.copyrigh-wthree {
    padding: 4em 0em 4.5em;
}
}
@media(max-width:1680px){
.img-right-side h3, .txt-left-side h2 {
    font-size: 23px;
    margin-bottom: 35px;
}
.remenber-me, a.for {
    font-size: 12px;
	}
.img-right-side, .txt-left-side {
    padding: 4.5em 4.5em 3em;
}
.form-left-to-w3l input[type="text"], .form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
    font-size: 15px;
    padding-left: 23px;
}
.form-left-to-w3l {
    margin: 0px 0px 35px;
    padding-bottom: 15px;
}
.form-left-to-w3l span {
    font-size: 23px;
}
.copyrigh-wthree {
    padding: 3.5em 0em 4.5em;
}
}
@media(max-width:1600px){
.img-right-side h3, .txt-left-side h2 {
    font-size: 22px;
    margin-bottom: 34px;
}
.remenber-me, a.for {
    font-size: 11px;
	}
.img-right-side, .txt-left-side {
    padding: 3.5em 4em 2.5em;
}
.form-left-to-w3l input[type="text"], .form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
    font-size: 14px;
    padding-left: 20px;
}
.form-left-to-w3l {
    margin: 0px 0px 33px;
    padding-bottom: 14px;
}
.form-left-to-w3l span {
    font-size: 21px;
}
.copyrigh-wthree p {
    font-size: 14px;
    letter-spacing: 3px;
}
.copyrigh-wthree {
    /* padding: 3em 0em 4.5em; */
    padding: 0em 0em 2em;
}
button[type=submit] {
    font-size: 15px;
    padding: 19px 20px;
    margin: 0px 0px;
}
}
@media(max-width:1440px){
.img-right-side h3, .txt-left-side h2 {
    font-size: 21px;
	}
.img-right-side, .txt-left-side {
    padding: 3em 3.5em 2.3em;
}
.w3layouts-two-grids {
    width: 85%;
}
button[type=submit] {
    padding: 17px 20px;
}
}
@media(max-width:1366px){
.form-left-to-w3l {
    margin: 0px 0px 30px;
    padding-bottom: 13px;
}
.img-right-side h3, .txt-left-side h2 {
    margin-bottom: 29px;
}
button[type=submit] {
    margin: 50px 0px;
}
}
@media(max-width:1280px){
h1.error {
    padding-top: 49px;
    margin-bottom: 38px;
    font-size: 43px;
}
.img-right-side, .txt-left-side {
    padding: 2.5em 3em 2.3em;
}
.w3layouts-two-grids {
    width: 88%;
}
.form-left-to-w3l span {
    font-size: 18px;
}
.form-left-to-w3l input[type="text"],
.form-left-to-w3l input[type="email"], 
.form-left-to-w3l input[type="password"] {

    padding-left: 16px;
}	
button[type=submit] {
    margin: 47px 0px;
}
.img-right-side p {
    margin-bottom: 39px;
}
}
@media(max-width:1080px){
.copyrigh-wthree p {
    letter-spacing: 2px;
}	
.img-right-side, .txt-left-side {
    padding: 2.5em 2.5em 2em;
}
.form-left-to-w3l {
    margin: 0px 0px 26px;
	}
	.w3layouts-two-grids {
    width: 92%;
}
.copyrigh-wthree {
    padding: 2.5em 0em 4em;
}
h1.error {
    font-size: 41px;
}
.img-right-side h3, .txt-left-side h2 {
    margin-bottom: 27px;
}
}
@media(max-width:1050px){
	.img-right-side h3, .txt-left-side h2 {
    font-size: 20px;
}
.img-right-side p {
    margin-bottom: 33px;
}
.remenber-me, a.for {
    font-size: 11px;
}
}
@media(max-width:1024px){
.mid-class {
    flex-direction: column;
}
.w3layouts-two-grids {
    width: 51%;
}
h1.error {
    padding-top: 47px;
    margin-bottom: 9px;
	}
.form-left-to-w3l {
    margin: 0px 0px 24px;
    padding-bottom: 11px;
}
button[type=submit] {
    margin: 42px 0px;
}
}
@media(max-width:991px){
h1.error {
    font-size: 38px;
}
.img-right-side, .txt-left-side {
    padding: 2.3em 2.2em 1.8em;
}
button[type=submit] {
    padding: 14px 20px;
}	
}
@media(max-width:900px){
h1.error {
    padding-top: 45px;
}
.form-left-to-w3l span {
    font-size: 16px;
}
.form-left-to-w3l input[type="text"], .form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
    padding-left: 14px;
}
button[type=submit] {
    margin: 39px 0px;
}	
}
@media(max-width:800px){
.w3layouts-two-grids {
    width: 58%;
}
.img-right-side, .txt-left-side {
    padding: 2em 2em 1.6em;
}
	
}
@media(max-width:768px){
.w3layouts-two-grids {
    width: 61%;
}
button[type=submit] {
    font-size: 14px;
}
.copyrigh-wthree p {
    letter-spacing: 1px;
}	
}
@media(max-width:767px){
h1.error {
    font-size: 36px;
    letter-spacing: 2px;
}
.img-right-side h3, .txt-left-side h2 {
    margin-bottom: 23px;
}	
}
@media(max-width:736px){
.w3layouts-two-grids {
    width: 64%;
}
.img-right-side p {
    margin-bottom: 31px;
}
.form-left-to-w3l {
    margin: 0px 0px 21px;
	}
}
@media(max-width:667px){
.w3layouts-two-grids {
    width: 69%;
}
h1.error {
    padding-top: 42px;
}	
}
@media(max-width:640px){
.w3layouts-two-grids {
    width: 72%;
}
h1.error {
    font-size: 34px;
	}
button[type=submit] {
    margin: 36px 0px;
}
}
@media(max-width:600px){
.w3layouts-two-grids {
    width: 78%;
}	
button[type=submit] {
    padding: 12px 20px;
    font-size: 13px;
}
}
@media(max-width:568px){
.w3layouts-two-grids {
    width: 81%;
}
.img-right-side, .txt-left-side {
    padding: 1.8em 1.8em 1.4em;
}
.form-left-to-w3l {
    padding-bottom: 9px;
}
}
@media(max-width:480px){
h1.error {
font-size: 30px;
padding-top: 38px;
}	
.w3layouts-two-grids {
    width: 94%;
}
.img-right-side h3, .txt-left-side h2 {
    font-size: 19px;
}
}
@media(max-width:440px){
h1.error {
font-size: 27px;
padding-top: 35px;
letter-spacing: 1px;
}
.copyrigh-wthree p a {
    line-height: 35px;
}
}
@media(max-width:414px){
	button[type=submit] {
    margin: 29px 0px;
}
.form-left-to-w3l {
    margin: 0px 0px 21px;
}
}
@media(max-width:384px){
h1.error {
    font-size: 24px;
}
.img-right-side, .txt-left-side {
    padding: 1.5em 1.5em 1.4em;
}	
}
@media(max-width:375px){
.form-left-to-w3l {
    margin: 0px 0px 19px;
    padding-bottom: 7px;
}
h1.error {
    font-size: 22px;
}	
}
@media(max-width:320px){
	.img-right-side h3, .txt-left-side h2 {
        font-size: 17px;
    }
    .form-left-to-w3l input[type="text"], .form-left-to-w3l input[type="email"], .form-left-to-w3l input[type="password"] {
        font-size: 13px;
    }
}
/*--//responsive--*/
</style>
