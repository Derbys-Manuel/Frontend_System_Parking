<template>
    <select :class="['form-select', size_select, {'border-danger':errors.category_id && errors.category_id[0]}]" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
     aria-label="Default select example">
        <option value=""  disabled :label="title_select"></option>
        <option v-for="cate in element" :key="cate.id" :value="cate.id" :label="`${cate.name} ${cate.monto ? 's/ ' + cate.monto : ''}`"></option>      
    </select>
</template>
<script>
export default {
    props:{
        size_select: String,
        element: Array,
        title_select: String,
        errors: {
            type: Object,
            default: {}
        },
        modelValue: [String, Number], 
    }
}
</script>