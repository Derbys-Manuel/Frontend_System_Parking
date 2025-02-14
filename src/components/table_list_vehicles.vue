<template>
  <div class="table-responsive">
    <table class="table  table-bordered text-center table-responsive">
      <thead>
        <tr>
          <th class="bg_th">ID</th>
          <th class="bg_th">Placa</th>
          <th class="bg_th">Categoría</th>
          <th class="bg_th">Producto</th>
          <th class="bg_th">Precio</th>
          <th class="bg_th">Fecha</th>
          <th class="bg_th">Hora</th>
          <th class="bg_th">Opciones</th>
        </tr>
      </thead>
      <tbody class="table-group-divider" id="contenido">
        <tr v-if="cargando">
          <td colspan="7">CARGANDO...</td>
        </tr>
        <tr v-if="vehicles == 0">
          <td colspan="3">SIN REGISTROS</td>
        </tr>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <td v-text="vehicle.id"></td>
          <td v-text="vehicle.placa"></td>
          <td v-text="vehicle.category.name"></td>
          <td v-text="vehicle.product.name"></td>
          <td v-text="vehicle.category.monto"></td>
          <td v-text="vehicle.fecha"></td>
          <td v-text="vehicle.hora"></td>
          <td>
            <button_comp :menu="menu"  :size_button="size_button" :icon="icon_button_delete" :text_color="text_color_button_delete"
             @click="delete_vehicle(vehicle.id)"  />
            <button_comp :menu="menu"  :size_button="size_button" :icon="icon_button_edit" :text_color="text_color_button_edit"
             @click="delete_vehicle(vehicle.id)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center">
    <message :mensaje="mensaje"  :size_text="size_text" />
  </div>
</template>
<style >
.bg_th{
  background-color:#01a858 !important;
  color:white !important;
}
</style>

<script>
import button_comp from './button_comp.vue';
import axios from 'axios';
import message from './message.vue';
export default {
  name: "table_list",
  props: {
    vehicles: Array,
    cargando: Boolean
  },
  components: {
    button_comp,
    message
  },
  data(){
    return{
      icon_button_delete: `<i class="bi bi-trash-fill"></i>`,
      text_color_button_delete: "text-danger",
      size_button: "btn-dm",
      mensaje: '',
      size_text: 'fs-4',
      menu: 'menu',
      icon_button_edit: `<i class="bi bi-pencil-fill"></i>`,
      text_color_button_edit: "text-warning",
      mensaje: ""
   
    }
  },
  methods: {
    async delete_vehicle(id){
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/vehicles/${id}`);
        this.mensaje = "ok";
      } catch (error) {
        console.error("Error al guardar:", error);
        this.mensaje = "error"
      }
      setTimeout(() => {
                this.mensaje = "";
            }, 1200);
    }
  }
};
</script>
