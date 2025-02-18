<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title text-center text-success">
        <h5>Control de cochera</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th class="bg_th">Placa</th>
              <th class="bg_th">Fecha</th>
              <th class="bg_th">Hora</th>
              <th class="bg_th">Cochera</th>
              <th class="bg_th">Opciones</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="5">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">CARGANDO...</span>
                </div>
              </td>
            </tr>
            <tr v-if="vehicles == 0">
              <td colspan="5">SIN REGISTROS</td>
            </tr>
            <tr v-for="vehicle in vehicles" :key="vehicle.id">
              <td v-text="vehicle.placa"></td>
              <td v-text="vehicle.fecha"></td>
              <td v-text="vehicle.hora"></td>
              <td>
                <span class="badge rounded-pill text-bg-danger fs-6" style="padding: 7px;" v-text="vehicle.cochera"></span>
              </td>
              <td>
                  <span class="menu " ><i class="fa-solid fa-paper-plane fa-lg" style="color: #01a858;"></i></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.bg_th {
  background-color: #01a858 !important;
  color: white !important;
}
</style>

<script>
import button_comp from "./button_comp.vue";


export default {
  name: "table_list",
  props: {
    vehicles: Object,
    cargando: Boolean
  },
  components: {
    button_comp
  },
  data() {
    return {
      size_text: "fs-4",
      icon: '<i class="bi bi-send-check-fill text-success fs-6"></i>'
    };
  },
};
</script>
