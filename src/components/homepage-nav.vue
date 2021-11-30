<template>
  <div class="navbar px-5 mb-2 bg-base-100 text-base-content rounded-none">
    <div class="flex-1 w-full flex px-2">
      <ul class="menu w-full items-stretch px-2 bg-base-100 horizontal rounded-box">
        <li v-for="l in tabs" :key="l.path" class="font-medium mx-2">
          <router-link active-class="border-b-4 border-error" :to="l.path">{{ l.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="hidden lg:flex space-x-14">
      <div>
        <div class="form-control">
          <label class="cursor-pointer label">
            <span class="label-text font-medium pr-4">Go live</span>
            <input type="checkbox" :checked="true" class="toggle toggle-primary" />
          </label>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-3">
        <div class="avatar">
          <div class="rounded-full w-10 h-10 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
        <div class="font-medium">Oladokun joshua</div>
      </div>
    </div>
    <div class="flex-none lg:hidden">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      activeTab: '',
      tabs: [
        {
          name: 'Overview',
          path: 'overview'
        },
        {
          name: 'Customers',
          path: 'customers'
        },
        {
          name: 'Balance',
          path: 'balance'
        },
        {
          name: 'Analytics',
          path: 'analytics'
        },
        {
          name: 'Payment Links',
          path: 'payment-links'
        },
        {
          name: 'Settings',
          path: 'Settings'
        }
      ]
    }
  },
})
</script>