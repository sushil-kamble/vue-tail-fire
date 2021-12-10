<template>
  <section class="t-auth-section">
    <form @submit.prevent="handleSubmit" class="t-auth-form">
      <h1 class="mb-6">Login</h1>
      <hr />
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="email">
          <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
          Email
        </label>
        <input class="t-input" type="text" id="email" placeholder="Email" />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          Password
        </label>
        <input
          class="t-input"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="flex justify-between items-center">
        <button type="submit" class="t-btn inline-flex items-center bg-primary">
          <Loading class="h-5 w-5" v-if="loading" />
          <font-awesome-icon
            :icon="['fas', 'sign-in-alt']"
            class="mr-2"
            v-else
          />
          Login
        </button>
        <h5 class="mr-1">
          Don't have an account?
          <router-link :to="{ name: 'SignUp' }" class="text-primary"
            >Sign Up
          </router-link>
        </h5>
      </div>
      <button
        type="button"
        @click="googleSignUp"
        class="mt-4 t-btn w-full inline-flex items-center bg-primary"
      >
        <font-awesome-icon :icon="['fab', 'google']" class="mr-2" />
        Sign in with Google
      </button>
      <h5 class="mt-5 text-error">
        <router-link :to="{ name: 'ForgotPassword' }"
          >Forgot Password?
        </router-link>
      </h5>
      <div v-if="error.length > 0" class="mt-4 p-4 bg-error rounded">
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "@/components/Loading.vue";
import Dialog from "@/components/Dialog.vue";
import { isValidEmail } from "@/helpers/isValidEmail";

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
      if (
        email.value.length > 0 &&
        password.value.length > 0 &&
        isValidEmail(email.value)
      ) {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          await router.replace({ name: "Profile" });
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value = "Enter valid Email Id and Password";
      }
      loading.value = false;
    };

    const googleSignUp = async () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      try {
        const result = await signInWithPopup(auth, provider);
        GoogleAuthProvider.credentialFromResult(result);
        router.replace({ name: "Profile" });
      } catch (e) {
        error.value = e.message;
      }
    };
    return { handleSubmit, googleSignUp, error, loading };
  },
};
</script>

