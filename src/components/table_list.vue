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
        </tr>
      </thead>
      <tbody class="table-group-divider" id="contenido">
        <tr v-if="cargando">
          <td colspan="3">CARGANDO...</td>
        </tr>
        <tr v-if="vehicles == 0">
          <td colspan="3">SIN REGISTROS</td>
        </tr>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <td >{{ vehicle.id }}</td>
          <td>{{ vehicle.placa }}</td>
          <td>{{ vehicle.category.name }}</td>
          <td>{{ vehicle.product.name }}</td>
          <td>{{ vehicle.category.monto }}</td>
          <td>{{ vehicle.fecha }}</td>
          <td>{{ vehicle.hora }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style >
.bg_th{
  background-color:#01a858 !important;
  color:white !important;
}
</style>

<script>
export default {
  name: "table_list",
  props: {
    vehicles: Array,
    cargando: Boolean
  }
};
</script>
