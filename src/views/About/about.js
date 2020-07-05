// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
        cards:[
            {
                id:1,
                image:'png1.png',
                text1:'Encuentra clientes',
                text2:'cerca de ti'
            },
            {
                id:2,
                image:'png2.png',
                text1:'Gana dinero en tus',
                text2:'ratos libres'
            },
            {
                id:3,
                image:'png3.png',
                text1:'Llega a personas en',
                text2:'otros lugares'
            }
        ]
    }
  },
  methods: {
      line(item){
          if(item=='money.png'){
              return 'margin-right: 2vw;'
          }else if(item=='online.png'){
              return 'margin-right: 2vw;'
          }else{
              return 'margin-left:-2vw'
          }
      }
  },
}