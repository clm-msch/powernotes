<template>
  <nav class="bg-secondary fixed w-full z-20 top-0 left-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/" class="flex">
        <img src="/src/assets/logo.svg" class="h-12 mr-3" alt="Powernotes Logo" />
      </RouterLink>
      <div class="flex md:order-2 gap-2">
        <button type="button" class="text-white bg-primary hover:bg-primary_dark font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
          S'inscrire
        </button>
        <button type="button" class="text-primary bg-secondary border-2 border-primary hover:border-primary_dark hover:text-primary_dark font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
          Se connecter
        </button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-black rounded-lg md:hidden hover:text-primary" aria-controls="navbar-sticky" aria-expanded="false" @click="showMenu = !showMenu">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div :class="{'block': showMenu, 'hidden': !showMenu}" class="items-center justify-between w-full md:hidden" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg">
          <li>
            <RouterLink to="/" class="block py-2 pl-3 pr-4 text-black" active-class="text-primary" @click="showMenu = false">Notes</RouterLink>
          </li>
          <li>
            <RouterLink to="/stats" class="block py-2 pl-3 pr-4 text-black" active-class="text-primary" @click="showMenu = false">Stats</RouterLink>
          </li>
        </ul>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <RouterLink to="/" class="block py-2 pl-3 pr-4 text-black hover:text-primary_dark" active-class="text-primary">Notes</RouterLink>
          </li>
          <li>
            <RouterLink to="/stats" class="block py-2 pl-3 pr-4 text-black hover:text-primary_dark" active-class="text-primary">Stats</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>