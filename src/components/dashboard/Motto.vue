<template>
    <div class="quote">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="quote_container text-center">
						<div class="quote_quote">“Jesus Christ the same yesterday, and to day, and for ever.”</div>
						<div class="quote_icon"><img src="https://res.cloudinary.com/tejuosho4sq/image/upload/v1560367116/quote.png" alt=""></div>
						<div class="quote_source">Hebrews 13:8</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/*********************************
12. Quote
*********************************/

.quote
{
	width: 100%;
	background: #FFFFFF;
	padding-top: 134px;
	padding-bottom: 134px;
}
.quote_container
{
	max-width: 830px;
	margin-left: auto;
	margin-right: auto;
}
.quote_icon
{
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	-o-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	z-index: 0;
}
.quote_quote
{
	font-family: 'Old Standard TT', serif;
	font-size: 26px;
	color: #181818;
	z-index: 10;
	line-height: 1.4;
}
.quote_source
{
	font-family: 'Assistant', sans-serif;
	font-size: 18px;
	color: #b10707;
	font-weight: 600;
	margin-top: 13px;
}
</style>