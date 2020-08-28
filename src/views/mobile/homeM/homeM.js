export default {
    name:'HomeM',
    components:{

    },
    data(){
        return{
            title:'abitat',
            intros:{
                intro1:'La aplicación donde podrás',
                intro2:'ofrecer tus servicios a personas',
                intro3:'de toda la república'
            }
        }
    },
    methods: {
        play(){
            window.open('https://www.youtube.com/embed/8rEd6_rRMfU')
        }
    },
}