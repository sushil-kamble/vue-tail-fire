# Vue-Fire-Tail-Awesome-Head 😎

## Steps

- [Why Vue-Fire-Tail-Awesome-Head](#vue-auth-fire)
- [Technologies](#latest-and-greatest-technologies)
- [Features](#features)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Recommended IDE Setup](#recommended-ide-setup)

## Latest and greatest Technologies

1. [Vue 3](https://v3.vuejs.org/)
1. [Firebase v9](https://firebase.google.com/docs/web/modular-upgrade)
1. [Tailwind CSS](https://tailwindcss.com/)
1. [Font Awesome](https://github.com/FortAwesome/vue-fontawesome)
1. [Headless UI](https://headlessui.dev/)
1. [Vite](https://vitejs.dev/guide/)

## Features

1. Email Password Authetication & Google Authetication
1. Forgot Password Feature
1. Login & SignUp forms validations
1. Loaders and page transitions for smooth user experience
1. Font Awesome Icons pre configured.

## Quick Start

```bash
git clone https://github.com/sushil-kamble/vue-tail-fire.git my-project
yarn
```

> Make sure you replace **my-project** with your own project name

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm i
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

1. Go to Firebase console. Add Project. In Project Overview, click on the web icon and register the app. You will see `firebaseConfig object`, We will require its details further. Click on Authetication, then on Set up sign-in method . Enable `Email/password authentication` & `google authentication`.
1. Create a `.env.local` file in your project's root. Example of `.env.local` file is given below. Make sure you replace `YOUR_FIREBASE_CONSOLE_DETAILS` with your `firebaseConfig object` details.

```
VITE_APP_API_KEY=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_AUTH_DOMAIN=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_DATABASE_URL=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_PROJECT_ID=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_STORAGE_BUCKET=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_MESSAGING_SENDER_ID=YOUR_FIREBASE_CONSOLE_DETAILS
VITE_APP_APP_ID=YOUR_FIREBASE_CONSOLE_DETAILS
```

3. That's It ! Finally run the application

```
yarn dev # OR npm run dev
```

## Documentation

### Pages

- Home Page
- Login Page
- Sign Up Page
- Forgot Password Page
- Profile Page - `Auth Required`
- Database Page - `Auth Required`

### Helpers

- `useAuthState` in `/src/firebase.js` returns `{ user, error, isAuthenticated }`
- `useSignOut` in `/src/firebase.js` - Signs Out User
- `getUserState` in `/src/firebase.js` - Returns promise
- `Loading` in `/src/components/Loading.vue` - Loading spinner
- `Dialog` in `/src/components/Dialog.vue` - Headless UI dailog

### Theme

- Font - `Ubuntu (font-text)` & `Goldman (font-heading)`
- Primary Color - Tailwind - `colors.blue["500"]`
- Secondary Color - Tailwind - `colors.coolGray["700"]`
- Background Color - index.css - `#22272e`
- Error Color - Tailwind - `colors.red["500"]`

### Font Awesome

- Go [here](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free)
- Select any icon, suppose you want to use `<i class="fas fa-address-book"></i>` then import `faAddressBook` in `/src/main.js`
- Add it to `library`. (See in `main.js`)
- Use it like `<font-awesome-icon :icon="['fas', 'address-book']" />`
- For more info visit [here](https://github.com/FortAwesome/vue-fontawesome)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
