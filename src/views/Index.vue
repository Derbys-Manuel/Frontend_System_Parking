<template>
  
  <div class="row"> 
    <div  class="col-12">
      <transition name="slide_form">
        <div class="mt-2">
          <form_vehicles :getVehicles="getVehicles" :getParking="getParking" :vehicle_edit="vehicle_edit" :title_form="title_form" />
        </div>
      </transition>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm-12 col-md-7 col-lg-8">
      <table_list_vehicles :vehicles="vehicles"  @vehicle="vehicle_show_edit" :getParking="getParking" :getVehicles="getVehicles" :cargando="cargando" />
    </div>
    <div class="col-sm-12 col-md-5 col-lg-4">
      <table_list_cochera :vehicles="vehicles_parking" :cargando="cargando" />
    </div>
  </div>
</template>

<script>
import button_comp from "@/components/button_comp.vue";
import table_list_vehicles from "@/components/table_list_vehicles.vue";
import form_vehicles from "@/components/form_vehicles.vue";
import modal_comp from "@/components/modal_comp.vue";
import axios from "axios";
import label_añadir from "@/components/label_añadir.vue";
import table_list_cochera from "@/components/table_list_cochera.vue";


export default {
  name: "index",
  components: {
    table_list_vehicles,
    table_list_cochera, 
    button_comp,
    form_vehicles,
    label_añadir,
    modal_comp
  },
  data() {
    return {
      vehicles: null,
      vehicle_edit: {},
      vehicles_parking: null,
      cargando: false,
      title_form: "Placa",
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
    this.getParking();
  },
  methods: {
    async getVehicles() {
      this.cargando = true;
      try {
        await axios.get("http://127.0.0.1:8000/api/v1/vehicles").then((res)=>{
          this.vehicles = res.data;
        }); 
        console.log(this.vehicles);    
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
      this.cargando = false;
    },
    async getParking() {
      this.cargando = true;
      try {
        await axios.get("http://127.0.0.1:8000/api/v1/vehicles/cochera").then((res)=>{
          this.vehicles_parking = res.data;
        }); 
        console.log(this.vehicles_parking);    
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
      this.cargando = false;
    },
    vehicle_show_edit(vehicle){
      this.vehicle_edit = vehicle;
      console.log(this.vehicle_edit, 'vehicle por editar')
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
