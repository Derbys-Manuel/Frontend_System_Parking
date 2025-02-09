<template>
    <a class="btn btn-{{ color_button }}">{{ title }}</a>
</template>
<script>
export default {
    name: 'button_prueba',
    props: {
        color_button: String,
        title: String 
    }
}
</script>