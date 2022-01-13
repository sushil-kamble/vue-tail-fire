<template>
  <section class="p-4 bg-secondary w-full">
    <h1>Vue-Tail-Fire</h1>
    <hr />
    <h2 class="mb-2">Pages</h2>
    <ul class="list-disc list-inside">
      <li>Home Page</li>
      <li>Login Page</li>
      <li>Sign Up Page</li>
      <li>Forgot Password Page</li>
      <li>Profile Page - <code>Auth required</code></li>
      <li>Database Page - <code>Auth required</code></li>
    </ul>
    <h2 class="my-2">Fonts and colors</h2>
    <ul class="list-disc list-inside">
      <li>Font - <code>Ubuntu (font-text) & Goldman (font-heading)</code></li>
      <li>Primary Color - <code>Tailwind - colors.blue["500"]</code></li>
      <li>Secondary Color - <code>Tailwind - colors.coolGray["700"]</code></li>
      <li>Background Color - <code>Tailwind - .bg-secondary/90</code></li>
      <li>Error Color - <code>Tailwind - colors.red["500"]</code></li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
code {
  @apply bg-gray-800 px-2 mx-2;
}
</style>

