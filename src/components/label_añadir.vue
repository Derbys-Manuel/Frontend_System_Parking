<template>
  <label 
    :class="['menu', 'fs-5', 'text-success', 'form-label', 'label_style', size_label]" style="white-space: nowrap;" 
    @click="$emit('toggleFormulario')">
    [<span v-html="icon_label"></span>]
  </label>
</template>

<script>
export default {
  name: 'label_añadir',
  props: {
    size_label: String,
    title: String,
    icon_label: String,
  }
}
  
 
</script>

<style>
.label_style:hover {
  cursor: pointer;
}
.label_style {
  margin: 0px;
  padding: 0px;
}
</style>