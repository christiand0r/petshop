<template>
  <label
    for="searcherProducts"
    class="flex items-center gap-2 rounded-xl p-2 w-full bg-white"
  >
    <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
    <input
      type="search"
      id="searcherProducts"
      placeholder="Buscar producto y categoría"
      class="truncate outline-none"
      v-model="searchTerm"
      @input="handleSearch"
    />
  </label>
</template>

<script>
export default {
  name: "Searcher",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handleSearch() {
      this.$store.commit("setSearchTerm", this.searchTerm);
    },
  },
};
</script>

<style></style>
