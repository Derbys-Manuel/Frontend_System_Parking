<template>
  <alert v-if="mensaje" :title_alert="mensaje" :alert_color="alert_color" />
  
  <div class="row"> 
    <div  class="col-12">
      <transition name="slide_form">
        <div class="mt-2">
          <form_vehicles @show-alert="mostrarAlerta" :getVehicles="getVehicles" :getParking="getParking" :vehicle_edit="vehicle_edit" :title_form="title_form" />
        </div>
      </transition>
    </div>
  </div>
  <div class="row align mt-3">
    <div class="col-4 ">
      <etiqueta  :calculo="calculo"  :color_text="color_etiqueta_1" :efecto="efecto_etiqueta_1" :icon="icon_etiqueta_1" :color="color_etiqueta_1" :title="title_etiqueta_1" />
    </div>
    <div class="col-4 ">
      <etiqueta :calculo="calculo"  :color_text="color_etiqueta_2" :efecto="efecto_etiqueta_2" :icon="icon_etiqueta_2" :color="color_etiqueta_2" :title="title_etiqueta_2" />
    </div>
    <div class="col-4">
      <etiqueta  :calculo="calculo" :color_texto_detallado="color_etiqueta_3" :efecto="efecto_etiqueta_3" :icon="icon_etiqueta_3" :color_detallado="color_etiqueta_3" :title="title_etiqueta_3" />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-sm-12 col-md-7 col-lg-7">
      <table_list_vehicles @show-alert="mostrarAlerta" :vehicles="vehicles"  @vehicle="vehicle_show_edit" :getParking="getParking" :getVehicles="getVehicles" :cargando="cargando" />
    </div>
    <div class="col-sm-12 col-md-5 col-lg-5">
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
import alert from "@/components/alert.vue"
import etiqueta from "@/components/etiqueta.vue";


export default {
  name: "index",
  components: {
    table_list_vehicles,
    table_list_cochera, 
    button_comp,
    form_vehicles,
    label_añadir,
    modal_comp,
    alert,
    etiqueta
  },
  provide() {
    return {
      mostrarAlerta: this.mostrarAlerta
    };
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
      mensaje: "",
      alert_color: "",

      icon_etiqueta_1:"fa-truck-moving",
      efecto_etiqueta_1:"fa-bounce",
      color_etiqueta_1:"text-success",
      title_etiqueta_1:"Camiones del día: ",
      color_text_1: 'text-bg-success',

      icon_etiqueta_2:"fa-truck-moving",
      efecto_etiqueta_2:"fa-bounce",
      color_etiqueta_2:"text-danger",
      title_etiqueta_2:"Salidas del día: ",
      color_text_2: 'text-bg-danger',

      icon_etiqueta_3:"fa-money-bill-trend-up",
      efecto_etiqueta_3:"fa-bounce",
      color_etiqueta_3:"color: #63E6BE;",
      title_etiqueta_3:"Total de ingresos: ",
      color_text_3: 'color: #63E6BE;',
      calculo: "20"

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
    },
    mostrarAlerta(mensaje, color) {
      this.mensaje = mensaje;
      this.alert_color = color;
      setTimeout(() => {
        this.mensaje = ""; 
      }, 2000);
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
