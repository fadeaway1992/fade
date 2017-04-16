import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store =  new Vuex.Store({
  state:{
    db:{},
    currentUser:{},
    userNumber:''
  },
  mutations:{
    initDB (state) {
      if(localStorage.mytwitter){
        state.db = JSON.parse(localStorage.mytwitter)
      } else{
        state.db = {users:[]}
      }
    },
    saveDB (state) {
      localStorage.mytwitter = JSON.stringify(state.db);
    },
    // initCache (state) {
    //   state.currentUser = JSON.parse(sessionStorage.currentUser)
    // },
    saveUser (state,currentUser) {
      state.currentUser = currentUser
    },
    getPageOwner(state,id){
      for(let i=0; i<state.db.users.length; i++){
        if(id===state.db.users[i].username){
          state.userNumber = i
          return state.db.users[i]
        }
      }
    }
  }
})
