<template>
    <transition name="bounce">
        <div v-if="mensaje != ''" class="mt-3">
            <p  v-if="mensaje === 'ok'" class="text-success menu"><strong :class="size_text">¡Registro exitoso!</strong></p>
            <p v-if="mensaje === 'error'" class="text-danger menu"> <strong :class="size_text">¡Error al ingresar registro!</strong></p>
            <p v-if="mensaje === 'delete'" class="text-danger menu"> <strong :class="size_text">¡Registro eliminado!</strong></p>
        </div>
    </transition>


</template>
<script>
    export default {
        props: {
            mensaje: String,
            size_text: String
        }
    }
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


</style>