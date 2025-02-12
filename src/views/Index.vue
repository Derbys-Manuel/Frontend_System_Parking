<template>
  
  <div class="row"> 
    <div  class="col-12">
      <transition name="slide_form">
        <div class="mt-2" v-if="mostrarFormulario">
          <form_vehicles  :title="title_button" :size_button="size_button" :color_button="color_button" :title_form="title_form" />
        </div>
      </transition>


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
import modal_comp from "@/components/modal_comp.vue";


import axios from "axios";
import label_añadir from "@/components/label_añadir.vue";


export default {
  name: "index",
  components: {
    table_list, 
    button_comp,
    form_vehicles,
    label_añadir,
    modal_comp
  },
  data() {
    return {
      vehicles: null,
      cargando: false,
      title_form: "Placa",
      title_button: "Agregar",
      size_button: "btn-md", 
      color_button: "btn-success",
      title_label: "Añadir",
      icon_label: `<i class="bi bi-plus fs-5"></i>`,
      size_label: "form-label-sm",
      mostrarFormulario: false,
      title_modal_category: 'Formulario Categorias',
      id_modal_category: "modal_category",
      title_modal_product:'Formulario Producto',
      id_modal_product: "modal_product",
      placeholder_category: "Categoria",
      placeholder_product: "Producto",



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

.slide_form-enter-active,
.slide_form-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide_form-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide_form-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide_form-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide_form-leave-to {
  transform: translateX(100%);
  opacity: 0;
}



</style>
