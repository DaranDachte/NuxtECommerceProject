<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span
        class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      ></span>
      Copyright © {{ new Date().getFullYear() }}
      <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      <div class="flex">
        <p class="mr-1">Creator's Zone</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>

      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <NuxtLink to="#" class="hover:underline me-4 md:me-6"
            >Write a mail</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/daran-dachte-emil-t-031820249/"
            class="hover:underline me-4 md:me-6"
          >
            Go to Daran Dachte's LinkedIn</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://github.com/DaranDachte" class="hover:underline">
            Go to Daran Dachte's GitHub</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
