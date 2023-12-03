import PocketBase from 'pocketbase';
const pb = new PocketBase();
export default defineNuxtRouteMiddleware((to,from)=>{
  const response = pb.authStore.isValid


  try {
    if (to.path !== '/login' && response == true) {
      console.log('esta autenticado' +response)
    } else if (to.path !== '/login' && response == false) {
      console.log('no esta autenticado:' +response)

       navigateTo('/login')
    }else{
      console.log(response)
    }
  } catch (error) {
    console.error(error)
  }
})