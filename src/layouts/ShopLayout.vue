<template>
  <header
    class="flex flex-col items-center justify-between p-4 gap-y-4 sticky top-0 md:flex-row md:static bg-sky-700 z-10"
  >
    <router-link :to="{ name: 'allProducts' }" class="w-60">
      <img
        src="../assets/pettalana_logo.png"
        alt="Pettalana"
        class="max-w-full"
      />
    </router-link>
    <div class="flex items-center gap-4">
      <Searcher />
      <Cart />
    </div>
  </header>

  <div class="grid grid-cols-5">
    <CategoryList />

    <main class="col-span-full md:col-span-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions } from "vuex";

export default {
  name: "ShopLayout",

  methods: {
    // Obtain the action for get all product
    ...mapActions(["getProducts"]),
  },

  created() {
    // When the component is created send the request
    this.getProducts();
  },

  components: {
    Cart: defineAsyncComponent(() => import("../components/Cart.vue")),
    Searcher: defineAsyncComponent(() => import("../components/Searcher.vue")),
    CategoryList: defineAsyncComponent(() =>
      import("../components/CategoryList.vue")
    ),
  },
};
</script>

<style>
main {
  height: calc(100vh - 190px);
  overflow-y: scroll;
}

main::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

main::-webkit-scrollbar-thumb {
  background-color: #eee;
}

@media (min-width: 768px) {
  main {
    height: calc(100vh - 85px);
    overflow-y: scroll;
  }
}
</style>
