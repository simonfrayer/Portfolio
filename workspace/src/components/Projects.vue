<template>
    <div id="Projects" class="heading">
        <span>My Projects</span>
    </div>
    <div class="body">
        <div class="card-wrapper">  
            <div class="card-top">  
             <img class="image" src="../assets/images/code1.jfif">  
            </div>  
            <div class="card-bottom">  
             <span class="top-text">Schedule Planner</span><br>  
             <span class="bottom-text">Single user system programmed in Java which was a 1st semester project.</span>  
             <br>  
             <form action="https://github.com/EnBi81/Sep-Mango" method="get" target="_blank">
                <button type="submit" class="button">GitHub</button>
             </form>            
            </div>  
           </div> 
           <div class="card-wrapper">  
            <div class="card-top">  
             <img class="image" src="../assets/images/code2.jpg">  
            </div>  
            <div class="card-bottom">  
             <span class="top-text">Ordering System</span><br>  
             <span class="bottom-text">Client – Server system which was a 2nd semester project. The University's canteen server as a virtual customer.
            </span>  
             <br>  
             <form action="https://github.com/EnBi81/SEP2-MangoProject" method="get" target="_blank">
                <button type="submit" class="button">GitHub</button>
             </form>    
            </div>  
           </div> 
           <div class="card-wrapper">  
            <div class="card-top">  
             <img class="image" src="../assets/images/code3.jpg">  
            </div>  
            <div class="card-bottom">  
             <span class="top-text">Kašpersky 440 Webpage</span><br>  
             <span class="bottom-text">Project done by me and my team BeCreative for our customer (house 
                with apartments for rent).</span>  
             <br>  
             <form action="https://kasperky440.cz/" method="get" target="_blank">
                <button type="submit" class="button">Webpage</button>
             </form>     
            </div>  
           </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@200&display=swap');  

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
.body {  
     position: relative;  
     width: 100%;   
     display: flex;  
     justify-content: space-evenly;  
     align-items: center;  
     flex-wrap: wrap;
}  
.image {  
     width: 100%;  
     height: auto;  
     border-radius: 20px;  
     transition: all 0.3s ease-in-out;  
     z-index: 20;  
     box-shadow: 10px 10px 53px 0px rgba(0, 0, 0, 0.49);  
}  
.card-wrapper {  
     position: relative;  
     width: 40vw;  
     height: auto;  
     border-radius: 20px;  
     overflow: hidden;  
     transition: all 0.3s ease-in-out;  
     box-shadow: 10px 10px 53px 0px rgba(0, 0, 0, 0.49); 
     margin-top: 7%;
}  
.card-wrapper:hover .image {  
     filter: blur(1.4px);  
     transform: scale(1.5);  
     overflow: hidden;  
     transition: all 0.3s linear;  
     box-shadow: inset -6px -1px 32px 0px rgba(0, 0, 0, 0.75);  
}  
.card-wrapper:hover .card-bottom {  
     transform: translate(0%, -50%);  
     transition: all 0.8s ease;  
     background-color: rgba(110, 122, 92, 0.7);  
}  
.card-top {  
     position: relative;  
     width: 100%;  
     height: 100%;  
     z-index: 1;  
}  
.card-bottom {  
     width: 100%; 
     position: absolute;  
     z-index: 20;  
     display: nonee;  
     top: 50%;  
     background-color: rgba(110, 122, 92, 0);  
     padding: 100px 20px;  
     color: #fff;  
     transform: translate(100%, -50%);  
}  
.top-text {  
     font-size: 25px;  
     line-height: 40px;  
     font-weight: bold;  
     letter-spacing: 1px;  
}  
.bottom-text {  
     font-size: 15px;  
}  
.button {  
     position: relative;  
     display: block;  
     outline: none;  
     cursor: pointer;  
     margin-top: 25px;  
     border: none;  
     border-radius: 3px;  
     background-color: #f8961e;  
     color: #fff;  
     padding: 5px 20px;  
}  

@media only screen and (max-width: 767px){
    .body{
        flex-direction: row;
    }
    .card-wrapper{
        width: 50vw;
        margin-top: 15px;
    }
    
}
</style>