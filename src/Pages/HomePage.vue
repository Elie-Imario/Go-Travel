<script>
import BannerHeader from '../components/BannerHeader.vue'
import cityCard from '../components/cityCard.vue'
import categorieCardItem from '../components/categorieCardItem.vue'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import '../assets/css/vueperSlideStyleSheet.css'


export default {
    name: "Home-Page",
    components:{
        BannerHeader,
        cityCard,
        categorieCardItem,
        VueperSlides, 
        VueperSlide
        
        
    },
    data(){
        return{
            popularCities:[
                {cityName: "Antsirabe", cityImage: "Antsirabe.jpg"},
                {cityName: "Nosy-Be", cityImage: "Nosy-Be.jpg"},
                {cityName: "Antananarivo", cityImage: "ville-antananarivo.jpg"},
                {cityName: "Fianarantsoa", cityImage: "Fianarantsoa.jpg"}
            ],

            categories: [
                {categoryName: "Parc National", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum voluptate placeat tenetur qui expedita quam deleniti. Velit impedit nulla voluptatibus sapiente ut commodi. Deserunt, magnam! Fuga porro tenetur iste eligendi quisquam rem quae laborum odio ut itaque explicabo nulla ex, ducimus animi id! Vero laudantium eius id natus, in quos magni!", Img:"andringitra.jpg"},
                {categoryName: "Zoo", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum voluptate placeat tenetur qui expedita quam deleniti. Velit impedit nulla voluptatibus sapiente ut commodi. Deserunt, magnam! Fuga porro tenetur iste eligendi quisquam rem quae laborum odio ut itaque explicabo nulla ex, ducimus animi id! Vero laudantium eius id natus, in quos magni!", Img:"maki.jpg"},
                {categoryName: "Sites touristiques", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum voluptate placeat tenetur qui expedita quam deleniti. Velit impedit nulla voluptatibus sapiente ut commodi. Deserunt, magnam! Fuga porro tenetur iste eligendi quisquam rem quae laborum odio ut itaque explicabo nulla ex, ducimus animi id! Vero laudantium eius id natus, in quos magni!", Img:"ancien-fort.jpg"}
            ],

            mostVisitedPlaces: [
                {placename: "Sainte-Marie", rank: "1", Img: "Sainte-Marie-Madagascar.webp", rating: "5"},
                {placename: "Isalo", rank: "4", Img: "Isalo.jpg", rating: "4"},
                {placename: "Tsingy de Bemaraha", rank: "3", Img: "tsingy-de-bemaraha.webp", rating: "4.5"},
                {placename: "Nosy-Be", rank: "2", Img: "Ile-nosy-be-Madagascar.jpg", rating: "4.75"},
                {placename: "L'allé des Baobab", rank: "5", Img: "alle-baobab.webp", rating: "4.75"},
                {placename: "Ifaty", rank: "6", Img: "ifaty.webp", rating: "4"}
            ]
        }
    },
    methods:{
        style:function(backgroundImage){
            return{
                background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url('Images/most-visited-place/"+backgroundImage+"')",
                backgroundPosition: "center",
                backgroundSize: "cover"
           }
        },

        ratingStyle:function(rating){
            if(rating <= 5 && rating > 4) return {background: "#069e57"}
            else if(rating <= 4 && rating > 3) return {background: "#0DBC79"}
            else if(rating <= 3 && rating > 2) return {background: "#ffc107"}
            else return {background: "#dc3545"}
            
        },
    }
}
</script>

<template>
    <div class="home-page">
        <banner-header />

        <div class="block-home-page">

            <!-- About-go-travel -->
            <div class="about-container">
                <div class="about-header">
                    <h1 class="title-lead">What is Go-Travel?</h1>
                </div>
                <div class="about-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab, hic impedit vel accusantium natus odit ullam nihil harum assumenda laboriosam officia obcaecati, dolorem eum illo ducimus culpa modi doloribus quas voluptatibus fugiat. Labore blanditiis iusto ad provident omnis. Tenetur mollitia sint magni eos libero suscipit autem maxime beatae saepe.
                    </p>
                </div>
            </div>
        </div>  
        <!---->

        <!-- Popular-cities-section -->
        <div class="popular-cities-container">
            <h1 class="title-lead">Popular cities</h1>
            <p class="sub-title">Ex ea adipisci incidunt, minima reiciendis sed nisi!</p>
            <div class="popular-cities-cards-box">
                <div v-for="(city, index) in popularCities" :key="index">
                    <city-card
                        :cityName="city.cityName"
                        :cityImage="city.cityImage"
                    />
                </div>                
            </div>
        </div>    

        <!--  -->


        <!-- Categories-section -->
        <div class="categories-section">
            <h1 class="title-lead">Categories</h1>
            <div class="categories-cards-box">
                <div v-for="(category, id) in categories" :key="id">
                    <categorieCardItem class="categorie-card">
                        <template v-slot:categorie-card-banner-header>
                            <div class="categorie-card-header">
                                <img :src="`Images/categorie/${category.Img}`" alt="andringitra"/>
                            </div>
                        </template>

                        <template v-slot:categorie-card-Title>
                            <div class="categorie-Title">
                                <span>{{ category.categoryName }}</span>
                            </div>
                        </template>

                        <template v-slot:categorie-card-description>
                            <div class="categorie-description">
                                <p>{{ category.description }}</p>
                            </div>
                        </template>
                    </categorieCardItem>
                </div>
                
            </div>
        </div>
        <!--  -->

        <div class="spacer">
            <div class="title-lead-spacer">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae ratione!</h1>
            </div>

            <div class="body-spacer">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit earum error at unde nostrum ab sequi fugiat. Saepe, molestias. 
                    Quidem, hic ex nam explicabo necessitatibus nobis asperiores dignissimos fuga numquam neque harum quibusdam placeat obcaecati sit, doloribus sunt amet provident? 
                    Omnis excepturi, quam aspernatur blanditiis dignissimos sunt, similique laudantium placeat debitis dicta veniam quibusdam necessitatibus dolorum at quisquam! Neque quisquam iusto sunt aliquam saepe deleniti ratione cupiditate repellat. 
                    Porro, vitae voluptates!
                </p>
            </div>
        </div>

        <!--  -->

        <!-- Most visited place section -->
        <div class="most-visited-section">
            <h1 class="title-lead">Most visited place</h1>
            <div class="swiper-slide-container">
                <vueper-slides
                    class="no-shadow"
                    :visible-slides="3"
                    :slide-ratio="1 / 4"
                    :dragging-distance="200"
                    :autoplay="true"
                >
                <vueper-slide
                    v-for="(mostVisitedPlace, index) in mostVisitedPlaces"
                    :key="index"
                    :style="style(mostVisitedPlace.Img)"
                >
                    <template #content>
                        <div class="content-wrapper">
                            <div class="place-info">
                                <div class="place-rate" :style="ratingStyle(mostVisitedPlace.rating)">
                                    <span>{{ mostVisitedPlace.rating }}</span>
                                </div>
                                <h2 class="place-title">{{ mostVisitedPlace.placename }}</h2>
                            </div>
                            <div class="place-reaction">
                                <span><i class="fa fa-heart"></i></span>
                            </div>
                            
                        </div>
                    </template>
                </vueper-slide>
                </vueper-slides>
            </div>
        </div>
        <!--  -->

        <!--- FEATUREs -->
        <div class="features-section">
            <article class="container">
				<div class="image"><img src="../assets/Images/hublot.jpg" alt="" /></div>
				<div class="inner">
					<header>
						<h2>lets keep our earth beautiful</h2>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Ea, nisi magnam. 
                        Dolorem, excepturi aliquam, velit amet cumque placeat ex beatae modi aut ea asperiores alias accusantium vel libero commodi suscipit sint tempore culpa autem labore! Ratione illo veniam ipsum autem totam saepe, aut alias nobis accusamus, libero qui assumenda dolor, cum harum debitis possimus? Obcaecati accusantium veniam voluptate ratione enim animi, mollitia in pariatur dolorem nostrum rerum vel repellendus doloremque illo nulla? Est, eos eveniet aperiam dolorum fugiat architecto molestiae esse commodi incidunt harum dicta reiciendis perferendis rerum veritatis. Odit officiis incidunt culpa perferendis nihil excepturi maxime fugiat repudiandae, dolor possimus!</p>
				</div>
			</article>
        </div>
        <!--  -->

        <!--Newsletters-->
        <div class="newsletter-section">
            <h1 class="newsletter-title-lead">Get update about upcoming events</h1>
            <div class="newsletter-content">
                <p class="newsletter-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur voluptatem, tenetur rem tempora iste ea quidem natus nisi rerum.</p>
                <form action="" class="newsletter-form">
                    <div class="form-group">
                        <input type="email" name="email_address" placeholder="Entrez votre adresse email" required class="form-control">
                        <button type="submit" class="btn">
                            <span>Subscribe</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!--  -->
    </div>
</template>


<style scoped>
</style>