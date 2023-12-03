<template>
<v-app
class="mx-auto">
  <NavbarDefault />
  <v-card    class="!z-30">

    <v-app-bar
    color="primary"
    scroll-behavior="hide"
    scroll-threshold="0"
    density="compact"
 
      >

      <v-app-bar-title>Menu</v-app-bar-title>

      <template v-slot:append>
        <Avatar/>
      </template>
      
      
      
      
    </v-app-bar>
  </v-card>
  <v-main>
    <v-container>
      <slot />      
    </v-container>
  </v-main>

    <!-- <v-footer class="d-flex flex-column" app>

        <div class="bg-blue-500 w-full text-center">
          <strong class="">Iconos del footer</strong>
    
          <v-spacer></v-spacer>
        </div>
    
        <div class="px-4 py-2 bg-black text-center w-100">
          {{ new Date().getFullYear() }} — <strong>Jose montes</strong>
        </div>
  </v-footer> -->

  </v-app>
</template>
  
<style scoped></style>