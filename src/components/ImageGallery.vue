<template>
  <div>
    <div role="tabpanel" aria-label="View images of the Kemper Profiler.">
      <img
        :src="currentImage.src"
        :alt="currentImage.alt"
        class="mb-4 py-2 sm:py-3 border border-gray-200 rounded-lg shadow-sm"
      />
    </div>
    <div
      class="flex flex-row justify-between space-x-4"
      id="GalleryTabPanel"
      role="tablist"
      aria-label="Image Gallery Thumbnails"
    >
      <Selectable
        v-for="({ src, alt }, key) in images"
        :key="key"
        tag="button"
        class="px-3"
        :selected="currentImageKey === key"
        @click="currentImageKey = key"
        @focus="currentImageKey = key"
        role="tab"
        :aria-selected="currentImageKey === key ? 'true' : 'false'"
        aria-controls="GalleryTabPanel"
      >
        <img
          :src="src"
          :alt="alt"
          class="pointer-events-none object-cover h-full w-full"
        />
      </Selectable>
    </div>
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
