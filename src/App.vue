<template>
  <Navbar> </Navbar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/navbar.vue';

export default {
  components: {
    Navbar
  }
}

</script>

<style>

#nav-bag {
  background-color: #01a858;
}
</style>


