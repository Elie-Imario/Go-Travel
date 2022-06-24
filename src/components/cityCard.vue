<script>
export default {
    name: "city-card",
    props:{
        cityName:{
            type: String,
            required: true
        },
        cityImage:{
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="city-card">
        <img :src="`Images/Popular-cities/${cityImage}`" :alt="cityName">
        <span class="city-name">{{ cityName }}</span>
    </div>
</template>


<style src="../assets/css/cityCardStyle.css"></style>