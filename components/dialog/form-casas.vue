<template>


  <v-dialog
  v-model="dialog"
  
  width="1024"
  >
  
  <template v-slot:activator="{ props }">
    <v-btn
    color="primary"
    v-bind="props"
    >
    Open Dialog
  </v-btn>
</template>


      <v-form @submit.prevent="store.CrearCasa(datosCasas)">
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    label="titulo"
                    required
                    v-model="datosCasas.nombre"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    :items="itemsUbicacion"
                    label="Ubicación"
                    hint="Direccion"
                    persistent-hint
                    v-model="datosCasas.direccion"
                    required
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    :rules="ruleCasa.precio"
                    label="Precio"
                    v-model="datosCasas.precio"
                    variant="filled"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="descripción"
                    variant="filled"
                    required
                    v-model="datosCasas.Adicional"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="link"
                    variant="filled"
                    required
                    v-model="datosCasas.link"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                >
                  <v-select
                    :items="[1, 2, 3, 4, 5]"
                    label="Puntuación"
                    density="comfortable"
                    v-model="datosCasas.puntuacion"
                  ></v-select>
                </v-col>
              </v-row>


            </v-container>
            <small>*rellenar los campos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              
              type="submit"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>  

        
        
      </v-dialog>


  </template>
    

<script setup>
import {useStoreDataBase} from "@/stores/useStoreDataBase"

const store = useStoreDataBase()

const datosCasas = reactive ({
  nombre: "",
  puntuacion:0 ,
  direccion: "",
  Adicional: "",
  precio:0,
  link:''
})


  
  



const dialog = ref() 

defineProps(['itemsUbicacion'])



const ruleCasa= reactive({
    precio: [
        value => {
            if (value?.length > 2 && /^\d+$/.test(value)) return true

            return 'Debe ser un numero'
        }
    ]
})


</script>