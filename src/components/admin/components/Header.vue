<template>
    <header class="header-desktop">
        <div class="section__content section__content--p30">
            <div class="container-fluid">
                <div class="header-wrap">
                            
                    <form class="form-header" action="" method="POST">
                        <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports...">
                        <button class="au-btn--submit" type="submit"> <i class="zmdi zmdi-search"></i> </button>
                    </form>
                    
                    <div class="account-item clearfix js-item-menu">
                        <i class="zmdi zmdi-power"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* ----- Header ----- */
.header-desktop {
    font-family: 'Poppins', sans-serif !important;
    background: #f5f5f5;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    right: 0;
    left: 300px;
    height: 75px;
    z-index: 3;
}

.header-desktop .section__content {
    overflow: visible;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}

@media (max-width: 991px) {
    .header-desktop {
        position: relative;
        top: 0;
        left: 0;
        height: 170px;
    }
}

.header-desktop .mess-dropdown {
    top: 51px;
}

.header-desktop .email-dropdown {
    top: 51px;
}

.header-desktop .notifi-dropdown {
    top: 51px;
}

@media (max-width: 991px) {
    .logo {
        text-align: center;
    }
}

.header-wrap {
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
    padding: 0 30px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

@media (min-width: 992px) and (max-width: 1199px) {
    .header-wrap .account-item > .content {
        display: none;
    }
}

@media (max-width: 991px) {
    .header-wrap {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .header-wrap .mess-dropdown {
        left: 0;
    }

    .header-wrap .mess-dropdown::before {
        left: 0;
    }

    .header-wrap .notifi-dropdown {
        left: -83px;
    }

    .header-wrap .notifi-dropdown::before {
        left: 79px;
    }
}

.header-button {
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
}

@media (max-width: 991px) {
    .header-button {
        margin-top: 30px;
        width: 100%;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
}

.noti-wrap {
    height: 45px;
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
}

.noti-wrap .noti__item:last-child {
    margin-right: 50px;
}

@media (max-width: 1200px) {
    .noti-wrap .noti__item:last-child {
        margin-right: 30px;
    }
}

@media (max-width: 991px) {
    .noti-wrap .noti__item:last-child {
        margin-right: 0;
    }
}

.noti__item {
    position: relative;
    margin-right: 35px;
    display: inline-block;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .noti__item {
        margin-right: 25px;
    }
}

@media (max-width: 767px) {
    .noti__item {
        margin-right: 20px;
    }
}

.noti__item:hover i {
    color: #999;
}

.noti__item i {
    font-size: 32px;
    color: #a9b3c9;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    vertical-align: middle;
}

@media (max-width: 767px) {
    .noti__item i {
        font-size: 24px;
    }
}

.noti__item .quantity {
    position: absolute;
    display: inline-block;
    top: -4px;
    right: -7px;
    height: 15px;
    width: 15px;
    line-height: 15px;
    text-align: center;
    background: #ff4b5a;
    color: #fff;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    font-size: 14px;
}

.account-wrap {
    position: relative;
}

.account-item {
    cursor: pointer;
}

.account-item .image {
    width: 45px;
    height: 45px;
    float: left;
    overflow: hidden;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.account-item .image > img {
    width: 100%;
}

.account-item > .content {
    margin-left: 45px;
    padding: 9px 0;
    padding-left: 12px;
}

.account-item > .content > a {
    color: #333;
    text-transform: capitalize;
    font-weight: 500;
}

.account-item > .content > a:after {
    font-family: "Material-Design-Iconic-Font";
    font-weight: 500;
    content: '\f2f9';
    display: inline-block;
    font-size: 18px;
    margin-left: 5px;
}

.account-item > .content > a:hover {
    color: #666;
}

.account-dropdown {
    min-width: 305px;
    position: absolute;
    top: 58px;
    right: 0;
    background: #fff;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transform-origin: right top;
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -o-transform-origin: right top;
    transform-origin: right top;
    z-index: 3;
}

.account-dropdown .info {
    padding: 25px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f2f2f2;
}

.account-dropdown .info .image {
    float: left;
    height: 65px;
    width: 65px;
    overflow: hidden;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.account-dropdown .info .content {
    margin-left: 65px;
    padding: 11px 0;
    padding-left: 12px;
}

.account-dropdown .info .content .name {
    line-height: -webkit-calc(20/16);
    line-height: -moz-calc(20/16);
    line-height: calc(20/16);
}

.account-dropdown .info .content .name a {
    color: #333;
    font-weight: 500;
    text-transform: capitalize;
}

.account-dropdown .info .content .name a:hover {
    color: #666;
}

.account-dropdown .info .content .email {
    font-size: 15px;
    color: #999;
    line-height: -webkit-calc(20/13);
    line-height: -moz-calc(20/13);
    line-height: calc(20/13);
}

.account-dropdown:after {
    content: '';
    display: block;
    width: 19px;
    height: 19px;
    border-bottom: 9px solid #fff;
    border-top: 9px solid transparent;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    position: absolute;
    top: -18px;
    right: 33px;
}

.account-dropdown__item a {
    display: block;
    color: #333;
    padding: 15px 25px;
    font-size: 16px;
}

.account-dropdown__item a:hover {
    background: #4272d7;
    color: #fff;
}

.account-dropdown__item a i {
    line-height: 1;
    margin-right: 20px;
    font-size: 20px;
    vertical-align: middle;
}

.account-dropdown__body {
    padding: 12px 0;
}

.account-dropdown__footer {
    border-top: 1px solid #f2f2f2;
}

.account-dropdown__footer a {
    display: block;
    color: #333;
    padding: 15px 25px;
    font-size: 14px;
}

.account-dropdown__footer a:hover {
    background: #4272d7;
    color: #fff;
}

.account-dropdown__footer a i {
    line-height: 1;
    margin-right: 20px;
    font-size: 18px;
    vertical-align: middle;
}

/* ----- Form ----- */
.form-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}

@media (max-width: 991px) {
    .form-header {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}

/* ----- Input ----- */
.au-input {
    line-height: 43px;
    border: 1px solid #e5e5e5;
    font-size: 16px;
    color: #666;
    padding: 0 17px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.au-input--style2 {
    color: #808080;
    line-height: 43px;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    padding: 0 17px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.au-input--full {
    width: 100%;
}

.au-input--h65 {
    line-height: 63px;
    font-size: 16px;
    color: #808080;
}

.au-input--w300 {
    min-width: 300px;
}

.au-input--w435 {
    min-width: 435px;
}

@media (max-width: 767px) {
    .au-input--w435 {
        min-width: 230px;
    }
}

.au-form-icon {
    position: relative;
}

.au-form-icon .au-input {
    padding-right: 80px;
}

.au-form-icon--sm {
    position: relative;
}

.au-form-icon--sm .au-input {
    padding-right: 43px;
}

.au-input-icon {
    position: absolute;
    top: 1px;
    right: 12px;
    width: 63px;
    height: 63px;
    line-height: 63px;
    text-align: center;
    display: block;
}

.au-input-icon i {
    font-size: 30px;
    color: #808080;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.au-input--xl {
    min-width: 935px;
}

@media (max-width: 1600px) {
    .au-input--xl {
        min-width: 350px;
    }
}

@media (max-width: 991px) {
    .au-input--xl {
        min-width: 350px;
    }
}

@media (max-width: 767px) {
    .au-input--xl {
        min-width: 150px;
    }
}

.au-btn--submit {
    position: relative;
    right: 0;
    min-width: 65px;
    line-height: 43px;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: #4272d7;
    margin-left: -3px;
}

.au-btn--submit:hover {
    background: #3868cd;
}

.au-btn--submit > i {
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.au-btn--submit2 {
    height: 43px;
    width: 43px;
    position: absolute;
    top: 1px;
    right: 0;
}

.au-btn--submit2 i {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #4c4c4c;
    font-size: 20px;
}

.rs-select2--sm {
    width: 114px;
}

.rs-select2--md {
    width: 160px;
}

.select2-container {
    display: block;
    max-width: 100% !important;
    width: auto !important;
    outline: none;
}

.rs-select2--dark {
    display: inline-block;
}

@media (max-width: 767px) {
    .rs-select2--dark {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
    }
}

.rs-select2--dark .select2-container--default .select2-selection--single {
    border: none;
    outline: none;
    padding-left: 18px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    height: 40px;
    background: #808080;
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
}

.rs-select2--dark .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #fff;
    font-size: 14px;
}

.rs-select2--dark .select2-container .select2-selection--single .select2-selection__rendered {
    padding: 0;
}

.rs-select2--dark .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 40px;
    top: 0;
    right: 13px;
}

.rs-select2--dark .select2-container--default .select2-selection--single .select2-selection__arrow b {
    border-color: #fff transparent transparent transparent;
}

.rs-select2--dark .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent transparent #fff transparent;
}

.rs-select2--dark .select2-container--open .select2-dropdown,
.rs-select2--trans .select2-container--open .select2-dropdown,
.rs-select2--light .select2-container--open .select2-dropdown,
.rs-select2--trans .select2-container--open .select2-dropdown {
    font-size: 14px;
    box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.1);
    border-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid #e0e0e0;
    margin-top: 8px;
    overflow: hidden;
}

.rs-select2--dark .select2-container--open .select2-dropdown .select2-results__option ,
.rs-select2--trans .select2-container--open .select2-dropdown .select2-results__option,
.rs-select2--light .select2-container--open .select2-dropdown .select2-results__option {
    padding: 8px 16px;
}

.select2-container--default .select2-results__option--highlighted[aria-selected] {
    background: #4272d7;
}

.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
 }

.rs-select2--border .select2-container--default .select2-selection--single,

.rs-select2--dark2 .select2-container--default .select2-selection--single {
    background: #555;
}

.rs-select2--light {
    display: inline-block;
}

@media (max-width: 767px) {
    .rs-select2--light {
        display: block;
        margin-right: 0;
        margin-bottom: 10px;
    }
}

.rs-select2--light .select2-container--default .select2-selection--single {
    border: none;
    outline: none;
    padding-left: 18px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    height: 40px;
    background: #fff;
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
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.03);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.03);
}

.rs-select2--light .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #808080;
    font-size: 14px;
}

.rs-select2--light .select2-container .select2-selection--single .select2-selection__rendered {
    padding: 0;
}

.rs-select2--light .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 40px;
    top: 0;
    right: 13px;
}

.rs-select2--light .select2-container--default .select2-selection--single .select2-selection__arrow b {
    border-color: #808080 transparent transparent transparent;
}

.rs-select2--light .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent transparent #808080 transparent;
}

.rs-select2--light v .select2-container--open .select2-dropdown {
    font-size: 14px;
}

.rs-select2--border .select2-container--default .select2-selection--single {
    background: transparent;
    border: 1px solid #e5e5e5;
}

.rs-select2--border .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #808080;
}

.rs-select2--border .select2-container--default .select2-selection--single .select2-selection__arrow b {
    border-color: #808080 transparent transparent transparent;
}

.rs-select2--border .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent transparent #808080 transparent;
}

.rs-select2--trans .select2-container--default .select2-selection--single {
    border: none;
    outline: none;
}

.rs-select2--trans .select2-container--default .select2-selection--single .select2-selection__rendered {
    color: #808080;
    font-size: 14px;
    padding-left: 0;
}

.rs-select2--trans .select2-container--open .select2-dropdown {
    font-size: 14px;
}

.au-checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.au-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.au-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #fff;
    border: 2px solid #e5e5e5;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}

.au-checkbox:hover input ~ .au-checkmark {
    background-color: transparent;
}

.au-checkbox input:checked ~ .au-checkmark {
    background-color: transparent;
}

.au-checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.au-checkbox input:checked ~ .au-checkmark:after {
    display: block;
}

.au-checkbox .au-checkmark:after {
    left: 5px;
    top: -1px;
    width: 9px;
    height: 15px;
    border: solid #00ad5f;
    border-width: 0 4px 4px 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.form-control {
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}

.card {
    margin-bottom: 30px;
}

.input-group-addon {
    background-color: transparent;
    border-left: 0;
}

.input-group-addon, .input-group-btn {
    white-space: nowrap;
    vertical-align: middle;
}

.input-group-addon {
    padding: .5rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: #495057;
    text-align: center;
    background-color: #e9ecef;
    border: 1px solid rgba(0, 0, 0, 0.15);
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
}

.zmdi-power {
    font-size: 40px;
    color: #dc3545;
}

.zmdi-power:hover{
    color: #e83e8c;
}
</style>
