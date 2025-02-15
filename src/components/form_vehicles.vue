<template>
    <form @submit.prevent="submit" class="form-control ">
      <div class="row  g-2 align-items-center justify-content-center w-100">
        <div class="col-2">
          <input type="text" :placeholder="title_form"  v-model="vehicle.placa"   :class="['form-control', {'border-danger':errors.placa && errors.placa[0]}]"/>
        </div>
        <div class="col-auto gap-2 d-flex align-items-center">
          <select_comp :element="category_array" v-model="vehicle.category_id" :errors="errors" :size_select="size_select" 
          :title_select="title_select_category"   />
          <label_añadir data-bs-toggle="modal" data-bs-target="#modal_category" :size_label="size_label" :icon_label="icon_label"
           :title_label="title_label"    
          />
        </div>
        <div class="col-auto gap-2 d-flex align-items-center ">
          <select_comp  :element="product_array" v-model="vehicle.product_id" :errors="errors" :size_select="size_select" 
          :title_select="title_select_product"  />
          <label_añadir data-bs-toggle="modal" data-bs-target="#modal_product" :size_label="size_label" :icon_label="icon_label"
           :title_label="title_label"  
           />
        </div>
        <div class="col-auto">
          <input v-model="vehicle.fecha" type="date" :class="['form-control', {'border-danger':errors.fecha && errors.fecha[0]}]" />
        </div>
        <div class="col-auto">
          <input type="time" v-model="vehicle.hora" :class="['form-control', {'border-danger':errors.hora && errors.hora[0]}]"/>
        </div>
        <div class="col-auto">
          <button_comp :title="title" :color_button="color_button" :size_button="size_button" type="submit" />
        </div>
      </div>
    </form>
    <div class="d-flex justify-content-center">
      <message :mensaje="mensaje" :size_text="size_message" />
    </div>
    <modal_comp :get_category_or_product="getCategories" :modal_title="title_modal_category" :id_btn_modal="id_modal_category" 
    :placeholder_name="placeholder_category" />
    <modal_comp :get_category_or_product="getProducts" :modal_title="title_modal_product"  :id_btn_modal="id_modal_product" 
    :placeholder_name="placeholder_product" />
  </template>
  
  <script>
  import button_comp from "@/components/button_comp.vue"; 
  import modal_comp from "@/components/modal_comp.vue";

  import label_añadir from "./label_añadir.vue";
  import select_comp from './select_comp.vue';
  import axios from 'axios';
  import message from "./message.vue";

  const now = new Date();
  const fechaActual = now.toISOString().split('T')[0]; 
  const horaActual = now.toTimeString().slice(0, 5); 

  export default {
    name: "form_vehicles",
    components: {
      button_comp,
      label_añadir,
      select_comp,
      modal_comp,
      message, 
    },

    data(){
      return{
        vehicle: {
          placa: "",
          category_id: "",
          product_id: "",
          fecha: fechaActual,
          hora: horaActual
        },
        errors: {},  
        product: 'producto',
        category: 'categoria',
        title_label: "",
        mensaje: "",
        size_message: "fs-6",
        title_select_product: "Productos",
        title_select_category: "Categorias",
        icon_label: `<i class="bi bi-plus fs-5"></i>`,
        size_label: "form-label-sm",
        size_select: "form-label-sm",
        category_array: null, 
        product_array: null,
        title_modal_category: 'Formulario Categorias',
        id_modal_category: "modal_category",
        title_modal_product:'Formulario Producto',
        id_modal_product: "modal_product",
        placeholder_category: "Categoria",
        placeholder_product: "Producto",

      };
    },
    props: {
        title_form: String,
        color_button: String,
        size_button: String,
        title: String,
        getVehicles: Function,
        getParking: Function
    },
    mounted() {
    this.getCategories();
    this.getProducts();
    },
    methods: {
      async getCategories() {
        try {
          await axios.get("http://127.0.0.1:8000/api/v1/categories").then((res) => {
            this.category_array = res.data;
          }); 
        } catch (error) {
          console.error("Error al obtener los vehículos:", error);
        }    
      },

      async getProducts() {
        try {
          await axios.get("http://127.0.0.1:8000/api/v1/products").then((res)=>{
            this.product_array = res.data;
          }); 
          
        } catch (error) {
          console.error("Error al obtener los vehículos:", error);
        }   
       },
       async submit() {
        console.log(this.vehicle);
          try {
            await axios.post("http://127.0.0.1:8000/api/v1/vehicles", this.vehicle).then((res)=> {
              console.log(res, 'submit vehicle');
            });
            this.getVehicles();
            this.getParking();
            this.mensaje = "ok";
            this.vehicle = {};
            this.errors = {};
          } catch (error) {
          if (error.response) {
              this.errors = error.response.data.errors;
          }
          this.mensaje = "error";
          }
          setTimeout(() => {
              this.mensaje = "";
          }, 1200);
        },
      },
 
    };
  </script>
  