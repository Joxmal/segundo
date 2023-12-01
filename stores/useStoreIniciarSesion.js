import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'

import CONSTANTE from '~/config/contants';
import PocketBase from 'pocketbase';
const pb = new PocketBase(CONSTANTE.apiUrl);

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
        const router = useRouter()
        router.push({path:'/'})
        this.ID_USER = pb.authStore.token;
      } catch (error) {
        console.log(error)
        this.errorInicio = true
        setTimeout(() => {
          this.errorInicio = false
        }, 3000);
      }
    },
    
    cerrarSesion(){
      pb.authStore.clear()
      const router = useRouter()
      router.push({path:'/login'})

    }
  },

})