<template>
    <svg aria-hidden="true" :class="svgClass">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>
  
<script setup lang="ts">
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const svgClass = computed(() => {
    if (props.name) {
        return `svg-icon ${props.prefix}-${props.name}`
    }
    return 'svg-icon'
})
</script>
  
<style scoped>
.svg-icon {
  /* width: 1em; */
  /* height: 1em; */
  fill: currentColor;
  vertical-align: middle;
  overflow: hidden;
  outline: none;
}

</style>