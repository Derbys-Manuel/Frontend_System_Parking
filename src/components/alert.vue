<template>
    <transition name="bounce">
        <div v-if="title_alert" :class="['alert','text-center', alert_color]" role="alert" style="height: 60px;">
            <strong v-text="title_alert"></strong>
        </div>
    </transition>


</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        props: {
            title_alert: String,
            alert_color: String
        }
    }
</script>
<style>
    .bounce-enter-active {
    animation: bounce-in 0.8s;
    }
    .bounce-leave-active {
    animation: bounce-in 0.8s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
    }


</style>