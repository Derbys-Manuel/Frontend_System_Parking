<template>

<div class="fa-3x card ">
  <div class="card-body d-flex align-items-center">
    <i :class="['fa-sharp-duotone fa-solid fa-lg p-2', color , icon,  efecto]" :style="['--fa-animation-duration: 3s;',color_detallado] "></i>
    <span :class="['badge rounded-pill fs-5 ', color_text]" :style="color_texto_detallado">{{ title + calculo }}</span>
  </div>
</div>

</template>
<script>
export default {
  props: {
    icon: String,
    efecto: String,
    color: String,
    title:String,
    color_detallado: String,
    color_text: String,
    color_texto_detallado: String,
    calculo:String
  }
}
  
 
</script>