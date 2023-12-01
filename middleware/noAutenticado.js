import PocketBase from 'pocketbase';
const pb = new PocketBase();
export default defineNuxtRouteMiddleware(async()=>{
  try {
    const response = pb.authStore.isValid
    if (!response) {
      return navigateTo('/login')
    } else {
      console.log('autenticado')
    }
  } catch (error) {
    console.error(error)
  }
})