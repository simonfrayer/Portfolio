<template>
    <div>
      <div class="bg-white p-8 rounded-lg shadow-md">
        <transition name="fade">
          <h1 class="text-3xl font-bold text-gray-900">My Web Portfolio</h1>
        </transition>
        <transition name="fade">
          <p class="mt-4 text-gray-600">
            This is my web portfolio, showcasing my skills and accomplishments.
          </p>
        </transition>
        <hr class="my-8 border-t-2 border-gray-400" />
        <transition name="fade">
          <h2 class="text-2xl font-bold text-gray-900">Skills</h2>
        </transition>
        <transition name="fade" mode="out-in">
          <ul class="mt-4">
            <li class="mb-4">
              <p class="text-gray-700 font-bold">Vue.js</p>
              <p class="text-gray-600">I am proficient in Vue.js and have experience building web applications with it.</p>
            </li>
            <li class="mb-4">
              <p class="text-gray-700 font-bold">TailwindCSS</p>
              <p class="text-gray-600">I am experienced in using TailwindCSS for styling my web applications.</p>
            </li>
            <!-- Add more skills here -->
          </ul>
        </transition>
        <hr class="my-8 border-t-2 border-gray-400" />
        <transition name="fade">
          <h2 class="text-2xl font-bold text-gray-900">Accomplishments</h2>
        </transition>
        <transition name="fade" mode="out-in">
          <ul class="mt-4">
            <li class="mb-4">
              <p class="text-gray-700 font-bold">Vue.js Website</p>
              <p class="text-gray-600">I built a website with Vue.js that received positive feedback from users.</p>
            </li>
            <li class="mb-4">
              <p class="text-gray-700 font-bold">TailwindCSS Design</p>
              <p class="text-gray-600">I used TailwindCSS to create a clean and modern design for a web application.</p>
            </li>
            <!-- Add more accomplishments here -->
          </ul>
        </transition>
      </div>
    </div>
  </template>
  <script>

    export default {
        props:{
            
        },

        data() {
            return {
            }
        },

        methods: {
            
        },
    }
</script>
  <style>
    /* Add custom styles here */
  
    .fade-enter-active, .fade-leave-active {
      transition: all .3s;
    }
  
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  </style>