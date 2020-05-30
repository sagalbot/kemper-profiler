<template functional>
  <img
    :src="props.src"
    :alt="props.alt"
    :title="props.alt"
    class="border border-gray-200 rounded-lg"
  />
</template>

<script>
export default {
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
