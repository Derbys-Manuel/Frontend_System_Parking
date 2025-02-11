<template>
    <select :class="['form-select', size_select]" aria-label="Default select example">
        <option selected disabled >Seleccionar</option>
        <option v-if="element == 'category'" v-for="cate in element" :key="cate.id">{{ cate.name }}</option>
    </select>

</template>

<script>

export default {
    props:{
        size_select: String,
        element: Array
    }
}


</script>