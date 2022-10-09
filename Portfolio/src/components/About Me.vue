<template>
    <div class="hero">

        <div class="heading">
            <span class="name"><b>Simon Mayer</b></span>
            <span class="position">Full Stack Developer</span>
        </div>

        <img src="../assets/images/profile-pic.png" alt="Profile Picture">
    </div>

    <div class="aboutme" >
        <p class="descriptionText">
            Currently studying Software Engineering at VIA University College. I have successfully finished 2 projects (single user and client/server systems) that me and my team worked on during our school semesters. Apart from that I have put together a new team of colleges with whom we are currently designing and implementing a website for our customer - A building with apartments for rent. I am a quick learner and determined to achieve my goals. I have no problem with learning new technologies for example for my website project I had to learn to use Vue.js and Tailwind CSS on my own. I also did an on side course about Python during my highs school education. 
        </p>
        <div class="textBackground"></div>
    </div>
</template>

<script>
import descriptionText from "../assets/data/descriptiontext.json";

    export default {
        props:{
            
        },

        data() {
            return {
            }
        },

        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

    .hero{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        margin: 0;
        padding: 2vw;
    }

    img{
        width: 40vw;
        border-radius: 50%;
        box-shadow: 0px 0px 20px 2px #11201E;
        max-width: 100%;
    }

    .heading{
        display: flex;
        flex-direction: column;
        padding-left: 4vw;
        padding-right: 4vw;
        padding-bottom: 2vw;
        border-bottom: 2px solid #11201E;
        font-size: 2.5rem;
        margin-top: 15vw;
        color: #11201E;
        
    }

    .heading span{
        padding: 2vw;
    }

    .aboutme{
        position: relative;
        margin: 5vw;
    }

    .descriptionText{
        font-size: 1rem;
        color: #DECEC8 ;
        z-index: 30 ;
        padding: 5vw;
    }

    .aboutme .textBackground{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #11201E;
        opacity: 100%;
        z-index:-1;
        border-radius: 5vw;
        box-shadow: 0 0px 20px 0;
    }


    //media -----------------------------------------------------------

    @media screen and (max-width: 768px){
        .heading{font-size: 1.5rem;}
    }

</style>