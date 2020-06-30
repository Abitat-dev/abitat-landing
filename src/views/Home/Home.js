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
      intro:[
        'La aplicacion donde podras',
        'ofrecer tus servicios a personas',
        'de toda la republica'
      ],
      images:{
        chef:'chef.png',
        contra:'construction.png',
        designer:'designer.png'
      }
    }
  }
}