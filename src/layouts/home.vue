<template>
  <div>
    <div class="flex flex-col space-y-1">
      <div class="flex px-4 space-x-3 lg:p-9 items-center justify-start">
        <div class="flex-1">
          <div class="flex items-center">
            <div>
              <button class="btn btn-error">
                P
              </button>
            </div>
            <div class="dropdown">
              <div tabindex="0" class="m-1 btn btn-error btn-outline normal-case">
                Petra Africa
                <mdi-chevron-down-circle-outline class="ml-3" />
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
              >
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
        </div>
        <div class="flex-none lg:hidden">
          <div class="avatar">
            <div class="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32">
            </div>
          </div>
        </div>
      </div>
      <homepage-nav />
    </div>
    <main class="lg:px-8 px-2">
      <router-view />
      <!-- <Footer />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Home Layout]</div>-->
    </main>
  </div>
</template>
