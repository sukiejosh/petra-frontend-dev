<template>
  <div>
    <div class="flex flex-col space-y-1">
      <div class="flex space-x-3 lg:p-9 items-center justify-start">
        <div>
          <button class="btn btn-error">P</button>
        </div>
        <div class="dropdown">
          <div tabindex="0" class="m-1 btn btn-error btn-outline normal-case">
            Petra Africa
            <mdi-chevron-down-circle-outline class="ml-3" />
          </div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <homepage-nav />
    </div>
    <main class="px-8">
      <router-view />
      <!-- <Footer />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Home Layout]</div>-->
    </main>
  </div>
</template>
