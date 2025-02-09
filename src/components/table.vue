<template>
  <table class="table table-bordered text-center">
    <thead>
      <tr>
        <th>ID</th>
        <th>Placa</th>
        <th>Creacion</th>
      </tr>
    </thead>
    <tbody class="table-group-divider" id="contenido">
      <tr v-for="vehicle in vehicles" :key="vehicle.id">
        <td>{{ vehicle.id }}</td>
        <td>{{ vehicle.placa }}</td>
        <td>{{ vehicle.created_at }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table_list",
  props: {
    vehicles: Array,
  },
};
</script>