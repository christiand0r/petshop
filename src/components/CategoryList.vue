<template>
  <aside class="col-span-full md:col-span-1">
    <div
      class="flex items-center justify-center gap-4 p-2 bg-sky-900 text-white"
    >
      <h2 class="font-semibold text-center text-2xl">Categorías</h2>
      <i
        @click="handleToggle"
        class="fa-solid fa-bars text-2xl cursor-pointer"
      ></i>
    </div>

    <ul :class="toggleCategories">
      <CategoryItem
        v-for="item of categories"
        :key="item.id"
        :categoryName="item.name"
      />
    </ul>
  </aside>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

// Helpers
import helpHttp from "../helpers/helpHttp.js";

export default {
  name: "CategoryList",
  data() {
    return {
      categories: [],
      showCategories: true,
    };
  },
  methods: {
    handleToggle() {
      this.showCategories = !this.showCategories;
    },
  },
  computed: {
    toggleCategories() {
      return this.showCategories ? "scrollableList show" : "scrollableList";
    },
  },

  async mounted() {
    const categories = await helpHttp("product-category");

    this.categories = categories;
  },

  components: {
    CategoryItem: defineAsyncComponent(() =>
      import("../components/CategoryItem.vue")
    ),
  },
};
</script>

<style>
.scrollableList {
  overflow-y: scroll;
  height: 0;
  opacity: 0;
  transition: 0.3s height ease, 0.25s opacity ease;
}

.scrollableList.show {
  height: calc(100% - 48px);
  opacity: 1;
}

.scrollableList::-webkit-scrollbar {
  width: 4px;
  height: 8px;
}

.scrollableList::-webkit-scrollbar-thumb {
  background-color: #eee;
}
</style>
