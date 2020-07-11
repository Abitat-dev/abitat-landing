export default {
    name:'Contact',
    components:{

    },
    data(){
        return{
            texto:{
                title:'¿Te interesa?',
                subtitle:'Déjanos tu contacto y te echamos un grito'
            },
            images:{
                message:'mail.png',
                phone:'phone.png',
                send:'send.png',
                notification:'notification.png'

            },
            options:[
                {
                    text:'Telefono',
                    value:'phone'
                },
                {
                    text:'Correo',
                    value:'mail'
                }
            ],
            optionsBool:false,
            currentValue:true,
            info:'',
            name:'',
            mediaT:'phone',
            text:'Asegurate de llenar el formulario',
            snackbar:false,
            multiLine:true,
            snackColor:'red',
            spinner:false
        }
    },
    methods: {
        submit(){
            this.spinner=true;
            document.documentElement.style.overflow = 'hidden';
            let send = false;
            this.snackColor='red';
            if(this.info=='' || this.name==''){
                document.documentElement.style.overflowY = 'scroll';
                this.spinner=false;
                this.text = 'Asegurese de llenar correctamente el formulario'
                this.snackbar=true;
            }else{
                if(this.mediaT=='phone'){
                    if(isNaN(this.info) || this.info.length<10){
                        document.documentElement.style.overflowY = 'scroll';
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
                        document.documentElement.style.overflowY = 'scroll';
                        this.spinner=false;
                        this.text = 'Asegurese de usar un correo electronico valido'
                        this.snackbar=true;
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
                    document.documentElement.style.overflowY = 'scroll';
                    this.snackColor='success';
                    this.snackbar=true;
                    this.text='Su informacion ha sido enviada';
                    console.log(res);
                    this.clear();
                })
                .catch((err)=>{
                    this.spinner=false;
                    document.documentElement.style.overflowY = 'scroll';
                    this.snackColor='red';
                    this.snackbar=true;
                    this.text='Ocurrio un error al enviar datos';
                    console.log(err);
                })
            }
        },
        clear(){
            this.info='';
            this.name='';
            this.$nextTick(()=>{
                this.$refs.name.focus();
            })
        },
        selectOption(item){
            this.optionsBool = false;
            this.mediaT = item.value;
            this.info='';
            this.$nextTick(()=>{
                this.$refs.options.focus();
            })
            if(item.value=='phone'){
                this.currentValue = true;
            }else{
                this.currentValue = false;
            }
        }
    },
    computed:{
        media(){
            if(this.currentValue==false){
                return this.images.message;
            }else{
                return this.images.phone;
            }
        },
        placeOption(){
            if(this.currentValue==false){
                return 'john@mail.com';
            }else{
                return '555-215-526';
            }
        }
    },
}