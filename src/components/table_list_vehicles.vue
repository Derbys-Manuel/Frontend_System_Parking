<template>
  <div class="card">
    <div class="card-header text-success d-flex align-items-center">
      <h5 class="flex-grow-1 text-center">Ingreso de camiones</h5>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table  table-bordered text-center table-sm">
          <thead>
            <tr>
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
              <td colspan="7">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">CARGANDO...</span>
                </div>
              </td>
            </tr>
            <tr v-if="vehicles == 0">
              <td colspan="7">SIN REGISTROS</td>
            </tr>
            <tr v-for="vehicle in vehicles" :key="vehicle.id">
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
                @click="show_edit_vehicle(vehicle.id)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
import label_añadir from "@/components/label_añadir.vue";

export default {
  name: "table_list",
  emits:[
      "show-alert",
      "vehicle"
    ],
  props: {
    vehicles: Array,
    cargando: Boolean,
    getVehicles: Function,
    getParking: Function
  },
  components: {
    button_comp,
    label_añadir
  },
  data(){
    return{
      vehicle: {},
      icon_button_delete: `<i class="bi bi-trash-fill"></i>`,
      text_color_button_delete: "text-danger",
      size_button: "btn-dm",
      size_text: 'fs-6',
      menu: 'menu',
      icon_button_edit: `<i class="bi bi-pencil-fill"></i>`,
      text_color_button_edit: "text-warning",
      title_label: "Añadir",
      icon_label: `<i class="bi bi-plus fs-5"></i>`,
      size_label: "form-label-sm",
    }
  },
  methods: {
    async delete_vehicle(id){
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/vehicles/${id}`);
        this.$emit("show-alert", "Registro eliminado", "alert-success");

        this.getVehicles();
        this.getParking();

      } catch (error) {
        console.error("Error al guardar:", error);
      }
      setTimeout(() => {
                this.mensaje = "";
            }, 1200);
    },
    async show_edit_vehicle(id){
      try {
        await axios.get(`http://127.0.0.1:8000/api/v1/vehicles/${id}`).then((res)=>{
          this.$emit("vehicle", res.data);
        });
      } catch (error) {
        console.error("Error al mostrar los datos del vehiculo:", error);
        this.$emit("show-alert", "Error al enviar data para editar", "alert-danger");
      }
      setTimeout(() => {
                this.mensaje = "";
            }, 1200);
    }
  }
};
</script>
