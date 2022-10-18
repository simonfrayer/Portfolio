<!-- #11201E | #154042 | #D5E9DD | #DECEC8 | #D4D6D5 -->
<template>
  <Header/>
  <AboutMe/>
  <KeySkills/>
  <Projects />
  <Education/>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/About Me.vue'
import Education from './components/Education.vue'
import KeySkills from './components/Key Skills.vue'
import Projects from './components/Projects.vue'

  export default {
    components: {
      Header,
      AboutMe,
      Education,
      KeySkills,
      Projects,
    },
  }
</script>

<style scoped>



</style>
