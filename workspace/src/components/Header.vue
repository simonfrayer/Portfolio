<template>
    <div id="" class="navbar">
        <img src="@/assets/images/SM-logo.png" id="logo" alt="logo">


        <ul class="hidden lg:flex z-10">
            <li v-for="(item, index) in menuItems" :key="index" class=" hover:bg-[#D5E9DD] hover:cursor-pointer hover:bg-opacity-80 hover:shadow-sm hover:border-l-4 transition-all">
                <router-link id="link" :to="{hash: '#' + item }">{{ item }}</router-link>  
            </li>
        </ul>

         <div class="toggleMenu lg:hidden">
            <font-awesome-icon icon="fa-solid fa-bars " @click="showMenuOnClickAndHideOnSecondClick"  class="p-10 cursor-pointer lg:hidden" size="lg"/>
            <font-awesome-icon icon="fa-solid fa-xmark" class="hidden p-10 cursor-pointer" />
        </div>

        <ul id="menu" class="hidden lg:hidden absolute top-24 w-[100%] z-10 transition-all">
            <li v-for="(item, index) in menuItems" :key="index" class=" hover:bg-[#D5E9DD] hover:cursor-pointer hover:bg-opacity-80 hover:shadow-sm hover:border-l-4 transition-all  bg-[#11201E]/95 text-white hover:text-[#11201E]">
                <router-link id="link" :to="{hash: '#' + item }">{{ item }}</router-link>  
            </li>
            </ul>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            menuItems: ["About", "Key Skills", "Projects", "Education", "Contact"],
        }
    },

    methods: {
       showMenuOnClickAndHideOnSecondClick(){
            let menu = document.getElementById("menu");
              if(menu.classList.contains("hidden")){
                menu.classList.remove("hidden");
              }else{
                menu.classList.add("hidden");
              }
       }
    },

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
.navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.7rem;
    height: 100px;
    max-height: 100px;
}

.navbar #logo{
    height: 100px;
    max-height: 100px;
    height: auto;
    padding-left: 40px;
}

.navbar ul{
    list-style-type: none;
    padding: 0;
    height: 60px;
    max-height: 60px;
    
}

li{
    padding: 15px;
    padding-right: 60px;
    list-style-position: inside;
    border-left: 2px solid #11201E;
    white-space: nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

#menu{
    border-bottom: 2px solid #11201E;
    border-top: 2px solid #11201E;
}
#menu li{
    display: flex;
    justify-content: center;
    border-left: 0;
}
</style>