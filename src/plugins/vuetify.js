import Vue from 'vue';
import Vuetify,{
    VSnackbar
} from 'vuetify/lib';
import {Ripple} from 'vuetify/lib/directives';

Vue.use(Vuetify,{
    components:{
        VSnackbar
    },
    directives:{
        Ripple
    }
});

export default new Vuetify({});
