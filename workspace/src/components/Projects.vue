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
             <span class="bottom-text">Single user system programmed in Java <br>
               <i class="projectType">VIA University College</i>
             </span>  
             <br>  
             <form action="https://github.com/EnBi81/Sep-Mango" method="get" target="_blank" class="formButton">
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
             <span class="bottom-text">Client - Server system programmed in Java with SQL database<br>
               <i class="projectType">VIA University College</i>
            </span>  
             <br>  
             <form action="https://github.com/EnBi81/SEP2-MangoProject" method="get" target="_blank" class="formButton">
                <button type="submit" class="button">GitHub</button>
             </form>    
            </div>  
           </div> 

           <div class="card-wrapper">  
               <div class="card-top">  
                <img class="image" src="../assets/images/OnlineMarketplace.jpg">  
               </div>  
               <div class="card-bottom">  
                <span class="top-text">Online Marketplace</span><br>  
                <span class="bottom-text">Distributed System with 3-Tier architecture (Blazor | .NET | C# | Java | Hibernate | SQL)<br>
                  <i class="projectType">VIA University College</i>
               </span>  
                <br>  
                <form action="https://github.com/Beatricia/MANGO-SEP3" method="get" target="_blank" class="formButton">
                   <button type="submit" class="button">GitHub</button>
                </form>    
               </div>  
              </div> 

           <div class="card-wrapper">  
            <div class="card-top">  
             <img class="image" src="../assets/images/code3.jpg">  
            </div>  
            <div class="card-bottom">  
             <span class="top-text">Kašperky 440</span><br>  
             <span class="bottom-text">Single Web Application (VueJS, TailwindCSS) for external client <br>
               <i class="projectType">Personal Project with BeCreative</i>
          </span>  
             <br>  
             <form action="https://kasperky440.cz/" method="get" target="_blank" class="formButton">
                <button type="submit" class="button">Webpage</button>
             </form>     
            </div>  
           </div> 

           <div class="card-wrapper">  
               <div class="card-top">  
                <img class="image" src="../assets/images/gut-wetr.png">  
               </div>  
               <div class="card-bottom">  
                <span class="top-text">Gut Wetr</span><br>  
                <span class="bottom-text">Single Web Application (VueJS, TailwindCSS)<br>
                  <i class="projectType">Personal Project</i>
             </span>  
                <br>  
                <form action="https://gutwetr.netlify.app/" method="get" target="_blank" class="formButton">
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
     width: 100%;
     max-width: 100%;   
     display: flex;  
     justify-content: space-around;  
     align-items: center;  
     flex-wrap: wrap;
}  
.image {  
     width: 300px;  
     height: 200px;  
     object-fit: cover;
     border-radius: 20px;  
     transition: all 0.3s ease-in-out;  
     z-index: 20;  
     box-shadow: 10px 10px 53px 0px rgba(0, 0, 0, 0.49);  
}  
.card-wrapper {  
     position: relative;  
     display: flex;
     justify-content: center;
     align-items: center;
     width: 300px;  
     height: 200px;  
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
     padding: 10px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     font-size: 0.6rem;
}  
.card-top {   
     width: 100%; 
     z-index: 1;  
}  
.card-bottom {  
     width: 100%; 
     height: 100%;
     position: absolute;  
     z-index: 20;  
     display: none;  
     top: 50%;  
     background-color: rgba(110, 122, 92, 0);  
     align-items: center;
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
     border: none;  
     border-radius: 3px;  
     background-color: #f8961e;  
     color: #fff;  
     padding: 5px 20px;  
}  
.formButton{
     display: flex;
     justify-content: center;
     align-items: center;
}
.projectType{
     font-size: 0.6rem;
}

@media only screen and (max-width: 767px){
    .body{
        flex-direction: column;
    }
    .card-wrapper{
        width: 60vw;
        margin-top: 15px;
    }
    
}
</style>