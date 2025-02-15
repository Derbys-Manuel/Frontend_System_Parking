<template>
    <div class="modal fade text-center" :id="id_btn_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h3>{{ modal_title }}</h3>
                    <form @submit.prevent="submit"  class="form-control">
                        <div class="row g-3 align-items-center mt-2 justify-content-center w-100 mb-2">
                            <div v-if="id_btn_modal=='modal_category'" class="col-auto  " >
                                <input type="text" v-model="category.name" :placeholder="placeholder_name" :class="['form-control', {'border-danger':errors.name && errors.name[0]}]" />
                            </div>
                            <div v-if="id_btn_modal=='modal_category'" class="col-auto">
                                <input type="number" v-model="category.monto" placeholder="Total" :class="['form-control', {'border-danger':errors.monto && errors.monto[0]}]" />
                            </div>
                            <div v-if="id_btn_modal=='modal_product'" class="col-auto " >
                                <input type="text" v-model="product.name" :placeholder="placeholder_name" :class="['form-control', {'border-danger':errors.name && errors.name[0]}]" />
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Close</button>
                                <button_comp :color_button="color_button" :size_button="size_button" :title="title_button" type="submit" />
                            </div>
                        </div>       
                    </form>
                    <message :mensaje="mensaje" :size_text="size_text" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import button_comp from './button_comp.vue';
import axios from 'axios';
import message from './message.vue';
export default {

    components: {
        button_comp,
        message
    },
    props: {
        modal_title: String,
        id_btn_modal: String,
        placeholder_name: String,
        get_category_or_product: Function
    },
    data()
    {
      return{
            title_button: "Submit",
            color_button: 'btn-success',
            size_button: 'btn-dm',
            mensaje: '',
            size_text: 'fs-6',
            mensaje: "",
            category: {
                name: "",
                monto: "",
            },
            product: {
                name: "",
            },
            errors: {},
        }
    },
    methods: {
    async submit() {
      try {
        if(this.id_btn_modal=='modal_category'){
            await axios.post("http://127.0.0.1:8000/api/v1/categories", this.category).then((res)=> {
                console.log(res, 'submit category');
            });
        }else{
            await axios.post("http://127.0.0.1:8000/api/v1/products", this.product).then((res)=>{
                console.log(res, 'submit product');
            });
        }
        this.product = {};
        this.category = {};
        this.errors= {};
        this.mensaje = "ok";
        this.get_category_or_product();
      } catch (error) {
        if(error.response){
            this.errors = error.response.data.errors;
        }
        this.mensaje = "error"
      }
      setTimeout(() => {
                this.mensaje = "";
            }, 1200);
        },
    }
}

</script>

