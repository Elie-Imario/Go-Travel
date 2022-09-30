<script>
import DetailCarousel from './carousel-detail.vue'

export default {
    name: 'banner-header', 
    components: {
        DetailCarousel,
    },
    data(){
    return{
        cities:[
            {
                townName: "L'Allé des Baobab",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia eveniet, earum distinctio culpa, harum accusantium libero doloremque numquam, consequatur perspiciatis?",
                bgImage: "madagascar-allee-des-baobabs.jpg"
                
            },
            {
                townName: "Gare - Antananarivo",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia eveniet, earum distinctio culpa, harum accusantium libero doloremque numquam, consequatur perspiciatis?",
                bgImage: "gare-antananarivo.jpg"
            },
            {
                townName: "Tamatave",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur fugit magni esse est!",
                bgImage: "tamatave.jpg"
            },
            {
                townName: "Port Mahajanga",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia eveniet, earum distinctio culpa, harum accusantium libero doloremque numquam, consequatur perspiciatis?",
                bgImage: "majunga.jpg"
            },
            {
                townName: "Fianarantsoa",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur fugit magni esse est!",
                bgImage: "fce-fianarantsoa.jpg"
            },
            {
                townName: "Nosy Tanikely",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia eveniet, earum distinctio culpa, harum accusantium libero doloremque numquam, consequatur perspiciatis?",
                bgImage: "nosy-tanikely.jpg"
            }

        ],
        }
    },

    mounted(){
        this.slideBlock()
    },
    methods:{
        style:function(backgroundImage){
            return{
                background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('Images/image-Carousel/"+backgroundImage+"')",
                backgroundPosition: "center",
                backgroundSize: "cover"
           }
        },
        slideBlock(){            
            const slider = document.querySelector(".slides")
            const slides = document.querySelectorAll(".slide")

            const prevBtn = document.querySelector(".prev-btn") 
            const nextBtn = document.querySelector(".next-btn")

            let counter = 1


            nextBtn.addEventListener('click', function(){
                if(counter<=slides.length-1){
                    slider.style.marginLeft = (-100 * counter)+'%';
                }
                else{
                    return
                }
                counter++;
            })

            prevBtn.addEventListener('click', function(){
                if(counter<=1){
                    return;
                }
                else{
                    slider.style.marginLeft = (-100 * (counter-2)) +'%';
                }
                counter--;
            })

        }
    },
    
}
</script>

<template>
    <div class="banner-header">
        <div class="banner-slider-container">
            <div class="slides">
                <div v-for="(city, index) in cities" :key="index" class="slide" :style="style(city.bgImage)">
                    <detail-carousel 
                    :townName="city.townName"
                    :description="city.description"
                    :bgImage="city.bgImage" 
                    />
                </div>
            </div>
            <div class="btn-slider-navigation">
                <button class="prev-btn" ><span><i class="fa fa-chevron-left"></i></span></button>
                <button class="next-btn" ><span><i class="fa fa-chevron-right"></i></span></button>
            </div>
        </div>
    </div>
</template>


<style src="../assets/css/bannerHeader.css"></style>