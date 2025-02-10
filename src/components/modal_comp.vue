<template>
    <div class="modal fade text-center" :id="[id_btn_modal]" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <h3>{{ modal_title }}</h3>
                <form action="" class="form-control">
                    <div class="row g-3 align-items-center justify-content-center w-100">
                        <div class="col-auto">
                            <input type="text" :placeholder="[placeholder_name]" class="form-control" />
                        </div>
                        <div v-if="id_btn_modal=='modal_category'" class="col-auto">
                            <input type="number" placeholder="Total" class="form-control" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button_comp :color_button="color_button" :size_button="size_button" :title="title_button" />
            </div>
            </div>
        </div>
    </div>
</template>


<script>
import button_comp from './button_comp.vue';

export default {

    components: {
        button_comp
    },
    props: {
        modal_title: String,
        id_btn_modal: String,
        placeholder_name: String
    },
    data()
    {
        return{
            title_button: "Submit",
            color_button: 'btn-success',
            size_button: 'btn-dm'
        }
    }

}

</script>