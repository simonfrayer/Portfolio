<template>
    <div id="Contact" class="contact_container flex flex-row justify-around">


        <div class="contact__content flex flex-col">
            <div class="contact__content__box flex flex-row">
                <div class="contact__content__box__icon">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </div>
                <div class="contact__content__box__text">
                    <h3>Simon.Mayer@seznam.cz</h3>
                </div>
            </div>
            <div class="contact__content__box flex flex-row">
                <div class="contact__content__box__icon">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </div>
                <div class="contact__content__box__text">
                    <h3>+45 55 22 91 35</h3>
                </div>
            </div>  
        </div>

        <div class="top flex flex-col">
            <font-awesome-icon icon="fa-solid fa-copyright" class="text-xl pb-4" />
            <p class="text-sm">
                Designed and Implemented by Simon Mayer
            </p>
        </div>

        <div class="top flex flex-col">
            <router-link id="link" to="">
                <font-awesome-icon icon="fa-solid fa-circle-chevron-up" class="text-6xl pb-4 fa-shake" />
            </router-link>  
            <span class="text-sm">Go To Top</span>
        </div>
        

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.contact_container{
    background-color: #11201E;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-top: 20px;
    padding-left: 1vw;
    padding-right: 1vw;
}
.contact__content{
    background-color: #DECEC8 ;
    padding: 3vw;
    border-radius: 1vw;
}
.contact__content__box{
    padding: 15px;
    font-size: 1rem;
}
.contact__content__box__icon{
    padding-right: 10px;
}
.top{
    justify-content: center;
    align-items: center;
    color: #DECEC8;
}
</style>