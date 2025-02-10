<template>
  
  <div class="row"> 
    <div  class="col-12">
      <div class="mt-2">
        <form_vehicles v-if="mostrarFormulario" :title="title_button" :size_button="size_button" :color_button="color_button" :title_form="title_form" />
      </div>
       <div class="text-end">
        <label_añadir :title="title_label" :size_label="size_label" :icon_label="icon_label" @click="MostrarFormulario"  />

       </div>
      <table_list :vehicles="vehicles" :cargando="cargando" />
    </div>
  </div>
</template>

<script>
import button_comp from "@/components/button_comp.vue";
import table_list from "../components/table_list.vue";
import form_vehicles from "@/components/form_vehicles.vue";

import axios from "axios";
import label_añadir from "@/components/label_añadir.vue";


export default {
  name: "index",
  components: {
    table_list, 
    button_comp,
    form_vehicles,
    label_añadir
  },
  data() {
    return {
      vehicles: null,
      cargando: false,
      title_form: "Placa",
      title_button: "Agregar",
      size_button: "btn-md", 
      color_button: "btn-success",
      title_label: `Añadir`,
      icon_label: `<i class="bi bi-plus fs-5"></i>`,
      size_label: "form-label-sm",
      mostrarFormulario: false, 
    };
  },
  mounted() {
    this.getVehicles();
  },
  methods: {
    async getVehicles() {
      this.cargando = true;
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/vehicles"); 
        this.vehicles = response.data;
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
      this.cargando = false;
    },
    MostrarFormulario() {
      this.mostrarFormulario = !this.mostrarFormulario;
    }

  },
};
</script>
<style>



</style>
