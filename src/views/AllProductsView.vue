<template>
  <div class="productsContainer">
    <ProductCard
      v-for="product of productsByTerm"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";

export default {
  name: "AllProductsView",
  components: {
    ProductCard: defineAsyncComponent(() =>
      import("../components/ProductCard.vue")
    ),
  },

  computed: {
    ...mapGetters(["productsByTerm"]),
  },
};
</script>

<style></style>
