<template>

      <v-navigation-drawer
        expand-on-hover
        rail
        permanent    
      
      >


        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <NuxtLink to="/">
          <v-list-item title="inicio" prepend-icon="mdi-home-city"  class="hover:text-green-500 hover:cursor-pointer">
            </v-list-item>
          </NuxtLink>
          
          <NuxtLink to="/casas">
          <v-list-item title="casas" prepend-icon="mdi-home-city"  class="hover:text-green-500 hover:cursor-pointer">
            </v-list-item>
          </NuxtLink>


        </v-list>


      </v-navigation-drawer>



   <!-- <v-app-bar croll-behavior="hide" scroll-threshold="318" :elevation="5">
      <h2 class="pa-5">navbar</h2>
  
      <template v-slot:append >
        <div class="flex gap-x-4 mr-5 [&>*]:text-3xl [&>*]:flex [&>*]:items-center ">
  
          <NuxtLink to="/" class="hover:text-green-500 hover:cursor-pointer" >
            <div class="text-base">Inicio</div>
            <Icon name="bi:house-fill"  />
          </NuxtLink>
  
          <NuxtLink to="/tareas/PagesTareasDiarias" class="hover:text-green-500 hover:cursor-pointer" >
            <div class="text-base">Inicio</div>
            <Icon name="mingcute:album-2-line"  />
          </NuxtLink>
    
          <NuxtLink to="/users" class=" hover:text-green-500 group-hover:cursor-pointer">
            <div class=" text-base">Inicio</div>
            <Icon name="ph:users-fill"  />
          </NuxtLink>
        </div>
      </template>
  </v-app-bar> -->


</template>