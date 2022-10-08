<template>
    <img src="../assets/images/SM logo.png" alt="logo">

    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            {{ item }}
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
        return {
            menuItems: ["About Me", "Education", "Projects", "Contact"],
        }
    },

}

    
</script>

<style lang="scss" scoped>

img{
    width: 5vw;
}

</style>