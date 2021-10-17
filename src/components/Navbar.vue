<template>
  <div>
    <div v-if="user" class="flex justify-between">
      <ul class="flex">
        <li class="mr-6">
          <router-link
            class="text-gray-700 hover:text-gray-800"
            :to="{ name: 'Home' }"
            >Home
          </router-link>
        </li>
        <li class="mr-6">
          <router-link
            class="text-gray-700 hover:text-gray-800"
            :to="{ name: 'Database' }"
            >Database
          </router-link>
        </li>
      </ul>
      <ul>
        <li
          class="text-red-500 hover:text-red-800 cursor-pointer px-2"
          @click="signOutUser"
        >
          Logout
        </li>
      </ul>
    </div>
    <ul class="flex" v-else>
      <li class="mr-6">
        <router-link
          class="text-gray-700 hover:text-gray-800"
          :to="{ name: 'Login' }"
          >Login
        </router-link>
      </li>
      <li class="mr-6">
        <router-link
          class="text-gray-700 hover:text-gray-800"
          :to="{ name: 'SignUp' }"
          >Sign Up
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useAuthState, useSignOut } from "../firebase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { user } = useAuthState();
    const router = useRouter();
    const signOutUser = async () => {
      await useSignOut();
      await router.replace("/login");
    };
    return { user, signOutUser };
  },
};
</script>