import { o as openBlock, c as createElementBlock, b as createVNode, w as withCtx, a as createBaseVNode, t as toDisplayString, i as unref, p as createCommentVNode, e as __nuxt_component_0, j as computed, m as withAsyncContext, H as useAsyncData, M as renderSlot, n as normalizeClass, d as createTextVNode, v as _sfc_main$a, l as ref, N as useField, F as Fragment, r as renderList, O as withModifiers, P as withDirectives, Q as vShow, R as withKeys, T as Transition, S as normalizeStyle, f as createBlock, U as Teleport, V as isRef, x as onMounted, A as onBeforeUnmount, W as vModelText, X as resolveDirective, Y as vModelDynamic, k as useForm, Z as useStore, C as watch, $ as __nuxt_component_1 } from "./BD28x2iU.js";
import { g as getDefaultExportFromCjs } from "./CUmg6egw.js";
import { _ as _sfc_main$b } from "./DE1g-VdT.js";
const _hoisted_1$a = { class: "event-card" };
const _hoisted_2$9 = { class: "event-card__picture" };
const _hoisted_3$9 = ["srcset"];
const _hoisted_4$8 = ["src", "alt"];
const _hoisted_5$7 = { class: "event-card__title" };
const _hoisted_6$3 = { class: "event-card__description" };
const _hoisted_7$2 = ["datetime"];
const _sfc_main$9 = {
  __name: "EventCard",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const date = computed(() => {
      try {
        const date2 = new Date(props.data.date);
        return `${date2.toLocaleDateString()} | начало ${date2.toLocaleTimeString(
          "ru-RU",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        )}`;
      } catch {
        return null;
      }
    });
    return (_ctx, _cache) => {
      const _component_NuxtLink = __nuxt_component_0;
      return openBlock(), createElementBlock("article", _hoisted_1$a, [
        createVNode(_component_NuxtLink, {
          to: `/events/${__props.data.slug}`,
          class: "event-card__link"
        }, {
          default: withCtx(() => [
            createBaseVNode("picture", _hoisted_2$9, [
              createBaseVNode("source", {
                type: "image/webp",
                srcset: __props.data.img_webp
              }, null, 8, _hoisted_3$9),
              createBaseVNode("img", {
                src: __props.data.img,
                alt: __props.data.alt,
                class: "event-card__img"
              }, null, 8, _hoisted_4$8)
            ]),
            createBaseVNode("h2", _hoisted_5$7, toDisplayString(__props.data.title), 1),
            createBaseVNode("p", _hoisted_6$3, toDisplayString(__props.data.description), 1),
            unref(date) ? (openBlock(), createElementBlock("time", {
              key: 0,
              datetime: __props.data.date,
              class: "event-card__time"
            }, toDisplayString(unref(date)), 9, _hoisted_7$2)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["to"])
      ]);
    };
  }
};
const _hoisted_1$9 = { class: "app-listing" };
const _hoisted_2$8 = { class: "app-listing__title section-title" };
const _hoisted_3$8 = {
  key: 0,
  type: "button",
  class: "more-btn app-listing__more-btn"
};
const _hoisted_4$7 = {
  key: 1,
  href: "#",
  class: "app-listing__link link"
};
const _sfc_main$8 = {
  __name: "AppListing",
  props: {
    title: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "",
      required: true
    },
    moreBtn: {
      type: Boolean,
      default: false
    },
    moreLink: {
      type: Boolean,
      default: false
    },
    grid: {
      type: String,
      default: "row"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const listClass = computed(() => props.grid === "column" ? "app-listing__column-list" : "app-listing__list");
    const list = ref([]);
    const { data } = props.url ? ([__temp, __restore] = withAsyncContext(() => useAsyncData(`list-${props.url}`, () => {
      return $fetch(props.url);
    })), __temp = await __temp, __restore(), __temp) : { data: null };
    if (data?.value) list.value = data.value;
    return (_ctx, _cache) => {
      const _component_SvgIcon = _sfc_main$a;
      return openBlock(), createElementBlock("section", _hoisted_1$9, [
        createBaseVNode("h1", _hoisted_2$8, toDisplayString(__props.title), 1),
        createBaseVNode("div", {
          class: normalizeClass(unref(listClass))
        }, [
          renderSlot(_ctx.$slots, "default", { list: unref(list) })
        ], 2),
        __props.moreBtn ? (openBlock(), createElementBlock("button", _hoisted_3$8, [
          _cache[0] || (_cache[0] = createTextVNode(" Показать еще ", -1)),
          createVNode(_component_SvgIcon, {
            class: "more-btn__arrow",
            name: "arrow_down",
            width: "62",
            height: "92"
          })
        ])) : __props.moreLink ? (openBlock(), createElementBlock("a", _hoisted_4$7, "Смотреть все")) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$8 = { class: "field" };
const _hoisted_2$7 = { class: "field__fieldset" };
const _hoisted_3$7 = {
  key: 0,
  class: "field__title field-title"
};
const _hoisted_4$6 = ["name", "value", "checked", "onChange"];
const _hoisted_5$6 = ["innerHTML"];
const _hoisted_6$2 = {
  key: 0,
  class: "field__error field-error"
};
const _sfc_main$7 = {
  __name: "FieldRadio",
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const initialValue = computed(() => {
      return (props.initialValue || props.initialValue === 0) && props.options.find((option) => option.value === props.initialValue)?.value || void 0;
    });
    const { errorMessage, handleChange, value } = useField(
      props.name,
      props.rules,
      {
        initialValue: initialValue.value,
        type: "radio"
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("fieldset", _hoisted_2$7, [
          __props.label ? (openBlock(), createElementBlock("legend", _hoisted_3$7, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createElementBlock("label", {
              key: option.value,
              class: "radio field__radio"
            }, [
              createBaseVNode("input", {
                type: "radio",
                class: "radio__input",
                name: __props.name,
                value: option.value,
                checked: unref(value) === option.value,
                onChange: ($event) => unref(handleChange)(option.value)
              }, null, 40, _hoisted_4$6),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "radio__mark" }, null, -1)),
              createBaseVNode("span", {
                class: "radio__caption",
                innerHTML: option.label
              }, null, 8, _hoisted_5$6)
            ]);
          }), 128))
        ]),
        unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_6$2, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
function isEmpty(opt) {
  if (opt === 0) return false;
  if (Array.isArray(opt) && opt.length === 0) return true;
  return !opt;
}
function not(fun) {
  return (...params) => !fun(...params);
}
function includes(str, query) {
  if (str === void 0) str = "undefined";
  if (str === null) str = "null";
  if (str === false) str = "false";
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function stripGroups(options) {
  return options.filter((option) => !option.$isLabel);
}
function flattenOptions(values, label) {
  return (options) => options.reduce((prev, curr) => {
    if (curr[values] && curr[values].length) {
      prev.push({
        $groupLabel: curr[label],
        $isLabel: true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
var multiselectMixin = {
  data() {
    return {
      search: "",
      isOpen: false,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(option, label) {
        if (isEmpty(option)) return "";
        return label ? option[label] : option;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: false
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted() {
    if (!this.multiple && this.max) {
      console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.");
    }
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const search = this.search || "";
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : this.filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === "bottom") {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }
      return options.slice(0, this.optionsLimit);
    },
    valueKeys() {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy]);
      } else {
        return this.internalValue;
      }
    },
    optionKeys() {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        if (this.resetAfter && this.internalValue.length) {
          this.search = "";
          this.$emit("update:modelValue", this.multiple ? [] : null);
        }
      },
      deep: true
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(options, search, label) {
      return flow(
        this.filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(option) {
      const opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(option) {
      return !!option.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(option) {
      if (isEmpty(option)) return "";
      if (option.isTag) return option.label;
      if (option.$isLabel) return option.$groupLabel;
      const label = this.customLabel(option, this.label);
      if (isEmpty(label)) return "";
      return label;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(option, key) {
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel) return;
      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      if (key === "Tab" && !this.pointerDirty) return;
      if (option.isTag) {
        this.$emit("tag", option.label, this.id);
        this.search = "";
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== "Tab") this.removeElement(option);
          return;
        }
        if (this.multiple) {
          this.$emit("update:modelValue", this.internalValue.concat([option]));
        } else {
          this.$emit("update:modelValue", option);
        }
        this.$emit("select", option, this.id);
        if (this.clearOnSelect) this.search = "";
      }
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      if (!group) return;
      if (this.wholeGroupSelected(group)) {
        this.$emit("remove", group[this.groupValues], this.id);
        const groupValues = this.trackBy ? group[this.groupValues].map((val) => val[this.trackBy]) : group[this.groupValues];
        const newValue = this.internalValue.filter(
          (option) => groupValues.indexOf(this.trackBy ? option[this.trackBy] : option) === -1
        );
        this.$emit("update:modelValue", newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          (option) => !(this.isOptionDisabled(option) || this.isSelected(option))
        );
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length);
        }
        this.$emit("select", optionsToAdd, this.id);
        this.$emit(
          "update:modelValue",
          this.internalValue.concat(optionsToAdd)
        );
      }
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(group) {
      return group[this.groupValues].every(
        (option) => this.isSelected(option) || this.isOptionDisabled(option)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(group) {
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(option, shouldClose = true) {
      if (this.disabled) return;
      if (option.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const index = typeof option === "object" ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit("update:modelValue", newValue);
      } else {
        this.$emit("update:modelValue", null);
      }
      this.$emit("remove", option, this.id);
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      if (this.blockKeys.indexOf("Delete") !== -1) return;
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      if (this.isOpen || this.disabled) return;
      this.adjustPosition();
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }
      this.isOpen = true;
      if (this.searchable) {
        if (!this.preserveSearch) this.search = "";
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== "undefined") this.$el.focus();
      }
      this.$emit("open", this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      if (!this.isOpen) return;
      this.isOpen = false;
      if (this.searchable) {
        if (this.$refs.search !== null && typeof this.$refs.search !== "undefined") this.$refs.search.blur();
      } else {
        if (typeof this.$el !== "undefined") this.$el.blur();
      }
      if (!this.preserveSearch) this.search = "";
      this.$emit("close", this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window === "undefined") return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === "below" || this.openDirection === "bottom") {
        this.preferredOpenDirection = "below";
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = "above";
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(options, search, label, customLabel) {
      return search ? options.filter((option) => includes(customLabel(option, label), search)).sort((a, b) => {
        if (typeof this.filteringSortFunc === "function") {
          return this.filteringSortFunc(a, b);
        }
        return customLabel(a, label).length - customLabel(b, label).length;
      }) : options;
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups(search, label, values, groupLabel, customLabel) {
      return (groups) => groups.map((group) => {
        if (!group[values]) {
          console.warn("Options passed to vue-multiselect do not contain groups, despite the config.");
          return [];
        }
        const groupOptions = this.filterOptions(group[values], search, label, customLabel);
        return groupOptions.length ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        } : [];
      });
    }
  }
};
var pointerMixin = {
  data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = false;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(index, option) {
      return {
        "multiselect__option--highlight": index === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": selectedGroup.$isLabel }
        ];
      }
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      return group && !this.wholeGroupDisabled(group) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": index === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(group) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key } = "Enter") {
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        if (this.$refs.list?.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        if (this.$refs.list?.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerBackward();
      } else {
        if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset() {
      if (!this.closeOnSelect) return;
      this.pointer = 0;
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};
var script = {
  name: "vue-multiselect",
  mixins: [multiselectMixin, pointerMixin],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: false
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the teleportTarget element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
      type: Boolean,
      default: false
    },
    /**
     * Target selector for teleporting the dropdown element
     * @default 'body'
     * @type {String|Object}
     */
    teleportTarget: {
      type: [String, Object],
      default: "body"
    },
    /**
     * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
     * the teleported element
     */
    contentWrapperClass: {
      type: [String, Array, Object],
      default: ""
    }
  },
  data() {
    return {
      dropdownStyles: {},
      ready: false
    };
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      if (this.searchable || this.multiple && this.modelValue && this.modelValue.length) {
        return this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" };
      }
      return "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      if (this.openDirection === "above" || this.openDirection === "top") {
        return true;
      } else if (this.openDirection === "below" || this.openDirection === "bottom") {
        return false;
      } else {
        return this.preferredOpenDirection === "above";
      }
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    },
    isRequired() {
      if (this.required === false) {
        return false;
      }
      return this.internalValue.length <= 0;
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        if (this.useTeleport) {
          this.ready = false;
          this.$nextTick(() => {
            const rect = this.$el.getBoundingClientRect();
            this.dropdownStyles = {
              position: "absolute",
              top: `${rect.bottom + window.scrollY}px`,
              left: `${rect.left + window.scrollX}px`,
              width: `${rect.width}px`,
              zIndex: 9999
            };
            this.ready = true;
          });
        } else {
          this.ready = true;
        }
      }
    }
  }
};
const _hoisted_1$7 = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"];
const _hoisted_2$6 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_3$6 = { class: "multiselect__tags-wrap" };
const _hoisted_4$5 = ["textContent"];
const _hoisted_5$5 = ["onKeydown", "onMousedown"];
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = { class: "multiselect__spinner" };
const _hoisted_8 = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"];
const _hoisted_9 = ["id", "aria-multiselectable"];
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "multiselect__option" };
const _hoisted_12 = ["aria-selected", "id", "role"];
const _hoisted_13 = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"];
const _hoisted_14 = ["data-select", "data-deselect", "onMouseenter", "onMousedown"];
const _hoisted_15 = { class: "multiselect__option" };
const _hoisted_16 = { class: "multiselect__option" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: normalizeClass([{ "multiselect--active": _ctx.isOpen, "multiselect--disabled": $props.disabled, "multiselect--above": $options.isAbove, "multiselect--has-options-group": $options.hasOptionGroup }, "multiselect"]),
    onFocus: _cache[14] || (_cache[14] = ($event) => _ctx.activate()),
    onBlur: _cache[15] || (_cache[15] = ($event) => _ctx.searchable ? false : _ctx.deactivate()),
    onKeydown: [
      _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => _ctx.pointerForward(), ["self", "prevent"]), ["down"])),
      _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), ["self", "prevent"]), ["up"])),
      _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), ["stop", "self"]), ["enter", "tab"]))
    ],
    onKeyup: _cache[19] || (_cache[19] = withKeys(($event) => _ctx.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": _ctx.isOpen,
    "aria-owns": "listbox-" + _ctx.id,
    "aria-activedescendant": _ctx.isOpen && _ctx.pointer !== null ? _ctx.id + "-" + _ctx.pointer : null
  }, [
    renderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      createBaseVNode(
        "div",
        {
          onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    renderSlot(_ctx.$slots, "clear", { search: _ctx.search }),
    createBaseVNode(
      "div",
      _hoisted_2$6,
      [
        renderSlot(_ctx.$slots, "selection", {
          search: _ctx.search,
          remove: _ctx.removeElement,
          values: $options.visibleValues,
          isOpen: _ctx.isOpen
        }, () => [
          withDirectives(createBaseVNode(
            "div",
            _hoisted_3$6,
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($options.visibleValues, (option, index) => {
                  return renderSlot(_ctx.$slots, "tag", {
                    option,
                    search: _ctx.search,
                    remove: _ctx.removeElement
                  }, () => [
                    (openBlock(), createElementBlock(
                      "span",
                      {
                        class: "multiselect__tag",
                        key: index,
                        onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {
                        }, ["prevent"]))
                      },
                      [
                        createBaseVNode("span", {
                          textContent: toDisplayString(_ctx.getOptionLabel(option))
                        }, null, 8, _hoisted_4$5),
                        createBaseVNode("i", {
                          tabindex: "1",
                          onKeydown: withKeys(withModifiers(($event) => _ctx.removeElement(option), ["prevent"]), ["enter"]),
                          onMousedown: withModifiers(($event) => _ctx.removeElement(option), ["prevent"]),
                          class: "multiselect__tag-icon"
                        }, null, 40, _hoisted_5$5)
                      ],
                      32
                      /* NEED_HYDRATION */
                    ))
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, $options.visibleValues.length > 0]
          ]),
          _ctx.internalValue && _ctx.internalValue.length > $props.limit ? renderSlot(_ctx.$slots, "limit", { key: 0 }, () => [
            createBaseVNode("strong", {
              class: "multiselect__strong",
              textContent: toDisplayString($props.limitText(_ctx.internalValue.length - $props.limit))
            }, null, 8, _hoisted_6$1)
          ]) : createCommentVNode("v-if", true)
        ]),
        createVNode(Transition, { name: "multiselect__loading" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "loading", {}, () => [
              withDirectives(createBaseVNode(
                "div",
                _hoisted_7$1,
                null,
                512
                /* NEED_PATCH */
              ), [
                [vShow, $props.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        _ctx.searchable ? (openBlock(), createElementBlock("input", {
          key: 0,
          ref: "search",
          name: $props.name,
          id: _ctx.id,
          type: "text",
          autocomplete: "off",
          spellcheck: $props.spellcheck,
          placeholder: _ctx.placeholder,
          required: $options.isRequired,
          style: normalizeStyle($options.inputStyle),
          value: _ctx.search,
          disabled: $props.disabled,
          tabindex: $props.tabindex,
          "aria-label": $props.name + "-searchbox",
          onInput: _cache[2] || (_cache[2] = ($event) => _ctx.updateSearch($event.target.value)),
          onFocus: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.activate(), ["prevent"])),
          onBlur: _cache[4] || (_cache[4] = withModifiers(($event) => _ctx.deactivate(), ["prevent"])),
          onKeyup: _cache[5] || (_cache[5] = withKeys(($event) => _ctx.deactivate(), ["esc"])),
          onKeydown: [
            _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.pointerForward(), ["prevent"]), ["down"])),
            _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), ["prevent"]), ["up"])),
            _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), ["prevent", "stop", "self"]), ["enter"])),
            _cache[9] || (_cache[9] = withKeys(withModifiers(($event) => _ctx.removeLastElement(), ["stop"]), ["delete"]))
          ],
          class: "multiselect__input",
          "aria-controls": "listbox-" + _ctx.id
        }, null, 44, _hoisted_8)) : createCommentVNode("v-if", true),
        $options.isSingleLabelVisible ? (openBlock(), createElementBlock(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
          },
          [
            renderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              createTextVNode(
                toDisplayString(_ctx.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : createCommentVNode("v-if", true),
        $options.isPlaceholderVisible ? (openBlock(), createElementBlock(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
          },
          [
            renderSlot(_ctx.$slots, "placeholder", {}, () => [
              createTextVNode(
                toDisplayString(_ctx.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : createCommentVNode("v-if", true)
      ],
      512
      /* NEED_PATCH */
    ),
    (openBlock(), createBlock(Teleport, {
      to: $props.teleportTarget,
      disabled: !$props.useTeleport
    }, [
      createVNode(Transition, { name: "multiselect" }, {
        default: withCtx(() => [
          _ctx.isOpen && $data.ready ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(["multiselect__content-wrapper", $props.contentWrapperClass]),
              onFocus: _cache[12] || (_cache[12] = (...args) => _ctx.activate && _ctx.activate(...args)),
              tabindex: "-1",
              onMousedown: _cache[13] || (_cache[13] = withModifiers(() => {
              }, ["prevent"])),
              style: normalizeStyle([$data.dropdownStyles, { maxHeight: _ctx.optimizedHeight + "px" }]),
              ref: "list"
            },
            [
              createBaseVNode("ul", {
                class: "multiselect__content",
                style: normalizeStyle($options.contentStyle),
                role: "listbox",
                id: "listbox-" + _ctx.id,
                "aria-multiselectable": _ctx.multiple
              }, [
                renderSlot(_ctx.$slots, "beforeList"),
                _ctx.multiple && _ctx.max === _ctx.internalValue.length ? (openBlock(), createElementBlock("li", _hoisted_10, [
                  createBaseVNode("span", _hoisted_11, [
                    renderSlot(_ctx.$slots, "maxElements", {}, () => [
                      createTextVNode(
                        "Maximum of " + toDisplayString(_ctx.max) + " options selected. First remove a selected option to select another.",
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])) : createCommentVNode("v-if", true),
                !_ctx.max || _ctx.internalValue.length < _ctx.max ? (openBlock(true), createElementBlock(
                  Fragment,
                  { key: 1 },
                  renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createElementBlock("li", {
                      class: "multiselect__element",
                      key: index,
                      "aria-selected": _ctx.isSelected(option),
                      id: _ctx.id + "-" + index,
                      role: !(option && (option.$isLabel || option.$isDisabled)) ? "option" : null
                    }, [
                      !(option && (option.$isLabel || option.$isDisabled)) ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass([_ctx.optionHighlight(index, option), "multiselect__option"]),
                        onClick: withModifiers(($event) => _ctx.select(option), ["stop"]),
                        onMouseenter: withModifiers(($event) => _ctx.pointerSet(index), ["self"]),
                        "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                        "data-selected": $options.selectedLabelText,
                        "data-deselect": $options.deselectLabelText
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option,
                          search: _ctx.search,
                          index
                        }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(_ctx.getOptionLabel(option)),
                            1
                            /* TEXT */
                          )
                        ])
                      ], 42, _hoisted_13)) : createCommentVNode("v-if", true),
                      option && (option.$isLabel || option.$isDisabled) ? (openBlock(), createElementBlock("span", {
                        key: 1,
                        "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                        "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                        class: normalizeClass([_ctx.groupHighlight(index, option), "multiselect__option"]),
                        onMouseenter: withModifiers(($event) => _ctx.groupSelect && _ctx.pointerSet(index), ["self"]),
                        onMousedown: withModifiers(($event) => _ctx.selectGroup(option), ["prevent"])
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option,
                          search: _ctx.search,
                          index
                        }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(_ctx.getOptionLabel(option)),
                            1
                            /* TEXT */
                          )
                        ])
                      ], 42, _hoisted_14)) : createCommentVNode("v-if", true)
                    ], 8, _hoisted_12);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                withDirectives(createBaseVNode(
                  "li",
                  null,
                  [
                    createBaseVNode("span", _hoisted_15, [
                      renderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                        _cache[20] || (_cache[20] = createTextVNode("No elements found. Consider changing the search query."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
                ]),
                withDirectives(createBaseVNode(
                  "li",
                  null,
                  [
                    createBaseVNode("span", _hoisted_16, [
                      renderSlot(_ctx.$slots, "noOptions", {}, () => [
                        _cache[21] || (_cache[21] = createTextVNode("List is empty."))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $props.showNoOptions && _ctx.filteredOptions.length === 0 && !_ctx.search && !$props.loading]
                ]),
                renderSlot(_ctx.$slots, "afterList")
              ], 12, _hoisted_9)
            ],
            38
            /* CLASS, STYLE, NEED_HYDRATION */
          )) : createCommentVNode("v-if", true)
        ]),
        _: 3
        /* FORWARDED */
      })
    ], 8, ["to", "disabled"]))
  ], 42, _hoisted_1$7);
}
script.render = render;
const _hoisted_1$6 = { class: "field" };
const _hoisted_2$5 = {
  key: 0,
  class: "field__title field-title"
};
const _hoisted_3$5 = {
  key: 1,
  class: "field__error field-error"
};
const _sfc_main$6 = {
  __name: "FieldSelect",
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    },
    searchable: {
      type: Boolean,
      default: false
    },
    allowEmpty: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const selected = ref(
      props.initialValue || props.initialValue === 0 ? props.options.find((option) => option.value === props.initialValue) : void 0
    );
    const { errorMessage, handleChange } = useField(props.name, props.rules, {
      initialValue: selected.value?.value
    });
    const onSelect = (option) => {
      handleChange(option.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        __props.label ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
        createVNode(unref(script), {
          modelValue: unref(selected),
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => isRef(selected) ? selected.value = $event : null),
            onSelect
          ],
          options: __props.options,
          label: "label",
          "track-by": "value",
          placeholder: __props.placeholder,
          searchable: __props.searchable,
          allowEmpty: __props.allowEmpty,
          selectLabel: "",
          selectedLabel: "",
          deselectLabel: __props.allowEmpty ? "⮾" : "",
          class: "field__select"
        }, null, 8, ["modelValue", "options", "placeholder", "searchable", "allowEmpty", "deselectLabel"]),
        unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
var airDatepicker$1 = { exports: {} };
var airDatepicker = airDatepicker$1.exports;
var hasRequiredAirDatepicker;
function requireAirDatepicker() {
  if (hasRequiredAirDatepicker) return airDatepicker$1.exports;
  hasRequiredAirDatepicker = 1;
  (function(module, exports$1) {
    !(function(e, t) {
      module.exports = t();
    })(airDatepicker, (function() {
      return (function() {
        var e = { d: function(t2, i2) {
          for (var s2 in i2) e.o(i2, s2) && !e.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: i2[s2] });
        }, o: function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        } }, t = {};
        e.d(t, { default: function() {
          return R;
        } });
        var i = { days: "days", months: "months", years: "years", day: "day", month: "month", year: "year", eventChangeViewDate: "changeViewDate", eventChangeCurrentView: "changeCurrentView", eventChangeFocusDate: "changeFocusDate", eventChangeSelectedDate: "changeSelectedDate", eventChangeTime: "changeTime", eventChangeLastSelectedDate: "changeLastSelectedDate", actionSelectDate: "selectDate", actionUnselectDate: "unselectDate", cssClassWeekend: "-weekend-" }, s = { classes: "", inline: false, locale: { days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"], daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], today: "Сегодня", clear: "Очистить", dateFormat: "dd.MM.yyyy", timeFormat: "HH:mm", firstDay: 1 }, startDate: /* @__PURE__ */ new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "T", toggleSelected: true, keyboardNav: true, selectedDates: false, container: "", isMobile: false, visible: false, position: "bottom left", offset: 12, view: i.days, minView: i.days, showOtherMonths: true, selectOtherMonths: true, moveToOtherMonthsOnSelect: true, showOtherYears: true, selectOtherYears: true, moveToOtherYearsOnSelect: true, minDate: "", maxDate: "", disableNavWhenOutOfRange: true, multipleDates: false, multipleDatesSeparator: ", ", range: false, dynamicRange: true, buttons: false, monthsField: "monthsShort", showEvent: "focus", autoClose: false, fixedHeight: false, prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MMMM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: false, onlyTimepicker: false, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: false, onChangeViewDate: false, onChangeView: false, onRenderCell: false, onShow: false, onHide: false, onClickDayName: false };
        function a(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
          return "string" == typeof e2 ? t2.querySelector(e2) : e2;
        }
        function n() {
          let { tagName: e2 = "div", className: t2 = "", innerHtml: i2 = "", id: s2 = "", attrs: a2 = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = document.createElement(e2);
          return t2 && n2.classList.add(...t2.split(" ")), s2 && (n2.id = s2), i2 && (n2.innerHTML = i2), a2 && r(n2, a2), n2;
        }
        function r(e2, t2) {
          for (let [i2, s2] of Object.entries(t2)) void 0 !== s2 && e2.setAttribute(i2, s2);
          return e2;
        }
        function h(e2) {
          return new Date(e2.getFullYear(), e2.getMonth() + 1, 0).getDate();
        }
        function o(e2) {
          let t2 = e2.getHours(), { hours: i2, dayPeriod: s2 } = l(t2);
          return { year: e2.getFullYear(), month: e2.getMonth(), fullMonth: e2.getMonth() + 1 < 10 ? "0" + (e2.getMonth() + 1) : e2.getMonth() + 1, date: e2.getDate(), fullDate: e2.getDate() < 10 ? "0" + e2.getDate() : e2.getDate(), day: e2.getDay(), hours: t2, fullHours: d(t2), hours12: i2, dayPeriod: s2, fullHours12: d(i2), minutes: e2.getMinutes(), fullMinutes: e2.getMinutes() < 10 ? "0" + e2.getMinutes() : e2.getMinutes() };
        }
        function l(e2) {
          return { dayPeriod: e2 > 11 ? "pm" : "am", hours: e2 % 12 == 0 ? 12 : e2 % 12 };
        }
        function d(e2) {
          return e2 < 10 ? "0" + e2 : e2;
        }
        function c(e2) {
          let t2 = 10 * Math.floor(e2.getFullYear() / 10);
          return [t2, t2 + 9];
        }
        function u() {
          let e2 = [];
          for (var t2 = arguments.length, i2 = new Array(t2), s2 = 0; s2 < t2; s2++) i2[s2] = arguments[s2];
          return i2.forEach(((t3) => {
            if ("object" == typeof t3) for (let i3 in t3) t3[i3] && e2.push(i3);
            else t3 && e2.push(t3);
          })), e2.join(" ");
        }
        function p(e2, t2) {
          let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
          if (!e2 || !t2) return false;
          let a2 = o(e2), n2 = o(t2);
          return { [i.days]: a2.date === n2.date && a2.month === n2.month && a2.year === n2.year, [i.months]: a2.month === n2.month && a2.year === n2.year, [i.years]: a2.year === n2.year }[s2];
        }
        function m(e2, t2, i2) {
          let s2 = g(e2, false).getTime(), a2 = g(t2, false).getTime();
          return i2 ? s2 >= a2 : s2 > a2;
        }
        function v(e2, t2) {
          return !m(e2, t2, true);
        }
        function g(e2) {
          let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = new Date(e2.getTime());
          return "boolean" != typeof t2 || t2 || (function(e3) {
            e3.setHours(0, 0, 0, 0);
          })(i2), i2;
        }
        function D(e2, t2, i2) {
          e2.length ? e2.forEach(((e3) => {
            e3.addEventListener(t2, i2);
          })) : e2.addEventListener(t2, i2);
        }
        function y(e2, t2) {
          return !(!e2 || e2 === document || e2 instanceof DocumentFragment) && (e2.matches(t2) ? e2 : y(e2.parentNode, t2));
        }
        function f(e2, t2, i2) {
          return e2 > i2 ? i2 : e2 < t2 ? t2 : e2;
        }
        function w(e2) {
          for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++) i2[s2 - 1] = arguments[s2];
          return i2.filter(((e3) => e3)).forEach(((t3) => {
            for (let [i3, s3] of Object.entries(t3)) if (void 0 !== s3 && "[object Object]" === s3.toString()) {
              let t4 = void 0 !== e2[i3] ? e2[i3].toString() : void 0, a2 = s3.toString(), n2 = Array.isArray(s3) ? [] : {};
              e2[i3] = e2[i3] ? t4 !== a2 ? n2 : e2[i3] : n2, w(e2[i3], s3);
            } else e2[i3] = s3;
          })), e2;
        }
        function b(e2) {
          let t2 = e2;
          return e2 instanceof Date || ("string" == typeof e2 && /^\d{4}-\d{2}-\d{2}$/.test(e2) && (e2 += "T00:00:00"), t2 = new Date(e2)), isNaN(t2.getTime()) && (console.log(`Unable to convert value "${e2}" to Date object`), t2 = false), t2;
        }
        function $(e2) {
          let t2 = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
          return new RegExp("(^|>|" + t2 + ")(" + e2 + ")($|<|" + t2 + ")", "g");
        }
        function k(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        class C {
          constructor() {
            let { type: e2, date: t2, dp: i2, opts: s2, body: a2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            k(this, "focus", (() => {
              this.$cell.classList.add("-focus-"), this.focused = true;
            })), k(this, "removeFocus", (() => {
              this.$cell.classList.remove("-focus-"), this.focused = false;
            })), k(this, "select", (() => {
              this.$cell.classList.add("-selected-"), this.selected = true;
            })), k(this, "removeSelect", (() => {
              this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = false;
            })), k(this, "onChangeSelectedDate", (() => {
              this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
            })), k(this, "onChangeFocusDate", ((e3) => {
              if (!e3) return void (this.focused && this.removeFocus());
              let t3 = p(e3, this.date, this.type);
              t3 ? this.focus() : !t3 && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
            })), k(this, "render", (() => (this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell))), this.type = e2, this.singleType = this.type.slice(0, -1), this.date = t2, this.dp = i2, this.opts = s2, this.body = a2, this.customData = false, this.init();
          }
          init() {
            var e2, t2;
            let { onRenderCell: i2 } = this.opts;
            i2 && (this.customData = i2({ date: this.date, cellType: this.singleType, datepicker: this.dp })), this._createElement(), this._bindDatepickerEvents(), null !== (e2 = this.customData) && void 0 !== e2 && e2.disabled ? this.dp.disableDate(this.date) : false === (null === (t2 = this.customData) || void 0 === t2 ? void 0 : t2.disabled) && this.dp.enableDate(this.date);
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
          }
          unbindDatepickerEvents() {
            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
          }
          _createElement() {
            var e2;
            let { year: t2, month: i2, fullMonth: s2, date: a2, fullDate: r2 } = o(this.date), h2 = (null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.attrs) || {};
            this.$cell = n({ attrs: { "data-year": t2, "data-month": i2, "data-date": a2, "data-iso-date": `${t2}-${s2}-${r2}`, ...h2 } }), this.$cell.adpCell = this;
          }
          _getClassName() {
            var e2;
            let t2 = /* @__PURE__ */ new Date(), { selectOtherMonths: s2, selectOtherYears: a2 } = this.opts, { minDate: n2, maxDate: r2, isDateDisabled: h2 } = this.dp, { day: l2 } = o(this.date), d2 = this._isOutOfMinMaxRange(), c2 = h2(this.date), m2 = u("air-datepicker-cell", `-${this.singleType}-`, { "-current-": p(t2, this.date, this.type), "-min-date-": n2 && p(n2, this.date, this.type), "-max-date-": r2 && p(r2, this.date, this.type) }), v2 = "";
            switch (this.type) {
              case i.days:
                v2 = u({ "-weekend-": this.dp.isWeekend(l2), "-other-month-": this.isOtherMonth, "-disabled-": this.isOtherMonth && !s2 || d2 || c2 });
                break;
              case i.months:
                v2 = u({ "-disabled-": d2 });
                break;
              case i.years:
                v2 = u({ "-other-decade-": this.isOtherDecade, "-disabled-": d2 || this.isOtherDecade && !a2 });
            }
            return u(m2, v2, null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.classes).split(" ");
          }
          _getHtml() {
            var e2;
            let { year: t2, month: s2, date: a2 } = o(this.date), { showOtherMonths: n2, showOtherYears: r2 } = this.opts;
            if (null !== (e2 = this.customData) && void 0 !== e2 && e2.html) return this.customData.html;
            switch (this.type) {
              case i.days:
                return !n2 && this.isOtherMonth ? "" : a2;
              case i.months:
                return this.dp.locale[this.opts.monthsField][s2];
              case i.years:
                return !r2 && this.isOtherDecade ? "" : t2;
            }
          }
          _isOutOfMinMaxRange() {
            let { minDate: e2, maxDate: t2 } = this.dp, { type: s2, date: a2 } = this, { month: n2, year: r2, date: h2 } = o(a2), l2 = s2 === i.days, d2 = s2 === i.years, c2 = !!e2 && new Date(r2, d2 ? e2.getMonth() : n2, l2 ? h2 : e2.getDate()), u2 = !!t2 && new Date(r2, d2 ? t2.getMonth() : n2, l2 ? h2 : t2.getDate());
            return e2 && t2 ? v(c2, e2) || m(u2, t2) : e2 ? v(c2, e2) : t2 ? m(u2, t2) : void 0;
          }
          destroy() {
            this.unbindDatepickerEvents();
          }
          _handleRangeStatus() {
            const { selectedDates: e2, focusDate: t2, rangeDateTo: i2, rangeDateFrom: s2 } = this.dp, a2 = e2.length;
            if (this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), !a2) return;
            let n2 = s2, r2 = i2;
            if (1 === a2 && t2) {
              const i3 = m(t2, e2[0]);
              n2 = i3 ? e2[0] : t2, r2 = i3 ? t2 : e2[0];
            }
            let h2 = u({ "-in-range-": n2 && r2 && (o2 = this.date, l2 = n2, d2 = r2, m(o2, l2) && v(o2, d2)), "-range-from-": n2 && p(this.date, n2, this.type), "-range-to-": r2 && p(this.date, r2, this.type) });
            var o2, l2, d2;
            h2 && this.$cell.classList.add(...h2.split(" "));
          }
          _handleSelectedStatus() {
            let e2 = this.dp._checkIfDateIsSelected(this.date, this.type);
            e2 ? this.select() : !e2 && this.selected && this.removeSelect();
          }
          _handleInitialFocusStatus() {
            p(this.dp.focusDate, this.date, this.type) && this.focus();
          }
          _handleClasses() {
            this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
          }
          get isDisabled() {
            return this.$cell.matches(".-disabled-");
          }
          get isOtherMonth() {
            return this.dp.isOtherMonth(this.date);
          }
          get isOtherDecade() {
            return this.dp.isOtherDecade(this.date);
          }
        }
        function _(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        let M = { [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`, [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`, [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>` };
        const S = ".air-datepicker-cell";
        class T {
          constructor(e2) {
            let { dp: t2, type: s2, opts: a2 } = e2;
            _(this, "handleClick", ((e3) => {
              let t3 = e3.target.closest(S).adpCell;
              if (t3.isDisabled) return;
              if (!this.dp.isMinViewReached) return void this.dp.down();
              let i2 = this.dp._checkIfDateIsSelected(t3.date, t3.type);
              i2 ? this.dp._handleAlreadySelectedDates(i2, t3.date) : this.dp.selectDate(t3.date);
            })), _(this, "handleDayNameClick", ((e3) => {
              let t3 = e3.target.getAttribute("data-day-index");
              this.opts.onClickDayName({ dayIndex: Number(t3), datepicker: this.dp });
            })), _(this, "onChangeCurrentView", ((e3) => {
              e3 !== this.type ? this.hide() : (this.show(), this.render());
            })), _(this, "onMouseOverCell", ((e3) => {
              let t3 = y(e3.target, S);
              this.dp.setFocusDate(!!t3 && t3.adpCell.date);
            })), _(this, "onMouseOutCell", (() => {
              this.dp.setFocusDate(false);
            })), _(this, "onClickBody", ((e3) => {
              let { onClickDayName: t3 } = this.opts, i2 = e3.target;
              i2.closest(S) && this.handleClick(e3), t3 && i2.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e3);
            })), _(this, "onMouseDown", ((e3) => {
              this.pressed = true;
              let t3 = y(e3.target, S), i2 = t3 && t3.adpCell;
              p(i2.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), p(i2.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
            })), _(this, "onMouseMove", ((e3) => {
              if (!this.pressed || !this.dp.isMinViewReached) return;
              e3.preventDefault();
              let t3 = y(e3.target, S), i2 = t3 && t3.adpCell, { selectedDates: s3, rangeDateTo: a3, rangeDateFrom: n2 } = this.dp;
              if (!i2 || i2.isDisabled) return;
              let { date: r2 } = i2;
              if (2 === s3.length) {
                if (this.rangeFromFocused && !m(r2, a3)) {
                  let { hours: e4, minutes: t4 } = o(n2);
                  r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateFrom = r2, this.dp.replaceDate(n2, r2);
                }
                if (this.rangeToFocused && !v(r2, n2)) {
                  let { hours: e4, minutes: t4 } = o(a3);
                  r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateTo = r2, this.dp.replaceDate(a3, r2);
                }
              }
            })), _(this, "onMouseUp", (() => {
              this.pressed = false, this.rangeFromFocused = false, this.rangeToFocused = false;
            })), _(this, "onChangeViewDate", ((e3, t3) => {
              if (!this.isVisible) return;
              let s3 = c(e3), a3 = c(t3);
              switch (this.dp.currentView) {
                case i.days:
                  if (p(e3, t3, i.months)) return;
                  break;
                case i.months:
                  if (p(e3, t3, i.years)) return;
                  break;
                case i.years:
                  if (s3[0] === a3[0] && s3[1] === a3[1]) return;
              }
              this.render();
            })), _(this, "render", (() => {
              this.destroyCells(), this._generateCells(), this.cells.forEach(((e3) => {
                this.$cells.appendChild(e3.render());
              }));
            })), this.dp = t2, this.type = s2, this.opts = a2, this.cells = [], this.$el = "", this.pressed = false, this.isVisible = true, this.init();
          }
          init() {
            this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
          }
          _bindEvents() {
            let { range: e2, dynamicRange: t2 } = this.opts;
            D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e2 && t2 && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
          }
          _buildBaseHtml() {
            this.$el = n({ className: `air-datepicker-body -${this.type}-`, innerHtml: M[this.type] }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
          }
          _getDayNamesHtml() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t2 = "", s2 = this.dp.isWeekend, { onClickDayName: a2 } = this.opts, n2 = e2, r2 = 0;
            for (; r2 < 7; ) {
              let e3 = n2 % 7;
              t2 += `<div class="${u("air-datepicker-body--day-name", { [i.cssClassWeekend]: s2(e3), "-clickable-": !!a2 })}" data-day-index='${e3}'>${this.dp.locale.daysMin[e3]}</div>`, r2++, n2++;
            }
            return t2;
          }
          renderDayNames() {
            this.$names.innerHTML = this._getDayNamesHtml();
          }
          _generateCell(e2) {
            let { type: t2, dp: i2, opts: s2 } = this;
            return new C({ type: t2, dp: i2, opts: s2, date: e2, body: this });
          }
          _generateCells() {
            T.getDatesFunction(this.type)(this.dp, ((e2) => {
              this.cells.push(this._generateCell(e2));
            }));
          }
          show() {
            this.isVisible = true, this.$el.classList.remove("-hidden-");
          }
          hide() {
            this.isVisible = false, this.$el.classList.add("-hidden-");
          }
          destroyCells() {
            this.cells.forEach(((e2) => e2.destroy())), this.cells = [], this.$cells.innerHTML = "";
          }
          destroy() {
            this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
          }
          static getDaysDates(e2, t2) {
            let { viewDate: i2, opts: { fixedHeight: s2 }, locale: { firstDay: a2 } } = e2, n2 = h(i2), { year: r2, month: l2 } = o(i2), d2 = new Date(r2, l2, 1), c2 = new Date(r2, l2, n2), u2 = d2.getDay() - a2, p2 = 6 - c2.getDay() + a2;
            u2 = u2 < 0 ? u2 + 7 : u2, p2 = p2 > 6 ? p2 - 7 : p2;
            let m2 = (function(e3, t3) {
              let { year: i3, month: s3, date: a3 } = o(e3);
              return new Date(i3, s3, a3 - t3);
            })(d2, u2), v2 = n2 + u2 + p2, g2 = m2.getDate(), { year: D2, month: y2 } = o(m2), f2 = 0;
            s2 && (v2 = 42);
            const w2 = [];
            for (; f2 < v2; ) {
              let e3 = new Date(D2, y2, g2 + f2);
              t2 && t2(e3), w2.push(e3), f2++;
            }
            return w2;
          }
          static getMonthsDates(e2, t2) {
            let { year: i2 } = e2.parsedViewDate, s2 = 0, a2 = [];
            for (; s2 < 12; ) {
              const e3 = new Date(i2, s2);
              a2.push(e3), t2 && t2(e3), s2++;
            }
            return a2;
          }
          static getYearsDates(e2, t2) {
            let i2 = c(e2.viewDate), s2 = i2[0] - 1, a2 = i2[1] + 1, n2 = s2, r2 = [];
            for (; n2 <= a2; ) {
              const e3 = new Date(n2, 0);
              r2.push(e3), t2 && t2(e3), n2++;
            }
            return r2;
          }
          static getDatesFunction() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
            return { [i.days]: T.getDaysDates, [i.months]: T.getMonthsDates, [i.years]: T.getYearsDates }[e2];
          }
        }
        function F(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        class V {
          constructor(e2) {
            let { dp: t2, opts: i2 } = e2;
            F(this, "onClickNav", ((e3) => {
              let t3 = y(e3.target, ".air-datepicker-nav--action");
              if (!t3) return;
              let i3 = t3.dataset.action;
              this.dp[i3]();
            })), F(this, "onChangeViewDate", (() => {
              this.render(), this._resetNavStatus(), this.handleNavStatus();
            })), F(this, "onChangeCurrentView", (() => {
              this.render(), this._resetNavStatus(), this.handleNavStatus();
            })), F(this, "onClickNavTitle", (() => {
              this.dp.isFinalView || this.dp.up();
            })), F(this, "update", (() => {
              let { prevHtml: e3, nextHtml: t3 } = this.opts;
              this.$prev.innerHTML = e3, this.$next.innerHTML = t3, this._resetNavStatus(), this.render(), this.handleNavStatus();
            })), F(this, "renderDelay", (() => {
              setTimeout(this.render);
            })), F(this, "render", (() => {
              this.$title.innerHTML = this._getTitle(), (function(e3, t3) {
                for (let i3 in t3) t3[i3] ? e3.classList.add(i3) : e3.classList.remove(i3);
              })(this.$title, { "-disabled-": this.dp.isFinalView });
            })), this.dp = t2, this.opts = i2, this.init();
          }
          init() {
            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
          }
          _defineDOM() {
            this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
          }
          _bindEvents() {
            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
          }
          _bindDatepickerEvents() {
            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
          }
          destroy() {
            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
          }
          _createElement() {
            this.$el = n({ tagName: "nav", className: "air-datepicker-nav" });
          }
          _getTitle() {
            let { dp: e2, opts: t2 } = this, i2 = t2.navTitles[e2.currentView];
            return "function" == typeof i2 ? i2(e2) : e2.formatDate(e2.viewDate, i2);
          }
          handleNavStatus() {
            let { disableNavWhenOutOfRange: e2 } = this.opts, { minDate: t2, maxDate: s2 } = this.dp;
            if (!t2 && !s2 || !e2) return;
            let { year: a2, month: n2 } = this.dp.parsedViewDate, r2 = !!t2 && o(t2), h2 = !!s2 && o(s2);
            switch (this.dp.currentView) {
              case i.days:
                t2 && r2.month >= n2 && r2.year >= a2 && this._disableNav("prev"), s2 && h2.month <= n2 && h2.year <= a2 && this._disableNav("next");
                break;
              case i.months:
                t2 && r2.year >= a2 && this._disableNav("prev"), s2 && h2.year <= a2 && this._disableNav("next");
                break;
              case i.years: {
                let e3 = c(this.dp.viewDate);
                t2 && r2.year >= e3[0] && this._disableNav("prev"), s2 && h2.year <= e3[1] && this._disableNav("next");
                break;
              }
            }
          }
          _disableNav(e2) {
            a('[data-action="' + e2 + '"]', this.$el).classList.add("-disabled-");
          }
          _resetNavStatus() {
            !(function(e2) {
              for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++) i2[s2 - 1] = arguments[s2];
              e2.length ? e2.forEach(((e3) => {
                e3.classList.remove(...i2);
              })) : e2.classList.remove(...i2);
            })(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
          }
          _buildBaseHtml() {
            let { prevHtml: e2, nextHtml: t2 } = this.opts;
            this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e2}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t2}</div>`;
          }
          get isNavIsFunction() {
            let { navTitles: e2 } = this.opts;
            return Object.keys(e2).find(((t2) => "function" == typeof e2[t2]));
          }
        }
        var x = { today: { content: (e2) => e2.locale.today, onClick: (e2) => e2.setViewDate(/* @__PURE__ */ new Date()) }, clear: { content: (e2) => e2.locale.clear, onClick: (e2) => e2.clear() } };
        class H {
          constructor(e2) {
            let { dp: t2, opts: i2 } = e2;
            this.dp = t2, this.opts = i2, this.init();
          }
          init() {
            this.createElement(), this.render();
          }
          createElement() {
            this.$el = n({ className: "air-datepicker-buttons" });
          }
          destroy() {
            this.$el.parentNode.removeChild(this.$el);
          }
          clearHtml() {
            return this.$el.innerHTML = "", this;
          }
          generateButtons() {
            let { buttons: e2 } = this.opts;
            Array.isArray(e2) || (e2 = [e2]), e2.forEach(((e3) => {
              let t2 = e3;
              "string" == typeof e3 && x[e3] && (t2 = x[e3]);
              let i2 = this.createButton(t2);
              t2.onClick && this.attachEventToButton(i2, t2.onClick), this.$el.appendChild(i2);
            }));
          }
          attachEventToButton(e2, t2) {
            e2.addEventListener("click", (() => {
              t2(this.dp);
            }));
          }
          createButton(e2) {
            let { content: t2, className: i2, tagName: s2 = "button", attrs: a2 = {} } = e2;
            return n({ tagName: s2, innerHtml: `<span tabindex='-1'>${"function" == typeof t2 ? t2(this.dp) : t2}</span>`, className: u("air-datepicker-button", i2), attrs: a2 });
          }
          render() {
            this.generateButtons();
          }
        }
        function E(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        class L {
          constructor() {
            let { opts: e2, dp: t2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            E(this, "toggleTimepickerIsActive", ((e3) => {
              this.dp.timepickerIsActive = e3;
            })), E(this, "onChangeSelectedDate", ((e3) => {
              let { date: t3, updateTime: i2 = false } = e3;
              t3 && (this.setMinMaxTime(t3), this.setCurrentTime(!!i2 && t3), this.addTimeToDate(t3));
            })), E(this, "onChangeLastSelectedDate", ((e3) => {
              e3 && (this.setTime(e3), this.render());
            })), E(this, "onChangeInputRange", ((e3) => {
              let t3 = e3.target;
              this[t3.getAttribute("name")] = t3.value, this.updateText(), this.dp.trigger(i.eventChangeTime, { hours: this.hours, minutes: this.minutes });
            })), E(this, "onMouseEnterLeave", ((e3) => {
              let t3 = e3.target.getAttribute("name"), i2 = this.$minutesText;
              "hours" === t3 && (i2 = this.$hoursText), i2.classList.toggle("-focus-");
            })), E(this, "onFocus", (() => {
              this.toggleTimepickerIsActive(true);
            })), E(this, "onBlur", (() => {
              this.toggleTimepickerIsActive(false);
            })), this.opts = e2, this.dp = t2;
            let { timeFormat: s2 } = this.dp.locale;
            s2 && (s2.match($("h")) || s2.match($("hh"))) && (this.ampm = true), this.init();
          }
          init() {
            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
          }
          bindDatepickerEvents() {
            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
          }
          bindDOMEvents() {
            let e2 = "input";
            navigator.userAgent.match(/trident/gi) && (e2 = "change"), D(this.$ranges, e2, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
          }
          createElement() {
            this.$el = n({ className: u("air-datepicker-time", { "-am-pm-": this.dp.ampm }) });
          }
          destroy() {
            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
          }
          buildHtml() {
            let { ampm: e2, hours: t2, displayHours: i2, minutes: s2, minHours: a2, minMinutes: n2, maxHours: r2, maxMinutes: h2, dayPeriod: o2, opts: { hoursStep: l2, minutesStep: c2 } } = this;
            this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i2)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s2)}</span>   ` + (e2 ? `<span class='air-datepicker-time--current-ampm'>${o2}</span>` : "") + `</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">      <input type="range" name="hours" value="${t2}" min="${a2}" max="${r2}" step="${l2}"/>   </div>   <div class="air-datepicker-time--row">      <input type="range" name="minutes" value="${s2}" min="${n2}" max="${h2}" step="${c2}"/>   </div></div>`;
          }
          defineDOM() {
            let e2 = (e3) => a(e3, this.$el);
            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e2('[name="hours"]'), this.$minutes = e2('[name="minutes"]'), this.$hoursText = e2(".air-datepicker-time--current-hours"), this.$minutesText = e2(".air-datepicker-time--current-minutes"), this.$ampm = e2(".air-datepicker-time--current-ampm");
          }
          setTime(e2) {
            this.setMinMaxTime(e2), this.setCurrentTime(e2);
          }
          addTimeToDate(e2) {
            e2 && (e2.setHours(this.hours), e2.setMinutes(this.minutes));
          }
          setMinMaxTime(e2) {
            if (this.setMinMaxTimeFromOptions(), e2) {
              let { minDate: t2, maxDate: i2 } = this.dp;
              t2 && p(e2, t2) && this.setMinTimeFromMinDate(t2), i2 && p(e2, i2) && this.setMaxTimeFromMaxDate(i2);
            }
          }
          setCurrentTime(e2) {
            let { hours: t2, minutes: i2 } = e2 ? o(e2) : this;
            this.hours = f(t2, this.minHours, this.maxHours), this.minutes = f(i2, this.minMinutes, this.maxMinutes);
          }
          setMinMaxTimeFromOptions() {
            let { minHours: e2, minMinutes: t2, maxHours: i2, maxMinutes: s2 } = this.opts;
            this.minHours = f(e2, 0, 23), this.minMinutes = f(t2, 0, 59), this.maxHours = f(i2, 0, 23), this.maxMinutes = f(s2, 0, 59);
          }
          setMinTimeFromMinDate(e2) {
            let { lastSelectedDate: t2 } = this.dp;
            this.minHours = e2.getHours(), t2 && t2.getHours() > e2.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e2.getMinutes();
          }
          setMaxTimeFromMaxDate(e2) {
            let { lastSelectedDate: t2 } = this.dp;
            this.maxHours = e2.getHours(), t2 && t2.getHours() < e2.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e2.getMinutes();
          }
          updateSliders() {
            r(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours, r(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value = this.minutes;
          }
          updateText() {
            this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
          }
          set hours(e2) {
            this._hours = e2;
            let { hours: t2, dayPeriod: i2 } = l(e2);
            this.displayHours = this.ampm ? t2 : e2, this.dayPeriod = i2;
          }
          get hours() {
            return this._hours;
          }
          render() {
            this.updateSliders(), this.updateText();
          }
        }
        function A(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        class O {
          constructor(e2) {
            let { dp: t2, opts: i2 } = e2;
            A(this, "pressedKeys", /* @__PURE__ */ new Set()), A(this, "hotKeys", /* @__PURE__ */ new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], (e3) => e3.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], (e3) => e3.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], (e3) => e3.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], (e3) => e3.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], (e3) => e3.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], (e3) => e3.year -= 10], [["Control", "Shift", "ArrowUp"], (e3, t3) => t3.up()]])), A(this, "handleHotKey", ((e3) => {
              let t3 = this.hotKeys.get(e3), i3 = o(this.getInitialFocusDate());
              t3(i3, this.dp);
              let { year: s2, month: a2, date: n2 } = i3, r2 = h(new Date(s2, a2));
              r2 < n2 && (n2 = r2);
              let l2 = this.dp.getClampedDate(new Date(s2, a2, n2));
              this.dp.setFocusDate(l2, { viewDateTransition: true });
            })), A(this, "isHotKeyPressed", (() => {
              let e3 = false, t3 = this.pressedKeys.size, i3 = (e4) => this.pressedKeys.has(e4);
              for (let [s2] of this.hotKeys) {
                if (e3) break;
                if (Array.isArray(s2[0])) s2.forEach(((a2) => {
                  e3 || t3 !== a2.length || (e3 = a2.every(i3) && s2);
                }));
                else {
                  if (t3 !== s2.length) continue;
                  e3 = s2.every(i3) && s2;
                }
              }
              return e3;
            })), A(this, "isArrow", ((e3) => e3 >= 37 && e3 <= 40)), A(this, "onKeyDown", ((e3) => {
              if (!this.dp.visible && !this.dp.treatAsInline) return;
              let { key: t3, which: i3 } = e3, { dp: s2, dp: { focusDate: a2 }, opts: n2 } = this;
              this.registerKey(t3);
              let r2 = this.isHotKeyPressed();
              if (r2) return e3.preventDefault(), void this.handleHotKey(r2);
              if (this.isArrow(i3)) return e3.preventDefault(), void this.focusNextCell(t3);
              if ("Enter" === t3) {
                if (s2.currentView !== n2.minView) return void s2.down();
                if (a2) {
                  let e4 = s2._checkIfDateIsSelected(a2);
                  return void (e4 ? s2._handleAlreadySelectedDates(e4, a2) : s2.selectDate(a2));
                }
              }
              "Escape" === t3 && this.dp.hide();
            })), A(this, "onKeyUp", ((e3) => {
              this.removeKey(e3.key);
            })), this.dp = t2, this.opts = i2, this.init();
          }
          init() {
            this.bindKeyboardEvents();
          }
          bindKeyboardEvents() {
            let { $el: e2 } = this.dp;
            e2.addEventListener("keydown", this.onKeyDown), e2.addEventListener("keyup", this.onKeyUp);
          }
          destroy() {
            let { $el: e2 } = this.dp;
            e2.removeEventListener("keydown", this.onKeyDown), e2.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
          }
          getInitialFocusDate() {
            let { focusDate: e2, currentView: t2, selectedDates: s2, parsedViewDate: { year: a2, month: n2 } } = this.dp, r2 = e2 || s2[s2.length - 1];
            if (!r2) switch (t2) {
              case i.days:
                r2 = new Date(a2, n2, (/* @__PURE__ */ new Date()).getDate());
                break;
              case i.months:
                r2 = new Date(a2, n2, 1);
                break;
              case i.years:
                r2 = new Date(a2, 0, 1);
            }
            return r2;
          }
          focusNextCell(e2) {
            let t2 = this.getInitialFocusDate(), { currentView: s2 } = this.dp, { days: a2, months: n2, years: r2 } = i, h2 = o(t2), l2 = h2.year, d2 = h2.month, c2 = h2.date;
            switch (e2) {
              case "ArrowLeft":
                s2 === a2 && (c2 -= 1), s2 === n2 && (d2 -= 1), s2 === r2 && (l2 -= 1);
                break;
              case "ArrowUp":
                s2 === a2 && (c2 -= 7), s2 === n2 && (d2 -= 3), s2 === r2 && (l2 -= 4);
                break;
              case "ArrowRight":
                s2 === a2 && (c2 += 1), s2 === n2 && (d2 += 1), s2 === r2 && (l2 += 1);
                break;
              case "ArrowDown":
                s2 === a2 && (c2 += 7), s2 === n2 && (d2 += 3), s2 === r2 && (l2 += 4);
            }
            let u2 = this.dp.getClampedDate(new Date(l2, d2, c2));
            this.dp.setFocusDate(u2, { viewDateTransition: true });
          }
          registerKey(e2) {
            this.pressedKeys.add(e2);
          }
          removeKey(e2) {
            this.pressedKeys.delete(e2);
          }
        }
        let N = { on(e2, t2) {
          this.__events || (this.__events = {}), this.__events[e2] ? this.__events[e2].push(t2) : this.__events[e2] = [t2];
        }, off(e2, t2) {
          this.__events && this.__events[e2] && (this.__events[e2] = this.__events[e2].filter(((e3) => e3 !== t2)));
        }, removeAllEvents() {
          this.__events = {};
        }, trigger(e2) {
          for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++) i2[s2 - 1] = arguments[s2];
          this.__events && this.__events[e2] && this.__events[e2].forEach(((e3) => {
            e3(...i2);
          }));
        } };
        function I(e2, t2, i2) {
          return (t2 = (function(e3) {
            var t3 = (function(e4, t4) {
              if ("object" != typeof e4 || null === e4) return e4;
              var i3 = e4[Symbol.toPrimitive];
              if (void 0 !== i3) {
                var s2 = i3.call(e4, "string");
                if ("object" != typeof s2) return s2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            })(e3);
            return "symbol" == typeof t3 ? t3 : String(t3);
          })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        let P = "", j = "", B = false;
        class R {
          static buildGlobalContainer(e2) {
            B = true, P = n({ className: e2, id: e2 }), a("body").appendChild(P);
          }
          constructor(e2, t2) {
            var r2 = this;
            if (I(this, "viewIndexes", [i.days, i.months, i.years]), I(this, "next", (() => {
              let { year: e3, month: t3 } = this.parsedViewDate;
              switch (this.currentView) {
                case i.days:
                  this.setViewDate(new Date(e3, t3 + 1, 1));
                  break;
                case i.months:
                  this.setViewDate(new Date(e3 + 1, t3, 1));
                  break;
                case i.years:
                  this.setViewDate(new Date(e3 + 10, 0, 1));
              }
            })), I(this, "prev", (() => {
              let { year: e3, month: t3 } = this.parsedViewDate;
              switch (this.currentView) {
                case i.days:
                  this.setViewDate(new Date(e3, t3 - 1, 1));
                  break;
                case i.months:
                  this.setViewDate(new Date(e3 - 1, t3, 1));
                  break;
                case i.years:
                  this.setViewDate(new Date(e3 - 10, 0, 1));
              }
            })), I(this, "_finishHide", (() => {
              this.hideAnimation = false, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
            })), I(this, "setPosition", (function(e3) {
              let t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if ("function" == typeof (e3 = e3 || r2.opts.position)) return void (r2.customHide = e3({ $datepicker: r2.$datepicker, $target: r2.$el, $pointer: r2.$pointer, isViewChange: t3, done: r2._finishHide }));
              let i2, s2, { isMobile: a2 } = r2.opts, n2 = r2.$el.getBoundingClientRect(), h3 = r2.$el.getBoundingClientRect(), o2 = r2.$datepicker.offsetParent, l3 = r2.$el.offsetParent, d2 = r2.$datepicker.getBoundingClientRect(), c2 = e3.split(" "), u2 = window.scrollY, p2 = window.scrollX, m2 = r2.opts.offset, v2 = c2[0], g2 = c2[1];
              if (a2) r2.$datepicker.style.cssText = "left: 50%; top: 50%";
              else {
                if (o2 === l3 && o2 !== document.body && (h3 = { top: r2.$el.offsetTop, left: r2.$el.offsetLeft, width: n2.width, height: r2.$el.offsetHeight }, u2 = 0, p2 = 0), o2 !== l3 && o2 !== document.body) {
                  let e4 = o2.getBoundingClientRect();
                  h3 = { top: n2.top - e4.top, left: n2.left - e4.left, width: n2.width, height: n2.height }, u2 = 0, p2 = 0;
                }
                switch (v2) {
                  case "top":
                    i2 = h3.top - d2.height - m2;
                    break;
                  case "right":
                    s2 = h3.left + h3.width + m2;
                    break;
                  case "bottom":
                    i2 = h3.top + h3.height + m2;
                    break;
                  case "left":
                    s2 = h3.left - d2.width - m2;
                }
                switch (g2) {
                  case "top":
                    i2 = h3.top;
                    break;
                  case "right":
                    s2 = h3.left + h3.width - d2.width;
                    break;
                  case "bottom":
                    i2 = h3.top + h3.height - d2.height;
                    break;
                  case "left":
                    s2 = h3.left;
                    break;
                  case "center":
                    /left|right/.test(v2) ? i2 = h3.top + h3.height / 2 - d2.height / 2 : s2 = h3.left + h3.width / 2 - d2.width / 2;
                }
                r2.$datepicker.style.cssText = `left: ${s2 + p2}px; top: ${i2 + u2}px`;
              }
            })), I(this, "_setInputValue", (() => {
              let { opts: e3, $altField: t3, locale: { dateFormat: i2 } } = this, { altFieldDateFormat: s2, altField: a2 } = e3;
              a2 && t3 && (t3.value = this._getInputValue(s2)), this.$el.value = this._getInputValue(i2), this.$el.dispatchEvent(new Event("change"));
            })), I(this, "_getInputValue", ((e3) => {
              let { selectedDates: t3, opts: i2 } = this, { multipleDates: s2, multipleDatesSeparator: a2 } = i2;
              if (!t3.length) return "";
              let n2 = "function" == typeof e3, r3 = n2 ? e3(s2 ? t3 : t3[0]) : t3.map(((t4) => this.formatDate(t4, e3)));
              return r3 = n2 ? r3 : r3.join(a2), r3;
            })), I(this, "_checkIfDateIsSelected", (function(e3) {
              let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s2 = false;
              return r2.selectedDates.some(((i2) => {
                let a2 = p(e3, i2, t3);
                return s2 = a2 && i2, a2;
              })), s2;
            })), I(this, "_scheduleCallAfterTransition", ((e3) => {
              this._cancelScheduledCall(), e3 && e3(false), this._onTransitionEnd = () => {
                e3 && e3(true);
              }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, { once: true });
            })), I(this, "_cancelScheduledCall", (() => {
              this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
            })), I(this, "setViewDate", ((e3) => {
              if (!((e3 = b(e3)) instanceof Date)) return;
              if (p(e3, this.viewDate)) return;
              let t3 = this.viewDate;
              this.viewDate = e3;
              let { onChangeViewDate: s2 } = this.opts;
              if (s2) {
                let { month: e4, year: t4 } = this.parsedViewDate;
                s2({ month: e4, year: t4, decade: this.curDecade });
              }
              this.trigger(i.eventChangeViewDate, e3, t3);
            })), I(this, "setFocusDate", (function(e3) {
              let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (!e3 || (e3 = b(e3)) instanceof Date) && (r2.focusDate = e3, r2.trigger(i.eventChangeFocusDate, e3, t3));
            })), I(this, "setCurrentView", (function(e3) {
              let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (r2.viewIndexes.includes(e3)) {
                if (r2.currentView = e3, r2.elIsInput && r2.visible && r2.setPosition(void 0, true), r2.trigger(i.eventChangeCurrentView, e3), !r2.views[e3]) {
                  let t4 = r2.views[e3] = new T({ dp: r2, opts: r2.opts, type: e3 });
                  r2.shouldUpdateDOM && r2.$content.appendChild(t4.$el);
                }
                r2.opts.onChangeView && !t3.silent && r2.opts.onChangeView(e3);
              }
            })), I(this, "_updateLastSelectedDate", ((e3) => {
              this.lastSelectedDate = e3, this.trigger(i.eventChangeLastSelectedDate, e3);
            })), I(this, "destroy", (() => {
              if (this.isDestroyed) return;
              let { showEvent: e3, isMobile: t3 } = this.opts, i2 = this.$datepicker.parentNode;
              i2 && i2.removeChild(this.$datepicker), this.$el.removeEventListener(e3, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t3 && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = {}, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = [], this.rangeDateFrom = null, this.rangeDateTo = null, this.isDestroyed = true;
            })), I(this, "update", (function() {
              let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = w({}, r2.opts), { silent: a2 } = t3;
              w(r2.opts, e3);
              let { timepicker: n2, buttons: h3, range: o2, selectedDates: l3, isMobile: d2 } = r2.opts, c2 = r2.visible || r2.treatAsInline;
              r2._createMinMaxDates(), r2._limitViewDateByMaxMinDates(), r2._handleLocale(), l3 && (r2.selectedDates = [], r2.selectDate(l3, { silent: a2 })), e3.view && r2.setCurrentView(e3.view, { silent: a2 }), r2._setInputValue(), s2.range && !o2 ? (r2.rangeDateTo = false, r2.rangeDateFrom = false) : !s2.range && o2 && r2.selectedDates.length && (r2.rangeDateFrom = r2.selectedDates[0], r2.rangeDateTo = r2.selectedDates[1]), s2.timepicker && !n2 ? (c2 && r2.timepicker.destroy(), r2.timepicker = false, r2.$timepicker.parentNode.removeChild(r2.$timepicker)) : !s2.timepicker && n2 && r2._addTimepicker(), !s2.buttons && h3 ? r2._addButtons() : s2.buttons && !h3 ? (r2.buttons.destroy(), r2.$buttons.parentNode.removeChild(r2.$buttons)) : c2 && s2.buttons && h3 && r2.buttons.clearHtml().render(), !s2.isMobile && d2 ? (r2.treatAsInline || j || r2._createMobileOverlay(), r2._addMobileAttributes(), r2.visible && r2._showMobileOverlay()) : s2.isMobile && !d2 && (r2._removeMobileAttributes(), r2.visible && (j.classList.remove("-active-"), "function" != typeof r2.opts.position && r2.setPosition())), c2 && (r2.nav.update(), r2.views[r2.currentView].render(), r2.currentView === i.days && r2.views[r2.currentView].renderDayNames());
            })), I(this, "disableDate", ((e3, t3) => {
              (Array.isArray(e3) ? e3 : [e3]).forEach(((e4) => {
                let i2 = b(e4);
                if (!i2) return;
                let s2 = t3 ? "delete" : "add";
                this.disabledDates[s2](this.formatDate(i2, "yyyy-MM-dd"));
                let a2 = this.getCell(i2, this.currentViewSingular);
                a2 && a2.adpCell.render();
              }), []);
            })), I(this, "enableDate", ((e3) => {
              this.disableDate(e3, true);
            })), I(this, "isDateDisabled", ((e3) => {
              let t3 = b(e3);
              return this.disabledDates.has(this.formatDate(t3, "yyyy-MM-dd"));
            })), I(this, "isOtherMonth", ((e3) => {
              let { month: t3 } = o(e3);
              return t3 !== this.parsedViewDate.month;
            })), I(this, "isOtherYear", ((e3) => {
              let { year: t3 } = o(e3);
              return t3 !== this.parsedViewDate.year;
            })), I(this, "isOtherDecade", ((e3) => {
              let { year: t3 } = o(e3), [i2, s2] = c(this.viewDate);
              return t3 < i2 || t3 > s2;
            })), I(this, "_onChangeSelectedDate", ((e3) => {
              let { silent: t3 } = e3;
              setTimeout((() => {
                this._setInputValue(), this.opts.onSelect && !t3 && this._triggerOnSelect();
              }));
            })), I(this, "_onChangeFocusedDate", (function(e3) {
              let { viewDateTransition: t3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!e3) return;
              let i2 = false;
              t3 && (i2 = r2.isOtherMonth(e3) || r2.isOtherYear(e3) || r2.isOtherDecade(e3)), i2 && r2.setViewDate(e3), r2.opts.onFocus && r2.opts.onFocus({ datepicker: r2, date: e3 });
            })), I(this, "_onChangeTime", ((e3) => {
              let { hours: t3, minutes: i2 } = e3, s2 = /* @__PURE__ */ new Date(), { lastSelectedDate: a2, opts: { onSelect: n2 } } = this, r3 = a2;
              a2 || (r3 = s2);
              let h3 = this.getCell(r3, this.currentViewSingular), o2 = h3 && h3.adpCell;
              o2 && o2.isDisabled || (r3.setHours(t3), r3.setMinutes(i2), a2 ? (this._setInputValue(), n2 && this._triggerOnSelect()) : this.selectDate(r3));
            })), I(this, "_onFocus", ((e3) => {
              this.visible || this.show();
            })), I(this, "_onBlur", ((e3) => {
              this.inFocus || !this.visible || this.opts.isMobile || this.hide();
            })), I(this, "_onMouseDown", ((e3) => {
              this.inFocus = true;
            })), I(this, "_onMouseUp", ((e3) => {
              this.inFocus = false, this.$el.focus();
            })), I(this, "_onResize", (() => {
              this.visible && "function" != typeof this.opts.position && this.setPosition();
            })), I(this, "_onClickOverlay", (() => {
              this.visible && this.hide();
            })), I(this, "getViewDates", (function() {
              let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
              return T.getDatesFunction(e3)(r2);
            })), I(this, "isWeekend", ((e3) => this.opts.weekends.includes(e3))), I(this, "getClampedDate", ((e3) => {
              let { minDate: t3, maxDate: i2 } = this, s2 = e3;
              return i2 && m(e3, i2) ? s2 = i2 : t3 && v(e3, t3) && (s2 = t3), s2;
            })), this.$el = a(e2), !this.$el) return;
            this.$datepicker = n({ className: "air-datepicker" }), this.opts = w({}, s, t2), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || false);
            let { view: h2, startDate: l2 } = this.opts;
            l2 || (this.opts.startDate = /* @__PURE__ */ new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = true), this.inited = false, this.visible = false, this.viewDate = b(this.opts.startDate), this.focusDate = false, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = false, this.currentView = h2, this.selectedDates = [], this.disabledDates = /* @__PURE__ */ new Set(), this.isDestroyed = false, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = false, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
          }
          init() {
            let { opts: e2, treatAsInline: t2, opts: { inline: i2, isMobile: s2, selectedDates: n2, keyboardNav: r2, onlyTimepicker: h2 } } = this, o2 = a("body");
            (!B || B && P && !o2.contains(P)) && !i2 && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s2 || j || t2 || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i2 || this._bindEvents(), r2 && !h2 && (this.keyboardNav = new O({ dp: this, opts: e2 }))), n2 && this.selectDate(n2, { silent: true }), this.opts.visible && !t2 && this.show(), s2 && !t2 && this.$el.setAttribute("readonly", true), t2 && this._createComponents();
          }
          _createMobileOverlay() {
            j = n({ className: "air-datepicker-overlay" }), P.appendChild(j);
          }
          _createComponents() {
            let { opts: e2, treatAsInline: t2, opts: { inline: i2, buttons: s2, timepicker: a2, position: n2, classes: r2, onlyTimepicker: h2, isMobile: o2 } } = this;
            this._buildBaseHtml(), this.elIsInput && (i2 || this._setPositionClasses(n2)), !i2 && this.elIsInput || this.$datepicker.classList.add("-inline-"), r2 && this.$datepicker.classList.add(...r2.split(" ")), h2 && this.$datepicker.classList.add("-only-timepicker-"), o2 && !t2 && this._addMobileAttributes(), this.views[this.currentView] = new T({ dp: this, type: this.currentView, opts: e2 }), this.nav = new V({ dp: this, opts: e2 }), a2 && this._addTimepicker(), s2 && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
          }
          _destroyComponents() {
            for (let e2 in this.views) this.views[e2].destroy();
            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
          }
          _addMobileAttributes() {
            j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", true);
          }
          _removeMobileAttributes() {
            j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
          }
          _createMinMaxDates() {
            let { minDate: e2, maxDate: t2 } = this.opts;
            this.minDate = !!e2 && b(e2), this.maxDate = !!t2 && b(t2);
          }
          _addTimepicker() {
            this.$timepicker = n({ className: "air-datepicker--time" }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({ dp: this, opts: this.opts }), this.$timepicker.appendChild(this.timepicker.$el);
          }
          _addButtons() {
            this.$buttons = n({ className: "air-datepicker--buttons" }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({ dp: this, opts: this.opts }), this.$buttons.appendChild(this.buttons.$el);
          }
          _bindSubEvents() {
            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
          }
          _buildBaseHtml() {
            let { inline: e2 } = this.opts;
            var t2, i2;
            this.elIsInput ? e2 ? (t2 = this.$datepicker, (i2 = this.$el).parentNode.insertBefore(t2, i2.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
          }
          _handleLocale() {
            let { locale: e2, dateFormat: t2, firstDay: i2, timepicker: s2, onlyTimepicker: a2, timeFormat: n2, dateTimeSeparator: r2 } = this.opts;
            var h2;
            this.locale = (h2 = e2, JSON.parse(JSON.stringify(h2))), t2 && (this.locale.dateFormat = t2), void 0 !== n2 && "" !== n2 && (this.locale.timeFormat = n2);
            let { timeFormat: o2 } = this.locale;
            if ("" !== i2 && (this.locale.firstDay = i2), s2 && "function" != typeof t2) {
              let e3 = o2 ? r2 : "";
              this.locale.dateFormat = [this.locale.dateFormat, o2 || ""].join(e3);
            }
            a2 && "function" != typeof t2 && (this.locale.dateFormat = this.locale.timeFormat);
          }
          _setPositionClasses(e2) {
            if ("function" == typeof e2) return void this.$datepicker.classList.add("-custom-position-");
            let t2 = (e2 = e2.split(" "))[0], i2 = `air-datepicker -${t2}-${e2[1]}- -from-${t2}-`;
            this.$datepicker.classList.add(...i2.split(" "));
          }
          _bindEvents() {
            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
          }
          _limitViewDateByMaxMinDates() {
            let { viewDate: e2, minDate: t2, maxDate: i2 } = this;
            i2 && m(e2, i2) && this.setViewDate(i2), t2 && v(e2, t2) && this.setViewDate(t2);
          }
          formatDate() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t2 = arguments.length > 1 ? arguments[1] : void 0;
            if (e2 = b(e2), !(e2 instanceof Date)) return;
            let i2 = t2, s2 = this.locale, a2 = o(e2), n2 = a2.dayPeriod, r2 = c(e2), h2 = R.replacer, l2 = { T: e2.getTime(), m: a2.minutes, mm: a2.fullMinutes, h: a2.hours12, hh: a2.fullHours12, H: a2.hours, HH: a2.fullHours, aa: n2, AA: n2.toUpperCase(), E: s2.daysShort[a2.day], EEEE: s2.days[a2.day], d: a2.date, dd: a2.fullDate, M: a2.month + 1, MM: a2.fullMonth, MMM: s2.monthsShort[a2.month], MMMM: s2.months[a2.month], yy: a2.year.toString().slice(-2), yyyy: a2.year, yyyy1: r2[0], yyyy2: r2[1] };
            for (let [e3, t3] of Object.entries(l2)) i2 = h2(i2, $(e3), t3);
            return i2;
          }
          down(e2) {
            this._handleUpDownActions(e2, "down");
          }
          up(e2) {
            this._handleUpDownActions(e2, "up");
          }
          selectDate(e2) {
            let t2, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a2, parsedViewDate: n2, selectedDates: r2 } = this, { updateTime: h2, silent: o2 } = s2, { moveToOtherMonthsOnSelect: l2, moveToOtherYearsOnSelect: d2, multipleDates: c2, range: u2, autoClose: p2, onBeforeSelect: v2 } = this.opts, g2 = r2.length;
            if (Array.isArray(e2)) return e2.forEach(((e3) => {
              this.selectDate(e3, s2);
            })), new Promise(((e3) => {
              setTimeout(e3);
            }));
            if ((e2 = b(e2)) instanceof Date) {
              if (v2 && !o2 && !v2({ date: e2, datepicker: this })) return Promise.resolve();
              if (a2 === i.days && e2.getMonth() !== n2.month && l2 && (t2 = new Date(e2.getFullYear(), e2.getMonth(), 1)), a2 === i.years && e2.getFullYear() !== n2.year && d2 && (t2 = new Date(e2.getFullYear(), 0, 1)), t2 && this.setViewDate(t2), c2 && !u2) {
                if (g2 === c2) return;
                this._checkIfDateIsSelected(e2) || r2.push(e2);
              } else if (u2) switch (g2) {
                case 1:
                  r2.push(e2), this.rangeDateTo || (this.rangeDateTo = e2), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e2), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                  break;
                case 2:
                  this.selectedDates = [e2], this.rangeDateFrom = e2, this.rangeDateTo = "";
                  break;
                default:
                  this.selectedDates = [e2], this.rangeDateFrom = e2;
              }
              else this.selectedDates = [e2];
              return this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, silent: null == s2 ? void 0 : s2.silent, date: e2, updateTime: h2 }), this._updateLastSelectedDate(e2), p2 && !this.timepickerIsActive && this.visible && (c2 || u2 ? u2 && 1 === g2 && this.hide() : this.hide()), new Promise(((e3) => {
                setTimeout(e3);
              }));
            }
          }
          unselectDate(e2) {
            let t2 = this.selectedDates, s2 = this;
            if ((e2 = b(e2)) instanceof Date) return t2.some(((a2, n2) => {
              if (p(a2, e2)) return t2.splice(n2, 1), s2.selectedDates.length ? (s2.rangeDateTo = "", s2.rangeDateFrom = t2[0], s2._updateLastSelectedDate(s2.selectedDates[s2.selectedDates.length - 1])) : (s2.rangeDateFrom = "", s2.rangeDateTo = "", s2._updateLastSelectedDate(false)), this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, date: e2 }), true;
            }));
          }
          replaceDate(e2, t2) {
            let s2 = this.selectedDates.find(((t3) => p(t3, e2, this.currentView))), a2 = this.selectedDates.indexOf(s2);
            a2 < 0 || p(this.selectedDates[a2], t2, this.currentView) || (this.selectedDates[a2] = t2, this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, date: t2, updateTime: true }), this._updateLastSelectedDate(t2));
          }
          clear() {
            let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.selectedDates = [], this.rangeDateFrom = false, this.rangeDateTo = false, this.lastSelectedDate = false, this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, silent: e2.silent }), new Promise(((e3) => {
              setTimeout(e3);
            }));
          }
          show() {
            let { onShow: e2, isMobile: t2 } = this.opts;
            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = true, e2 && this._scheduleCallAfterTransition(e2), t2 && this._showMobileOverlay();
          }
          hide() {
            let { onHide: e2, isMobile: t2 } = this.opts, i2 = this._hasTransition();
            this.visible = false, this.hideAnimation = true, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition(((t3) => {
              !this.customHide && (t3 && i2 || !t3 && !i2) && this._finishHide(), e2 && e2(t3);
            })), t2 && j.classList.remove("-active-");
          }
          _triggerOnSelect() {
            let e2 = [], t2 = [], { selectedDates: i2, locale: s2, opts: { onSelect: a2, multipleDates: n2, range: r2 } } = this, h2 = n2 || r2, o2 = "function" == typeof s2.dateFormat;
            i2.length && (e2 = i2.map(g), t2 = o2 ? n2 ? s2.dateFormat(e2) : e2.map(((e3) => s2.dateFormat(e3))) : e2.map(((e3) => this.formatDate(e3, s2.dateFormat)))), a2({ date: h2 ? e2 : e2[0], formattedDate: h2 ? t2 : t2[0], datepicker: this });
          }
          _handleAlreadySelectedDates(e2, t2) {
            let { selectedDates: i2, rangeDateFrom: s2, rangeDateTo: a2 } = this, { range: n2, toggleSelected: r2 } = this.opts, h2 = i2.length, o2 = "function" == typeof r2 ? r2({ datepicker: this, date: t2 }) : r2, l2 = Boolean(n2 && 1 === h2 && e2), d2 = l2 ? g(t2) : t2;
            n2 && !o2 && (2 !== h2 && this.selectDate(d2), 2 === h2 && p(s2, a2)) || (o2 ? this.unselectDate(d2) : this._updateLastSelectedDate(l2 ? d2 : e2));
          }
          _handleUpDownActions(e2, t2) {
            if (!((e2 = b(e2 || this.focusDate || this.viewDate)) instanceof Date)) return;
            let i2 = "up" === t2 ? this.viewIndex + 1 : this.viewIndex - 1;
            i2 > 2 && (i2 = 2), i2 < 0 && (i2 = 0), this.setViewDate(new Date(e2.getFullYear(), e2.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i2]);
          }
          getCell(e2) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
            if (!((e2 = b(e2)) instanceof Date)) return;
            let { year: s2, month: a2, date: n2 } = o(e2), r2 = `[data-year="${s2}"]`, h2 = `[data-month="${a2}"]`, l2 = { [i.day]: `${r2}${h2}[data-date="${n2}"]`, [i.month]: `${r2}${h2}`, [i.year]: `${r2}` };
            return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l2[t2]) : void 0;
          }
          _showMobileOverlay() {
            j.classList.add("-active-");
          }
          _hasTransition() {
            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e2, t2) => parseFloat(t2) + e2), 0) > 0;
          }
          get shouldUpdateDOM() {
            return this.visible || this.treatAsInline;
          }
          get parsedViewDate() {
            return o(this.viewDate);
          }
          get currentViewSingular() {
            return this.currentView.slice(0, -1);
          }
          get curDecade() {
            return c(this.viewDate);
          }
          get viewIndex() {
            return this.viewIndexes.indexOf(this.currentView);
          }
          get isFinalView() {
            return this.currentView === i.years;
          }
          get hasSelectedDates() {
            return this.selectedDates.length > 0;
          }
          get isMinViewReached() {
            return this.currentView === this.opts.minView || this.currentView === i.days;
          }
          get $container() {
            return this.$customContainer || P;
          }
          static replacer(e2, t2, i2) {
            return e2.replace(t2, (function(e3, t3, s2, a2) {
              return t3 + i2 + a2;
            }));
          }
        }
        var K;
        return I(R, "defaults", s), I(R, "version", "3.6.0"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
      })();
    }));
  })(airDatepicker$1);
  return airDatepicker$1.exports;
}
var airDatepickerExports = requireAirDatepicker();
const AirDatepicker = /* @__PURE__ */ getDefaultExportFromCjs(airDatepickerExports);
const _hoisted_1$5 = { class: "field" };
const _hoisted_2$4 = {
  key: 0,
  class: "field__title field-title"
};
const _hoisted_3$4 = { class: "field__date" };
const _hoisted_4$4 = { class: "field__date-inputs" };
const _hoisted_5$4 = {
  key: 1,
  class: "field__error field-error"
};
const _sfc_main$5 = {
  __name: "FieldDate",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const pickerInput = ref(null);
    const dateDay = ref(null);
    const dateMonth = ref(null);
    const dateYear = ref(null);
    const datepicker = ref(void 0);
    const { errorMessage, handleChange } = useField(props.name, props.rules, {
      initialValue: props.initialValue
    });
    const OPTIONS = {
      autoClose: true,
      minDate: /* @__PURE__ */ new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function({ date }) {
        dateDay.value = date ? ("0" + date.getDate()).slice(-2) : "";
        dateMonth.value = date ? ("0" + (date.getMonth() + 1)).slice(-2) : "";
        dateYear.value = date ? date.getFullYear() : "";
        handleChange(date ? date.toISOString() : void 0);
      }
    };
    onMounted(() => {
      if (pickerInput.value)
        datepicker.value = new AirDatepicker(pickerInput.value, OPTIONS);
    });
    onBeforeUnmount(() => {
      if (datepicker.value) {
        datepicker.value.destroy();
        datepicker.value = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        __props.label ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$4, [
          createBaseVNode("div", _hoisted_4$4, [
            withDirectives(createBaseVNode("input", {
              class: "field__date-input",
              type: "text",
              placeholder: "ДД",
              readonly: "",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dateDay) ? dateDay.value = $event : null)
            }, null, 512), [
              [vModelText, unref(dateDay)]
            ]),
            withDirectives(createBaseVNode("input", {
              class: "field__date-input",
              type: "text",
              placeholder: "ММ",
              readonly: "",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(dateMonth) ? dateMonth.value = $event : null)
            }, null, 512), [
              [vModelText, unref(dateMonth)]
            ]),
            withDirectives(createBaseVNode("input", {
              class: "field__date-input field__date-input--year",
              type: "text",
              placeholder: "ГГГГ",
              readonly: "",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(dateYear) ? dateYear.value = $event : null)
            }, null, 512), [
              [vModelText, unref(dateYear)]
            ])
          ]),
          createBaseVNode("input", {
            class: "field__date-picker",
            type: "text",
            readonly: "",
            required: "",
            ref_key: "pickerInput",
            ref: pickerInput
          }, null, 512)
        ]),
        unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_5$4, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "field" };
const _hoisted_2$3 = { class: "field__input-label" };
const _hoisted_3$3 = {
  key: 0,
  class: "field__title field__label"
};
const _hoisted_4$3 = ["type", "placeholder"];
const _hoisted_5$3 = {
  key: 1,
  class: "field__error field-error"
};
const _sfc_main$4 = {
  __name: "FieldInput",
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    mask: {
      type: [Object, String],
      default: ""
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { errorMessage, value } = useField(props.name, props.rules, {
      initialValue: props.initialValue
    });
    return (_ctx, _cache) => {
      const _directive_maska = resolveDirective("maska");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("label", _hoisted_2$3, [
          __props.label ? (openBlock(), createElementBlock("span", _hoisted_3$3, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            type: __props.type,
            placeholder: __props.placeholder,
            class: "field__input"
          }, null, 8, _hoisted_4$3), [
            [vModelDynamic, unref(value)],
            [_directive_maska, __props.mask]
          ]),
          unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "field" };
const _hoisted_2$2 = { class: "field__input-label" };
const _hoisted_3$2 = {
  key: 0,
  class: "field__title field-title"
};
const _hoisted_4$2 = ["placeholder"];
const _hoisted_5$2 = {
  key: 1,
  class: "field__error field-error"
};
const _sfc_main$3 = {
  __name: "FieldText",
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { errorMessage, value } = useField(props.name, props.rules, {
      initialValue: props.initialValue
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("label", _hoisted_2$2, [
          __props.label ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(__props.label), 1)) : createCommentVNode("", true),
          withDirectives(createBaseVNode("textarea", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            placeholder: __props.placeholder,
            class: "field__textarea"
          }, null, 8, _hoisted_4$2), [
            [vModelText, unref(value)]
          ]),
          unref(errorMessage) && __props.submitCount ? (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "events-form__list" };
const _hoisted_2$1 = { class: "events-form__group events-form__group--w50" };
const _hoisted_3$1 = { class: "events-form__group events-form__group--w50" };
const _hoisted_4$1 = { class: "events-form__section>" };
const _hoisted_5$1 = { class: "events-form__list" };
const _sfc_main$2 = {
  __name: "EventsForm",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { submitCount, handleSubmit } = useForm();
    const emits = __emit;
    const close = () => {
      emits("close");
    };
    const onSubmit = handleSubmit((submitValues) => {
      console.log(submitValues);
      alert("Отправлено");
      close();
    });
    return (_ctx, _cache) => {
      const _component_FieldRadio = _sfc_main$7;
      const _component_FieldSelect = _sfc_main$6;
      const _component_FieldDate = _sfc_main$5;
      const _component_FieldInput = _sfc_main$4;
      const _component_FieldText = _sfc_main$3;
      const _component_FieldCheck = _sfc_main$b;
      return openBlock(), createElementBlock("form", {
        class: "events-form",
        onSubmit: _cache[0] || (_cache[0] = (...args) => unref(onSubmit) && unref(onSubmit)(...args))
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_component_FieldRadio, {
              name: "format",
              initialValue: "seminar",
              options: [
                {
                  label: "Мастер-класс/семинар",
                  value: "seminar"
                },
                {
                  label: "Концерт/выступление",
                  value: "concert"
                },
                {
                  label: "Выставка/показ",
                  value: "show"
                },
                {
                  label: "Другое",
                  value: "other"
                }
              ],
              rules: { required: true },
              submitCount: unref(submitCount),
              label: "Формат мероприятия",
              class: "events-form__field"
            }, null, 8, ["submitCount"])
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(_component_FieldSelect, {
              name: "amount",
              options: [
                {
                  label: "до 20 человек",
                  value: "20"
                },
                {
                  label: "от 20 до 100 человек",
                  value: "100"
                },
                {
                  label: "от 100 до 500 человек",
                  value: "500"
                },
                {
                  label: "более 500 человек",
                  value: "1000"
                }
              ],
              rules: { required: true },
              searchable: "",
              submitCount: unref(submitCount),
              label: "Планируемое количество посетителей:",
              placeholder: "Выберите количество",
              class: "events-form__field"
            }, null, 8, ["submitCount"]),
            createVNode(_component_FieldDate, {
              name: "date",
              label: "Дата проведения:",
              class: "events-form__field",
              rules: { required: true },
              submitCount: unref(submitCount)
            }, null, 8, ["submitCount"])
          ])
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          _cache[1] || (_cache[1] = createBaseVNode("h6", { class: "events-form__section-title filed-title" }, "Контактные данные:", -1)),
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_FieldInput, {
              name: "first_name",
              label: "Имя",
              placeholder: "Имя",
              class: "events-form__field events-form__field--w50",
              rules: {
                required: true
              },
              submitCount: unref(submitCount)
            }, null, 8, ["submitCount"]),
            createVNode(_component_FieldInput, {
              name: "last_name",
              label: "Фамилия",
              placeholder: "Фамилия",
              class: "events-form__field events-form__field--w50",
              rules: {
                required: true
              },
              submitCount: unref(submitCount)
            }, null, 8, ["submitCount"]),
            createVNode(_component_FieldInput, {
              name: "phone",
              label: "Телефон",
              placeholder: "+7 (###) ###-##-##",
              mask: "+7 (###) ###-##-##",
              class: "events-form__field events-form__field--w50",
              rules: {
                required: true,
                phone: true
              },
              submitCount: unref(submitCount)
            }, null, 8, ["submitCount"]),
            createVNode(_component_FieldInput, {
              name: "email",
              type: "email",
              label: "E-mail",
              placeholder: "E-mail",
              class: "events-form__field events-form__field--w50",
              rules: {
                required: true,
                email: true
              },
              submitCount: unref(submitCount)
            }, null, 8, ["submitCount"])
          ])
        ]),
        createVNode(_component_FieldText, {
          name: "text",
          label: "Есть пожелания? Напишите нам:",
          submitCount: unref(submitCount),
          class: "events-form__field"
        }, null, 8, ["submitCount"]),
        createVNode(_component_FieldCheck, {
          name: "agreement",
          rules: {
            required: true
          },
          submitCount: unref(submitCount),
          label: `Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`,
          smallLabel: "",
          class: "events-form__field"
        }, null, 8, ["submitCount"]),
        createBaseVNode("div", { class: "events-form__btns" }, [
          _cache[2] || (_cache[2] = createBaseVNode("button", {
            type: "submit",
            class: "btn events-form__submit"
          }, "Отправить", -1)),
          createBaseVNode("button", {
            type: "button",
            class: "events-form__close-btn",
            onClick: close
          }, " Закрыть ")
        ])
      ], 32);
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "modal-window"
};
const _hoisted_2 = { class: "modal-window__wrapper" };
const _hoisted_3 = { class: "modal-window__sticky-close" };
const _hoisted_4 = { class: "modal-window__container" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "modal-window__scrollable" };
const _hoisted_7 = { class: "modal-window__content" };
const _sfc_main$1 = {
  __name: "ModalWindow",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    alive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const isActive = computed(() => {
      return props.name ? store.modal[props.name] : null;
    });
    const close = () => {
      if (props.name) store.closeModal(props.name);
    };
    const onEsc = (event) => {
      if (event.key === "Escape" || event.keyCode === 27) close();
    };
    const blockScroll = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    };
    const unblockScroll = () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
    watch(() => isActive.value, (newValue) => {
      if (newValue) {
        blockScroll();
      } else {
        unblockScroll();
      }
    });
    if (isActive.value) {
      blockScroll();
    }
    onBeforeUnmount(() => {
      unblockScroll();
    });
    return (_ctx, _cache) => {
      const _component_SvgIcon = _sfc_main$a;
      const _component_ClientOnly = __nuxt_component_1;
      const _directive_keyup = resolveDirective("keyup");
      return openBlock(), createBlock(_component_ClientOnly, null, {
        default: withCtx(() => [
          (openBlock(), createBlock(Teleport, { to: "body" }, [
            createVNode(Transition, null, {
              default: withCtx(() => [
                isActive.value || __props.alive ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("button", {
                        type: "button",
                        title: "Закрыть",
                        class: "modal-window__x-btn x-btn",
                        onClick: close
                      }, [
                        createVNode(_component_SvgIcon, {
                          class: "x-btn__icon",
                          name: "x",
                          width: "24",
                          height: "24"
                        })
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("h2", {
                        class: "modal-window__title",
                        innerHTML: __props.title
                      }, null, 8, _hoisted_5),
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ])
                  ])
                ])), [
                  [vShow, isActive.value],
                  [_directive_keyup, onEsc]
                ]) : createCommentVNode("", true)
              ]),
              _: 3
            })
          ]))
        ]),
        _: 3
      });
    };
  }
};
const _hoisted_1 = { class: "app-offers" };
const _sfc_main = {
  __name: "AppOffers",
  setup(__props) {
    const store = useStore();
    const openPopup = () => {
      store.openModal("getOffer");
    };
    const closePopup = () => {
      store.closeModal("getOffer");
    };
    return (_ctx, _cache) => {
      const _component_EventsForm = _sfc_main$2;
      const _component_ModalWindow = _sfc_main$1;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "app-offers__title" }, "Я хочу:", -1)),
        createBaseVNode("div", { class: "app-offers__btns" }, [
          createBaseVNode("button", {
            type: "button",
            class: "app-offers__btn btn btn--red",
            onClick: openPopup
          }, " Провести мероприятие "),
          _cache[0] || (_cache[0] = createBaseVNode("button", {
            type: "button",
            class: "app-offers__btn btn"
          }, " Стать арендатором ", -1))
        ]),
        createVNode(_component_ModalWindow, {
          alive: "",
          name: "getOffer",
          title: "Заполните форму<br />и мы подберем площадку"
        }, {
          default: withCtx(() => [
            createVNode(_component_EventsForm, { onClose: closePopup })
          ]),
          _: 1
        })
      ]);
    };
  }
};
export {
  _sfc_main$8 as _,
  _sfc_main$9 as a,
  _sfc_main as b
};
//# sourceMappingURL=iNiJ8d-C.js.map
