<template>
  <div>
    <button
      class="t-btn bg-primary hover:bg-opacity-80"
      type="button"
      v-on:click="toggleModal()"
      @focusout="showModal = false"
      tabindex="0"
    >
      <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-1" />
      {{ buttonName }}
    </button>
    <transition name="bounce">
      <div
        v-if="showModal"
        class="
          w-11/12
          mx-auto
          md:w-1/2
          overflow-x-hidden overflow-y-auto
          fixed
          inset-0
          z-50
          items-center
          flex
        "
      >
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--content-->
          <div
            class="
              border-0
              rounded-lg
              shadow-lg
              relative
              flex flex-col
              w-full
              bg-secondary
              outline-none
              focus:outline-none
            "
          >
            <!--header-->
            <div
              class="
                flex
                items-start
                justify-between
                p-5
                border-b border-solid border-blueGray-200
                rounded-t
              "
            >
              <h1>{{ title }}</h1>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                {{ description }}
              </p>
            </div>
            <!--footer-->
            <div
              class="
                flex
                items-center
                justify-end
                p-6
                border-t border-solid border-blueGray-200
                rounded-b
              "
            >
              <button
                class="t-btn bg-red-500 hover:bg-red-700 text-white mr-3"
                type="button"
                v-on:click="showModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="showModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  props: { buttonName: String, title: String, description: String },
  name: "Dailog",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>