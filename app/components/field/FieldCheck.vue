<template>
  <div class="field">
      <label
        class="check field__check"
        :class="{'check--red': red, 'check--disabled': disabled}"
      >
        <input
          type="checkbox"
          class="check__input"
          :value="checkedValue"
          :checked="checked"
          @change="handleChange"
          :disabled=" disabled"
        />
        <span class="check__mark"></span>

        <span class="check__caption" v-html="label"></span>
      </label>


    <span v-if="errorMessage && submitCount" class="field__error field-error">
      {{ errorMessage }}
    </span>
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
    checkedValue: {
      type: [String, Number],
      default: 1,
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    submitCount: {
      type: Number,
      default: 0,
    },
    red: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });

  const { checked, errorMessage, handleChange } = useField(
    props.name,
    props.rules,
    {
      checkedValue: props.checkedValue,
      type: "checkbox",
    },
  );
</script>
