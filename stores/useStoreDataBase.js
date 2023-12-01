import { defineStore } from 'pinia'

import CONSTANTE from '~/config/contants';
import PocketBase from 'pocketbase';
const pb = new PocketBase(CONSTANTE.apiUrl);

export const useStoreDataBase = defineStore('useStoreDataBase', {
  state: () => ({
    dataCasas:null,
    listaUbicaciones:["Maracay", "Turmero", "Palo Negro", "La victoria"]
  }),
  getters:{
  },
  actions:{
    async ListarCasas(){
      try {
          const records = await pb.collection('casas').getFullList({
              sort: '-created',
          });
          this.dataCasas = records
      } catch (error) {
          console.error(error)
      }
    },

    async CrearCasa(nombre,puntuacion,direccion,Adicional,precio){
      try {
          const record = await pb.collection('casas').create({nombre,puntuacion,direccion,Adicional,precio});
      } catch (error) {
          console.error(error)
      }
    }
  },

})