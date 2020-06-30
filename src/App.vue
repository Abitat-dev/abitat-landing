<template>
  <v-app>
    <Home/>
    <About/>
    <Contact/>
  </v-app>
</template>

<script>
import Home from './views/Home/Home.vue';
import About from './views/About/About.vue';
import Contact from './views/Contact/Contact.vue'
 
export default {
  name: 'App',
  components: {
    Home,
    About,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>
