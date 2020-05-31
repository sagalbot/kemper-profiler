<template functional>
  <img
    :src="props.src"
    :alt="props.alt"
    :class="`object-cover h-full w-full ${data.staticClass || ''}`"
    v-on="listeners"
    v-bind="data.attrs"
  />
</template>

<script>
export default {
  name: "CoveredImage",
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  }
};
</script>
