<template>
  <div>
    <div
      id="GalleryTabPanel"
      role="tabpanel"
      aria-label="View images of the Kemper Profiler."
    >
      <img
        :src="imgSrc(currentImage.src, 600)"
        :srcset="imgSrcSet(currentImage.src, 600)"
        :alt="`Large image of ${currentImage.alt}`"
        class="mb-4 py-2 sm:py-3 border border-gray-200 rounded-lg shadow-sm"
      />
    </div>
    <div
      class="flex flex-row justify-between space-x-4"
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
          :src="imgSrc(src, 190)"
          :srcset="imgSrcSet(src, 190)"
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
  },
  methods: {
    imgSrc(filename, size) {
      return `/img/optimized/${filename}-${size}.jpg`;
    },
    imgSrcSet(filename, size) {
      return [2, 3].reduce((srcSet, res) => {
        return `${srcSet}, /img/optimized/${filename}-${size}@${res}x.jpg ${res}x`;
      }, `/img/optimized/${filename}-${size}.jpg 1x`);
    }
  }
};
</script>
