import PocketBase from 'pocketbase';
const pb = new PocketBase();
export default defineNuxtRouteMiddleware(async()=>{
  try {
    const response = pb.authStore.isValid
    if (response) {
      return navigateTo('/')
    } else {
      console.log('no esta autenticado')
    }
  } catch (error) {
    console.error(error)
  }
})