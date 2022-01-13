<template>
  <div
    v-if="isLoading"
    class="flex items-center justify-center"
    style="height: 80vh"
  >
    <Loading class="h-16 w-16" />
  </div>
  <div v-else class="flex flex-col min-h-screen">
    <Navbar />
    <div class="t-main-set flex-1 grid place-items-center">
      <router-view v-slot="{ Component, route }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Loading from "@/components/Loading.vue";
import Footer from "@/components/Footer.vue";
import { getUserState } from "@/firebase";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Loading,
    Footer,
  },
  setup(props) {
    const isLoading = ref(true);
    getUserState().then(() => {
      isLoading.value = false;
    });
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
