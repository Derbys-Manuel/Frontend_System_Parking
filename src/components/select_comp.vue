<template>
    <select :class="['form-select', size_select]" aria-label="Default select example">
        <option value="" disabled selected hidden style="color: gray;">{{ title_select }}</option>
        <option v-if="element != 0" v-for="cate in element" :key="cate.id">{{ cate.name }} s/{{ cate.monto }}</option>
    </select>

</template>

<script>

export default {
    props:{
        size_select: String,
        element: Array,
        title_select: String
    }
}


</script>