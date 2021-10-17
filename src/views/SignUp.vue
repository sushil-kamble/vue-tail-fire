<template>
  <section class="w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded p-6">
      <h1 class="mb-6">Sign Up</h1>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          :class="`t-input ${!validEmail && 'border border-red-500'}`"
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <p class="text-red-500 text-xs italic" v-show="!validEmail">
          Enter Valid Email
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Display Name
        </label>
        <input
          class="t-input"
          type="text"
          id="name"
          placeholder="Display Name"
          v-model="displayName"
          required
        />
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
          v-model="password"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="cpassword"
        >
          Confirm Password
        </label>
        <input
          :class="`t-input ${!equalPassword && 'border border-red-500'}`"
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          v-model="cpassword"
        />
        <p class="text-red-500 text-xs italic" v-show="!equalPassword">
          Password and Confirm Password doesn't match.
        </p>
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
        Sign Up
      </button>
      <div v-if="error.length > 0" class="mt-4 bg-red-50 p-4">
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive, toRefs, computed, ref, watch } from "vue";
import Loading from "../components/Loading.vue";

export default {
  name: "SignUp",
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();

    const state = reactive({
      email: "",
      displayName: "",
      password: "",
      cpassword: "",
    });

    const loading = ref(false);
    const error = ref("");

    const validate = () => {
      if (
        isNotValidEmail(state.email) ||
        state.displayName.length === 0 ||
        state.password < 6 ||
        state.password !== state.cpassword
      )
        return false;
      return true;
    };

    const equalPassword = computed(() =>
      state.cpassword.length > 0 ? state.password === state.cpassword : true
    );
    const validEmail = computed(() =>
      state.email.length > 1 ? !isNotValidEmail(state.email) : true
    );

    const handleSubmit = async () => {
      loading.value = true;
      if (validate()) {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            state.email,
            state.password
          );
          await updateProfile(user, {
            displayName: state.displayName,
          });
          await router.replace("/");
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value =
          "Make sure your email id is valid, Display Name is present and Password and Confirm Password are same";
      }
      loading.value = false;
    };

    // Helper Function

    /**
     * @param {string} email
     */
    function isNotValidEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !re.test(String(email).toLowerCase());
    }

    return {
      ...toRefs(state),
      equalPassword,
      validEmail,
      handleSubmit,
      loading,
      error,
    };
  },
};
</script>
