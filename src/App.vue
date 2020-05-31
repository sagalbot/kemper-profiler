<template>
  <article
    class="mx-auto px-4 pt-12 sm:px-12 sm:pt-18 md:px-28 lg:px-8 xl:px-28 max-w-screen-xl"
  >
    <header class="border-b border-gray-300 mb-8">
      <h1
        class="font-extrabold text-gray-900 text-4xl tracking-tight leading-tight mb-4 sm:mb-3"
      >
        Get your Kemper Profiling Amp
      </h1>
      <h2 class="text-gray-500 text-xl leading-normal mb-4 sm:mb-5 md:mb-6">
        All your favorite amps and effects, together in one little box.
      </h2>
    </header>

    <div class="relative lg:flex flex-row items-start w-full">
      <ImageGallery
        class="lg:w-1/2 lg:sticky top-0 mb-8 lg:mb-0 lg:mr-8 flex-grow-0"
      />
      <div class="lg:w-1/2">
        <h2 class="flex flex-col mb-6">
          <span class="font-medium text-sm text-gray-500 tracking-normal mb-1">
            Starting at
          </span>
          <span
            class="tracking-tight leading-none text-gray-900 text-5xl font-extrabold"
          >
            $1,799
          </span>
        </h2>
        <p class="mb-4 text-lg text-gray-900">
          The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and
          all-in-one effects processor.
        </p>
        <p class="mb-4 text-gray-500">
          Hailed as a game-changer by guitarists the world over, the PROFILER™
          is the first digital guitar amp to really nail the full and dynamic
          sound of a guitar or bass amp.
        </p>
        <p class="mb-4 text-gray-500">
          This is made possible by a radical, patented technology and concept
          which we call "PROFILING".
        </p>
      </div>
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
