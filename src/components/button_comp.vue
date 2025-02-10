<template>
    <button  :class="['btn', color_button, size_button]">{{ title }}</button>
</template>
<script>
export default {
    name: 'button_comp',
    props: {
        color_button: String,
        size_button: String,
        title: String 
    }
}
</script>