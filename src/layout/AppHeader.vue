<script>
export default {
    mounted(){
        this.stickyNavBar()
    },

    methods:{
       stickyNavBar(){
            window.addEventListener("scroll", function(){
                if(window.scrollY>100) document.querySelector(".navbar").classList.add("sticky")
                else document.querySelector(".navbar").classList.remove("sticky")
            })
       } 
    }
}
</script>

<template>
    <div class="global-header">
        <nav class="navbar navbar-expand">
            <router-link class="navbar-brand" to="/">
                <img src="../assets/Images/logo.png"/>Go-Travel
            </router-link>

            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button> -->

            <div class="navbar-collapse collapse" id="collapsibleNavId">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
                        
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Decouvrir'}" class="nav-link">Decouvrir</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link :to="{name: 'MaCarte'}" class="nav-link">Ma Carte</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style src="../assets/css/navBar.css" scoped></style>