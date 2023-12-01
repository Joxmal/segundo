<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
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
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-autocomplete
                    :items="itemsUbicacion"
                    label="Ubicación"
                    hint="donde queda"
                    persistent-hint
                    required
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    :rules="ruleCasa.precio"
                    label="Precio"
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
                  ></v-textarea>
                </v-col>

                <v-col
                  cols="12"
                >
                  <v-select
                    :items="[1, 2, 3, 4, 5]"
                    label="Puntuación"
                    density="comfortable"
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
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
    

<script setup>
import {useStoreIniciarSesion} from "@/stores/useStoreIniciarSesion"

const store = useStoreIniciarSesion()

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