<template>
    <form action="" class="form-control ">
      <div class="row  g-2 align-items-center justify-content-center w-100">
        <div class="col-2">
          <input type="text" :placeholder="[title_form]" class="form-control" />
        </div>
        <div class="col-auto gap-2 d-flex align-items-center">
          <select_comp :element="category_array" :size_select="size_select" :title_select="title_select_category"   />
          <label_añadir data-bs-toggle="modal" data-bs-target="#modal_category" :size_label="size_label" :icon_label="icon_label"
           :title_label="title_label"    
          />
        </div>
        <div class="col-auto gap-2 d-flex align-items-center ">
          <select_comp :element="product_array" :size_select="size_select" :title_select="title_select_product"  />
          <label_añadir data-bs-toggle="modal" data-bs-target="#modal_product" :size_label="size_label" :icon_label="icon_label"
           :title_label="title_label"  
           />
        </div>
        <div class="col-auto">
          <input type="date" placeholder="Fecha" class="form-control" />
        </div>
        <div class="col-auto">
          <input type="time" placeholder="Hora" class="form-control" />
        </div>
        <div class="col-auto">
          <button_comp :title="title" :color_button="color_button" :size_button="size_button" />
        </div>
      </div>
    </form>
      <modal_comp :actualizar="getCategory" :modal_title="title_modal_category" :id_btn_modal="id_modal_category" 
      :placeholder_name="placeholder_category" />
      <modal_comp :actualizar="getProduct" :modal_title="title_modal_product"  :id_btn_modal="id_modal_product" 
      :placeholder_name="placeholder_product" />
  </template>
  
  <script>
  import button_comp from "@/components/button_comp.vue"; 
  import modal_comp from "@/components/modal_comp.vue";

  import label_añadir from "./label_añadir.vue";
  import select_comp from './select_comp.vue';
  import axios from 'axios';

  export default {
    name: "form_vehicles",
    components: {
      button_comp,
      label_añadir,
      select_comp,
      modal_comp
    },
    data(){
      return{
        title_label: ``,
        title_select_product: `Productos`,
        title_select_category: `Categorias`,
        icon_label: `<i class="bi bi-plus fs-5"></i>`,
        size_label: "form-label-sm",
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
    },
    mounted() {
    this.getCategory();
    this.getProduct();
    },
    methods: {
      async getCategory() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/v1/categories"); 
          this.category_array = response.data;
        } catch (error) {
          console.error("Error al obtener los vehículos:", error);
        }    
      },

      async getProduct() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/v1/products"); 
          this.product_array = response.data;
        } catch (error) {
          console.error("Error al obtener los vehículos:", error);
        }   
       }

      }
      

      
    };
  </script>
  