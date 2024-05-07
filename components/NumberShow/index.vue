<template>
    <span class="number-show"> {{ prefix }}{{ formatNumber }}{{ suffix }} </span>
</template>

<script setup>
import numbro from 'numbro'

const props = defineProps({
    number: {
        type: [String, Number],
        default: 0
    },
    format: {
        type: [String, Object],
        default: '0,0'
    },
    suffix: {
        type: String,
        default: ''
    },
    prefix: {
        type: String,
        default: ''
    },
    roundingFunction: {
        type: Function,
        default: Math.floor
    },
    showOriginNumber: {
        type: Boolean,
        default: false
    }
})

const lastFormat = computed(() => {
    if (props.format === '0,0') {
        return {
            thousandSeparated: true,
            trimMantissa: true,
            mantissa: 0
        }
    } else {
        return props.format
    }
})

const formatNumber = computed(() => {
    const roundingFn = (num) => {
        return props.roundingFunction(num)
    }

    numbro.setDefaults({
        roundingFunction: roundingFn
    })

    return numbro(props.number).format(lastFormat.value)
})
</script>