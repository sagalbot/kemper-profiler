<template>
  <div>
    <img
      :src="currentImage.src"
      :alt="currentImage.alt"
      class="mb-4 py-2 sm:py-3 border border-gray-200 rounded-lg shadow-sm"
    />
    <nav class="flex flex-row justify-between space-x-4">
      <Selectable
        v-for="({ src, alt }, key) in images"
        :key="key"
        tag="button"
        class="px-3"
        :selected="currentImageKey === key"
        @click="currentImageKey = key"
        @focus="currentImageKey = key"
      >
        <img
          :src="src"
          :alt="alt"
          class="pointer-events-none object-cover h-full w-full"
        />
      </Selectable>
    </nav>
  </div>
</template>

<script>
import Selectable from "./Selectable";
import { images } from "../fixtures/images";

export default {
  name: "ImageGallery",
  components: { Selectable },
  data: () => ({
    currentImageKey: "front"
  }),
  computed: {
    images: () => images,
    currentImage() {
      return this.images[this.currentImageKey];
    }
  }
};
</script>
