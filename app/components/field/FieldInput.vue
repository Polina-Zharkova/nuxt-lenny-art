<template>
  <div class="field">
    <label class="field__input-label">
      <span v-if="label" class="field__title field__label"> {{ label }} </span>

      <input 
      v-model="value" 
      v-maska="mask" 
      :type="type" 
      :placeholder="placeholder" 
      class="field__input"
      />
    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
    </label>
  </div>
</template>

<script setup>


  import { useField } from "vee-validate";

  const props = defineProps({
    initialValue: {
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    mask: {
      type: [Object, String],
      default: "",
    },
    submitCount: {
      type: Number,
      default: 0,
    }
  });

  const { errorMessage, value } = useField(props.name, props.rules, {
    initialValue: props.initialValue,
  });

</script>
<style lang="less">

</style>