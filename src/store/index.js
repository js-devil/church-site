import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        subMenu : true,
    },
    mutations:{
        showSubMenu(state, payload){
            if(!payload){
              state.subMenu = payload
            }else{
              state.subMenu = true;
            }
        },
    }
})