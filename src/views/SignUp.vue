<template>
  <section class="t-auth-section">
    <form @submit.prevent="handleSubmit" class="t-auth-form">
      <h1 class="mb-6">Sign Up</h1>
      <hr />
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="email">
          <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
          Email
        </label>
        <input
          :class="`t-input w-full ${!validEmail && 'border border-error'}`"
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          required
        />
        <p class="mt-0.5 text-error text-xs italic" v-show="!validEmail">
          Enter Valid Email
        </p>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="name">
          <font-awesome-icon :icon="['fas', 'user-circle']" class="mr-1" />
          Display Name
        </label>
        <input
          class="t-input w-full"
          type="text"
          id="name"
          placeholder="Display Name"
          v-model="displayName"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          Password
        </label>
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            placeholder="Password"
            class="t-input w-full"
            v-model="password"
            required
          />
          <font-awesome-icon
            :icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
            @click="showPassword = !showPassword"
            class="
              h-8
              absolute
              top-1/2
              transform
              -translate-y-1/2
              right-3
              cursor-pointer
            "
          />
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="cpassword">
          <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
          Confirm Password
        </label>
        <input
          :class="`t-input w-full ${!equalPassword && 'border border-error'}`"
          type="password"
          id="cpassword"
          placeholder="Confirm Password"
          v-model="cpassword"
        />
        <p class="mt-0.5 text-error text-xs italic" v-show="!equalPassword">
          Password and Confirm Password doesn't match.
        </p>
      </div>
      <div class="flex justify-between items-center">
        <button type="submit" class="t-btn inline-flex items-center bg-primary">
          <Loading class="h-5 w-5" v-if="loading" />
          <font-awesome-icon :icon="['fas', 'user-plus']" class="mr-2" v-else />
          Sign Up
        </button>
        <h5 class="mr-1">
          Already Signed Up?
          <router-link :to="{ name: 'Login' }" class="text-primary">
            Login
          </router-link>
        </h5>
      </div>

      <div v-if="error.length > 0" class="mt-4 p-4 bg-error rounded">
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
import { reactive, toRefs, computed, ref } from "vue";
import Loading from "@/components/Loading.vue";
import { isValidEmail } from "@/helpers";

export default {
  name: "SignUp",
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const showPassword = ref(false);

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
        !isValidEmail(state.email) ||
        state.displayName.length === 0 ||
        state.password.length < 6 ||
        state.password !== state.cpassword
      )
        return false;
      return true;
    };

    const equalPassword = computed(() =>
      state.cpassword.length > 0 ? state.password === state.cpassword : true
    );
    const validEmail = computed(() =>
      state.email.length > 1 ? isValidEmail(state.email) : true
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
          await router.replace({ name: "Profile" });
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value =
          "Make sure your email id is valid, Display Name is present, Password is more than 5 characters and Password and Confirm Password are same";
      }
      loading.value = false;
    };

    return {
      showPassword,
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
