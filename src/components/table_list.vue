<template>
  <table class="table table-bordered text-center">
    <thead>
      <tr>
        <th v-for="(value, key) in tableHeaders" :key="key">
          {{ key.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody class="table-group-divider" id="contenido">
      <tr v-for="(vehicle, index) in vehicles" :key="index">
        <td v-for="(value, key) in vehicle" :key="key">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table_list",
  props: {
    vehicles: {
      type: Array,
      required: true,
    },
  },
  computed: {
  tableHeaders() {
    return Array.isArray(this.vehicles) && this.vehicles.length > 0 
      ? this.vehicles[0] 
      : {}; 
  },


  },
};
</script>
