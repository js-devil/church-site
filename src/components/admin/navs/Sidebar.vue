<template>
    <aside class="menu-sidebar d-none d-lg-block">
        <div class="logo">
            <router-link style="display: flex;" to="/"> 
                <!-- <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/foursquare.jpg" alt=""> 
                <h3>Foursquare Tejuosho</h3> -->
            </router-link>
        </div>
        
        <div class="menu-sidebar__content js-scrollbar1 ps">
            <nav class="navbar-sidebar">
                <ul class="list-unstyled navbar__list">
                    <li ref="home" class="nav-li active">
                        <router-link class="text-left" to="/dashboard"> <i class="fas fa-tachometer-alt"></i> Dashboard </router-link>
                    </li>
                    <li class="nav-li"> 
                        <router-link class="text-left" to="/dashboard/members"> 
                        <i class="zmdi zmdi-accounts"></i>
                        Members </router-link> 
                    </li>
                    <li class="nav-li"> <router-link class="text-left" to="/dashboard/events"> <i class="zmdi zmdi-calendar"></i> Events</router-link> </li>
                    <li class="nav-li"> <router-link class="text-left" to="/dashboard/sermons"> <i class="zmdi zmdi-collection-item"></i> Sermons </router-link> </li>
                    <li> <router-link class="text-left" to="/dashboard/visitors"> <i class="zmdi zmdi-accounts-outline"></i> Visitors </router-link> </li>
                    <!-- <li class="has-sub"> 
                        <a class="js-arrow" to="#"> <i class="zmdi zmdi-collection-text"></i> Reports</a> 
                        <ul class="list-unstyled navbar__sub-list js-sub-list">
                            <li> <a href="index.html">Dashboard 1</a> </li>
                            <li> <a href="index.html">Dashboard 1</a> </li>                                
                        </ul>
                    </li> -->
                    <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-copy"></i>Pages</a>
                            <ul class="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password</a>
                                </li>
                            </ul>
                        </li>
                </ul>
            </nav>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
    </aside>
</template>

<script>
export default {
    methods: {
        activeNess() {
            const links = document.querySelectorAll('.nav-li')
            for(let i in links){
                console.log(links[i])
                if(links[i]){
                    links[i].classList.remove('active')
                }
                
                if(links[i].textContent.trim().toLowerCase() === this.$route.name.replace('Admin', '').toLowerCase()){
                    links[i].classList.add('active')
                }
            }
            // console.log()
        }
    },
    mounted(){
        this.activeNess()
    },
    watch: {
        $route(){
            this.activeNess()
        }
    }
}
</script>


<style scoped>
.menu-sidebar {
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    overflow-y: auto;
    z-index: 99;
    font-family: 'Poppins', sans-serif !important;
}

.menu-sidebar .logo {
    height: 75px;
    padding: 0 35px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #e5e5e5;
    position: relative;
    z-index: 3;
    text-align: center;
}

.logo img{
    height: 60px;
}

.logo h3{
    text-align: left;
    margin-left: 5%;
}

.menu-sidebar .navbar__list .navbar__sub-list {
    display: none;
    padding-left: 34px;
}

.menu-sidebar .navbar__list .navbar__sub-list li a {
    padding: 11.5px 0;
}

.menu-sidebar__content {
    position: relative;
    height: -webkit-calc(100vh - 75px);
    height: -moz-calc(100vh - 75px);
    height: calc(100vh - 75px);
}

.navbar-sidebar {
    padding: 35px;
    padding-bottom: 0;
}

.navbar-sidebar .navbar__list li a {
    display: block;
    color: #555;
    font-size: 20px;
    padding: 15px 0;
}

.navbar-sidebar .navbar__list li a i {
    margin-right: 19px;
}

.navbar-sidebar .navbar__list li a:hover {
    color: #4272d7;
}

.navbar-sidebar .navbar__list li.active > a {
    color: #4272d7;
}

.has-sub {
    position: relative;
}

.navbar-mobile-sub__list {
    display: none;
    padding-left: 30px;
    background: #fff;
}

.header-mobile .navbar-mobile .navbar-mobile-sub__list li a {
    padding-left: 15px;
}

.nav-li{
    text-align: left;
}
</style>
