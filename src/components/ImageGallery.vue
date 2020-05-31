<template>
  <div>
    <img
      :src="currentImage.src"
      :alt="currentImage.alt"
      class="mb-4 py-2 sm:py-3 border border-gray-200 rounded-lg shadow-sm"
    />
    <nav class="flex flex-row justify-between">
      <button
        v-for="({ src, alt }, key) in images"
        :key="key"
        :class="{
          'border-2 border-gray-700': currentImageKey === key,
          'border border-gray-200 hover:border-gray-400':
            currentImageKey !== key
        }"
        class="mx-2 px-3 first:ml-0 last:mr-0 rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:shadow-outline-gray"
        tabindex="0"
        @click="currentImageKey = key"
        @focus="currentImageKey = key"
      >
        <img
          :src="src"
          :alt="alt"
          class="pointer-events-none object-cover h-full w-full"
        />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  data: () => ({
    currentImageKey: "front"
  }),
  computed: {
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
