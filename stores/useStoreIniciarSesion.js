import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');



export const useStoreIniciarSesion = defineStore('useStoreIniciarSesion', {
  state: () => ({
    count: 0,
    ID_USER:'',
    errorInicio: false,
  }),
  persist:persistedState.sessionStorage,
  
  getters:{
    dobleCount: (state) => state.count * 2
  },
  actions:{
    sumCount() {
        this.count++
    },

    async IniciarSesion(usuario,contraseña) {
      try {
        await pb.collection('users').authWithPassword(
        usuario,
        contraseña,
        );
        this.ID_USER = pb.authStore.token;
        console.log(this.ID_USER);
       console.log (pb.authStore.isValid)
      } catch (error) {
        this.errorInicio = true
        setTimeout(() => {
          this.errorInicio = false
        }, 3000);
      }
    },
    
    cerrarSesion(){
      pb.authStore.clear()
      console.log(pb.authStore.token);
    }
  },

})