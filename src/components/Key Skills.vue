<template>
            <h1 id="Key Skills">My Key Skills</h1>
    <div class="skill-bars">
      <div class="bar">
        <div class="info"> <span>Web Development</span> </div>
        <div class="progress-line web"> <span></span> </div>
      </div>
      <div class="bar">
        <div class="info"> <span>JavaScript</span> </div>
        <div class="progress-line JavaScript"> <span></span> </div>
      </div>
      <div class="bar">
        <div class="info"> <span>Java</span> </div>
        <div class="progress-line java"> <span></span> </div>
      </div>
        <div class="bar">
            <div class="info"> <span>TailwindCSS</span> </div>
            <div class="progress-line css"> <span></span> </div>
          </div>
                    <div class="bar">
            <div class="info"> <span>VueJS</span> </div>
            <div class="progress-line vue"> <span></span> </div>
          </div>
          <div class="bar">
            <div class="info"> <span>C#</span> </div>
            <div class="progress-line c"> <span></span> </div>
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
h1{
  font-size: 4rem;
  text-align: center;
  color: #fff;
  text-shadow: 5px 5px black;
  margin-top: 50px;
  margin-bottom: 50px;
}
.skill-bars{
  padding: 30px 30px;
  width: 900px; 
  height: auto;
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-bottom: 100px;
  margin: auto;
}
.bar{
  margin: 20px 0;
  padding: 8px 0;
}
.bar:first-child{
  margin-top: 0px;
}
.info{
  margin-bottom: 5px;
}
.info span{
  font-weight: 500;
  font-size: 17px; opacity: 0;
  animation: showText 0.5s 1s linear forwards;
}
@keyframes showText {
  100%{
    opacity: 1;
  }
}
.progress-line{
  height: 10px; width: 100%;
  background: #f0f0f0; position: relative;
  transform: scaleX(0); transform-origin: left;
  border-radius: 10px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05),
              0 1px rgba(255,255,255,0.8);
  animation: animate 1s cubic-bezier(1,0,0.5,1) forwards;
}
.progress-line span{
  height: 100%; position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #ff4d4f;
  animation: animate 1s 1s cubic-bezier(1,0,0.5,1) forwards;
}
.progress-line span::before{
  position: absolute; content: "";
  top: -10px; right: 0;
  height: 0; width: 0; opacity: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-color: #000;
  animation: showText2 0.5s 1.5s linear forwards;
}
.progress-line span::after{
  position: absolute; top: -28px;
  right: 0; font-weight: 500;
  background: #000;
  color: #fff; opacity: 0;
  padding: 1px 8px;
  font-size: 12px;
  border-radius: 3px;
  animation: showText2 0.5s 1.5s linear forwards;
}
@keyframes animate {
  100%{
    transform: scaleX(1);
  }
}
.web span{
  width: 95%;
}
.java span{
  width: 60%;
}
.css span{
  width: 30%;
}
.JavaScript span{
  width: 90%;
}
.vue span{
  width: 30%;
}
.c span{
    width: 30%;
  }
@keyframes showText2 {
  100%{
    opacity: 1;
  }
}
.web span::after{
  content: "5+ years";
}
.java span::after{
  content: "2+ years";
}
.css span::after{
  content: "1+ years";
}
.JavaScript span::after{
  content: "4+ years";
}
.vue span::after{
  content: "1+ years";
}
.c span::after{
    content: "1+ years";
  }

/* Media Query */
/* For tablet */
@media screen and (max-width:900px){
  h1{
    font-size: 2rem;
    text-align: center;
    color: #fff;
    text-shadow: 3px 3px  #11201E;
  }
  .skill-bars{
  padding: 15px 20px;
  width: 600px; 
  background: #fff;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
  border-radius: 10px;

  }

}
/* For mobile */
@media screen and (max-width :600px) {
  h1{
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 3px 4px black;
  }
  .skill-bars{
    padding: 10px 10px;
    width: 400px; 
    background: #fff;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    border-radius: 8px;
  
  }
  
}

</style>