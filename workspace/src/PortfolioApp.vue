<!-- #11201E | #154042 | #D5E9DD | #DECEC8 | #D4D6D5 -->
<template>
  <Header/>
  <About/>
  <KeySkills/>
  <Projects />
  <Education/>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import KeySkills from './components/Key Skills.vue'
import Projects from './components/Projects.vue'
import ChatBot_GPT from './components/ChatBot_GPT.vue'

  export default {
    components: {
      Header,
      About,
      Education,
      KeySkills,
      Projects,
      ChatBot_GPT,
    },
  }
</script>

<style scoped>



</style>
