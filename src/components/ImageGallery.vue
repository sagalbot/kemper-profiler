<template>
  <div>
    <img
      :src="currentImage.src"
      :alt="currentImage.alt"
      class="mb-4"
      :class="imageCardClass"
    />
    <nav class="flex flex-row justify-between">
      <button
        v-for="({ src, alt }, key, index) in images"
        :key="key"
        :tabindex="index + 1"
        @click="currentImageKey = key"
        @focus="currentImageKey = key"
        class="max-h-12 sm:max-h-24 mx-2 first:ml-0 last:mr-0 transition-colors duration-150"
        :class="{
          [imageCardClass]: true,
          'border-2 border-gray-700': currentImageKey === key
        }"
      >
        <CoveredImage :src="src" :alt="alt" />
      </button>
    </nav>
  </div>
</template>

<script>
import CoveredImage from "@/components/CoveredImage.vue";
export default {
  name: "ImageGallery",
  components: { CoveredImage },
  data: () => ({
    currentImageKey: "front"
  }),
  computed: {
    imageCardClass: () =>
      "focus:outline-none focus:shadow-outline-gray px-3 border border-gray-200 hover:border-gray-400 rounded-lg shadow-sm",
    images: () => ({
      front: {
        src: "/img/kemper-front.jpg",
        alt:
          "Kemper Profiling amplifier viewed from the front, displaying the unit controls."
      },
      angle: {
        src: "/img/kemper-angle.jpg",
        alt:
          "Kemper Profiling amplifier viewed from an angle, displaying the unit controls, handle, and shape."
      },
      rear: {
        src: "/img/kemper-rear.jpg",
        alt:
          "Kemper Profiling amplifier viewed from an rear, displaying the unit connection inputs and outputs."
      }
    }),
    imageKeys() {
      return Object.keys(this.images);
    },
    currentImage() {
      return this.images[this.currentImageKey];
    }
  }
};
</script>
