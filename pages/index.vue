<template>
    <AlertsError class="!fixed z-50" v-if="store.errorInicio"/>
  <hr>
  <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="store.IniciarSesion(username,password)">
          <v-text-field v-model="username" label="Usuario"></v-text-field>

          <v-text-field v-model="password" label="Contraseña"></v-text-field>
          <a href="#" class="text-body-2 font-weight-regular">Olvidaste tu contraseña?</a>

          <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>

      </v-form>
      <div class="mt-2">
          <p class="text-body-2">Registrate</p>
      </div>
  </v-sheet>
  <hr>
  <p>


  </p>


</template>


<script setup>
import PocketBase from 'pocketbase';
import {useStoreIniciarSesion} from '~/stores/useStoreIniciarSesion';

const store= useStoreIniciarSesion()

// console.log(process.env._SERVER_POCKETBASE)

const username = ref('')
const password = ref('')


const iniciarSeccion= async()=>{

}



</script>