<template>
  <Navbar @toggleSidebar="toggleSidebar" />
  <div class="d-flex vh-100">
      <transition name="slide">
        <div v-if="mostrarSidebar" class="d-block hv-100 mt-2" id="color_sidebar">
          <sidebar />
        </div>
      </transition>
      <div class="container-fluid">
          <router-view  />
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>
