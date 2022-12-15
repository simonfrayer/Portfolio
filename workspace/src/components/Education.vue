<template>
    
    <div class="education flex flex-col">
        <div class="flex flex-col">
            <div class="row">
                <div class="col-12 flex justify-center">
                    <h2 class="heading">Education</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="education__content flex flex-col">
                        <div class="education__content__box flex flex-row ">
                            <div class="education__content__box__year">
                                <font-awesome-icon icon="fa-solid fa-circle-dot" class="p-4 fa-beat" style="--fa-animation-duration: 2s; font-size: 1rem;" />
                                <span>2021 - 2025</span>
                            </div>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" />
                            </div>
                            <div class="education__content__box__text">
                                <h3>Bachelor of Software Engineering</h3>
                                <p>University of California, Los Angeles</p>
                            </div>
                        </div>
                        <div class="education__content__box flex flex-row-reverse">
                            <div class="education__content__box__year">
                                <font-awesome-icon icon="fa-solid fa-circle-dot" class="p-4 fa-beat" style="--fa-animation-duration: 2s; font-size: 1rem;" />
                                <span>2019 - 2020</span>
                            </div>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-earth-europe" />                                
                            </div>
                            <div class="education__content__box__text">
                                <h3>Exchange Student</h3>
                                <p>Gymnasium Oberaargau</p>
                            </div>
                        </div>
                        <div class="education__content__box flex flex-row">
                            <div class="education__content__box__year">
                                <font-awesome-icon icon="fa-solid fa-circle-dot" class="p-4 fa-beat" style="--fa-animation-duration: 2s; font-size: 1rem;" />
                                <span>2017 - 2021</span>
                            </div>
                            <div class="icon">
                                <font-awesome-icon icon="fa-solid fa-school" />
                            </div>
                            <div class="education__content__box__text">
                                <h3>High School Diploma</h3>
                                <p>Gymnázium Joachyma Barranda</p>
                            </div>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.heading{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
  text-align: center;
  color: #fff;
  text-shadow: 5px 5px black;
  margin-top: 50px;
  margin-bottom: 30px;
}
.education__content__box{
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.education__content__box__text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vw;
    background-color: #11201E;
    font-size: 1.5rem;
    color: #DECEC8 ;
    border-radius: 5vw;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
}
.education__content__box__year{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 7vw;
    font-size: 2rem;
    color: #11201E;
    position: relative;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vw;
    font-size: 5rem;
    color: #11201E;
    position: relative;
}
</style>