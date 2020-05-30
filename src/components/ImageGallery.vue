<template>
  <div>
    <ImageCard :src="currentImage.src" :alt="currentImage.alt" />
    <nav>
      <ul class="flex flex-row justify-between">
        <li v-for="({ src, alt }, key) in images" :key="key">
          <ImageCard :src="src" :alt="alt" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard.vue";
const images = {
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
};

export default {
  name: "ImageGallery",
  components: { ImageCard },
  data: () => ({
    currentImageIndex: "front"
  }),
  computed: {
    images: () => images,
    currentImage() {
      return images[this.currentImageIndex];
    }
  }
};
</script>
