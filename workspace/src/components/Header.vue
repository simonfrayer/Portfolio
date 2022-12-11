<template>
    <div id="" class="navbar">
        <img src="../assets/images/SM logo.png" id="logo" alt="logo">

        <ul>
            <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{path: '/' + item, hash: '#' + item }">{{ item }}</router-link>  
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            menuItems: ["About", "Education", "Projects", "Contact"],
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
    font-size: 2vw;
}

.navbar #logo{
    width: 15vw;
    margin-left: 2vw;
}

.navbar ul{
    list-style-type: none;
    padding: 0;
    margin-left: 10%;
    display: flex;
}

li{
    padding: 1.5vw;
    margin-right: 5vw;
    list-style-position: inside;
    border-left: 2px solid #11201E;
    white-space: nowrap;
}

</style>