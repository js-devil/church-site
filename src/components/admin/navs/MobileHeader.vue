<template>
    <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <a class="logo" href="index.html">
                            <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601882/foursquare.jpg" alt="">
                        </a>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                        <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="chart.html">
                                <i class="fas fa-chart-bar"></i>Charts</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i class="fas fa-table"></i>Tables</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
</template>

<style scoped>
*{
    font-family: 'Poppins', sans-serif !important;
}

.logo img{
    height: 60px;
}

.header-mobile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.header-mobile .header-mobile__bar {
    padding: 15px 0;
}

.header-mobile .header-mobile-inner {
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
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.header-mobile .hamburger {
    width: 36px;
    height: 36px;
    padding: 0;
    line-height: 1;
    vertical-align: top;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.header-mobile .hamburger .hamburger-box {
    width: 20px;
    height: 15px;
}

.header-mobile .hamburger .hamburger-box .hamburger-inner {
    width: 20px;
    height: 2px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
}

.header-mobile .hamburger .hamburger-box .hamburger-inner:before {
    width: 20px;
    height: 2px;
    top: 6px;
}

.header-mobile .hamburger .hamburger-box .hamburger-inner:after {
    top: 12px;
    width: 20px;
    height: 2px;
}

.header-mobile .navbar-mobile {
    display: none;
    position: absolute;
    width: 100%;
    top: 88px;
    z-index: 20;
}

.header-mobile .navbar-mobile .navbar-mobile__list {
    background: #f8f8f8;
}

.header-mobile .navbar-mobile .navbar-mobile__list > li > a {
    padding-left: 15px !important;
}

.header-mobile .navbar-mobile .navbar-mobile__list li a {
    color: #555;
    display: block;
    padding: 10px 15px;
    padding-right: 25px;
    padding-left: 0;
    border-bottom: 1px solid #e6e6e6;
    text-transform: capitalize;
    line-height: inherit;
}

.header-mobile .navbar-mobile .navbar-mobile__list li a:hover {
    color: #4272d7;
}

.header-mobile .navbar-mobile .navbar-mobile__list li a > i {
    margin-right: 19px;
}

.header-mobile .navbar-mobile .navbar-mobile__list li.has-dropdown > a:after {
    content: '\f105';
    font-family: FontAwesome, cursive;
    float: right;
    font-size: 16px;
    line-height: 22px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.header-mobile .navbar-mobile .navbar-mobile__list li.has-dropdown > a.active::after {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
}

.header-mobile .navbar-mobile .navbar-mobile__dropdown {
    padding-left: 35px;
    display: none;
}
</style>
