<script>
export default {
  name: "Selectable",
  functional: true,
  props: {
    selected: {
      type: Boolean,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    defaultBorderShade: {
      type: Number,
      default: 200
    }
  },
  render(createElement, { props, slots, data, listeners }) {
    return createElement(
      props.tag,
      {
        class: {
          "border-2 border-gray-700 outline-gray-700": props.selected,
          [`border border-gray-${props.defaultBorderColor} hover:border-gray-400`]: !props.selected,
          "rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:shadow-outline-gray": true,
          [data.staticClass || ""]: true
        },
        attrs: {
          tabindex: 0,
          ...data.attrs
        },
        on: { ...listeners }
      },
      slots().default
    );
  }
};
</script>

<style></style>
