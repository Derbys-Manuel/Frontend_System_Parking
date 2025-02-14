<template>
    <button :class="['btn', color_button, size_button, text_color]">{{ title }}<span v-html="icon"></span>   </button>

</template>
<script>
export default {
    name: 'button_comp',
    props: {
        color_button: {
            type: String,
            required: false,
        },
        size_button: String,
        title: String,
        icon: String,
        text_color: String 
    }
}
</script>