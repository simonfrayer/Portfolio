<template>
    <div id="About" class="hero">

        <div class="flex flex-col lg:p-4">
            <div class="heading">
                <span class="name lg:flex lg:justify-center"><b>Simon Mayer</b></span>
                <span class="position lg:flex lg:justify-center">Full Stack Developer</span>
            </div>
    
            <div class="aboutme hidden lg:flex" >
                <p class="descriptionText">
                    Currently studying Software Engineering at VIA University College. I have successfully finished 2 projects (single user and client/server systems) that me and my team worked on during our school semesters. Apart from that I have put together a new team of colleges with whom we are currently designing and implementing a website for our customer - A building with apartments for rent. I am a quick learner and determined to achieve my goals. I have no problem with learning new technologies for example for my website project I had to learn to use Vue.js and Tailwind CSS on my own. I also did an on side course about Python during my highs school education. 
                </p>
            </div>
        </div>
        

        <img src="../assets/images/profile-pic.png" alt="Profile Picture">
    </div>

    <div class="aboutme lg:hidden" >
        <p class="descriptionText">
            Currently studying Software Engineering at VIA University College. I have successfully finished 2 projects (single user and client/server systems) that me and my team worked on during our school semesters. Apart from that I have put together a new team of colleges with whom we are currently designing and implementing a website for our customer - A building with apartments for rent. I am a quick learner and determined to achieve my goals. I have no problem with learning new technologies for example for my website project I had to learn to use Vue.js and Tailwind CSS on my own. I also did an on side course about Python during my highs school education. 
        </p>
    </div>

    
        <div class="downIcon">
            <router-link id="link" to="#Key Skills">
        <font-awesome-icon icon="fa-solid fa-angles-down"  beat class="icon select-none" />
    </router-link>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
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
        width: 35%;
        border-radius: 50%;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.2);;
        max-width: 100%;
    }

    .heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 4vw;
        padding-right: 4vw;
        padding-bottom: 2vw;
        border-bottom: 2px solid #11201E;
        font-size: 5vw;
        margin-top: 15vw;
        color: #11201E;
        
    }

    .heading span{
        padding: 2vw;
    }
    .position{
        font-size: 4vw;
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
        background-color: #11201E;
        border-radius: 5vw;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    }

    .downIcon{
        margin: 0;
        display: flex;
        justify-content: center;
        overflow: hidden;
        padding: 2vw;
        font-size: 7vw;
    } 


    //media -----------------------------------------------------------

    //@media screen and (max-width: 768px){
//        .heading{font-size: 1.5rem;}
    //}

    @media screen and (min-width: 1024px){
        .hero{
            padding-top: 50px;
        }
        .heading{
            margin-top:0;
            font-size: 2rem;
            border-bottom: 0px;
            padding-bottom: 0;
            flex-direction: row;
            justify-content: space-around;
        }
        .heading span{
            padding: 0;
            padding-top: 1vw;
        }
        .position{
            font-size: 1.8rem;
            padding-bottom: 2vw;
        border-bottom: 2px solid #11201E;
        }
        .descriptionText{
            font-size: 1rem;
            padding: 50px;
        }
        .downIcon{
            padding: 0;
        }
    }

</style>