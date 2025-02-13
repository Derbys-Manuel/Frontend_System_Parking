<template>
    <select :class="['form-select', size_select]" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
     aria-label="Default select example">
        <option value="" disabled style="color: gray;" :label="title_select"></option>
        <option v-for="cate in element" :key="cate.id"  :value="cate.id" :label="[cate.name,' s/ ', cate.monto]"></option>      
    </select>
</template>
<script>
export default {
    props:{
        size_select: String,
        element: Array,
        title_select: String,
        modelValue: [String, Number], 
    }
}
</script>