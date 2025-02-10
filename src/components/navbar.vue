<template>
    <nav class="navbar  navbar-dark" id="nav-bag">
        <div class="container-fluid ">
            <div class="text-center d-flex">
                <img class="img-fluid menu" src="@/assets/cochera.png" id="img_logo" alt="" @click="toggleSidebar">
                <router-link  class="navbar-brand p-2 fs-1" to="/">
                    <h1 id="navbar">
                        Parking System
                    </h1>
                </router-link> 
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navbar',
    methods: {
        toggleSidebar() {
            this.$emit("toggleSidebar"); 
        }
    }
}

</script>
<style>
#img_logo {
    width: 120px;
    border-radius: 50%;
}
.navbar-brand{
    cursor:default;
}
#navbar {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin-top: 30px;
  margin-left: 10px;
}
.menu:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
    cursor: pointer;
}

</style>