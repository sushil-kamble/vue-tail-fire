<template>
  <section class="w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded p-6">
      <h1 class="mb-6">Login</h1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="t-input" type="text" id="email" placeholder="Email" />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="t-input"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        class="
          t-btn
          inline-flex
          items-center
          bg-blue-500
          hover:bg-blue-700
          text-white
        "
      >
        <Loading class="h-5 w-5" v-show="loading" />
        Login
      </button>
      <div v-if="error.length > 0" class="mt-4 bg-red-50 p-4">
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "../components/Loading.vue";
import Dialog from "../components/Dialog.vue";
export default {
  components: {
    Loading,
    Dialog,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();

    const loading = ref(false);
    const error = ref("");

    const handleSubmit = async (e) => {
      loading.value = true;
      const { email, password } = e.target.elements;
      if (email.value.length > 0 && password.value.length > 0) {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          await router.replace("/");
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value = "Enter Email Id and Password";
      }
      loading.value = false;
    };
    return { handleSubmit, error, loading };
  },
};
</script>

