<template>
  <li
    @click="setCategoryParam"
    class="flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-300"
  >
    <p>{{ categoryName }}</p>
    <i class="fa-solid fa-angle-right"></i>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
  methods: {
    setCategoryParam() {
      this.$router.push({
        name: "category",
        params: { category: this.categoryName.toLowerCase() },
      });
    },
  },
};
</script>

<style></style>
