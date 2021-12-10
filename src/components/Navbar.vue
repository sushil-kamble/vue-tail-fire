<template>
  <nav class="t-transition-effect nav-style px-2 md:px-0">
    <div class="t-main-set flex justify-between items-center">
      <h1 class="font-bold text-primary cursor-pointer" @click="goToHome">
        My App
      </h1>
      <div class="hidden md:block" v-if="user">
        <router-link :to="{ name: 'Home' }" class="nav-link t-transition-effect"
          >Home
        </router-link>
        <router-link
          :to="{ name: 'Profile' }"
          class="nav-link t-transition-effect"
        >
          Profile
        </router-link>
        <router-link
          :to="{ name: 'Database' }"
          class="nav-link t-transition-effect"
          >Database
        </router-link>
        <a
          class="
            t-transition-effect
            py-2
            px-4
            ml-4
            font-heading
            rounded
            cursor-pointer
            bg-error
            hover:bg-opacity-75
          "
          @click="signOutUser"
          >Log Out
        </a>
      </div>
      <div class="hidden md:block" v-else>
        <router-link :to="{ name: 'Home' }" class="nav-link t-transition-effect"
          >Home
        </router-link>
        <router-link
          :to="{ name: 'Login' }"
          class="nav-link t-transition-effect"
        >
          Login
        </router-link>
        <router-link
          :to="{ name: 'SignUp' }"
          class="nav-link t-transition-effect"
        >
          Sign Up
        </router-link>
      </div>
      <div class="block md:hidden">
        <Menu />
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthState, useSignOut } from "@/firebase";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import Menu from "./Menu.vue";
export default defineComponent({
  components: { Menu },
  setup() {
    const { user } = useAuthState();
    const router = useRouter();
    const signOutUser = async () => {
      await useSignOut();
      await router.replace({ name: "Login" });
    };
    const goToHome = () => {
      router.push({ name: "Home" });
    };
    return { user, signOutUser, goToHome };
  },
});
</script>

<style lang="postcss" scoped>
.nav-style {
  @apply py-4 px-2 top-0 z-10 sticky
  shadow-md bg-black
  bg-opacity-20
  backdrop-filter backdrop-blur-sm;
}
.nav-link {
  @apply py-2 px-4 ml-2 font-heading rounded
  hover:bg-primary;
}
</style>