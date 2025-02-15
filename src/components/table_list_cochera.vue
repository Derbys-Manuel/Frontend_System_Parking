<template>
  <div class="card">
    <div class="card-header text-center text-success">
        <h5>Control de cochera</h5>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-bordered text-center">
          <thead>
            <tr>
              <th class="bg_th">Placa</th>
              <th class="bg_th">Fecha</th>
              <th class="bg_th">Hora</th>
              <th class="bg_th">Cochera</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="4">
                <div class="spinner-border text-success" role="status">
                  <span class="visually-hidden">CARGANDO...</span>
                </div>
              </td>
            </tr>
            <tr v-if="vehicles == 0">
              <td colspan="4">SIN REGISTROS</td>
            </tr>
            <tr v-for="vehicle in vehicles" :key="vehicle.id">
              <td v-text="vehicle.placa"></td>
              <td v-text="vehicle.fecha"></td>
              <td v-text="vehicle.hora"></td>
              <td>
                <p class="text-danger">
                  <strong v-text="vehicle.cochera">
                  </strong>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-center">
        <message :mensaje="mensaje" :size_text="size_text" />
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
import message from "./message.vue";

export default {
  name: "table_list",
  props: {
    vehicles: Object,
    cargando: Boolean
  },
  components: {
    button_comp,
    message
  },
  data() {
    return {
      mensaje: "",
      size_text: "fs-4"
    };
  },
};
</script>
