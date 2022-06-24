<script>
export default {
    name: "detail-carousel",
    props:{
        townName:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        bgImage:{
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="owl-carousel-items">
        <div class="carousel-description">
            <div class="description-header">
                <h1 class="title">
                    {{ townName }}
                </h1>
            </div>
            <div class="description-body">
                <p>
                    {{ description }} 
                </p>
            </div>
        </div>
    </div>    
</template>

<style src="../assets/css/detailCarousel.css"></style>