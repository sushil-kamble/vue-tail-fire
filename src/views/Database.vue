<template>
  <section class="bg-secondary p-4">
    <div>
      <h1 class="my-2">Write to Firestore.</h1>
      <div>
        <button class="mt-2 t-btn bg-primary" @click="writeToDatabase">
          <span>Write now</span>
        </button>
      </div>
      <h1 class="mt-6 mb-2">Read From Database</h1>
      <div>
        <button class="mt-2 t-btn bg-primary" @click="readFromDatabase">
          <span>Read now</span>
        </button>
      </div>
    </div>
    <p class="mt-2 italic text-sm">
      This is dummy, to perform actual read-write operations uncomment the code
    </p>
  </section>
</template>

<script>
// import { db } from "../firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";
export default {
  setup() {
    const writeToDatabase = () => {
      // // Actual WRITE
      // const writeTofs = async () => {
      // const ref = doc(db, "testCollection", "testDoc");
      // const document = {
      //   text: "Firebase 9 rocks!",
      // };
      // try {
      //   await setDoc(ref, document);
      //   alert("Success!");
      // } catch (e) {
      //   alert("Error!");
      //   console.error(e);
      // }
      alert("Written to database");
    };

    const readFromDatabase = () => {
      // // Actual READ
      // const ref = doc(db, "testCollection", "testDoc");
      // try {
      //   const document = await getDoc(ref);
      //   alert(document.data().text);
      // } catch (e) {
      //   alert("Error!");
      //   console.error(e);
      // }
      alert("Read from database");
    };
    return { writeToDatabase, readFromDatabase };
  },
};
</script>

<style>
</style>