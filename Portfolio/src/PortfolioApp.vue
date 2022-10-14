<!-- #11201E | #154042 | #D5E9DD | #DECEC8 | #D4D6D5 -->
<template>
  <Header/>
  <AboutMe/>
  <KeySkills/>
  <Education/>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/About Me.vue'
import Education from './components/Education.vue'
import KeySkills from './components/Key Skills.vue'

  export default {
    components: {
      Header,
      AboutMe,
      Education,
      KeySkills,
    },
  }
</script>

<style scoped>



</style>
