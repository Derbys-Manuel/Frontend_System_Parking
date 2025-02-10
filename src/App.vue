<template>
  <Navbar @toggleSidebar="toggleSidebar" />
  <div class="d-flex vh-100">
      <div v-if="mostrarSidebar" class="d-block hv-100 mt-2" id="color_sidebar">
        <sidebar />
      </div>
      <div class="container-fluid">
          <router-view />
      </div>
  </div>
  
</template>

<script>
import Navbar from './components/navbar.vue';
import sidebar from "@/components/sidebar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    sidebar,
  },
  props: {
    mostrarSidebar: Boolean
  },
  data() {
    return {
      mostrarSidebar: true, 
    };
  },
  methods: {  
    toggleSidebar() {
      this.mostrarSidebar = !this.mostrarSidebar; 
    }
  }
};
</script>

<style>
#nav-bag {
  background-color: #01a858;
}
#color_sidebar{
  background-color: #01a858;
  width: 200px;
}

</style>
