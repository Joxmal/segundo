import PocketBase from 'pocketbase';
export default defineNuxtRouteMiddleware((to,from)=>{
  const pb = new PocketBase();
  const response = pb.authStore.isValid
  
  if (!response) {
    return  navigateTo('login')
  }
})