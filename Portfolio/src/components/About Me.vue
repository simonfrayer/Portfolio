<template>
    <div class="aboutme">

        <div class="heading">
            <span class="name"><b>Simon Mayer</b></span>
            <span class="position">Full Stack Developer</span>
        </div>

        <img src="../assets/images/profile-pic.png" alt="Profile Picture">
    </div>
</template>

<script>
    export default {
        props:{
            
        }
    }
</script>

<style lang="scss" scoped>

    .aboutme{
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

    @media screen and (max-width: 768px){
        .heading{font-size: 1.5rem;}
    }

</style>