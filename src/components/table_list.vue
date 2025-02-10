<template>
  <table class="table  table-bordered text-center">
    <thead>
      <tr>
        <th style="background-color: #01a858;" >ID</th>
        <th style="background-color: #01a858;">Placa</th>
        <th style="background-color: #01a858;">Creacion</th>
      </tr>
    </thead>
    <tbody class="table-group-divider" id="contenido">
      <tr v-if="cargando">
        <td colspan="3">CARGANDO...</td>
      </tr>
      <tr v-for="vehicle in vehicles" :key="vehicle.id">
        <td >{{ vehicle.id }}</td>
        <td>{{ vehicle.placa }}</td>
        <td>{{ vehicle.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style >

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
