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
        <div class="mb-12">
          <h2 class="flex flex-col mb-6">
            <span
              class="font-medium text-sm text-gray-500 tracking-normal mb-1"
            >
              Starting at
            </span>
            <span
              class="tracking-tight leading-none text-gray-900 text-5xl font-extrabold"
            >
              $1,799
            </span>
          </h2>

          <p class="mb-4 text-lg text-gray-900">
            The KEMPER PROFILER™ is the leading-edge digital guitar amplifier
            and all-in-one effects processor.
          </p>
          <p class="mb-4 text-gray-500">
            Hailed as a game-changer by guitarists the world over, the PROFILER™
            is the first digital guitar amp to really nail the full and dynamic
            sound of a guitar or bass amp.
          </p>
          <p class="text-gray-500">
            This is made possible by a radical, patented technology and concept
            which we call "PROFILING".
          </p>
        </div>

        <div
          v-for="{ id, title, options, classes } in configurationOptions"
          :key="title"
          class="mb-12"
        >
          <h3 class="mb-2 font-medium text-lg text-gray-900" :id="id">
            {{ title }}
          </h3>
          <ol
            class="space-y-4"
            :class="classes || ''"
            role="radiogroup"
            :aria-labelledby="id"
          >
            <Selectable
              v-for="{ label, body, upCharge, optionClasses } in options"
              tag="li"
              role="radio"
              class="px-6 py-5 cursor-pointer flex justify-between items-center flex-1"
              :key="label"
              :default-border-shade="300"
              :selected="isOptionSelected(title, label)"
              :aria-checked="isOptionSelected(title, label)"
              :aria-label="`${label}`"
              @click="selectOption(title, label)"
              @keydown.space="selectOption(title, label)"
            >
              <div :class="optionClasses || ''">
                <h4
                  class="text-sm font-medium text-gray-900"
                  :class="{ 'mb-2': body }"
                >
                  {{ label }}
                </h4>
                <p v-if="body" class="text-gray-500 text-sm">{{ body }}</p>
              </div>
              <p
                v-if="upCharge"
                class="text-sm flex-shrink-0 text-gray-900 ml-6"
                :aria-label="`Adds ${upCharge} dollars to total price.`"
              >
                + ${{ upCharge }}
              </p>
            </Selectable>
          </ol>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ImageGallery from "./components/ImageGallery.vue";
import Selectable from "./components/Selectable";

export default {
  name: "App",
  components: { Selectable, ImageGallery },
  data: () => ({
    selectedConfiguration: {
      "Form Factor": "Profiler Head",
      "Power Amp": "None",
      "Foot Controller": "None"
    }
  }),
  computed: {
    configurationOptions() {
      return [
        {
          id: "FormFactor",
          title: "Form Factor",
          classes: "sm:flex sm:justify-evenly sm:space-y-0 sm:space-x-4",
          options: [
            {
              label: "Profiler Head",
              body:
                "Compact amplifier head, perfect for a speaker cabinet or desk.",
              upCharge: 0,
              optionClasses: "pr-6 sm:pr-0"
            },
            {
              label: "Profiler Rack",
              body: "3U rackmount version of the classic profiling amplifier.",
              upCharge: 0,
              optionClasses: "pr-6 sm:pr-0"
            }
          ]
        },
        {
          id: "PowerAmp",
          title: "Power Amp",
          options: [
            {
              label: "None",
              body: "Use in the studio or with your own power amp.",
              upCharge: 0
            },
            {
              label: "Powered",
              body: "Built-in 600W solid state power amp.",
              upCharge: 449
            }
          ]
        },
        {
          id: "FootController",
          title: "Foot Controller",
          options: [
            {
              label: "None",
              body: false,
              upCharge: 0
            },
            {
              label: "Profiler Remote Foot Controller",
              body: false,
              upCharge: 449
            }
          ]
        }
      ];
    }
  },
  methods: {
    isOptionSelected(title, label) {
      return this.selectedConfiguration[title] === label;
    },
    selectOption(title, label) {
      return (this.selectedConfiguration[title] = label);
    }
  }
};
</script>
