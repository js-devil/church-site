<template>
    <div class="mission">
		<div class="mission_background parallax-window"></div>
        
        <div class="mission_heading">
            <h3>What We Believe</h3>
            <p>The name "Foursquare" represents the four-fold ministries of Jesus</p>
        </div>

		<div class="mission_items d-flex flex-row flex-wrap align-items-start justify-content-start">

			<div class="mission_item text-center">
				<div class="mission_img">
                    <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/cross.png" />
                </div>
				<div class="mission_title">the Saviour</div>
				<div class="mission_text">We believe that Jesus Christ is the SAVIOUR of the world <br> (John 3:16; Isaiah 53:5; Titus 2:14) </div>
			</div>

			<div class="mission_item text-center">
				<div class="mission_img">
                    <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/bird.png" />
                </div>
                <div class="mission_title">the Baptizer</div>
				<div class="mission_text">We believe that Jesus Christ is the BAPTIZER with the HOLY SPIRIT (Acts 1:5, 8; I Corinthians 3:16) </div>
			</div>

			<div class="mission_item text-center">
				<div class="mission_img">
                    <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/cup.png" />
                </div>
				<div class="mission_title">the Healer</div>
				<div class="mission_text">We believe that Jesus Christ is the HEALER <br> (Matthew 8:17; Mark 16:17-18)</div>
			</div>

			<div class="mission_item text-center">
				<div class="mission_img">
                    <img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1551601881/crown.png" />
                </div>
				<div class="mission_title">the Soon Coming King</div>
				<div class="mission_text">We believe that Jesus Christ is the SOON COMING KING <br> (I Thess. 4:16-17; Hebrew 9:28)</div>
			</div>

		</div>
	</div>
</template>
<style scoped>
/*********************************
9. Mission
*********************************/

.mission
{
	padding-top: 97px;
	padding-bottom: 94px;
	background: transparent;
}
.mission_background
{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://res.cloudinary.com/tejuosho4sq/image/upload/v1560430859/mission.jpg');
	background-position: center center;
}
.mission_item
{
	display: inline-block;
	width: 25%;
	padding-left: 70px;
	padding-right: 70px;
}
.mission_img img
{
	height: 40px
}
.mission_heading{
    text-align: center;
    margin-bottom: 5%;
}
.mission_heading h3{
    color: #fff;
	font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
}
.mission_heading p{
    color: #fff;
	font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
}
.mission_title
{
	font-size: 20px;
	color: #FFFFFF;
	text-transform: capitalize;
    font-weight: 600;
	margin-top: 7px;
}
.mission_text
{
	color: #FFFFFF;
	margin-top: 17px;
}
.mission_item:not(:last-child)::after
{
	display: block;
	position: absolute;
	top: 30px;
	right: 0;
	width: 1px;
	height: calc(100% - 30px);
	background: rgba(235,235,235,0.2);
	content: '';
	z-index: 10;
}
</style>
