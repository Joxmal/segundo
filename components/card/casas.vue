<template>
    <v-card
      class="rounded-shaped my-1 mx-auto"
      max-width="240px" 
    >
      <v-img
        :src="props.image"
        cover
        class="max-w-[200px]"
      ></v-img>
  
      <v-card-title>
        {{props.Title}}
      </v-card-title>
  
      <v-card-subtitle>
        {{ props.subtitle }}
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="show = !show"
        >
          {{props.precio}}
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

const props = defineProps({
title:{
    type:String
},
subtitle:{
    type: String
},
image:{
    type: String,
    default:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
},
content:{
    type: String
},
precio:{
    type: String
}
})


</script>