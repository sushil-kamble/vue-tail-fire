<template>
  <div
    v-if="isLoading"
    class="flex items-center justify-center"
    style="height: 80vh"
  >
    <Loading class="h-16 w-16" />
  </div>
  <div v-else>
    <Navbar />
    <div class="main-set">
      <router-view v-slot="{ Component, route }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";
import Loading from "./components/Loading.vue";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Loading,
  },
  setup(props) {
    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
    return {
      isLoading,
    };
  },
});
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>
