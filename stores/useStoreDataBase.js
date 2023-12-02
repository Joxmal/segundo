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

    async CrearCasa(valores){
      try {
          const record = await pb.collection('casas').create(valores); //    "nombre": "test", "puntuacion": 123, "direccion": "Maracay", "Adicional": "test" 
          console.log(record)
          this.ListarCasas()
      } catch (error) {
          console.error(error)
      }
    }
  },

})