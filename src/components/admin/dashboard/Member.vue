<template>
    <div class="main-content">
        <div class="section__content section__content--p30">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="overview-wrap">
                            <h2 class="title-1">Members</h2>
                            <button class="au-btn au-btn-icon au-btn--blue"  data-toggle="modal" data-target="#scrollmodal"> <i class="zmdi zmdi-plus"></i> add member </button>
                        </div>
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
.main-content {
    padding: 0 30px;
    min-height: 100vh;
    padding-top: 115px;
    font-family: 'Poppins', sans-serif !important;
}

h1, h2, h3, h4, h5, h6, .title-1, .title-2, .title-3{
    font-family: 'Poppins', sans-serif !important;
}

@media (max-width: 991px) {
    .main-content {
        padding-top: 50px;
	    padding-bottom: 100px;
    }
}

</style>  