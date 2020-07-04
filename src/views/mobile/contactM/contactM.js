export default {
    name:'contactM',
    components:{

    },
    data(){
        return{
            title:'¿Te interesa?',
            buttons:{
                whats:'Dejanos tu wha',
                mail:'Dejanos tu correo'
            }
        }
    },
    methods: {
        actions(e){
            if(e=='mail'){
                console.log('estas entrando a mail');
            }else if(e=='whats'){
                console.log('estas entrando a whats');
            }
        }
    },
}