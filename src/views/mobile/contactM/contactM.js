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
            },
            displayOptions:'flex',
            displaySelect:'none',
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
            multiLine:false
        }
    },
    methods: {
        actions(e){
            if(e=='mail'){
                this.colorBtn='#39F';
                this.title = 'Dejanos tu contacto';
                this.placeholder = 'Carla Gonzalez';
                this.placeholder2 = 'carla@mail.com'
                this.displayOptions = 'none';
                this.displaySelect = 'flex';
                this.type='mailF';
                this.mediaT = e;
            }else if(e=='phone'){
                this.colorBtn='#2AC940';
                this.title = 'Ingresa tu telefono';
                this.placeholder = 'Carla Gonzalez';
                this.placeholder2 = '555-256-4063'
                this.displayOptions = 'none';
                this.displaySelect = 'flex';
                this.type='whatsF';
                this.mediaT=e;
            }
        },
        back(){
            this.title='¿Te interesa?';
            this.displayOptions = 'flex';
            this.displaySelect = 'none';
        },
        clear(){
            this.info='';
            this.name='';
            this.$nextTick(()=>{
                this.$refs.name.focus();
            })
        },
        submit(){
            this.spinner=true;
            let send = false;
            this.snackColor='red';
            if(this.info=='' || this.name==''){
                this.spinner=false;
                this.text = 'Asegurese de llenar correctamente el formulario';
                this.snackbar=true;
                console.log('usuario pendejo');
            }else{
                if(this.mediaT=='phone'){
                    if(isNaN(this.info) || this.info.length<10){
                        this.spinner=false;
                        this.text = 'Asegurese de usar un numero telefonico valido'
                        this.snackbar=true;
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
                        console.log('correo no valido');
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
                    this.spinner=false;
                    this.snackColor='success';
                    this.snackbar=true;
                    this.text='Su informacion ha sido enviada';
                    console.log(res);
                    this.clear();
                })
                .catch((err)=>{
                    this.spinner=false;
                    this.snackColor='red';
                    this.snackbar=true;
                    this.text='Ocurrio un error al enviar datos';
                    console.log(err);
                })
            }
        }
    },
}