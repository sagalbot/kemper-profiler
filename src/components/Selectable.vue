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
    }
  },
  render(createElement, { props, slots, data, listeners }) {
    const staticClasses = data.staticClass || "";
    const defaultClasses = `double-border-hack border relative rounded-lg transition-colors duration-150 focus:outline-none ${staticClasses}`;

    return createElement(
      props.tag,
      {
        class: {
          "double-border-hack-selected border-transparent": props.selected,
          "border-gray-200 hover:border-gray-400": !props.selected,
          [defaultClasses]: true
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

<style>
.double-border-hack:focus::after {
  @apply shadow-outline-gray;
}
.double-border-hack::after {
  @apply block absolute w-full h-full top-0 left-0 rounded-lg shadow-sm pointer-events-none transition-colors duration-150;
  content: " ";
}
.double-border-hack-selected::after {
  @apply border-2 border-gray-700;
}
</style>
