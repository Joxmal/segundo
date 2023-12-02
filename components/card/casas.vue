<template>
    <v-card
      class="rounded-shaped my-1 mx-auto"
      width="200px"
    >
      <v-img
        :src="props.image"
        cover
        height="200px"
      ></v-img>
  
      <v-card-title class="text-center">
        {{props.title}}
      </v-card-title>
      <v-divider/>
      <v-card-subtitle class="py-2 text-center">
        <a class="text-blue" :href="props.link" target="_blank">link</a>
      </v-card-subtitle>
      <v-divider/>
      <v-card-subtitle class="text-center">
        {{ props.subtitle }}
        <v-divider />
        <v-icon color="yellow" icon="mdi-star" size="x-small" v-for="n in props.puntuacion" :key="n"></v-icon>
       
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="show = !show"
        >
          ${{formatearNumero(props.precio)}}
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition
      >
        <div v-if="show">
          <v-divider></v-divider>
  
          <v-card-text>
            {{ props.content }}
        </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>
  
<script setup>

const show= ref(false)


function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero);
}

function puntuacion(puntuacion){
  let star = `<v-icon color="yellow" icon="mdi-star" size="x-small"></v-icon>`

  return star
}

const props = defineProps({
title:{
    type:String
},
subtitle:{
    type: String
},
image:{
    type: String,
    default:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
},
content:{
    type: String
},
precio:{
    type: Number
},
link:{
  type: String
},
puntuacion:{
  type: Number
}
})


</script>