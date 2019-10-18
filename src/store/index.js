import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state:{
        events: [],
    },
    mutations:{
        GET_ALL_EVENTS: (state, events) => {
            state.events = events
        },
        DELETE_EVENT: async (state, payload) => {
            try {
                let response = await axios.delete(`${Endpoint}/events/${payload.id}`, {
                    headers: {
                        "Authorization": `Bearer ${payload.token}`
                    }
                })
    
                if(response.status==200) {  
                    state.events = state.events.filter(key => key._id !== payload.id)    
                    document.getElementById('modalDismiss').click()
                    Toast.fire({
                        type: 'success',
                        title: response.data.message
                    })
                }
            } catch (error) {
                document.getElementById('modalDismiss').click()
                Toast.fire({
                    type: 'error',
                    title: error.response.data.message
                })  
            } 
        }

    },
    actions: {
        async getAllEvents(context) {
            let response = await axios.get(`${Endpoint}/events`)
                
            if(response.status==200){
                let events = await response.data.events
                context.commit('GET_ALL_EVENTS', events)
            }
        },
        async deleteEvent(context, payload) {            
            context.commit('DELETE_EVENT', payload)    
        }
    },
    getters: {
        allEvents: (state) => {
            return state.events
        },
    }
})