<!-- #11201E | #154042 | #D5E9DD | #DECEC8 | #D4D6D5 -->
<template>
  <Header/>
  <AboutMe/>
  <Education/>
</template>

<script>
import Header from "./components/Header.vue"
import AboutMe from './components/About Me.vue'
import Education from './components/Education.vue'

  export default {
    components: {
      Header,
      AboutMe,
      Education,
    },
  }
</script>

<style scoped>



</style>
