<template>
  <Breadcrumb :location="category" />

  <EmptyCategory :categoryName="category" v-if="noProducts" />

  <div class="productsContainer" v-else>
    <ProductCard
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

import { mapGetters } from "vuex";

import Breadcrumb from "../components/Breadcrumb.vue";
import EmptyCategory from "../components/EmptyCategory.vue";

export default {
  name: "CategoryView",
  props: {
    category: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      products: null,
      noProducts: false,
    };
  },

  methods: {
    filterProducts() {
      // use getter for the obtain the products with the category especify
      const products = this.productsByCategory(this.category);

      // If the length is same to 0 show a message
      if (products.length === 0) return (this.noProducts = true);

      // All ok, set or reset values
      this.products = products;
      this.noProducts = false;
    },
  },

  computed: {
    ...mapGetters(["productsByCategory"]),
  },

  created() {
    this.filterProducts();
  },

  watch: {
    category() {
      this.filterProducts();
    },
  },

  components: {
    Breadcrumb,
    EmptyCategory,
    ProductCard: defineAsyncComponent(() =>
      import("../components/ProductCard.vue")
    ),
  },
};
</script>

<style></style>
