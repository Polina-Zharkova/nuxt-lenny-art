<template>
    <component 
    v-if="iconPath"
    class="svg-icon"
    :is="iconPath"
    :width="width"
    :height="height"
    />
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    width: {
        type: [String, Number],
        default: undefined
    },
    height: {
        type: [String, Number],
        default: undefined
    }
});

const icons = import.meta.glob('@/assets/svg-icons/*.svg')

const iconPath = computed(() => {
  const loader = icons[`/assets/svg-icons/${props.name}.svg`]
  return loader ? defineAsyncComponent(loader) : null
})
</script>
