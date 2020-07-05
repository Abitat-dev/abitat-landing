// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      title:'abitat',
      intro:"La aplicación donde podrás ofrecer tus servicios a personas de toda la republica",
      images:{
        chef:'chef.png',
        contra:'construction.png',
        designer:'designer.png'
      },
      none:'none',
      autoplay:''
    }
  },
  methods: {
    play(){
      this.autoplay=1;
      this.none='flex';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.scrollTop = 0;
    },
    stop(){
      this.autoplay=0;
      this.none='none';
      document.documentElement.style.overflowY = 'scroll';
    }
  },
}