<template>
  <div class="flex items-center gap-2 p-2">
    <router-link
      :to="{ name: 'allProducts' }"
      class="font-semibold hover:font-bold text-sky-500"
      >Productos</router-link
    >
    <span class="font-semibold">></span>
    <span class="font-semibold">{{ capitalizeLocation }}</span>
  </div>
</template>

<script>
// Helpers
import helpCapitalize from "../helpers/helpCapitalize.js";

export default {
  name: "Breadcrumb",
  props: {
    location: {
      type: String,
      required: true,
    },
  },

  computed: {
    capitalizeLocation() {
      return helpCapitalize(this.location);
    },
  },
};
</script>

<style></style>
