<template>
  <div class="row mt-5">
    <div class="col-lg-12 ">
      <table_list :vehicles="vehicles" />
    </div>
  </div>
</template>

<script>
import table_list from "@/components/table.vue";
import axios from "axios";

export default {
  name: "table",
  components: {
    table_list, 
  },
  data() {
    return {
      vehicles: null,
      cargando: false,
    };
  },
  mounted() {
    this.getVehicles();
  },
  methods: {
    async getVehicles() {
      this.cargando = true;
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/vehicles"); 
        this.vehicles = response.data;
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
      }
      this.cargando = false;
    },
  },
};
</script>
