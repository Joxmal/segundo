<template>
<hr>
<v-container class="flex flex-wrap items-center justify-start self-start">
    <CardCasas v-if="store.dataCasas" v-for="(data,index) in store.dataCasas" :key="index"
    class="self-start"
    :title="data.nombre"
    :subtitle="data.direccion"
    :content="data.Adicional"
    :precio="'$'+data.precio"
    />
</v-container>

<hr>
<DialogFormCasas
:itemsUbicacion="store.listaUbicaciones"
/>
</template>



<script setup>
import {useStoreDataBase} from '../../stores/useStoreDataBase';

const store = useStoreDataBase()
setTimeout(() => {
    console.log(store.dataCasas)
    console.log('todo bien')
}, 2000);



onBeforeMount(()=>{
    store.ListarCasas()

})

</script>