import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            //baseURL: 'https://http-vue-18fe6-default-rtdb.firebaseio.com/'
            baseURL: 'https://listar-compras-705af-default-rtdb.firebaseio.com/'
            
        });
    }
})