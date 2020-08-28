<template>
  <v-app>

      <section id="home">
        <div class="desktop-home d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
          <Home/>
        </div>
        <div class="mobile-home d-none d-sm-block d-md-none d-block d-sm-none">
          <HomeM/>
        </div>
      </section>

      <section id="about">
        <div class="desktop-about d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
          <About/>
        </div>
      </section>
      
      <section id="contact">
        <div class="desktop-contact d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
          <Contact/>
        </div>
        <div class="mobile-contact d-none d-sm-block d-md-none d-block d-sm-none">
          <ContactM/>
        </div>
      </section>
      
      <footer id="footer">
        <div class="desktop-contact d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block">
          <Footer/>
        </div>
      </footer>
  </v-app>
</template>
<script src="https://kit.fontawesome.com/e0d2f08eea.js" crossorigin="anonymous"></script>

<script>
import Home from './views/Home/Home.vue';
import About from './views/About/About.vue';
import Contact from './views/Contact/Contact.vue';
import HomeM from './views/mobile/homeM/homeM.vue';
import ContactM from './views/mobile/contactM/contactM.vue';
import Footer from './views/footer/footer.vue';
 
export default {
  name: 'App',
  components: {
    Home,
    About,
    Contact,
    HomeM,
    ContactM,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
</style>
