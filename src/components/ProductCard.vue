<template>
  <article class="flex flex-col gap-y-2">
    <figure class="cursor-pointer relative">
      <picture>
        <img
          :src="product.photo"
          alt="Producto"
          class="aspect-mobile object-contain"
        />
      </picture>
      <figcaption class="absolute font-bold bottom-0 left-0">
        {{ handleStock }}
      </figcaption>
    </figure>
    <p class="truncate">{{ product.name }}</p>
    <p>${{ product.price }} CLP</p>

    <div class="flex">
      <Counter @onQuantity="handleQuantity" />
      <button
        :disabled="handleDisabled"
        @click="handleCart"
        class="flex-auto bg-sky-700 border-blueSapphire text-white disabled:opacity-4 disabled:bg-gray-300"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  </article>
</template>

<script>
import Counter from "./Counter.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      quantityProducts: 1,
    };
  },

  methods: {
    handleCart() {
      if (this.quantityProducts <= 1) this.product.quantity = 1;

      this.product.quantity = this.quantityProducts;

      this.addToCart(this.product);
      this.globalSubtotal();
    },

    handleQuantity(quantity) {
      this.quantityProducts = quantity;
    },

    globalSubtotal() {
      this.calculateGlobalSubtotal();
    },

    ...mapActions(["addToCart", "calculateGlobalSubtotal"]),
  },

  computed: {
    handleStock() {
      return this.product.stock > 0 ? "Disponible" : "Agotado";
    },

    handleDisabled() {
      return this.product.stock === 0 && true;
    },

    ...mapState(["cart"]),
  },

  components: {
    Counter,
  },
};
</script>

<style></style>
