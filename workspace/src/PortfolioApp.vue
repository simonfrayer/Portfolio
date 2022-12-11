<!-- #11201E | #154042 | #D5E9DD | #DECEC8 | #D4D6D5 -->
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <ChatBot_GPT/>
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
import ChatBot_GPT from './components/ChatBot_GPT.vue'

  export default {
    components: {
      Header,
      AboutMe,
      Education,
      KeySkills,
      Projects,
      ChatBot_GPT,
    },
  }
</script>

<style scoped>



</style>
