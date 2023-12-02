import PocketBase from 'pocketbase';
const pb = new PocketBase();
export default defineNuxtRouteMiddleware((to,from)=>{
  const response = pb.authStore.isValid
  try {
    if (to.path !== '/login' && response == true) {
      console.log('esta autenticado')
    } else if (to.path !== '/login' && response == false) {
      alert ("no esta autenticado")
      return navigateTo('/login')
    }
  } catch (error) {
    console.error(error)
  }
})