<template>
<hr>
<v-container class="flex flex-wrap items-center justify-start self-start">
    <CardCasas v-if="store.dataCasas" v-for="(data,index) in store.dataCasas" :key="index"
    class="self-start "
    :title="data.nombre"
    :image="data.imagen == '' ? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' : `${CONSTANTE.apiUrl}/api/files/${data.collectionId}/${data.id}/${data.imagen}`"
    :subtitle="data.direccion"
    :content="data.Adicional"
    :precio="data.precio"
    :link="data.link"
    :puntuacion="data.puntuacion"
    />
</v-container>

<hr>
<DialogFormCasas
:itemsUbicacion="store.listaUbicaciones"
/>
</template>



<script setup>
import {useStoreDataBase} from '../../stores/useStoreDataBase';
import CONSTANTE from '~/config/contants';

const store = useStoreDataBase()


definePageMeta({
middleware:'authenticated'
})



onBeforeMount(()=>{
    store.ListarCasas()
})

</script>