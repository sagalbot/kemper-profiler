<template>
  <article class="pt-12 sm:pt-18">
    <div class="mx-auto px-4 sm:px-12 md:px-28 lg:px-8 max-w-screen-xl">
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

      <div class="relative lg:flex flex-row items-start mb-32">
        <ImageGallery
          class="lg:w-1/2 lg:sticky top-8 mb-8 lg:mb-0 lg:mr-8 flex-grow-0"
        />
        <div class="lg:w-1/2">
          <section class="mb-12" aria-label="Product Description">
            <h3 class="flex flex-col mb-6">
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
            </h3>

            <p class="mb-4 text-lg text-gray-900">
              The KEMPER PROFILER™ is the leading-edge digital guitar amplifier
              and all-in-one effects processor.
            </p>
            <p class="mb-4 text-gray-500">
              Hailed as a game-changer by guitarists the world over, the
              PROFILER™ is the first digital guitar amp to really nail the full
              and dynamic sound of a guitar or bass amp.
            </p>
            <p class="text-gray-500">
              This is made possible by a radical, patented technology and
              concept which we call "PROFILING".
            </p>
          </section>

          <section
            v-for="{ group, options, classes } in configurationGroups"
            :key="group"
            class="mb-12"
            :aria-label="`Configure ${group}`"
          >
            <h3
              class="mb-2 font-medium text-lg text-gray-900"
              :id="group.replace(' ', '')"
            >
              {{ group }}
            </h3>
            <ol
              class="space-y-4 focus:outline-none"
              :class="classes || ''"
              role="radiogroup"
              :aria-label="`${group} Configurations`"
            >
              <Selectable
                v-for="option in options"
                tag="li"
                role="radio"
                class="px-6 py-5 cursor-pointer flex justify-between items-center flex-1"
                :class="{
                  'border-gray-300': !isOptionSelected(group, option)
                }"
                :id="createOptionId(group, option)"
                :key="createOptionId(group, option)"
                :selected="isOptionSelected(group, option)"
                :aria-checked="
                  isOptionSelected(group, option) ? 'true' : 'false'
                "
                :aria-label="`${option.label}`"
                :tabindex="isOptionSelected(group, option) ? 0 : -1"
                @click="selectOption(group, option)"
                @focus="selectOption(group, option)"
                @keydown.prevent.space="selectOption(group, option)"
                @keydown.prevent.right="focusNextOption"
                @keydown.prevent.down="focusNextOption"
                @keydown.prevent.left="selectPrevOption"
                @keydown.prevent.up="selectPrevOption"
              >
                <div :class="option.optionClasses || ''">
                  <h4
                    class="text-sm font-medium text-gray-900"
                    :class="{ 'mb-2': option.body }"
                  >
                    {{ option.label }}
                  </h4>
                  <p v-if="option.body" class="text-gray-500 text-sm">
                    {{ option.body }}
                  </p>
                </div>
                <p
                  v-if="option.upCharge"
                  class="text-sm flex-shrink-0 text-gray-900 ml-6"
                >
                  <span class="sr-only">This options adds </span>
                  + ${{ option.upCharge }}
                  <span class="sr-only">to total price.</span>
                </p>
              </Selectable>
            </ol>
          </section>

          <section class="mb-12" aria-labelledby="specifications">
            <h3
              id="specifications"
              class="mb-2 font-medium text-lg text-gray-900"
            >
              Specifications
            </h3>
            <dl class="text-gray-900 text-sm grid grid-cols-3 gap-0">
              <dt class="py-5 font-medium border-b border-t border-gray-200">
                Amp Models
              </dt>
              <dd
                class="py-5 col-span-2 text-right border-b border-t border-gray-200"
              >
                200
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">
                Effects Loop
              </dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                Yes
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Inputs</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                2 x 1/4”
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Outputs</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                1 x 1/4”, 2 x XLR, 2 x 1/4”
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">
                MIDI I/O
              </dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                In/Out/Thru
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Height</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                8.54”
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Width</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                14.88”
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Depth</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                6.81”
              </dd>

              <dt class="py-5 font-medium border-b border-gray-200">Weight</dt>
              <dd class="py-5 col-span-2 text-right border-b border-gray-200">
                11.73 lbs
              </dd>
            </dl>
          </section>
        </div>
      </div>
    </div>
    <footer
      class="bg-gray-50 border-t border-gray-200 py-6 w-full fixed bottom-0"
    >
      <div
        class="mx-auto px-4 sm:px-12 md:px-28 max-w-screen-xl flex items-center justify-end sm:justify-between lg:space-x-8"
      >
        <div
          class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8 lg:w-2/3"
        >
          <div class="hidden sm:flex flex-col lg:w-1/2 xl:w-64">
            <div class="flex items-center">
              <GlobeIcon class="h-5 w-5 mr-3 text-gray-400" />
              <h5 class="text-gray-900 text-sm font-medium">Free Shipping</h5>
            </div>
            <p class="hidden lg:block ml-8 mt-1 text-gray-500 text-sm">
              Get 2-day free shipping anywhere in North America.
            </p>
          </div>
          <div class="hidden sm:flex flex-col lg:w-1/2 xl:w-64">
            <div class="flex items-center">
              <ShieldIcon class="h-5 w-5 mr-3 text-gray-400" />
              <h5 class="text-gray-900 text-sm font-medium">2 Year Warranty</h5>
            </div>
            <p class="hidden lg:block ml-8 mt-1 text-gray-500 text-sm">
              If anything goes wrong in the first two years, we'll replace it
              for free.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-end lg:w-1/3">
          <div class="text-right mr-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:mb-1">
              <span class="sr-only">Total Price: </span>${{ price }}
            </h2>
            <p class="text-gray-500 text-sm hidden sm:block">
              Need financing?
              <a href="#" class="border-b border-gray-500">Learn more</a>
            </p>
          </div>

          <!--
          Depending on how this button actually worked in a real environment,
          this might be more semantic as an <a> instead of a <button>.
          -->
          <button
            tabindex="0"
            class="text-sm font-medium text-white px-5 py-3 rounded-lg bg-gray-900 hover:bg-gray-700 focus:bg-gray-900 focus:outline-none focus:shadow-outline-gray transition-colors duration-150"
          >
            Buy Now
          </button>
        </div>
      </div>
    </footer>
  </article>
</template>

<script>
import ImageGallery from "./components/ImageGallery";
import Selectable from "./components/Selectable";
import ShieldIcon from "./components/ShieldIcon";
import GlobeIcon from "./components/GlobeIcon";

import {
  configurationGroups,
  defaultConfiguration
} from "./fixtures/configuration";

export default {
  name: "App",
  components: { Selectable, ImageGallery, GlobeIcon, ShieldIcon },
  data: () => ({
    selectedConfiguration: defaultConfiguration
  }),
  computed: {
    configurationGroups: () => configurationGroups,
    price() {
      return Object.keys(this.selectedConfiguration)
        .reduce((basePrice, configurationKey) => {
          const { upCharge } = this.selectedConfiguration[configurationKey];
          return basePrice + upCharge;
        }, 2717)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    createOptionId(group, { label }) {
      return `${group}-${label}`.replace(/\s/g, "");
    },
    isOptionSelected(group, option) {
      return this.selectedConfiguration[group] === option;
    },
    selectOption(group, option) {
      return (this.selectedConfiguration[group] = option);
    },
    /**
     * This wouldn't work if there were more than two options.
     * You'd have to get the parentNode, then the first child node.
     * But there isn't, so enjoy the simplicity!
     *
     * @param {HTMLElement} target
     */
    focusNextOption({ target }) {
      if (target.nextSibling) {
        return target.nextSibling.focus();
      }
      return target.previousSibling.focus();
    },
    /**
     * @param {HTMLElement} target
     */
    selectPrevOption({ target }) {
      if (target.previousSibling) {
        return target.previousSibling.focus();
      }
      return target.nextSibling.focus();
    }
  }
};
</script>
