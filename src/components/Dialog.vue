<template>
  <div>
    <button type="button" @click="openModal" class="t-btn bg-primary">
      <font-awesome-icon :icon="icon" class="mr-1" />
      {{ buttonName }}
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <DialogOverlay class="fixed inset-0 bg-black opacity-50" />

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-90"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-90"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-6
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-secondary
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle as="h2">
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm">
                  {{ description }}
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center t-btn bg-primary"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  props: {
    buttonName: {
      type: String,
      default: "Click Me",
    },
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Hello There!",
    },
    icon: {
      type: Array,
      default: ["fas", "info-circle"],
    },
  },

  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
};
</script>
