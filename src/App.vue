<template>
  <article
    class="px-4 pt-12 sm:px-12 sm:pt-18 md:px-28 lg:px-8 xl:px-28 max-w-screen-xl"
  >
    <header class="border-b border-gray-300 mb-8">
      <h1
        class="font-extrabold text-gray-900 text-4xl tracking-tight leading-tight mb-4 sm:mb-3"
      >
        Get your Kemper Profiling Amp
      </h1>
      <p class="text-gray-500 text-xl leading-normal mb-4 sm:mb-5 md:mb-6">
        All your favorite amps and effects, together in one little box.
      </p>
    </header>

    <div class="relative lg:flex flex-row items-start w-full">
      <ImageGallery class="lg:w-1/2 lg:sticky top-0 mb-8 lg:mb-0 flex-grow-0" />
      <div></div>
    </div>
  </article>
</template>

<script>
import ImageGallery from "./components/ImageGallery.vue";
export default {
  name: "App",
  components: { ImageGallery }
};
</script>
