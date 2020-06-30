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
                image:'check.png',
                text1:'Encuentra clientes',
                text2:'cerca de ti'
            },
            {
                id:2,
                image:'money.png',
                text1:'Gana dinero en tus',
                text2:'ratos libres'
            },
            {
                id:3,
                image:'online.png',
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