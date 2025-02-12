<template>
    <div class="modal fade text-center" :id="[id_btn_modal]" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h3>{{ modal_title }}</h3>
                    <form @submit.prevent="guardar"  class="form-control">
                        <div class="row g-3 align-items-center justify-content-center w-100 mb-2">
                            <div v-if="id_btn_modal=='modal_category'" class="col-auto  " >
                                <input type="text" v-model="category.name" :placeholder="[placeholder_name]" class="form-control" />
                            </div>
                            <div v-if="id_btn_modal=='modal_category'" class="col-auto">
                                <input type="number" v-model="category.monto" placeholder="Total" class="form-control" />
                            </div>
                            <div v-if="id_btn_modal=='modal_product'" class="col-auto " >
                                <input type="text" v-model="product.name" :placeholder="[placeholder_name]" class="form-control" />
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                                <button_comp :color_button="color_button" :size_button="size_button" :title="title_button" type="submit" />
                            </div>
                        </div>       
                    </form>
                    

                    <transition name="bounce">
                        <div v-if="mensaje != ''" class="mt-3">
                            <p  v-if="mensaje === 'ok'" class="text-success menu"><strong>¡Registro exitoso!></strong></p>
                            <p v-if="mensaje === 'error'" class="text-danger menu"> <strong>¡Error al ingresar registro!</strong></p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import button_comp from './button_comp.vue';
import axios from 'axios';
export default {

    components: {
        button_comp
    },
    props: {
        modal_title: String,
        id_btn_modal: String,
        placeholder_name: String,
        actualizar: Function
    },
    data()
    {
      return{
            title_button: "Submit",
            color_button: 'btn-success',
            size_button: 'btn-dm',
            category: {
                name: "",
                monto: "",
            },
            product: {
                name: "",
            },
            mensaje: "",
                }
    },
    methods: {
    async guardar() {
      try {
        if(this.id_btn_modal=='modal_category'){
            const respuesta = await axios.post("http://127.0.0.1:8000/api/v1/categories", this.category);
            this.category = { name: "", monto: ""};
            
        }else{
            const respuesta = await axios.post("http://127.0.0.1:8000/api/v1/products", this.product);
            this.product = { name: ""};
        }
        this.mensaje = "ok";
        this.actualizar();
      } catch (error) {
        console.error("Error al guardar:", error);
        this.mensaje = "error"
      }
      setTimeout(() => {
                this.mensaje = "";
            }, 1200);
    },
    }
}

</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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