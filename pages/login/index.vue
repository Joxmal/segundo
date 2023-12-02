<template>
    <AlertsError class="!fixed top-0 right-0 m-4  z-50" v-if="store.errorInicio"/>

  <v-sheet  width="300"  class="mx-auto rounded-shaped p-4"  >
      <v-form fast-fail @submit.prevent="store.IniciarSesion(username,password)">
            <v-text-field v-model="username" label="Usuario"
            append-inner-icon='mdi-account'
            >
            </v-text-field>

            <v-text-field v-model="password" label="Contraseña"
                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'" 
                hint="Minimo de 8 letras"
                placeholder="Contraseña"
                
                counter
                @click:append-inner="show1 = !show1"
            >
            </v-text-field>
          <v-btn type="submit" color="primary" block class="mt-2">Login</v-btn>
      </v-form>
  </v-sheet>
</template>


<script setup>
import {useStoreIniciarSesion} from '~/stores/useStoreIniciarSesion';



definePageMeta({
  layout: 'custom',
})

const store= useStoreIniciarSesion()

const username = ref('')
const password = ref('')

const show1 =ref()

const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
}

</script>