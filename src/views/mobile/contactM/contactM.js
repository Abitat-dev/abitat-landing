export default {
    name:'contactM',
    components:{

    },
    data(){
        return{
            title:'¿Te interesa?',
            buttons:{
                whats:'Déjanos tu wha',
                mail:'Déjanos tu correo'
            },
            displaySend:'none',//none
            displayOptions:'flex',//flex
            displaySelect:'none',//none
            displayTitle:'flex',//flex
            placeholder:'',
            placeholder2:'',
            type:'mailF',
            colorBtn:'',
            name:'',
            info:'',
            mediaT:'',
            snackbar:false,
            text:'Asegurate de llenar el formulario',
            snackColor:'red',
            spinner:false,
            multiLine:false,
            icon:'',
        }
    },
    methods: {
        actions(e){
            if(e=='mail'){
                this.icon = "far fa-envelope";
                this.colorBtn='#39F';
                this.title = 'Dejanos tu contacto';
                this.placeholder = 'Carla Gonzalez';
                this.placeholder2 = 'carla@mail.com'
                this.displayOptions = 'none';
                this.displaySelect = 'flex';
                this.type='mailF';
                this.mediaT = e;
                this.focus();
            }else if(e=='phone'){
                this.icon = "fab fa-whatsapp";
                this.colorBtn='#2AC940';
                this.title = 'Ingresa tu telefono';
                this.placeholder = 'Carla Gonzalez';
                this.placeholder2 = '555-256-4063'
                this.displayOptions = 'none';
                this.displaySelect = 'flex';
                this.type='whatsF';
                this.mediaT=e;
                this.focus();
            }
        },
        back(from){
            if(from=='forms'){
                this.title='¿Te interesa?';
                this.displayOptions = 'flex';
                this.displaySelect = 'none';
            }else if(from=='response'){
                this.displaySend='none';
                this.displayOptions='flex';
                this.displaySelect='none';
                this.displayTitle='flex';
            }
        },
        focus(){
            this.$nextTick(()=>{
                this.$refs.name.focus();
            })  
        },
        clear(){
            this.info='';
            this.name='';
            this.focus();
        },
        submit(){
            this.spinner=true;
            let send = false;
            this.snackColor='red';
            if(this.info=='' || this.name==''){
                this.spinner=false;
                this.text = 'Asegurese de llenar correctamente el formulario';
                this.snackbar=true;
                this.$nextTick(()=>{
                    this.$refs.name.focus();
                })
            }else{
                if(this.mediaT=='phone'){
                    if(isNaN(this.info) || this.info.length<10){
                        this.spinner=false;
                        this.text = 'Asegurese de usar un numero telefonico valido'
                        this.snackbar=true;
                        this.$nextTick(()=>{
                            this.$refs.info.focus();
                        })
                    }else{
                        send = true
                    }
                }else if(this.mediaT=='mail'){
                    if(this.info.includes('@')){
                        send = true;
                    }else{
                        this.spinner=false;
                        this.text = 'Asegurese de usar un correo electronico valido'
                        this.snackbar=true;
                        this.$nextTick(()=>{
                            this.$refs.info.focus();
                        })
                    }
                }
            }
            if(send){
                this.axios.post('Https://func-backend-abitat-dev.azurewebsites.net/api/SetHandymanLandingPage?code=dVYEQFelotF/1dEazDKdVXibNZamarpeYVhNl8YpD6Hg3vVMuziKUA==', {
                    name:this.name,
                    type:this.mediaT,
                    contact:this.info
                })
                .then((res)=>{
                    this.displaySend='flex';
                    this.displayOptions='none';
                    this.displaySelect='none';
                    this.displayTitle='none';
                    this.spinner=false;
                    this.snackColor='success';
                    this.snackbar=true;
                    this.text='Su informacion ha sido enviada';
                    this.clear();
                })
                .catch((err)=>{
                    this.spinner=false;
                    this.snackColor='red';
                    this.snackbar=true;
                    this.text='Ocurrio un error al enviar datos';
                    console.log(err);
                    this.$nextTick(()=>{
                        this.$refs.name.focus();
                    })
                })
            }
        }
    },
}