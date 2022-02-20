<template>
  <section class="p-4 bg-secondary w-full">
    <h1>Welcome, {{ user?.displayName }}</h1>
    <button
      class="my-4 t-btn inline-flex items-center bg-error"
      @click="signOutUser"
    >
      <Loading class="h-5 w-5" v-if="loading" />
      <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-2" v-else />
      LogOut
    </button>

    <Dialog
      button-name="About Me"
      title="About Me"
      description="Hello there, this is Sushil Kamble. I have created a
      authetication demo using Vue 3, Firebase 9 and Tailwind. Features included are sign up 
      form validation, navigation guard, firestore read and write demo, page transition,
      and this reuseable modal."
      :icon="['fas', 'info-circle']"
    />
  </section>
</template>

<script>
import { useAuthState, useSignOut } from "@/firebase";
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import Dialog from "@/components/Dialog.vue";
import Loading from "@/components/Loading.vue";

export default defineComponent({
  name: "Home",
  components: {
    Dialog,
    Loading,
  },
  setup() {
    const { user } = useAuthState();
    const router = useRouter();

    const loading = ref(false);

    const signOutUser = async () => {
      loading.value = true;
      await useSignOut();
      await router.replace({ name: "Login" });
      loading.value = false;
    };

    return { user, signOutUser, loading };
  },
});
</script>

