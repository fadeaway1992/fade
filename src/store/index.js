import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store =  new Vuex.Store({
  state:{
    db:{},
    currentUser:{},
    userNumber:'',
    pageOwner:{},
    //ownerNumber:''
  },
  mutations:{
    initDB (state) {
      if(typeof localStorage.mytwitter!=='undefined' && localStorage.mytwitter!=='undefined'){
        state.db = JSON.parse(localStorage.mytwitter)
      } else{
        state.db = {users:[]}
      }
    },
    saveDB (state,db) {
      state.db = db
      localStorage.mytwitter = JSON.stringify(db)
    },
    saveUser (state,currentUser) {
      state.currentUser = currentUser
      sessionStorage.currentUser = JSON.stringify(currentUser)
    },
    initUser (state) {
      state.currentUser = JSON.parse(sessionStorage.currentUser)
    },
    saveUserNumber (state, userNumber) {
      state.userNumber = userNumber
      sessionStorage.userNumber = userNumber
    },
    initUserNumber (state) {
      state.userNumber = sessionStorage.userNumber
    },
    getPageOwner(state,id){
      for(let i=0; i<state.db.users.length; i++){
        if(id===state.db.users[i].username){
          state.pageOwner = state.db.users[i]
          sessionStorage.ownerNumber = i
        }
      }
    }
  }
})
