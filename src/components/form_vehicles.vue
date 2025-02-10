<template>
    <form action="" class="form-control">
      <div class="row g-3 align-items-center justify-content-center w-100">
        <div class="col-auto">
          <input type="text" :placeholder="[title_form]" class="form-control" />
        </div>
        <div class="col-auto">
          <input type="text" placeholder="Categorias" class="form-control" />
        </div>
        <div class="col-auto">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal_category">
            <label_añadir :size_label="size_label" :icon_label="icon_label" :title_label="title_label"/>
          </button>
        </div>
        <div class="col-auto">
          <input type="text" placeholder="Producto" class="form-control" />
        </div>
        <div class="col-auto">
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modal_product">
            <label_añadir :size_label="size_label" :icon_label="icon_label" :title_label="title_label"/>
          </button>
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
  </template>
  
  <script>
  import button_comp from "@/components/button_comp.vue"; 
  import label_añadir from "./label_añadir.vue";
  
  export default {
    name: "form_vehicles",
    components: {
      button_comp,
      label_añadir
    },
    data(){
      return{
        title_label: ``,
        icon_label: `<i class="bi bi-plus fs-5"></i>`,
        size_label: "form-label-sm",
      };
    },
    props: {
        title_form: String,
        color_button: String,
        size_button: String,
        title: String,
    },
  };
  </script>
  